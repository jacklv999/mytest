## Scrapy Note

#### 1. Minimal Demo

```python
import scrapy

class QuotesSpider(scrapy.Spider):
    name = "quotes"
    start_urls = [
        'http://quotes.toscrape.com/page/1/',
        'http://quotes.toscrape.com/page/2/',
    ]

    def parse(self, response):
        page = response.url.split("/")[-2]
        filename = f'quotes-{page}.html'
        with open(filename, 'wb') as f:
            f.write(response.body)
```

#### 2. Extracting Data

```python
import scrapy

class QuotesSpider(scrapy.Spider):
    name = "quotes"
    start_urls = [
        'http://quotes.toscrape.com/page/1/',
        'http://quotes.toscrape.com/page/2/',
    ]

    def parse(self, response):
        for quote in response.css('div.quote'):
            yield {
                'text': quote.css('span.text::text').get(),
                'author': quote.css('small.author::text').get(),
                'tags': quote.css('div.tags a.tag::text').getall(),
            }
```

**Note**: Saving in JSON file

```python
scrapy crawl quotes -O quotes.json
```

#### 3. Recurrently Crawl

```python
import scrapy

class AuthorSpider(scrapy.Spider):
    name = 'author'
    start_urls = ['http://quotes.toscrape.com/']

    def parse(self, response):
        author_page_links = response.css('.author + a')
        yield from response.follow_all(
            author_page_links, 
            self.parse_author
        )

        pagination_links = response.css('li.next a')
        yield from response.follow_all(
            pagination_links, 
            self.parse
        )

    def parse_author(self, response):
        def extract_with_css(query):
            return response.css(
                query
            ).get(default='').strip()

        yield {
            'name': extract_with_css(
                'h3.author-title::text'
            ),
            'birthdate': extract_with_css(
                '.author-born-date::text'
            )
        }
```

#### Appendix

**1, 你用过的爬虫框架或者模块有哪些？谈谈他们的区别或者优缺点？**

Python自带：urllib，urllib2

第 三 方：requests

框    架：Scrapy

urllib和urllib2模块都做与请求URL相关的操作，但他们提供不同的功能。

urllib2.：urllib2.urlopen可以接受一个Request对象或者url，（在接受Request对象时候，并以此可以来设置一个URL 的headers），urllib.urlopen只接收一个url

urllib 有urlencode,urllib2没有，因此总是urllib，urllib2常会一起使用的原因

scrapy是封装起来的框架，他包含了下载器，解析器，日志及异常处理，基于多线程， twisted的方式处理，对于固定单个网站的爬取开发，有优势，但是对于多网站爬取 100个网站，并发及分布式处理方面，不够灵活，不便调整与括展。

request 是一个HTTP库， 它只是用来，进行请求，对于HTTP请求，他是一个强大的库，下载，解析全部自己处理，灵活性更高，高并发与分布式部署也非常灵活，对于功能可以更好实现.

**2，scrapy的优缺点？为什么要选择scrapy框架？**

**优点**：采取可读性更强的xpath代替正则 

强大的统计和log系统 

同时在不同的url上爬行 

支持shell方式，方便独立调试 

写middleware,方便写一些统一的过滤器 

通过管道的方式存入数据库

**缺点**：基于python爬虫框架，扩展性比较差，基于twisted框架，运行中exception是不会干掉reactor，并且异步框架出错后是不会停掉其他任务的，数据出错后难以察觉

**3，scrapy和requests的使用情况？**

requests 是 polling 方式的，会被网络阻塞，不适合爬取大量数据

scapy 底层是异步框架 twisted ，并发是最大优势

**4，描述一下scrapy框架的运行机制？**

从start_urls里面获取第一批url发送请求，请求由请求引擎给调度器入请求对列，获取完毕后，调度器将请求对列交给下载器去获取请求对应的响应资源，并将响应交给自己编写的解析方法做提取处理，如果提取出需要的数据，则交给管道处理，如果提取出url，则继续执行之前的步骤，直到多列里没有请求，程序结束。

**5，写爬虫使用多进程好，还是用多线程好？**

IO密集型代码(文件处理、网络爬虫等)，多线程能够有效提升效率(单线程下有IO操作会进行IO等待，造成不必要的时间浪费，而开启多线程能在线程A等待时，自动切换到线程B，可以不浪费CPU的资源，从而能提升程序执行效率)。在实际的数据采集过程中，既考虑网速和响应的问题，也需要考虑自身机器的硬件情况，来设置多进程或多线程

**6，常见的反爬虫和应对方法？**

​    \1. 基于用户行为，同一个ip段时间多次访问同一页面

​        利用代理ip，构建ip池

