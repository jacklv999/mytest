# JS Slider插件

记录发现的一个 Slider 插件

#### 1. 引入文件

```html
<script src="https://apps.bdimg.com/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>
<link rel="stylesheet" href="https://apps.bdimg.com/libs/jqueryui/1.10.4/css/jquery-ui.min.css">
<script src="./js/jquery-ui-slider-pips.js"></script> 
<link rel="stylesheet" href="./css/jquery-ui-slider-pips.min.css">
```

#### 2. 创建 DIV

```html
<div style ="margin: 60px;" id="slider"></div>
<div id="val"></div>
```

#### 3. 设置相关Javascript

```JavaScript
$( "#slider" ).slider({
        min: 0,
        max: 10,
        slide: function( event, ui ) {
            $("#val").text( ui.value );
        }
}).slider("pips", {
        rest: "label"
});
```

