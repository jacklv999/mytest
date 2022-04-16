# jQuery 点击放大

Jquery点击放大依赖于插件 `zoomify` , 以下简介该插件

### 1. 引入source file

可在以下网址下载source file, 然后引入 ``

```html
<!--https://github.com/indrimuska/
zoomify/archive/refs/tags/0.2.5.zip-->

<link href="css/zoomify.min.css" rel="stylesheet">
<script src="js/zoomify.min.js"></script>       
```

### 2. 定义标签

```html
<img src="img_24/1.png" class="zoomify">
```

### 3. 初始化插件

```JavaScript
// Default settings
$('img_1').zoomify(); 

// 1s duration
$('img_2').zoomify({ 
    duration: 1000 
}); 
```

`zoomify` 函数有三个参数:

- `duration`: 过渡时间
- `easing`: 过渡类型, 默认linear

### 4. 方法

| 方法       | 描述                                               |
| ---------- | -------------------------------------------------- |
| zoom       | 自动判断放大或缩小图片                             |
| zoomIn     | 放大图片                                           |
| zoomOut    | 缩小图片                                           |
| reposition | 计算图片的正确位置并移动图片到页面可见区域的中间。 |

### 5. 事件

| 事件                      | 描述           |
| ------------------------- | -------------- |
| zoom-in.zoomify           | 放大动画前触发 |
| zoom-in-complete.zoomify  | 放大动画后触发 |
| zoom-out.zoomify          | 缩小动画前触发 |
| zoom-out-complete.zoomify | 缩小动画后触发 |

```JavaScript
$('#myImg').on(
    'zoom-in.zoomify', 
    function () {
    // do something...
});  
```