​    \2. 请求头里的user-agent

​        构建user-agent池（操作系统、浏览器不同，模拟不同用户）

​    \3. 动态加载（抓到的数据和浏览器显示的不一样），js渲染

​    模拟ajax请求，返回json形式的数据

​    4，selenium / webdriver 模拟浏览器加载

​    5，对抓到的数据进行分析

​    6，加密参数字段

​     会话跟踪【cookie】

​      防盗链设置【Referer

**7，分布式爬虫主要解决什么问题？**

​        面对海量待抓取网页，只有采用分布式架构，才有可能在较短时间内完成一轮抓取工作。

​        它的开发效率是比较快而且简单的。

**8，什么是爬虫，为什么要用爬虫?**

​    用于在网络上采集数据的程序，可以用任何语言开发，python更加方便快捷高效一些。

​    爬虫的目的：采集一些需要的数据。

​    为什么python更适合写爬虫程序？python中封装了很多爬虫库，如urllib ,re,bs,scrapy等，开发效率更高

**9，爬虫的基本流程？**

​        1，浏览器发起请求，可能包含请求头等信息，等待服务器相应

​         2，获取服务器响应内容，可能是网页文本（html、json代码），图片二进制、视频二进制等

​        3，解析内容（正则、xpath、json解析等 ）

​        4， 保存数据（本地文件、数据库等）

**10，如何提高爬取效率？**

​        爬虫下载慢主要原因是阻塞等待发往网站的请求和网站返回

​        1，采用异步与多线程，扩大电脑的cpu利用率；

​        2，采用消息队列模式

​        3，提高带宽

**11，request请求方式中的post、get有什么区别**

​     GET一般用于获取/查询资源信息，而POST一般用于更新资源信息

​    get是在url中传递数据，数据放在请求头中，post是在请求体中传递数据

​    get安全性非常低，post安全性较高，但是get执行效率却比Post方法好

**12，模拟登陆原理？**

​    因为http请求是无状态的，网站为了识别用户身份，需要通过cookie记录用户信息（用户、密码），这些信息都会在手动登陆时记录在post请求的form-data里，那么在爬虫时候只需要将这些信息添加到请求头里即可。

**13，爬虫协议？**

Robots协议（也称为爬虫协议、爬虫规则、机器人协议等）也就是robots.txt，网站通过robots协议告诉搜索引擎哪些页面可以抓取，哪些页面不能抓取。

Robots协议是网站国际互联网界通行的道德规范，其目的是保护网站数据和敏感信息、确保用户个人信息和隐私不被侵犯。因其不是命令，故需要搜索引擎自觉遵守。

**14，代理问题**

***1.为什么会用到代理***

将真是IP隐藏起来（请求过于太频繁的话，ip可能会被禁止）

**2.代理怎么使用（具体代码，请求在什么时候添加的代理）**

proxy_handler = ProxyHandler({'http': 'http://183.159.89.204:18118'})

\# 构建一个Opener对象

proxy_opener = build_opener(proxy_handler)

\# 使用自定义opener访问服务器数据，得到相应

response = proxy_opener.open(request)

**14，模拟登陆问题**

**1.模拟登陆流程**

因为http请求是无状态的，网站为了识别用户身份，需要通过cookie记录用户信息（用户、密码），这些信息都会在手动登陆时记录在post请求的form-data里，那么在爬虫时候只需要将这些信息添加到请求头里即可

**2.如何处理网站传参加密的情况**

对抓包数据进行分析，这要 在具体的项目中去说明

**15，协议问题**

\# 爬虫从网页上拿数据肯定需要模拟网络通信的协议

1.http协议，请求由什么组成，每个字段分别有什么用,https和http有什么差距

2.证书问题

3.TCP,UDP各种相关问题

**27，数据提取问题**

1.主要使用什么样的结构化数据提取方式

​    xpath  正则  bs4等

**2.动态加载的数据如何提取**

模拟ajax请求，返回json形式的数据

**3.json数据如何提取**

​    python中内置了json模块,提供了dumps、dump、loads、load，用于字符串 和 python数据类型间进行转换。然后再对数据用递归，正则，或者一层一层获取的方法得到数据

**30，如果对方网站反爬取，封IP了怎么办？**

1，放慢抓取熟速度，减小对目标网站造成的压力，但是这样会减少单位时间内的数据抓取量

2，使用代理IP（免费的可能不稳定，收费的可能不划算）

**31，爬虫过程中验证码怎么处理？**

**32，关于防盗链？**

**部分服务器会检查 http 请求头的 Referer 字段来判断你是否是从指定页面跳转而来的，以达到防盗链的作用。因此在伪装请求头部的时候，该字段也是不容忽视的。** 