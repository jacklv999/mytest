## Python多进程

#### 1.创建多进程

```python
from multiprocessing import Process

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

创建子进程时，只需要传入一个执行函数和函数的参数，创建一个`Process`实例，用`start()`方法启动，这样创建进程比`fork()`还要简单。

`join()`方法可以等待子进程结束后再继续往下运行，通常用于进程间的同步。

#### 2.批量创建新进程

```python
from multiprocessing import Pool
import os, time, random

def t_task(name):
    print('Run task %s (%s)...' % (name, os.getpid()))


if __name__=='__main__':
    print('Parent process %s.' % os.getpid())
    p = Pool(4)
    for i in range(5):
        p.apply_async(t_task, args=(i,))
    print('Waiting for all subprocesses done...')
    p.close()
    p.join()
```

#### 3.进程同步

```python
if __name__ == '__main__':
   # extract()
    pool = Pool(6)
    for p in MyIterator(4, 4):
        print(p)
        for i in range(0,6):
            msg = p[i]
            pool.apply_async(func=extract, args=(i))
    pool.close()
    pool.join()
```





