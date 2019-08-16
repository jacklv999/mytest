# Python

## 01.分布式进程

- 1.创建主机进程
  - 1.创建任务队列: tsk_que=queue.Queue()   rslt_que=queue.Queue()
  -  2.创建队列管理: class QuMagr(BaseManager): pass
  - 3.注册队列: QuMagr.register('get_tsk', callable=lambda:tsk_que)
  - 4.绑定端口,设置验证: magr=QuMagr(address=('',端口),authkey=key)
  - 5.启动队列: magr.start()
  -  6.获取任务: tsk = magr.get_tsk()
- 2.创建附属进程
  - 1.创建队列管理: class QuMagr(BaseManager): pass
  - 2.注册任务获取: QuMagr.register('get_tsk')
  - 3.连接到服务器: m = QuMagr(address=(svr_adr, 端口), authkey=key)
  - 4.连接并获取任务: m.connect()   tsk = m.get_tsk()



## 03.网络编程

#### 1.TCP编程

- 1.客户端
  - 1.创建Socket: 
  
    ```python
    socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    ```
  
  - 2.连接Socket: 
  
    ```python
    s.connect(tuple)
    #tuple=('url', 端口)
    ```
  
  - 3.接收数据: `bfr=[]... d=s.recv(1024)  bfr.append(d)` 
  
  - 4.解析数据:` header, html = d.split(b'\r\n\r\n', 1)` 
- 2.服务端
  - 1.创建Socket:`s=socket.socket(socket.AF_INET,socket.SOCK_STREAM)` 
  - 2.监听端口: s.bind(('IP-adr', 端口))   s.listen(最大连接数)
  - 3.创建接收器:` sck,adr=s.accept() t=threading.Thread(target=?,args)` 
  - 4.处理接收信息:  `sock.send(b'信息')   sock.close()` 

#### 2.UDP编程

- 1.客服端
  - 1.创建Socket: `s=socket.socket(socket.AF_INET,socket.SOCK_DGRAM)` 
  - 2.发送数据: for d in lst: s.sendto(d,('url',端口))
  - 3.接收数据: `s.recv(1024).decode('utf-8'))` 
- 2.服务端
  - 1.创建Socket: `s=socket.socket(socket.AF_INET, socket.SOCK_DGRAM)` 
  - 2.监听端口: `s.bind(tuple) `     注: tuple = ('IP-adr', 端口)
  - 3.接收数据:  `data, addr = s.recvfrom(1024)` 
  - 4.发送数据: `s.sendto(b'Hello, %s!' % data, addr)` 



## 	06.访问数据库

#### 1.使用SQLite

- 1.导入数据库驱动:  import sqlite3
   	   	- 2.连接数据库: `con = sqlite3.connect('test.db')` 
   	   	- 3.创建游标对象: `cursor = con.cursor()` 
   - 4.执行SQL语句
        	      	- 1.执行SQL命令: `cursor.execute('SQL命令')` 
        	      	      	- 2.创建新表: `create table user(id varchar(20) primary key,name ...)` 
        	      	      	- 3.插入记录: `insert into user (id, name) values (...)` 
        	      	      	- 4.关闭Cursor并提交更改: `cursor.close() con.commit()  con.close()` 
   - 5.SQL补充
        	      	- 1.varchar(n) 表以可变长度储存,最长不超过20个字节
        	      	      	- 2.primary key 表主键约束

#### 2.使用MySQL

- 1.导入数据库驱动: import mysql.connector (注: 需要先安装)	
   	   	- 2.连接数据库: con=mysql.connector.connect(user='?',password='?',database='?')
   	    - 3.创建游标对象: cursor = con.cursor()



## 07.Web开发

#### 1.Web页面

- 1.HTML定义页面内容
- 2.CSS控制页面元素样式` (<style>? </style>)` 
- 3.JavaScript负责页面交互逻辑 `(<script>?</script>)` 

#### 2.WSGI接口

- 1.基础函数
  - 1.代码: `def app(evrn,srt_rspe): srt_rspe(...) return [bdy]` 
- 2.注释
  - 1.evrn 表HTTP请求的 dict 对象
  - 2.srt_rspe 表发送HTTP响应的函数
  - 3.运行WSGI服务

#### 3.使用Web框架

- 1.使用Flask框架
  - 1.定义主变量: `app = Flask(__name__)` 
  - 2.用装饰器定义页面: `@app.route('/', methods=['GET', 'POST'])` 
  - 3.对不同方法分别定义函数: `@app.route('/路径', methods=['GET'])` 
- 2.其它框架: Django(全能型Web框架)、web.py（一个小巧的Web框架）

#### 4.使用模板

- 1.MVC：Model-View-Controller，中文名“模型-视图-控制器”
  - 1.Python处理URL的函数就是C：Controller，Controller负责业务逻辑
  - 2.包含变量的模板是V：View，负责显示逻辑，最终输出用户看到的HTML
  - 3.Model传给View，View在替换变量的时候，从Model中取出相应的数据
- 2.Jinja2: Flask默认使用Jinja2模板, 指令为 `{``%`` ...`` %``}`



## 08.异步IO

#### 1.协程

- 1.在同一线程内构建多任务,程序内部中断以 send() 和 yield ()传递参数
- 2.代码实现: def f1:...yield... def f2:...send...

#### 2.asyncio

- 1.coroutine类型: 协程模型,线程执行到 yield from 跳出执行下一coroutine类型
- 2.装饰器 @asyncio.coroutine 把 generator 标记为 coroutine类型
- 3.定义协程: loop = asyncio.get_event_loop() 
- 4.多个coroutine可以封装成一组Task然后并发执行, 如tasks = [func(), func()]
- 5.协程运行: loop.run_until_complete(asyncio.wait(tasks))

#### 3.async/await

- 1.Python3.5 以后支持 async/await
- 2.用法
  - 1.`@asyncio.coroutine def func():... = async def func():...` 
  - 2.yield from [coroutine] = await [coroutine]

#### 4.aiohttp

- 1.aiohttp 则是基于 asyncio 实现的HTTP框架
- 2.支持 async/await 语法