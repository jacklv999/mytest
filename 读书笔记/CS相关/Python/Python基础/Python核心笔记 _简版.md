# Python

- 1.Python为动态语言, 变量无需显示定义

- 2.Python以function（x）引用函数, 以function(x)赋值

  

## 01.输入输出关键字

#### 1.print()			

- 1.print ('string-1','string-2'...)
- 2.print (var,f(var))

#### 2.input()	

- 1.var = input ()
- 2.var = input ('string')



## 02.数据类型关键字

#### 1.引号		

- 1.任何由引号所包括的文本均为字符串, 且单引号''与双引号""等价
- 2.若字符串中存在单引号,则必须使用双引号定义字符串

#### 2.转义字符(\) 	

- 1.常见转义字符: \n=enter, \t=table, \\=\
- 2.特例: 由r''表示的字符, '' 内部字符串不转义

#### 3.布尔值	

- 1.布尔值由 True 和 False 表示
- 2.布尔运算: and = 和; or = 或; not = 非

#### 4.数学运算	

- 1.除法: / 表除法; // 表取整除法
- 2.% 表取余除法	

#### 5.编码		

- 1.Python默认Unicode编码,可支持包括中文在内的多语言
- 2.ord() 表字符转编码; chm() 表编码转字符
- 3.字符串: 'string'; 字节码: b'string'
- 4.编码函数: 'string'.encode('编码类型'), 将指定字符串 'string' 转化至字节码
- 5.解码函数: 'string'.decode('编码类型'), 将指定字节码 'string' 解码至字符串

#### 6.格式化	

- 1.% 表字符串替换: 单个替换时{'%s'%var}; 多个替换{'%s %d'%(var-1,var-2)} 
- 2.format()使用: 'string-1 {0} {1}'.format(var-1,var-2)
- 3.%d 表整数: %nd表占n位以整数输出补空格,%0nd表占n位以整数输出补0
- 4.%f 表浮点数: %.nf表取n位输出浮点数; %.ne表取n位输出浮点数,以科学计数法表示

#### 7.列表与元组	

- 1.列表	
   - 1.list: 定义列表, list = []
   - 2.列表索引: list[0]表从第一个元素开始; list[-1]表从最后一个元素开始
   - 3.追加列表元素: list.append(value)
   - 4.增加列表元素: list.insert(索引,value)
   - 5.删除列表元素: 删除列表最后一项 pop(); 删除列表指定位置 pop(索引)
   - 6.替换列表元素: list[索引] = value
- 2.元组	
   - 1.tuple: 定义 tuple = (值)
   - 2.tuple值不可更改,但若初始某值为list,则可以改变list中的值

#### 8.条件判断	

- 1.简单条件: if 条件: 语句  else:语句
- 2.多重条件: if 条件1: 语句  elif 条件2: 语句 ... else: 语句

#### 9.循环

- 1.for...in循环
  - 1.for 元素 in l/t: 语句; 依次迭代list或tuple元素
  - 2.range()函数: 快速生成列表, range(n) = [0,...,n-1]
- 2.while循环:	
  - 1.表达式: while 条件: 语句
  - 2.break语句: 提前结束循环语句
  - 3.continue语句:跳过本次循环,进入下一次循环

#### 10.字典和集	

- 1.字典
  - 1.dict: 定义 dict = dict() 或 dict = {key-1:value-1,key-2:value-2...}
  - 2.取值
     - 1.dict[key] 取值
     - 2.key判断: key in dict 得 T/F 或 dict.get(key,value)赋值
     - 3.删除key: dict.pop(key)

- 2.集
  - 1.set: 定义 set = set([list]),set中重复元素会自动删除
  - 2.增加元素: set.add(key)
  - 3.删除元素: set.remove(key)
  - 4.集合运算: s1 & s2 表set交集; s1 | s2 表set并集



## 03.函数

#### 1.调用函数	

- 1.调用方式: 以function(x)调用函数,x为参数
- 2.数据类型转化:int()转为整数; float()转为浮点; str()转为字符串; bool()转为bool

#### 2.定义函数	

- 1.定义方式: def func(arg): 语句 return 语句
- 2.定义空函数: def func(): pass
- 3.参数检查: isinstance(arg,(参数类型1,参数类型2...))
- 4.返回多个值: arg-1,arg-2 = func; 调用 x 或 y 即所得值  (注: 实际为返回tuple)

#### 3.函数参数	

- 1.默认参数: def func(arg-1,arg-2=n), 调用函数时缺省即为使用默认参数
- 2.可变参数: def func(*arg), 调用函数时可传入可变参数,其中 arg 为 list 或 tuple*
- 3.关键字参数: def func(arg-1,**arg-2),用于获取可选参数,arg-2 = dict(key-value)
- 4.命名关键字参数:def func(arg-1,*,arg_name_1...)获取自定义可选参数,a_name为key
- 5.参数组合: 同时使用多种参数时,需按顺序:必选、默认、可变、命名关键字和关键字

