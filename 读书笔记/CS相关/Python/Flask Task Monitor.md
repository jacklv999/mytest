## Flask Task Monitor

在复杂的任务中, 任务状态监控是非常中重要的一步. 在本文中, 仅简要记录 Flask 异步任务监控的代码.

#### 1. 创建异步任务

```python
@app.route('/jobs')
def run_jobs():
    task = executor.submit(
        long_task
    )
    return 'new jobs launched'


def long_task():
    print("Task 1 started")
    sleep(10)
    print("Task 1 is done!")
```

#### 2. 任务状态监控

```python
task = executor.submit(long_task)
## return T/F 
task.running()
task.done()

## return result or error stack
task.result()
```

#### 3. 异步任务监控

任务监控可以使用中心化的方式, 所有任务监控均由同一个线程监控, 有利于减少资源消耗, 也可以对每一个任务创建监控器, 这样难度更低.

出于简单可靠的目的, 我们使用后一种方式:

```python

def monitor(task_ID):
    task = q.get()
    while True:
        with open(
            'status.txt',"a+"
        ) as f:
            res_runing = task.running()
            res_done = task.done()
            if res_runing:
                res = task_ID + 
                " is runing now\n"
                f.write(res)
            if res_done:
                res = task_ID + 
                " is done\n"
                f.write(res)
                
        if res_done:
            break
        sleep(5)


@app.route('/jobs')
def run_jobs():
    UUID_new = uuid.uuid1()
    task_ID = UUID_new.hex 
    task = executor.submit(
        some_long_task
    )
    q.put(task)
    executor.submit(
        monitor, 
        task_ID
    )
    return task_ID + ' was launched'

```

#### 4. 其它: 创建UUID

```python
import uuid
UUID_new = uuid.uuid1()

## 获取字符串形式UUID
UUID_new.hex
```

#### 5. 其它: 完整代码

```python
import uuid, queue
from flask import Flask
from time import sleep
from concurrent.futures import ThreadPoolExecutor

q = queue.Queue()
executor = ThreadPoolExecutor()
app = Flask(__name__)


def monitor(task_ID):
    task = q.get()
    while True:
        with open('status.txt',"a+") as f:
            res_runing = task.running()
            res_done = task.done()
            if res_runing:
                res = task_ID + " is runing now\n"
                f.write(res)
            if res_done:
                res = task_ID + " is done\n"
                f.write(res)
                
        if res_done:
            break
        sleep(5)


@app.route('/jobs')
def run_jobs():
    UUID_new = uuid.uuid1()
    task_ID = "task_" + UUID_new.hex 
    task = executor.submit(some_long_task)
    q.put(task)
    global Monitor
    Monitor = executor.submit(monitor, task_ID)
    return 'A new jobs named ' + task_ID + ' was launched in background!'


def some_long_task():
    index = 1
    print("Task %s started" % (index))
    sleep(10)
    print("Task %s is done!" % (index))


if __name__ == '__main__':
    app.run()
```

