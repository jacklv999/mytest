在部分复杂信息的显示过程中，为了展示数据的多方面信息和对比多种信息，我们常常需要同时显示多个数据图以相互对比，本文以子图的显示为例展示复杂信息的显示。
####1. 子图多合一 显示
#####1.1 显示方式一
~~~
import matplotlib.pyplot as plt

# example 1:
###############################
plt.figure(figsize=(6, 4))
# plt.subplot(n_rows, n_cols, plot_num)
plt.subplot(2, 2, 1)
plt.plot([0, 1], [0, 1])

plt.subplot(222)
plt.plot([0, 1], [0, 2])

plt.subplot(223)
plt.plot([0, 1], [0, 3])

plt.subplot(224)
plt.plot([0, 1], [0, 4])

plt.tight_layout()
~~~
>注：
>1.plt.figure(figsize))函数：其中figsize表示figure以方格表示的尺寸值，figure为二维元组
>2.plt.subplot(x, y, z)函数：其中x与y表示该子图在总图中的位置，z表示该子图序号，序号编号时将占有多个方格位置的图视为多个图编号
>3.plt.tight_layout()函数：表示以给定布局输出所有子图

#####1.2. 显示方式二
~~~
# example 2:
###############################
plt.figure(figsize=(6, 4))
# plt.subplot(n_rows, n_cols, plot_num)
plt.subplot(2, 1, 1)
# figure splits into 2 rows, 1 col, plot to the 1st sub-fig
plt.plot([0, 1], [0, 1])

plt.subplot(234)
# figure splits into 2 rows, 3 col, plot to the 4th sub-fig
plt.plot([0, 1], [0, 2])

plt.subplot(235)
# figure splits into 2 rows, 3 col, plot to the 5th sub-fig
plt.plot([0, 1], [0, 3])

plt.subplot(236)
# figure splits into 2 rows, 3 col, plot to the 6th sub-fig
plt.plot([0, 1], [0, 4])


plt.tight_layout()
plt.show()
~~~
>注：含义与“显示方式一”完全一致，仅表达方式不一样

####2. 子图分格显示
#####2.1 数据准备
~~~
import matplotlib.pyplot as plt
import matplotlib.gridspec as gridspec
~~~
#####2.2 显示方式一：subplot2grid
~~~
plt.figure()
ax1 = plt.subplot2grid((3, 3), (0, 0), colspan=3)  # stands for axes
ax1.plot([1, 2], [1, 2])
ax1.set_title('ax1_title')
ax2 = plt.subplot2grid((3, 3), (1, 0), colspan=2)
ax3 = plt.subplot2grid((3, 3), (1, 2), rowspan=2)
ax4 = plt.subplot2grid((3, 3), (2, 0))
ax4.scatter([1, 2], [2, 2])
ax4.set_xlabel('ax4_x')
ax4.set_ylabel('ax4_y')
ax5 = plt.subplot2grid((3, 3), (2, 1))
~~~
>注：
>1.plt.subplot2grid(tuple-1, tuple-2, colspan，rowspan)：以方格位置绘制子图
>2.参数tuple-1：表明该总图可表示为何种方格图
>3.参数tuple-2：表明该子图的其实位置
>4.参数colspan：表明子图的纵向跨距
>5.参数rowspan：表明子图的横向跨距


#####2.3 显示方式二： gridspec
~~~
plt.figure()
gs = gridspec.GridSpec(3, 3)
# use index from 0
ax6 = plt.subplot(gs[0, :])
ax7 = plt.subplot(gs[1, :2])
ax8 = plt.subplot(gs[1:, 2])
ax9 = plt.subplot(gs[-1, 0])
ax10 = plt.subplot(gs[-1, -2])
~~~
>注：plt.subplot(gs[list])，含义同方法二，区别在于以list表明位置
#####2.4 ：显示方式三：easy to define structure
~~~
f, ((ax11, ax12), (ax13, ax14)) = plt.subplots(2, 2, sharex=True, sharey=True)
ax11.scatter([1,2], [1,2])

plt.tight_layout()
plt.show()
~~~


####3. 图中图
~~~
import matplotlib.pyplot as plt

fig = plt.figure()
x = [1, 2, 3, 4, 5, 6, 7]
y = [1, 3, 4, 2, 5, 8, 6]

# below are all percentage
left, bottom, width, height = 0.1, 0.1, 0.8, 0.8
ax1 = fig.add_axes([left, bottom, width, height])  # main axes
ax1.plot(x, y, 'r')
ax1.set_xlabel('x')
ax1.set_ylabel('y')
ax1.set_title('title')

ax2 = fig.add_axes([0.2, 0.6, 0.25, 0.25])  # inside axes
ax2.plot(y, x, 'b')
ax2.set_xlabel('x')
ax2.set_ylabel('y')
ax2.set_title('title inside 1')


# different method to add axes
####################################
plt.axes([0.6, 0.2, 0.25, 0.25])
plt.plot(y[::-1], x, 'g')
plt.xlabel('x')
plt.ylabel('y')
plt.title('title inside 2')

plt.show()
~~~



####4. 次坐标轴
#####4.1 数据准备
~~~
import matplotlib.pyplot as plt
import numpy as np

x = np.arange(0, 10, 0.1)
y1 = 0.05 * x**2
y2 = -1 *y1
~~~
#####4.2 次坐标轴设置
~~~
fig, ax1 = plt.subplots()

ax2 = ax1.twinx()    # mirror the ax1
ax1.plot(x, y1, 'g-')
ax2.plot(x, y2, 'b-')

ax1.set_xlabel('X data')
ax1.set_ylabel('Y1 data', color='g')
ax2.set_ylabel('Y2 data', color='b')

plt.show()
~~~
>注：次坐标轴设置函数twinx()，得出指定坐标轴的镜像轴
