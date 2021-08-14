## Download File in HTML

以下记录下载文件需要的html代码和JavaScript代码

#### 1. HTML代码

```html
<button 
        id="ShowPic" 
        type="submit" 
        class="btn btn-default">
    Download File
</button>
```

#### 2. Javascript代码

```JavaScript
$("#ShowPic").click(function(){ 
        var download_url = base_url + "download/pic.csv"
        var xhr = new XMLHttpRequest();
        xhr.open('GET', download_url, true);
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

