## HTML DOM 元素处理

#### 1.添加节点到元素后 - appendChild()

```php+HTML
<div id="div1"><p id="p1">这是一个段落。</p></div>
 
<script>
var para = document.createElement("p");
var node = document.createTextNode("这是一个新的段落。");para.appendChild(node);
var element = document.getElementById("div1");element.appendChild(para);
</script>
```

#### 2.添加节点到元素前- insertBefore()

```php+HTML
<div id="div1"><p id="p1">这是一个段落。</p></div>
 
<script>
var element = document.getElementById("div1");
var child = document.getElementById("p1");element.insertBefore(para, child);
</script>
```

#### 3.移除已存在的元素

```php+HTML
<div id="div1"><p id="p1">这是一个段落</p></div>
 
<script>
var parent = document.getElementById("div1");
var child = document.getElementById("p1");
parent.removeChild(child);
</script>
```

#### 4.替换 HTML 元素 - replaceChild()

```php+HTML
<div id="div1"><p id="p1">这是一个段落。</p></div>
 
<script>
var parent = document.getElementById("div1");
var child = document.getElementById("p1");parent.replaceChild(para, child);
</script>
```

