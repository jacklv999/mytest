## Python多进程问题

#### 1.手动运行多进程

```python
from multiprocessing import Process
import os

# 子进程要执行的代码
def run_proc(name):
    print('Run child process %s (%s)...' % (name, os.getpid()))

if __name__=='__main__':
    print('Parent process %s.' % os.getpid())
    p = Process(target=run_proc, args=('test',))
    print('Child process will start.')
    p.start()
    p.join()
```

- 1.创建子进程: 以 `Process(target=func, args=(arg,))` 方法创建实例, 其中参数必须以元组传入, 单个参数以 `(arg,)` 方式传入
- 2.启动子进程: `p.start()` 
- 3.同步子进程: `p.join()` ,等待子进程结束后再继续往下运行，通常用于进程间的同步

#### 2.创建进程池

```python
from multiprocessing import Pool
import os, time, random

def l_task(name):
    print('Run task %s (%s)...' % (name, os.getpid()))

if __name__=='__main__':
    p = Pool(4)
    for i in range(5):
        p.apply_async(l_task, args=(i,))
    print('Waiting for all subprocesses done...')
    p.close()
    p.join()
    print('All subprocesses done.')
```

- 1.创建进程池: `p = Pool(4)` 
- 2.传递变量: 一般使用 `apply_async`  , 适用迭代器或列表等, 代码 

```python
for i in range(5):
    p.apply_async(l_task, args=(i,))
```

- 3.对Pool对象: 调用`join()`方法会等待所有子进程执行完毕，调用`join()`之前必须先调用`close()`，调用`close()`之后就不能继续添加新的进程

#### 3.进程间通信

```python
from multiprocessing import Process, Queue
import os, time, random

# 写数据进程执行的代码:
def write(q):
    for value in ['A', 'B', 'C']:
        q.put(value)

# 读数据进程执行的代码:
def read(q):
    while True:
        value = q.get(True)

if __name__=='__main__':
    # 父进程创建Queue，并传给各个子进程：
    q = Queue()
    pw = Process(target=write, args=(q,))
    pr = Process(target=read, args=(q,))
    # 启动子进程pw，写入:
    pw.start()
    # 启动子进程pr，读取:
    pr.start()
    # 等待pw结束:
    pw.join()
    # pr进程里是死循环，无法等待其结束，只能强行终止:
    pr.terminate()
```

- 进程间通信可用Queen, Pipe等, Queen为先进先出的数据栈

#### 4.注意

- 1.multiprocessing模块不支持交互模式, 必须使用 CMD运行 `python XXX.py` 的方式运行
- 2.数据传入还可以使用`manager` 方式, 更加安全































#### multiprocessing模块不支持交互模式