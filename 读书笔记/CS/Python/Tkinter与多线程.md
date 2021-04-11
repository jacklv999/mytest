## Tkinter与多线程

Tkinter本身是单线程的, 所以会阻塞执行任务, 影响用户体验, 所以有时候为了用户体验, 需要使用多线程.

##### 1. 单线程示例

以下为一个简单示例, 用python在 `label` 中输出文本, 仅使用单线程, 存在阻塞.

```python
class GUI:
    def __init__(self, top=None):
        self.Btn1 = ttk.Button(
            top, command=self.A
        )

        self.Btn2 = ttk.Button(
            top,command=self.B
        )

        self.Label = ttk.Label(
            top, 
            textvariable=label,
        )
        
    def A(self):
        lst.append(
            "start to run proc A"
        )
        label.set(
            "\n".join(lst)
        )
        time.sleep(3)
        lst.append(
            "proc A finished"
        )
        label.set(
            "\n".join(lst)
        )
            
    def B(self):
        lst.append(
            "start to run proc B"
        )
        label.set(
            "\n".join(lst)
        )
        time.sleep(3)
        lst.append(
            "proc B finished"
        )
        label.set(
            "\n".join(lst)
        )
```

##### 2. 使用多线程

使用多线程将阻塞操作用子线程处理可以防止主线程的阻塞, 代码如下所示:

```python
class GUI:
    def __init__(self, top=None):
        self.Btn1 = ttk.Button(
            top, command=self.A)

    def __A(self):
        lst.append(
            "StartRunProcA")
        label.set(
            "\n".join(lst))
        time.sleep(3)
        lst.append(
            "ProcAEnd")
        label.set(
            "\n".join(lst))
        
    def A(self):
        T = threading.Thread(
            target=self.__A)
        T.start()
```

##### 3. 使用after方法处理阻塞

tkinter自带了 `after` 方法, 可以用于处理阻塞和制造循环

当 `after` 函数内调用的函数为自身时则构成循环, 调用其他函数时, 则构成异步信号处理.

```python
class GUI:
    def __init__(self, top=None):
        self.Btn = ttk.Button(
            top, command=self.A)
        
    def __A(self):
        lst.append(
            "proc A finished")
        label.set(
            "\n".join(lst))
        
    def A(self):
        lst.append(
            "StartProcA")
        label.set(
            "\n".join(lst))
        root.after(
            3000,self.__A)
        ## 当self.__A换成self.A时
        ## 则变成循环
```

##### 4. 使用Queen和after处理阻塞问题

使用子线程处理时, 容易造成多个线程的信息操作, 很容易导致数据出现问题. Python专门为多线程操作提供了Queen队列解决多线程操作的数据安全问题.

使用Queen和tkinter的after方法, 可以安全地操作信号和队列数据.

```python
import queue
import time
 
queue = queue.Queue()
for i in range(0, 4):
    time.sleep(0.5)
    element = "element %s"%i
    print ("put %s"%element)
    queue.put(element)
 
while not queue.empty():
    time.sleep(0.5)
    print ("get %s"%queue.get())
```

##### 4. 完整代码

```python
def vp_start_gui():
    global val, w, root,label,lst
    lst = []
    root = tk.Tk()
    label = tk.StringVar()
    top = GUI (root)
    root.mainloop()


class GUI:
    def __init__(self, top=None):
        self.style = ttk.Style()
        self.style.theme_use(
            'winnative'
        )
        top.geometry(
            "479x450+344+174"
        )

        self.Btn1 = ttk.Button(
            top, 
            text='''Btn_1''',
            command=self.A
        )
        self.Btn1.place(
            relx=0.084, 
            rely=0.067, 
            height=40, 
            width=120
        )

        self.Btn2 = ttk.Button(
            top,
            text='''Btn_2''',
            command=self.B
        )
        self.Btn2.place(
            relx=0.605, 
            rely=0.067, 
            height=40, 
            width=120
        )

        self.Label = ttk.Label(
            top, 
            textvariable=label,
            background="#c8ead7"
        )
        self.Label.place(
            relx=0.084, 
            rely=0.2, 
            height=321, 
            width=379
        )
        
    def A(self):
        lst.append(
            "start to run proc A"
        )
        label.set(
            "\n".join(lst)
        )
        time.sleep(3)
        lst.append(
            "proc A finished"
        )
        label.set(
            "\n".join(lst)
        )
            
    def B(self):
        lst.append(
            "start to run proc B"
        )
        label.set(
            "\n".join(lst)
        )
        time.sleep(3)
        lst.append(
            "proc B finished"
        )
        label.set(
            "\n".join(lst)
        )

if __name__ == '__main__':
    vp_start_gui()
```

