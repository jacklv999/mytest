本文介绍另外几种常见数据图：Scatter 散点图、Bar 柱状图和 Contours 等高线图
####1. 准备数据
~~~
import matplotlib.pyplot as plt
import numpy as np

n = 1024    # data size
X = np.random.normal(0, 1, n)
Y = np.random.normal(0, 1, n)
T = np.arctan2(Y, X)    # for color later on
~~~
####2. 设定坐标轴
~~~
plt.xlim(-1.5, 1.5)
plt.xticks(())  # ignore xticks
plt.ylim(-1.5, 1.5)
plt.yticks(())  # ignore yticks
~~~


####3. 绘制散点图
~~~
plt.scatter(X, Y, s=75, c=T, alpha=.5)
~~~
>注：
>1.散点图函数 plt.scatter(X, Y, s, c, alpha)
>2.散点图函数参数(X,Y)：表示散点图上下限点位置
>3.散点图函数参数"s"：表示
>4.散点图函数参数"c"：表示点的颜色(b--blue，c--cyan，g--green，k--black，m--magenta，r--red，w--white，y--yellow)
>5.散点图函数参数"alpha"：表示点的透明度



####4. Bar 柱状图 
#####4.1 准备数据
~~~
import matplotlib.pyplot as plt
import numpy as np

n = 12
X = np.arange(n)
Y1 = (1 - X / float(n)) * np.random.uniform(0.5, 1.0, n)
Y2 = (1 - X / float(n)) * np.random.uniform(0.5, 1.0, n)
~~~
#####4.2 绘制柱状图
~~~
plt.bar(X, +Y1, facecolor='#9999ff', edgecolor='white')
plt.bar(X, -Y2, facecolor='#ff9999', edgecolor='white')
~~~
>注：plt.bar()：(X,Y)表示柱状图高度，facecolor表示柱状图颜色，edgecolor表示边框颜色
#####4.3 注释柱状图
~~~
for x, y in zip(X, Y1):
    # ha: horizontal alignment
    # va: vertical alignment
    plt.text(x + 0.4, y + 0.05, '%.2f' % y, ha='center', va='bottom')

for x, y in zip(X, Y2):
    # ha: horizontal alignment
    # va: vertical alignment
    plt.text(x + 0.4, -y - 0.05, '%.2f' % y, ha='center', va='top')
~~~

####5. Contours 等高线图
#####5.1 准备数据
~~~
import matplotlib.pyplot as plt
import numpy as np

def f(x,y):
    # the height function
    return (1 - x / 2 + x**5 + y**3) * np.exp(-x**2 -y**2)

n = 256
x = np.linspace(-3, 3, n)
y = np.linspace(-3, 3, n)
X,Y = np.meshgrid(x, y)
~~~
#####5.2 绘制等高线图
~~~
# use plt.contourf to filling contours
# X, Y and value for (X,Y) point
plt.contourf(X, Y, f(X, Y), 8, alpha=.75, cmap=plt.cm.hot)
~~~
>注：plt.contourf(X, Y, f(X, Y), 8, alpha=.75, cmap=plt.cm.hot)


#####5.3 注释等高线图
~~~
# use plt.contour to add contour lines
C = plt.contour(X, Y, f(X, Y), 8, colors='black', linewidth=.5)
# adding label
plt.clabel(C, inline=True, fontsize=10)

plt.xticks(())
plt.yticks(())
plt.show()
~~~
