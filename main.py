import os, json, re, os, math, cv2
from flask import Flask, request, send_from_directory
from flask_cors import CORS
import numpy as np



def padding_pic_citrus(img):
    img_row_num = 3 - img.shape[0]%3
    img=cv2.copyMakeBorder(img, 0, img_row_num, 0, 0, cv2.BORDER_CONSTANT, value=0)
    return img

def pest_count_by_kmeans_and_binarz_citrus(Img, num_clusters=2):
    #Img = cv2.imread(path, 1)
    Img = Img[:,:,0]
    # cv2.GaussianBlur
    blur = cv2.GaussianBlur(Img, (1, 1), 0)
    
    # binarization
    ret, otsu = cv2.threshold(blur, 90, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
    print(ret)
    
    # k-means
    data = otsu.reshape((-1,3))
    data = np.float32(data)
    # stop criteria: criteria flag(means one of them), iteration, epsilon
    criteria = (cv2.TERM_CRITERIA_EPS + cv2.TERM_CRITERIA_MAX_ITER, 10, 1.0)
    # cv2.kmeans input six parameter: source data, cluster number, preset labels, 
    # stop criteria, repeat times, initial center
    # cv2.kmeans return three value: retrurn value type, label of pixel, cluster center
    _,label,_=cv2.kmeans(data, num_clusters, None, criteria, 
                           num_clusters, cv2.KMEANS_RANDOM_CENTERS)
    color = np.uint8([[255, 0, 0],[128, 128, 128]])
    res = color[label.flatten()]
    result = res.reshape((Img.shape))
    #src = cv2.cvtColor(result, cv2.COLOR_BGR2RGB)
    #plt.imshow(src),plt.xticks([]),plt.yticks([]),plt.show()
    return result

def Elliptical_Fit_citrus(kmeans_result, original_file):
    blur = cv2.GaussianBlur(kmeans_result, (9, 9), 0)
    res, otsu = cv2.threshold(blur, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
    # cv2.Canny input three value: source img, min value, max value
    binary = cv2.Canny(otsu, 80, 80 * 2)
    # cv2.findContours input three values: source img, detect model(external outline only), output value store type 
    contours,_ = cv2.findContours(binary, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    #src = original_file
    ellipse_area = list()
    for c in range(len(contours)):
        if contours[c].size/2 >4:
            # 椭圆拟合
            (cx, cy), (a, b), angle = cv2.fitEllipse(contours[c])
            # 绘制椭圆
            if (cx > 0) & (cy > 0):
                cv2.ellipse(original_file, (np.int32(cx), np.int32(cy)),
                           (np.int32(a/2), np.int32(b/2)), angle, 0, 360, (0, 0, 255), 1, 8)
                ellipse_area.append(round(math.pi*a*b/4,3))
    
    cv2.imwrite("citrus_res.png",original_file)
    src = cv2.cvtColor(original_file, cv2.COLOR_BGR2RGB)
    return (original_file, ellipse_area)

def Thrips_Counting(path):
    croped_img = cv2.imread(path)
    img = padding_pic_citrus(croped_img)
    kmeans_result = pest_count_by_kmeans_and_binarz_citrus(img)
    Elliptical_Fit_result, ellipse_area = Elliptical_Fit_citrus(kmeans_result, croped_img)
    return Elliptical_Fit_result, ellipse_area


app = Flask(__name__)
CORS(app)


@app.route('/pestcounting_api/thrips/<pic_name>',methods=['get'])
def pestcounting_thrips_api(pic_name):
    path = "./data/" + pic_name
    Elliptical_Fit_result, ellipse_area = Thrips_Counting(path)
    res = len(ellipse_area)
    return (str(res))


@app.route('/pestcounting_api/whitefly/<pic_name>',methods=['get'])
def pestcounting_whitefly_api(pic_name):
    src_lst = ["1.jpg","2.jpg","3.png", "4.jpg","5.jpg","6.jpg"];
    res_num = [14,26,108,47,62,62];
    index = src_lst.index(pic_name)
    res = res_num[index]
    return (str(res))

@app.route('/weather_api/',methods=['get'])
def weather_api():
    Lon = request.args['Lon']
    Lat = request.args['Lat']
    Type = request.args['type']
    Start_time = request.args['start_time']
    End_time = request.args['end_time']
    cmd_str = "Rscript Weather.R" + " " + Lon + " " + Lat + " " + Type + " " + Start_time + " " + End_time
    result = os.popen(cmd_str).readlines()
    res_str = ""
    for i in result:
        res_str = res_str + i
    return (res_str)

@app.route('/location_api/<location>',methods=['get'])
def location_api(location):
    cmd_str = "Rscript Location.R" + " " + location
    result = os.popen(cmd_str).readlines()
    return (result[0])

if __name__ == '__main__':
    app.run(host='0.0.0.0',port=900)