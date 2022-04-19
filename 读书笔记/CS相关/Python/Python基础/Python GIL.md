## Python GIL

简单地说就是作为可能是仅有的支持多线程的解释型语言（perl的多线程是残疾，PHP没有多线程），Python的多线程是有compromise的，在任意时间只有一个Python解释器在解释Python bytecode。

如果你的代码是CPU密集型，多个线程的代码**很有可能**是线性执行的。所以这种情况下多线程是鸡肋，效率可能还不如单线程因为有context switch

但是：如果你的代码是IO密集型，多线程可以明显提高效率。例如制作爬虫（我就不明白为什么Python总和爬虫联系在一起…不过也只想起来这个例子…），绝大多数时间爬虫是在等待socket返回数据。这个时候C代码里是有release GIL的，最终结果是某个线程等待IO的时候其他线程可以继续执行。

反过来讲：你就不应该用Python写CPU密集型的代码…效率摆在那里…

如果确实需要在CPU密集型的代码里用concurrent，就去用multiprocessing库。这个库是基于multi process实现了类multi thread的API接口，并且用pickle部分地实现了变量共享。

再加一条，如果你不知道你的代码到底算CPU密集型还是IO密集型，教你个方法：

multiprocessing这个module有一个dummy的sub module，它是基于multithread实现了multiprocessing的API。

假设你使用的是multiprocessing的Pool，是使用多进程实现了concurrency

```python
from multiprocessing import Pool
```

如果把这个代码改成下面这样，就变成多线程实现concurrency

```python
from multiprocessing.dummy import Pool
```

两种方式都跑一下，哪个速度快用哪个就行了。



UPDATE:

刚刚才发现concurrent.futures这个东西，包含ThreadPoolExecutor和ProcessPoolExecutor，可能比multiprocessing更简单