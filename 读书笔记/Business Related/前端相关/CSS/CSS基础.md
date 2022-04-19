## CSS基础

#### 1.[CSS选择器](https://www.runoob.com/cssref/css-selectors.html) 

| 选择器                  |  示例说明                             |
| :---------------------- | :----------------------------------- |
| .*class*<br/>.itr    |  选择class="itr"的元素              |
| .*class* p<br/>.mrk p | 选择 **class="mrk"** 元素内的 **p** |
| \#*id*<br />*#*first |   选择id=first的元素             |
| *element*<br />p        |    选择\<p\>元素                        |
| *element,element*<br />div,p | 选择\<div\>和\<p\>元素           |
| *element*>*element*<br />div>p | 子代元素选择器 |
| *element* +*element*<br />div+p | 相邻兄弟选择器 |
| *element* ~*element*<br />div~p |  后续兄弟选择器 |
| *element* *element*<br />div p   | 选择所有\<div\>元素后的\<p\> |
| [*attribute*\]<br />[target] |  选择带有target属性元素               |
| [*attribute*=*value*\]<br />[target=-blank] |使用target="-blank"的元素 |
| [*attribute*~=*value*\]<br />[title~=flor]|选择标题属性包含 "flor" 的元素 |

```css
<style>
[title=runoob] {border:5px solid green;}
#para1 {text-align:center; color:red;} 
.center {text-align:center;}
p.right {text-align:right;}
</style>

<a title="test">test</a>
<p id="para1">Hello World!</p>
<p class="center">段落居中</p> 
<p class="right">这个段落向右对齐</p> 
```

#### 2.不同形式的样式表

```css
/*外部样式表*/
<link rel="stylesheet" type="text/css" href="mystyle.css">
/*内部样式表*/
<style> body {background-image:url("images/back40.gif");} </style>
/*内联样式*/
<p style="color:sienna;margin-left:20px">这是一个段落</p>
```

##### 多重样式优先级: 内联样式 > 内部样式 > 外部样式 > 浏览器默认样式

#### 3.背景

```css
/*支持16进制,RGB和颜色名称*/
body {background-color:#b0c4de;}
body {background-image:url('paper.gif');}
/*背景简写属性*/
/*顺序为: color,image,repeat,attachment,position*/
body {background:#ffffff url('img.png') no-repeat right top;}
```

#### 4.文本格式

```css
h1 {color:rgb(255,0,0);}                    /*文本颜色*/
h1 {text-align:center;}                     /*文本对齐方式*/
h1 {text-indent:50px;}                      /*文本缩进*/
h2 {text-decoration: underline wavy red;}   /*红色波浪形下划线*/
h3 {text-shadow: 2px 2px 2px #ff0000;}   /*水平,垂直,模糊,颜色*/
```

| 属性                                                         | 描述             | 实例                               |
| :----------------------------------------------------------- | :--------------- | ---------------------------------- |
| [color](https://www.runoob.com/cssref/pr-text-color.html)    | 文本颜色         | hsl(120,100%,25%)                  |
| [direction](https://www.runoob.com/cssref/pr-text-direction.html) | 文本方向。       | ltr(默认,从左至右)                 |
| [word-spacing](https://www.runoob.com/cssref/pr-text-word-spacing.html) | 字符间距         | h2 {letter-spacing:-3px}           |
| [line-height](https://www.runoob.com/cssref/pr-dim-line-height.html) | 行高             | 数字或百分比                       |
| [text-align](https://www.runoob.com/cssref/pr-text-text-align.html) | 文本对齐         | left;  justify(两端对齐)           |
| [text-decoration](https://www.runoob.com/cssref/pr-text-text-decoration.html) | 文本修饰         | underline; line-through; (见链接)  |
| [text-indent](https://www.runoob.com/cssref/pr-text-text-indent.html) | 首行缩进         |                                    |
| [text-shadow](https://www.runoob.com/cssref/css3-pr-text-shadow.html) | 文本阴影         | {text-shadow:2px 2px 2px #FF0000;} |
| [text-transform](https://www.runoob.com/cssref/pr-text-text-transform.html) | 控制元素中的字母 |                                    |

#### 5.字体

```css
p{
    font-family:"Times New Roman", Times, serif;
    font-style:italic;   
    /* 正常体: {font-style:normal;}*/
    font-size:14px;
    font-weight:bold;	 
    /*normal,bolder,lighter,或数字(normal为400)*/
}
```

#### 6.链接 link

```css
/* 未访问链接*/
a:link {color:#000000;}      
/* 已访问链接 */
a:visited {color:#00FF00;}  
/* 鼠标移动到链接上 */
a:hover {color:#FF00FF;}  
/* 鼠标点击时 */
a:active {color:#0000FF;}  
```

#### 7.伪类

伪类是为了在已有的类中添加基于特定要求的状态类, 如链接的未点击,已点击等

| 选择器                                                       | 示例               | 示例说明               |
| :----------------------------------------------------------- | :----------------- | :--------------------- |
| [:checked](https://www.runoob.com/cssref/sel-checked.html)   | input:checked      | 选中的表单元素         |
| [:disabled](https://www.runoob.com/css/cssref/sel-disabled.html) | input:disabled     | 禁用的表单元素         |
| [:empty](https://www.runoob.com/cssref/sel-empty.html)       | p:empty            | 没有子元素的p元素      |
| [:enabled](https://www.runoob.com/cssref/sel-enable.html)    | input:enabled      | 启用的表单元素         |
| [:out-of-range](https://www.runoob.com/cssref/sel-out-of-range.html) | input:out-of-range | 指定范围以外的值的元素 |
| [:in-range](https://www.runoob.com/cssref/sel-in-range.html) | input:in-range     | 指定范围内的值的元素   |
| [:invalid](https://www.runoob.com/cssref/sel-invalid.html)   | input:invalid      | 无效的元素             |
| [:read-only](https://www.runoob.com/cssref/sel-read-only.html) | input:read-only    | 只读的元素             |
| [:read-write](https://www.runoob.com/cssref/sel-read-write.html) | input:read-write   | 没有只读属性的元素     |
| [:target](https://www.runoob.com/cssref/sel-target.html)     | #news:target       | 当前活动的元素         |
| [:valid](https://www.runoob.com/cssref/sel-valid.html)       | input:valid        | 有效的属性             |
| [:link](https://www.runoob.com/cssref/sel-link.html)         | a:link             | 未访问链接             |
| [:visited](https://www.runoob.com/cssref/sel-visited.html)   | a:visited          | 访问过的链接           |
| [:active](https://www.runoob.com/cssref/sel-active.html)     | a:active           | 正在活动链接           |
| [:hover](https://www.runoob.com/cssref/sel-hover.html)       | a:hover            | 鼠标放在目标上         |
| [:focus](https://www.runoob.com/cssref/sel-focus.html)       | input:focus        | 具有焦点的元素         |
| [:before](https://www.runoob.com/cssref/sel-before.html)     | p:before           | 元素之前内容           |
| [:after](https://www.runoob.com/cssref/sel-after.html)       | p:after            | 元素之后内容           |
