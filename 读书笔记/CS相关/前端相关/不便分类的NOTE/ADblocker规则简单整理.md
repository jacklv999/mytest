## ADblocker规则简单整理

#### 1.元素过滤

- 1.过滤器使用规则

  ```
  过滤器：
  example.com/ads/banner*
  被过滤地址：
  http://example.com/ads/banner123.gif
  http://example.com/ads/banner4586.png
  ```

- 2.管道符使用规则

  管道符|表示过滤规则终止, Adblock Plus通常将每个过滤器视为在其开头和结尾都带有通配符

  ```
  过滤器：
  swf|
  被过滤地址：
  http://example.com/swf
  不被过滤地址：
  http://example.com/swf/index.html
  ```

- 3.双管道符
  双管道符`||`表示域名前匹配, 您可以通过在过滤器前面放置两个管道符号来实现过滤器在域名前面的匹配

  ```
  过滤器：
  ||example.com/banner.gif
  被过滤地址：
  http://example.com/banner.gif
  https://example.com/banner.gif
  http://www.example.com/banner.gif
  不被过滤地址：
  http://badexample.com/banner.gif
  http://gooddomain.example/analyze?http://example.com/banner.gif
  ```

#### 2.元素隐藏

- 元素隐藏基本规则

  ```
  内容广告html如下：
  <div class="textad"> Cheapest tofu, only here and now! </div> 
  <div id="sponsorad"> Really cheap tofu, click here! </div> 
  <textad> Only here you get the best tofu! </textad>
  内容过滤器：
  ##.testad <!--过滤第一条-->
  ###sponsorad <!--过滤第二条-->
  ##textad <!--过滤第三条-->
  ```

- 属性选择器
  有些广告既没有ID，也没有类别属性。可以使用其他属性来隐藏这些属性。例如:
  -  `##table[width="80%"]` 隐藏宽度属性设置为80％的表。
  -  `##div[title*="adv"]` 隐藏所有title等于adv的div。
  - 同时匹配多个条件隐藏
    -  `##div[title^="adv"][title$="ert"]` 隐藏 title 开始为"adv"和结尾"ert"的div
    -  `##table[width="80%"][bgclr="white"]`匹配宽度为80％且`bgclr`为白色的table