#### 4.递归函数

- 递归即在函数内部调用自身, def func(): func(), 有助于减少代码复杂度

​	

## 04.高级特性

#### 1.切片		

- 1.正向切片: list[a:b] 或 tuple[a:b] 表索引a - b-1 的切片,若a = 0, 可省略
- 2.逆向切片: list[-a:-b] 或 tuple[-a:-b] 表索引倒数第 a - b-1 的切片, 若b=0可省

#### 2.迭代

- 1.判断是否可迭代: from collections import Iterable isinstance(object,Iterable)
- 2.迭代: for key in dict 或 for i in list
- 3.下标迭代: for i value in enumerate(list) 

#### 3.列表生成式

- 1.普通列表生成: list (range (a,b)), range(a,b)可替换成任意Iterable Object
- 2.复杂列表生成: list (f(x) for x in range (a,b) if g(x)==True)
- 3.双重列表生成: list (x+y for x in A for y in B)

#### 4.生成器

- 1.用以处理极复杂的列表生成: generator = (f(x) x in IterableObject)
- 2.以函数创建generator: def func(): 语句 yield 值, return改为yield则为generator

#### 5.迭代器	

- 使用 iter(IterableObject) = iterator



## 05.函数式编程

#### 1.高阶函数	

- 1.map函数	
  - 1.表达式: map (func, IterableObj) = Iterator
  -  2.含义: 对单参数函数func, 依次传入 IterableObj 构建 Iterator
- 2.reduce函数
  - 1.表达式: reduce (func, IterableObj) = func(func(...),x2)x1)
  - 2.含义: 对两参数的函数 func 重复运算至结束
- 3.filter函数
  - 1.表达式: filter (func, IterableObj) = Iterator
  - 2.含义: 用函数 func 依次判断 IterableObj 是否满足要求并返回
- 4.sorted函数
  - 1.表达式: sorted (IterableObj, key=func, reverse=False) =list
  - 2.含义: 对 IterableObj 按 func 返回值排序

#### 2.返回函数

- 1.将函数作为返回值: 函数式编程中可以定义函数的返回值为另一函数
- 2.返回值为函数时,该函数值并未计算得出,若函数参数变化,函数值亦会变化

#### 3.匿名函数	

- lambda x: x * x, 冒号前的 x 为参数

#### 4.装饰器

- 1.含义: 在代码运行期间动态增加功能的方式

- 2.表达式: def func-1(func): 语句 return func-1; @func-1 def func-2, 装饰func-2

#### 5.偏函数

  - 1.含义: 将函数的某些参数给固定住（也就是设置默认值），返回一个新的函数
  - 2.表达式: func-1 = functools.partial(func, arg-1...)



## 06.面对对象编程

#### 1.类和实例	

- 1.类
  - 1.定义class Sth(object): pass; class后为类名,object表继承类,默认object
  - 2.__init__方法: 设定强制绑定该类的属性, def __init__(self,arg...):语句
- 2.实例: 创建实例 sth = Sth()
- 3.封装
  - 1.含义: 为调用数据方便,一般直接将调用数据的方法写入 "类" 中
  - 2.使用: class Sth(object): def __init__(self):... def new_func():...

#### 2.访问限制

- 1.私有变量

  - 1.含义: 变量名前加 "__" 变为私有变量,外部不可访问

  - 2.表达式: 

    ~~~  
    def  __init__(self...): self.__name = name ...  
    ~~~

- 2.外部访问私有变量: 可在内部定义专门修改状态和参量的方法

#### 3.继承和多态

- 1.继承: classA = classB(), 表示类的继承
- 2.多态: 定义方法时 def(classA), 则任何 classA 的子类均可运行该方法

#### 4.获取对象信息

- 1.判断对象类信息
  - 1.使用 type(): type (object) 得对象的类信息
  - 2.使用 isinstance(): isinstance(classname,class)
- 2.判断对象的方法
  - 1.使用 dir(): dir(object) 得该对象下的所有方法
  - 2.特殊方法: object.__func__() = func(object)
- 3.其它判断方式
  - 1.getattr(obj, A), 获取属性 A
  - 2.hasattr(obj, A), 判断是否存在属性 A
  - 3.setattr(obj, A), 设定属性 A



## 07.面对对象高级编程

#### 1.使用`__slots__`

- 1.实例
  - 1.给实例绑定属性: 设定属性 s = classA()； 绑定属性 s.name = A
  - 2.给实例绑定方法: 
    - 1.设定方法 def set_attr(self...): pass 
    - 2.绑定方法 from ...  s.set_attr = MethodType(set_age, s)
