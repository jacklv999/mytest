# JS下拉选择框

发现一个特别好用的 JS 下拉选择框插件, 仅此记录

### 一 . 下拉选择框

#### 1. 引入JS文件

```html
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script type="text/javascript" src="https://cdn.rawgit.com/prashantchaudhary/ddslick/master/jquery.ddslick.min.js" ></script>
```

#### 2. 创建下拉选择框

```html
<div id="demoBasic"></div>
```

#### 3. 相应的 JS 逻辑

```JavaScript
$('#demoBasic').ddslick({
    data: ddData,
    width: 300,
    selectText: "Select your favorite social network",
    onSelected: function (data) {
       alert($(this).data('ddslick').selectedIndex)
    }
});
```

#### 4. 下拉框的数据

```JavaScript
var ddData = [
    {
        text: "Facebook",
        value: 1,
        selected: false,
    },
    {
        text: "Twitter",
        value: 2,
        selected: false,
    },
    {
        text: "LinkedIn",
        value: 3,
        selected: false,
    },
    {
        text: "Foursquare",
        value: 4,
        selected: false,
    }
];
```

### 二. 新下拉选择框

发现一个更加好用的下拉选择框 `tinySelect`, 仅此记录. 插件 Github 仓库网址: `https://github.com/McFizh/tinySelect`.

##### 优势:

- 自适应宽度
- 动态加载选项
