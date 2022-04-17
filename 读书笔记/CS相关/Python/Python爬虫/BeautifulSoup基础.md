> 代码示例一
>a = <p class="title"><b>The Dormouse's story</b></p>
>a.p = []
>a.b = <b>The Dormouse's story</b>

> 代码示例二
>b = <span id="ipusa">a.isxb.top</span>
>b.span['id'] = ipusa
>b.span.string = a.isxb.top ···



###html格式：

>HTML = <tag attr = "value">text</tag>
>soup = BeautifulSoup(HTML)

###Tag标签
>soup.tag.name = tag
soup.tag = <tag attr = "value">text</tag>
soup.tag['attr'] = value    特例: 多值属性 soup.tag['class'] = list
soup.tag.string = text

###子节点
>soup.contents  以列表形式输出 soup 所有子节点
soup.children  以生成器形式输出 soup 所有子节点

###String属性
>soup.tag.string   仅存在唯一String时输出该String
soup.tag.strings  存在多个String时以生成器输出String

###find_all函数
>list = soup.find_all(tag)
soup.find_all(re.compile("正则表达式"))
soup.find_all(attr = 'value')
soup.find_all(text = "text")    可以传入单个字符串或字符串列表

###find()函数
>soup.tag-1.tag-2... = soup.find("tag-1").find("tag-2")

###CSS选择器
>soup.select("tag-1 tag-2...")  逐层查找标签
soup.select("tag-1 > tag-2")    查找某 Tag 的子标签
soup.select('tag[attr]')      按是否存在某属性查找


###输出格式
>soup.getText()		以 Str 输出所有字符串
















