## Download File in HTML

以下记录下载文件需要的html代码和JavaScript代码

#### 1. HTML代码

```html
<button id="ShowPic" 
        class="btn btn-default">
    Download File
</button>
```

#### 2. Javascript代码

```JavaScript
var dwnld_url = base_url + "download/pic.csv"
$("#ShowPic").click(
    function(dwnld_url
    ){ 
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 
             dwnld_url, true);
    xhr.responseType = "blob"; 
    xhr.onload = function () {
        if (this.status === 200) {
            var blob = this.response;
            var a = document.createElement('a');
            a.download = 'download data';
            a.href=window.URL.createObjectURL(blob);
            a.click();
        }
    };
    xhr.send();
});
```

#### 3. 服务端代码

```python
@app.route("/download/<filename>")
def download_file(filename):
    # 假设在当前目录
    directory = os.getcwd()  
    return send_from_directory(
        directory, 
        filename, 
        as_attachment=True)
```

