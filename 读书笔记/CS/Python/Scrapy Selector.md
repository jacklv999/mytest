## Scrapy Selector

#### 1.scrapy简单命令

~~~Python
  bench         Run quick benchmark test
  fetch         Fetch a URL using the Scrapy downloader
  genspider     Generate new spider using pre-defined templates
  runspider     Run a self-contained spider (without creating a project)
  settings      Get settings values
  shell         Interactive scraping console
  startproject  Create new project
  view          Open URL in browser, as seen by Scrapy
~~~

#### 2.scrapy shell

```python
scrapy shell 网址
#获取网址并调试代码
```

#### 3.CSS Selector使用

```python
response.css("tag")					#获取标签或者属性等
response.css("tag.class")			#获取指定属性class的标签
response.css("tag::text")			#获取标签的文本内容
response.css("tag::attr(name)")		#获取指定属性的tag
response.css(".class")				#表示选定指定属性class的所有标签
response.css("tag").extract()		#获取指定标签内容
response.css("tag").get()			#获取指定标签内容, 同上
response.css("tag").getall()		#获取指定标签的所有内容
response.css("tag").attrib['attr']	#查询指定标签tag属性attr的值
```

#### 4.Xpath Selector使用

```python
response.xpath("//a/@href")			#获取指定属性节点
response.xpath("//a[@cls=”mn”]")	#获取所有属性cls为mn的a节点
response.xpath('//a[contains(@href, "image")]/text()')

#//node 表示获取该节点的所有兄弟节点
#/node/node1 表示获取节点node下的所有子节点node1
```

#### 5.正则表达式的使用

```python
response.xpath('//a').re(r'Name:\s*(.*)')	#re表达式用 r'表达式' 表示
```