- 2.`__slots__`
  - 1.含义: 限制实例或类的属性
  - 2.表达式: class Sth(object): __slots__ = ('k_1','k_2'...)

#### 2.使用@property

- 1.作用: 将方法变成属性调用
- 2.表达式
  - 1.默认@property装饰器: @property def func()... = 默认get方法
  - 2.衍生@property装饰器: @func.setter, 表set值的方法

#### 3.多重继承

- 1.普通方法: class classA (classB, classC...)
- 2.Mixln方法: class classA (classB, classCMixln, classMixln...)
- 3.意义: 表示多重继承,该类是作为功能添加到子类中，而不是作为父类

#### 4.定制类

- 1.作用: 定制个性化类以简化Python开发

- 2.定制`__str__`类

  - 1.意义: 优化输出, 用户看到的 print() 输出以 `__str__`输出
  - 2.表达式: class Sth(object): `def __str__(self)...`

- 3.定制`__iter__`类

  - 1.意义: 定制类以实现迭代

  - 2.表达式:

    ```
    class Sth(object): def __iter__(self)...
    								     def __next__(self)...
    ```

- 4.定制`__getitem__`类

  - 1.意义: 定制类以实现按下标读取
  - 2.表达式: `class Sth(object): def __getitem__(self, n)...`

- 5.定制`__call__`类

  -  1.意义: 定制类以实现自定义调用方式
  - 2.表达式:` class Sth(object): def __call__(self)...` 

#### 5.枚举类

- 1.枚举类的一般用法: `from enum import Enum  list-1 = Enum (list-1, list[])` 
- 2.枚举类的高级用法: 

```
from enum import Enum, unique 
				    @unique
					class list-1(Enum): ...
```



## 08.错误、调试和测试

#### 1.错误处理: 

try...except...finally..., 若代码可能出错则用try运行，出错时跳转except语块错误处理代码，若有finally语句块，继续执行finally语句块

#### 2.调用栈

- 1.若错误未被捕获,则一直上抛直至Python解释器
- 2.调用栈分析
  - 1.Traceback (most recent call last) 表错误跟踪信息
  - 2.File "err.py", line 11, in X 表示错误出现在X处,依次向上追溯

#### 3.调试

- 1.print () 核查变量
- 2.assert 语句, 表示断言某段代码的值, 若断言错误则抛出 AssertionError
- 3.logging语句: 允许你指定记录信息的级别，有debug，info，warning，error



## 09.IO编程

#### 1.文件读写

- 1.读文件
  - 1.一般写法: f = open('/path/to/file', 'r')   以 f.read() 调用
  - 2.严谨写法: with open('/path/to/file', 'r') as f:   以 f.read() 调用
  - 3.二进制文件: 用'rb'模式打开文件
  - 4.字符编码
    - 1.编码: f = open('/path/to/file', 'r',encoding='gbk')
    - 2.错误处理: f = open('...',errors='ignore')
- 2.写文件
  - 1.一般写法: f = open('/path/to/file', 'w')      以f.write() 调用
  - 2.严谨写法: with open('/path/to/file', 'w') as f: 以f.write() 调用

#### 2.StringIO和BytesIO

- 1.StringIO: 读写字符串,创建StringIO, from io import StringIO  f = StringIO()
- 2.BytesIO: 读写二进制数据,创建BytesIO, from io import BytesIO  f = BytesIO()

#### 3.操作文件和目录

- 1.环境变量: os.environ	或 调用os.environ.get('key')
- 2.操作文件和目录
  - 1.修改文件路径: 合并路径 os.path.join() 或 拆分路径 os.path.split()
  - 2.查看当前目录的绝对路径: os.path.abspath('.')
  - 3.在某目录下创建新目录: os.mkdir(os.path.join('/path/', 'testdir'))
  - 4.删掉一个目录:  os.rmdir('/path/testdir')

#### 4.序列化

- 1.JSON与dict

  - 1.序列化 ` json.dumps(d) = str` 
  - 2.反序列化 `json.loads(json_str) = json` 
- 2.JSON与class:` json.dumps(s, default=lambda obj: obj.__dict__)` 



## 10.线程和进程

#### 1.多进程

- 1.os实现: 代码实现, ChildPid = os.fork()    (注: 仅适用于unix系统)
- 2.multiprocessing代码: p = Process(target=func, args=('1',))  p.start()
- 3.进程池: p = Pool(n)  p.apply_async(func, args=(i,))
- 4.函数
  - 1.apply_async(func[,args[,kwds[,callback]]]), 即异步非阻塞执行
  - 2.p.close()  关闭进程创造
  - 3.p.join() 主进程运行至join(),等待子进程运行结束(必须在 close() 后)
  -  4.os.getpid()   取得当前进程PID
  - 5.os.getppid()  取得父进程PID
