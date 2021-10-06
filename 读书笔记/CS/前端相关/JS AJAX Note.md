# JS AJAX Note

记录使用 jQuery 完成简单post和get的代码

#### 1. 对 GET 代码

html部分的代码如下所示:

```html
<button id = "getres" class="btn btn-default">Get Result</button>
```

相应的用于发起调用的Javascript代码如下所示:

```Javascript
login_url = "http://192.168.0.1/"+"login/"+usr_name
$.get(get_res_url,function(data, status){
            $("#showres").text(data);
});
```

对上述代码, 其返回值中

- data 为返回的response data

- status 为返回的状态码, 如200, 404等

#### 2. 对POST代码

html代码展示如下所示

```html
<div class="form-group">
<label class="sr-only" for="inputfile">File Input</label>
<input type="file" id="BigFile">
</div>
<button class="btn btn-default" id="SendBigData">Summit</button>
```

相应的用于发起POST调用的代码如下所示

```JavaScript
base_url = "http://10.138.173.222:900/"
$("#SendBigData").click(
     function(){
       var upload_url = base_url + "upload/"
       var formData = new FormData();
       formData.append("bigfile",$("#BigFile")[0].files[0]);
       $.ajax({
          url:upload_url, /*接口域名地址*/
          type:'post',
          data: formData,
          contentType: false,
          processData: false,
          success:function(res){$("#SendBigData").hide();}
        })
        }
)
```

