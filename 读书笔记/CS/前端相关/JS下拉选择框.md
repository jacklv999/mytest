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
- 方便获取数据

#### 1. 引入JS文件

具体可以GitHub上下载

```JavaScript
<script src="js/jquery-1.11.0.min.js"></script>	
<link rel="stylesheet" href="css/tinyselect.css">
<script src="js/tinyselect.js"></script>
```

#### 2. 初始化 DOM 

```html
<select id="select3" style="width: 100%;"></select>
<select id="select5"></select>
```

#### 3. 初始下拉框

```JavaScript
$("#select3").tinyselect({ 
	showSearch:false,
	txtLoading:"Loading",
	txtAjaxFailure:"Network Failure",
	dataUrl: "http://xn--p3t50i.top/mytest/111/file.json" , 
	dataParser: DataParser 
});
// Parser code
function DataParser(data, selected) {
	retval = [];
	data.forEach(function(v){ retval.push(v); });
	return retval;
}
```

#### 4. 获取选择项

```JavaScript
$("#select5").val()
```

#### 5. JSON数据示例

```JavaScript
[
	{ "val": 1 , "text": "语文" },
	{ "val": 2 , "text": "数学" },
	{ "val": 3 , "text": "微积分" },
	{ "val": 4 , "text": "汉字的传统文化解读" },
	{ "val": 5 , "text": "音乐美学" }
]
```

