Matplotlib的核心是图像，本文通过简单的例子分析Matplotlib的图像绘制过程。
####1. 数据准备
~~~
import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(-3, 3, 50)
y1 = 2*x + 1
y2 = x**2
~~~
####2. 绘制线性函数曲线
~~~
plt.figure()
plt.plot(x, y1)

plt.figure(num=3, figsize=(8, 5),)
plt.plot(x, y2)
# plot the second curve in this figure with certain parameters
plt.plot(x, y1, color='red', linewidth=1.0, linestyle='--')
plt.show()
~~~
>注:
>1.plt.figure()：绘制图像显示区域
>2.plt.plot()：绘制直线，参数为连接点
>3.plt.show()：输出绘制的图像
