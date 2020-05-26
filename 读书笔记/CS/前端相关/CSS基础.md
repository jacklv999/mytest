## CSS基础

#### 1.[CSS选择器](https://www.runoob.com/cssref/css-selectors.html) 

| 选择器                  | 示例            | 示例说明                             | 名称 |
| :---------------------- | :-------------- | :----------------------------------- | ----------------------- |
| .*class*                | .intro          | 选择class="intro"的元素              |  |
| .*class* p | .mark p | 选择 **class="marked"** 元素内的 **p** 元素 |  |
| \#*id*                  | \#*firstname*   | 选择id="firstname"的元素             |  |
| *element*               | p               | 选择\<p\>元素                        |  |
| *element,element*       | div,p           | 选择\<div\>元素和\<p\>元素           | 组合选择器 |
| *element*>*element*     | div>p           | 选择父级 \<div\> 元素的 \<p\> 元素   | 子代元素选择器 |
| *element* +*element* | div+p | 选择\<div\>之后的\<p\>元素, 父元素相同 | 相邻兄弟选择器 |
| *element* ~*element* | div~p |  | 后续兄弟选择器 |
| *element* *element*    | div p          | 选择所有\<div\>元素之后的\<p\>元素 |  |
| [*attribute*\]          | [target]        | 选择带有target属性元素               |  |
| [*attribute*=*value*\]  | [target=-blank] | 使用target="-blank"的元素            |  |
| [*attribute*~=*value*\] | [title~=flor]   | 选择标题属性包含 "flor" 的元素       |  |

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
body {background-color:#b0c4de;}           /*支持16进制,RGB和颜色名称*/
body {background-image:url('paper.gif');}
/*背景简写属性*/
/*顺序为:color,image,repeat,attachment,position*/
body {background:#ffffff url('img_tree.png') no-repeat right top;}
```

#### 4.文本格式

```css
h1 {color:rgb(255,0,0);}                      /*文本颜色*/
h1 {text-align:center;}                       /*文本对齐方式*/
h1 {text-indent:50px;}                        /*文本缩进*/
h2 {text-decoration: underline wavy red;}     /*红色波浪形下划线*/
h3 {text-shadow: 2px 2px 2px #ff0000;}        /*水平,垂直,模糊,颜色*/
```

| 属性                                                         | 描述             | 实例                                   |
| :----------------------------------------------------------- | :--------------- | -------------------------------------- |
| [color](https://www.runoob.com/cssref/pr-text-color.html)    | 设置文本颜色     | rgba(255,0,0,0.1);hsl(120,100%,25%)    |
| [direction](https://www.runoob.com/cssref/pr-text-direction.html) | 设置文本方向。   | ltr(默认,从左至右); rtl(从右至左)      |
| [word-spacing](https://www.runoob.com/cssref/pr-text-word-spacing.html) | 设置字符间距     | h2 {letter-spacing:-3px}               |
| [line-height](https://www.runoob.com/cssref/pr-dim-line-height.html) | 设置行高         | 数字或百分比乘以字体大小               |
| [text-align](https://www.runoob.com/cssref/pr-text-text-align.html) | 对齐元素中的文本 | left; right; center; justify(两端对齐) |
| [text-decoration](https://www.runoob.com/cssref/pr-text-text-decoration.html) | 向文本添加修饰   | underline; line-through; (见链接)      |
| [text-indent](https://www.runoob.com/cssref/pr-text-text-indent.html) | 文本的首行缩进   |                                        |
| [text-shadow](https://www.runoob.com/cssref/css3-pr-text-shadow.html) | 设置文本阴影     | {text-shadow:2px 2px 2px #FF0000;}     |
| [text-transform](https://www.runoob.com/cssref/pr-text-text-transform.html) | 控制元素中的字母 |                                        |

#### 5.字体

```css
p{
    font-family:"Times New Roman", Times, serif;
    font-style:italic;   /* 正常体: {font-style:normal;}*/
    font-size:14px;
    font-weight:bold;	 /*normal,bolder,lighter,或数字(normal为400)*/
}
```

#### 6.链接 link

```css
a:link {color:#000000;}      /* 未访问链接*/
a:visited {color:#00FF00;}  /* 已访问链接 */
a:hover {color:#FF00FF;}  /* 鼠标移动到链接上 */
a:active {color:#0000FF;}  /* 鼠标点击时 */
```

#### 7.伪类

伪类是为了在已有的类中添加基于特定要求的状态类, 如链接的未点击,已点击等

| 选择器                                                       | 示例               | 示例说明                                   |
| :----------------------------------------------------------- | :----------------- | :----------------------------------------- |
| [:checked](https://www.runoob.com/cssref/sel-checked.html)   | input:checked      | 选择所有选中的表单元素                     |
| [:disabled](https://www.runoob.com/css/cssref/sel-disabled.html) | input:disabled     | 选择所有禁用的表单元素                     |
| [:empty](https://www.runoob.com/cssref/sel-empty.html)       | p:empty            | 选择所有没有子元素的p元素                  |
| [:enabled](https://www.runoob.com/cssref/sel-enable.html)    | input:enabled      | 选择所有启用的表单元素                     |
| [:out-of-range](https://www.runoob.com/cssref/sel-out-of-range.html) | input:out-of-range | 选择指定范围以外的值的元素属性             |
| [:in-range](https://www.runoob.com/cssref/sel-in-range.html) | input:in-range     | 选择元素指定范围内的值                     |
| [:invalid](https://www.runoob.com/cssref/sel-invalid.html)   | input:invalid      | 选择所有无效的元素                         |
| [:read-only](https://www.runoob.com/cssref/sel-read-only.html) | input:read-only    | 选择只读属性的元素属性                     |
| [:read-write](https://www.runoob.com/cssref/sel-read-write.html) | input:read-write   | 选择没有只读属性的元素属性                 |
| [:target](https://www.runoob.com/cssref/sel-target.html)     | #news:target       | 选择当前活动#news元素(点击URL包含锚的名字) |
| [:valid](https://www.runoob.com/cssref/sel-valid.html)       | input:valid        | 选择所有有效值的属性                       |
| [:link](https://www.runoob.com/cssref/sel-link.html)         | a:link             | 选择所有未访问链接                         |
| [:visited](https://www.runoob.com/cssref/sel-visited.html)   | a:visited          | 选择所有访问过的链接                       |
| [:active](https://www.runoob.com/cssref/sel-active.html)     | a:active           | 选择正在活动链接                           |
| [:hover](https://www.runoob.com/cssref/sel-hover.html)       | a:hover            | 把鼠标放在链接上的状态                     |
| [:focus](https://www.runoob.com/cssref/sel-focus.html)       | input:focus        | 选择元素输入后具有焦点                     |
| [:before](https://www.runoob.com/cssref/sel-before.html)     | p:before           | 在每个<p>元素之前插入内容                  |
| [:after](https://www.runoob.com/cssref/sel-after.html)       | p:after            | 在每个<p>元素之后插入内容                  |


