## 使用Iframe

#### 1、iframe高度自适应

```html
<iframe id="iframe_target"></iframe>
<script>
var ifm= document.getElementById("iframe_target");
ifm.height=document.documentElement.clientHeight;
</script>
```

#### 2、iframe自动撑开高度

主要是三个属性控制：

- html属性：`xmlns="http://www.w3.org/1999/xhtml"`;

- body属性：`style="overflow: hidden;"`;
- iframe属性：`height=100%`

```html
<html xmlns="http://www.w3.org/1999/xhtml">
<body style="overflow: hidden;">

<iframe src="./index.html" height=100%></iframe>

</body>
</html>
```

#### 3、iframe其他属性

##### 边框隐形

```html
<iframe frameborder="0"></iframe>
```

