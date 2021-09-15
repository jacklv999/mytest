# HTML Form表单

在html中, 可以使用 form 表单方便的提交 get 和 post 请求, 而无需考虑 CORS 的问题

#### 1. GET 请求

首先在服务端启动 flask 服务, 简单示例代码如下所示:

```python
from flask import Flask, request
app = Flask(__name__)

@app.route('/')
def hello_world():
    a = request.args['a']
    b = request.args['b']
    return (a+b)

if __name__ == '__main__':
    app.run(host='0.0.0.0',port=900)
```

然后在本地构建表单, HTML 代码如下所示:

```html
<form action="http://192.168.1.3:900/" method="get">
    <input type = "text" 
           name = "a">
    <input type = "text" 
           name = "b">
    <button type="summit">
        Summit
    </button>
</form>
```

#### 2. POST 请求

使用表单构建post请求不会有 CORS 的问题, 在服务端启动 flask 代码如下所示

```python
from flask import Flask, request
app = Flask(__name__)

@app.route('/',methods=['POST'])
def post_test_func():
    name = request.form.get('a')
    pswd = request.form.get('b')
    if name == pswd:
        return 'Login Success'
    else:
        return 'Wrong'

if __name__ == '__main__':
    app.run(host='0.0.0.0',port=900)
```

在本地使用 HTML 代码如下以构建 form 的 post 请求:

```HTML
<form action="http://192.168.1.3:900/" method="post">
    <input type = "text"
           name = "a">
    <input type = "text" 
           name = "b">
    <button type="summit">
        Summit
    </button>
</form>
```

#### 3. 用 Form 发送文件

发送文件需要增加属性 `enctype="multipart/form-data"` 

```html
<form method="post" action="" enctype="multipart/form-data">
　　<td><input type="file" name="bigfile"></td>
</form>
```

#### 4. 关于 Input 标签的类型

HTML input 标签的类型非常多, 常见的包括以下几种:

- 输入类: radio, checkbox, text, number, date, color, time
- 功能类: reset, summit

#### 5. 关于页面跳转

使用 form 提交请求后, 页面会自动跳转, 若无需跳转, 我们可以选择

- 使用 iframe 跳转
- 使用 ajax 请求

一般而言, 使用 iframe 跳转更加优雅, 可以将跳转结果直接嵌入本页面, 示例代码如下所示:

```html
<form action="http://192.168.1.3:900/" 
      method="post" 
      target="myIframe">
    <input type = "text" 
           name = "a" id="aa">
    <input type = "text" 
           name = "b" id="bb">
    <button type="summit">
        Summit
    </button>
</form>
<iframe name="myIframe"></iframe>
```

此外值得注意的是, 因为 iframe 本来是新的页面, 所以会涉及到页面响应式布局的内容, 而 bootstrap 有针对 embed element 的类, 所以我们可以使用 bootstrap 优化响应, 代码如下所示

```html
<div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" name="myIframe"></iframe>
</div>
```

#### 6. 关于配合 jQuery 使用

有时, 更复杂的请求需要使用 jQuery 完成, 所以 form 表单也需要配合 jQuery, 对常见的请求如下所示

- 获取 input 标签的值: 

  `$("#input_label_name").val()` 

- 修改 input 标签的值:

  `$("#lbl").val("value_to_set")` 

- 修改标签属性:

  `$("#lbl").attr("type","text")` 

#### 7. HTML表单值提取

获取html表单值常见的有两种方法:

- 第一种:

  ```html
  <form id="form1">
      <input type="radio" name="a" value="b">
  </form>
  <script>
  $("#form1").serialize()
  //out: a=b
  $("#form1").serializeArray()
  //[{name:a,value:b}]
  </script>
  ```

- 第二种

  ```html
  <form id="form1">
  <input type="radio" 
         name="a" 
         value="b">
  </form>
  <script>
  $("#form1").serializeArray()
  //[{name:a,value:b}]
  </script>
  ```

  