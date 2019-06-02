# Python爬虫笔记

1.Cookies构建: 字典格式,使用函数
~~~
cookie = dict(cookies_are = 'text')
~~~
2.请求头构建: 构建成字典格式
~~~
header = {'User-Agent':'UA','Referer':'address','Host':'host name','DNT':'num'}
~~~
3.requests.get方法: requests的get方法是最常见的请求方法
~~~
res = requests.get(url,cookies = cookie,headers = header)
~~~
- 解码编码
~~~
res.encoding = 'utf-8/gb-2312'
~~~
- 获取响应中的cookie或headers
~~~
res.cookies
res.headers
~~~
- 获取响应的html源码
~~~
res.text
~~~
- 获取响应中的二进制数据(图片等)
~~~
from io import BytesIO
res.content
i = Image.open(BytesIO(r.content))
~~~
- 获取响应中的json数据
~~~
res.json()
~~~

4.requests.post方法
post方法相对于get方法可以传递更复杂的参数,使用 **参数data**
~~~
#构建data参数
dat = (('key1', 'value1'), ('key1', 'value2'))
#构建post请求
r = requests.post('http://httpbin.org/post', data=dat)
~~~

5.使用代理
代理可单独储存,调用时以 **proxies参数** 传入
~~~
proxy = {
        'http': '120.25.253.234:812',
        'https' '163.125.222.244:8123'
    }
req = requests.get(url, headers=heads,proxies=proxy)
~~~

6.会话维持
使用 **session函数** 维持会话,并请求页面,代码如下:
~~~
session = requests.Session()
session.get('http://httpbin.org/cookies/set/number/12345')
response = session.get('http://httpbin.org/cookies')
~~~
- ses = requests.Session()#创建会话对象
- ses.requests.headers.update({'User-Agent':"UA"})#构建请求头
- ses.get(url) Or ses.post(url,data)#使用session请求数据
- 注: Session()函数具有Requests函数的所有功能, 但方法级别的参数若未在会话对象中则不能跨请求传递


7.关于字符串分割: 字符串分割使用 **split()函数** ,使用代码如下
- 单符号分割
~~~
txt_1 = txt.split('symbol')
~~~

- 多符号分割
~~~
txt_1 = txt.split('symbol_1').split('symbol_2)
~~~


