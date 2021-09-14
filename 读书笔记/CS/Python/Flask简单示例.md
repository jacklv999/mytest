# Flask简单示例

构建一个Flask Service的简单示例, 设定端口可以接收路径中的参数, 然后调起内部函数. 

#### 0. 准备工作

启动 Flask 服务, 并监听端口, 代码如下所示:

```python
from flask import Flask

app = Flask(__name__)

@app.route('/<name>',methods=['get'])
def hello_world(name):
    return (name)

if __name__ == '__main__':
   app.run(host='0.0.0.0',port=900)
```

#### 1. 传递单个参数

获取单个参数, 可以直接在 Path 中传递参数, 使用 `Get` 方法. 具体代码如下所示:

```python
@app.route('/<a>',methods=['get'])
def hello_world(a):
    return (a)
```

- `methods=['get']`: 表示传参方法, 若为 `Get` 可省略

#### 2. 传递多个参数

获取多个参数可以直接从 Path 中获取, 以斜杠分割不同的参数, 如下所示:

```python
@app.route('/<a>/<b>')
def hello_world(a,b):
    return (a+b)
```

对链接 `http://10.138.163.70:9000/1/2`, 可以返回结果 `12`

#### 3. 传递字典参数

偶尔传递参数的时候, 需要使用指定多个参数名以防混乱, 可以使用字典传参的方法, 具体如下所示: 

```python
from flask impor request

@app.route('/')
def hello_world():
    a = request.args['a']
    b = request.args['b']
    return (a+b)
```

对链接 `http://10.138.163.70:9000/?a=1&b=2`, 返回结果 `12`

#### 4. 传递含特殊字符的参数

用网址传递特殊字符时会遭遇困难, 所以我们需要对字符进行编码, 通常 `base64` 编码是一个很好的选择. 示例代码如下:

- 编码参数

  ```python
  import base64
  bytes = customed_parameter.encode("utf-8")
  output = base64.b64encode(bytes)
  ```

- 解码参数

  ```python
  base64.b64decode(input_parameter).decode()
  ```

#### 5. 传递文件

服务器端接受文件代码

```python
@app.route('/', methods=['POST'])
def up_load_big_file():
    img = request.files.get('file')
    img.save("./file.jpg")
    return "ok",200
```

前端传输文件代码

```JavaScript
var tomato_url = "/upload/";
var formData = new FormData();
formData.append(
    "pic",
    $("#pic")[0].files[0]
);
$.ajax({
  url:tomato_url, 
  type:'post',
  data: formData,
  contentType: false,
  processData: false,
  success:function(data){
      alert("ok")
  }
})
```





#### 附录

用 Flask host 识农的FAW API.

```python
from flask import Flask
import urllib, sys
import ssl
import base64

app = Flask(__name__)
host = 'https://senseagro.market.alicloudapi.com'
path = '/api/senseApi'
method = 'POST'
appcode = '请输入'
querys = ''
bodys = {}
url = host + path

def get_result(img_url):
    bodys['image_url'] = img_url
    bodys['crop_id'] = '''142'''
    post_data = urllib.parse.urlencode(
        bodys
    ).encode(
        "utf-8"
    )
    request = urllib.request.Request(
        url, post_data
    )
    request.add_header(
        'Authorization', 
        'APPCODE ' + appcode
    )
    request.add_header(
        'Content-Type', 
'application/x-www-form-urlencoded; charset=UTF-8'
    )
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE
    response = urllib.request.urlopen(
        request, context=ctx
    )
    content = response.read()
    return (content.decode())

@app.route('/<name>',methods=['get'])
def hello_world(name):
    name = base64.b64decode(
        name
    ).decode(
        'UTF-8'
    )
    result = get_result(name)
    return (result)

if __name__ == '__main__':
   app.run(host='0.0.0.0',port=9000)
```

