## Flask JSON传输图片

在flask中, 涉及到复杂的数据, 需要使用 json 格式传输. 以下以图片为例给出简单示例

#### 1. 将图片转为base64

```python
## 将图片转为编码
ret, buf = cv2.imencode(
    ".jpg",img)
## 将编码结果转为bytes
res = buf.tobytes()
## base64编码
res = base64.b64encode(res)
## 转byte为字符串
res = str(res)
## 去除首尾的符号
res = res[2:-2]
## 首部的 b' 和尾部的 '
```

#### 2. 创建json

在python中创建json时, 需要首先用 `{}` 创建, 如下所示:

```python
json = {
    'res_num': res_1,
    'res_pic': res_2
}
```

#### 3. 通过flask发送

flask内部提供插件用于发送json, 代码如下:

```python
from flask import jsonify

@app.route('/')
def api():
    res = {
        "a":"a",
        "b":"b"
    }
    return jsonify(res)
```

#### 4. flask接受json

```python
from flask import request

@app.route("/", methods=['POST'])
def login():
 data = request.get_json()
 pic = data['pic']
 
 return "ok" 
```

#### 5. base64转图片

```python
# base64解码
img_0 = base64.b64decode(str)
# 转换为np数组
img_1 = np.frombuffer(
    img_0, np.uint8
)
# 转换成opencv可用格式
img_2 = cv2.imdecode(
    img_1, cv2.COLOR_RGB2BGR
)
```

#### 6. 前端展示

前端展示base64图片比较方便, 代码如下

```JavaScript
str_1 = "data:image/jpeg;base64,"
str_2 = data['res_pic']
$("#pic").attr(
    "src", str_1+str_2
)
```



