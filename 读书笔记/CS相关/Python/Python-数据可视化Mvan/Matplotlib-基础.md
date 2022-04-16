####1. Matplotlib安装
若已安装 Anaconda ，则无需安装，若未安装则直接运行下列代码
~~~
pip install matplotlib
~~~
####2. 简单实例
下面给出 Matplotlib 的简单例子
~~~
import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(-1, 1, 50)
y = 2*x + 1
# y = x**2
plt.plot(x, y)
plt.show()
~~~
>注：
>1.plt.plot()：表示绘制线性图
>2.plt.show()：表示输出绘制图像
>
