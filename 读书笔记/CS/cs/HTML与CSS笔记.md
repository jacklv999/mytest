## HTML与CSS笔记

#### 1.html文件头

```html
<!doctype html>
<meta charset='UTF-8'>
```

- 帮助浏览器识别html文件
- 指定html文件中的字符集, 存在非英文时, 最好使用 "UTF-8"

#### 2.HTML表格

```html
<table border="1">


<th><td>title1</td><td>title2</td></th>
    <tr> 
        <td>11</td><td colspan=2>colspan2</td>
    </tr> 
    <tr>
        <td rowspan=2>rowspan=2</td><td>1</td><td>2</td>
    </tr>
    <tr><td>3</td><td>4</td></tr>
</table>
<!-- 插入表格 -->
```

结果如下示:

 ![htmltable](D:\PythonCode\Pages\mytest\mytest\pic\htmltable.png)

- 1.`<th></th>`标签: 用于指定表格的表头
- 2.`<tr></tr>`标签: 用于指定表格的行
- 3.`<td></td>`标签: 用于指定表格的单元格
- 4.`border`参数: 用于指定表格的边框宽度

- 5.`rowspan & colspan`参数: 用于指定单元格跨的横纵单元格行数
- 6.`align  &  valign`参数: 用于指定表格中单元格内容的对齐方式, 值包括`align="left" 或 center right` 和 `valign="top"  或 middle bottom` 
- 7.`width  & height`参数: 指定单元格宽度和高度

#### 3.列表元素

```html
<ul><!--定义无序列表--></ul>
<li><!--定义有序列表--></li>
```

#### 4.html常见标签

```html
<a>指定超链接, 链接以属性href="值" 传递</a>
<h1>
    <h2>
        <h3>
            <h4>
                <h5>
                    指定不同大小的文字
                </h5>
            </h4>
        </h3>
    </h2>
</h1>
<i>指定斜体文字</i>
<b>指定粗体文字</b>
<span>组合文档中的行内元素</span>
<br> 用于换行
<em>用于强调文本</em>
```

#### 5.html简单布局

```html
<div style="code">
    <div class="t1">
        pass
    </div>
</div>
```

- 简单布局任务可以使用 `style`属性直接布局
    - 1.设定DIV框宽度: `style="width:100px"` 或 `style="width:100%"` 
    - 2.设定DIV框高度: `style="height:200px"` 或 `style="height:50%"` 
    - 3.设定DIV框水平排列: `style="float:right" ` 
        - 1.浮动边框前元素不受影响, 浮动边框后元素围绕浮动元素布局
        - 2.`float:left` 表示从左边框起对齐
        - 3.`float:right` 表示从右边框起对齐
        - 4.`clear:both` 对浮动元素后的DIV使用该元素, 使得其布局不受影响
    - 4.设定背景颜色: `style="background-color:#FFA500;"` 
    - 5.设定元素外边距: `style="margin-bottom:0;"` 
        - 1.边距: `margin-top&margin-bottom&margin-right&margin-left` 
        - 2.设定一: `margin:1px 2px 3px 4px` , 表示上1,右2,下3, 左4
        - 3.设定二: `margin:25px 50px 25px` , 上25, 左右50, 下25
        - 4.设定三: `margin:25px 50px` , 上下25, 左右50
        - 5.设定四: `margin:25px` , 表示上下左右均为25
- 复杂布局使用内嵌或外部CSS代码布局, 通过`class="值"`引入布局样式