- 5.subprocess模块: subprocess.call, 调用系统CMD运行命令,传入(['命令', '参数'])
- 6.进程间通信: 使用Queue(), 定义q = Queue(); 调用 q.put 或 q.get

#### 2.多线程	

- 1.实现	
  - 1.使用threading模块, 传入函数自动创建实例,调用 start() 执行
  - 2.代码: t = threading.Thread(target=func, arg)   t.start() 	
  - 3.补充: arg为tuple,单参数时,也要加逗号, 如 args=(5,)
- 2.Lock	
  - 1.线程间共享变量, 以 lock 防止变量错误调用
  - 2.代码: def func(): lock.aquire()    try: func-1 finally: lock.release

#### 3.ThreadLocal

- 1.作用: 在同一线程的不同函数中传递变量
- 2.代码: local = threading.local()   (注: local 为 dict 类型)

#### 4.线程和进程

- 1.不同进程中变量独立,不同线程中共用变量
- 2.不同进程的崩溃互不影响,线程崩溃导致所有线程崩溃
- 3.不同进程可分布至不同机器,线程只能在同一机器

#### 5.分布式进程

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



## 11.正则表达式

#### 1.常用

- 1.精确匹配: '\d'匹配数字, '\w'匹配字母或数字
- 2.'.'匹配任意单个字符
- 3.'*'匹配任意个字符
-  4.'\s '匹配空格, '\s+'匹配多个空格
- 5.特殊符号: '\'转义字符, 匹配\-,\^等特殊字符

#### 2.高级

- 1.[] 表范围匹配   如: [0-9] 表任意数字; [0-9a-zA-Z]表任意数字或字母
- 2.{} 表受限范围匹配    如'\d{a,b}'匹配 a-b 个数字
- 3.A|B 表匹配 A 或 B
- 4.'^ '表从行首开始匹配, ^\d表示必须以数字开头
- 5.`$` 表从行尾开始匹配,` \d$`表示必须以数字结束

#### 3.re模块

- 1.正则条件: s = r'正则表达式'
- 2.调用: re.match(r'正则表达式', test)
- 4.切分字符: re.split(正则表达式, '文本')
- 5.分组: m = re.match(正则表达式, '文本')  若表达式匹配多个组,则可以 m.group(n) 调用
- 6.贪婪匹配: 正则匹配为贪婪匹配



## 12.常用内建模块

#### 1.Hashlib

- 1.MD5: md5.update(file.encode('编码')), 常用编码为 UTF-8
- 2.SHA1: sha1.update(file.encode('编码')), 常用编码为 UTF-8

#### 2.hmac

- 1.作用: 使用带 salt 的哈希算法
- 2.代码: h = hmac.new(key, message, digestmod='MD5'), hmac支持SHA1,SHA256等算法

#### 3.urllib

- 1.Get方法
  - 1.构建请求: req = request.Request('url')
  - 2.构建HTTP头: req.add_header('User-Agent', 'UA')   
  - 3.请求并解析: with request.urlopen('req') as f:  data=f.read()
- 2.Post方法
  - 1.构建登录数据: lgn_dt = parse.urlencode(dict)
  - 2.构建请求: req = request.Request('url')
  - 3.构建HTTP头: req.add_header(), 依次添加Origin,UA,Referer
  - 4.请求并解析: `with request.urlopen(req,data=lgn_dt) as f: pass`


​	

## 13.常用第三方模块

- 1.Pillow: 用作图像处理
- 2.requests: urllib的高级版本



## 14.virtualenv

- 1.作用: 创建相互隔离的 Python 运行环境
- 2.代码
  - 1.创建运行环境: `virtualenv --no-site-packages name `
  - 2.启用运行环境: `source name/bin/activate `
  - 3.退出运行环境: `deactivate` 



## 15图形界面

#### 1.Tkinter包

- 1.创建Widget容器: `class Application(Frame): def... self.pack() ` 
- 2.创建标签: `def...: self.L1=Label(self, text='') self.L1.pack()` 
- 3.创建按钮: `def...: self.B1=Button(self,text='',command=命令) self.B1.pack()` 
- 4.创建标题: ` Application().master.title('标题')`
- 5.文本输入: `self.Input-1 = Entry(self)` 
- 6.提示消息: `messagebox.showinfo('标题', '文本, %s' % var)` 
- 注: pack() 为默认布局

#### 2.turtle库



## 16.网络编程

#### 1.TCP编程

- 1.客户端
  - 1.创建Socket: `socket.socket(socket.AF_INET, socket.SOCK_STREAM)` 
  - 2.连接Socket: `s.connect(tuple), 注: tuple=('url', 端口)` 
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



## 	17.访问数据库

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



## 18.Web开发

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



## 19.异步IO

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