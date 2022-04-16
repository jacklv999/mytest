本文以代码解释Matplotlib中Legend, Annotation and tick 能见度三个概念的使用和含义。
####1. 数据准备与绘制图像
~~~
import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(-3, 3, 50)
y1 = 2*x + 1
y2 = x**2

plt.figure()
# set x limits
plt.xlim((-1, 2))
plt.ylim((-2, 3))

# set new sticks
new_sticks = np.linspace(-1, 2, 5)
plt.xticks(new_sticks)
# set tick labels
plt.yticks([-2, -1.8, -1, 1.22, 3],
           [r'$really\ bad$', r'$bad$', r'$normal$', r'$good$', r'$really\ good$'])

l1, = plt.plot(x, y1, label='linear line')
l2, = plt.plot(x, y2, color='red', linewidth=1.0, linestyle='--', label='square line')
~~~
####2. Legend 图例
~~~
plt.legend(loc='upper right')
# plt.legend(handles=[l1, l2], labels=['up', 'down'],  loc='best')
# the "," is very important in here l1, = plt... and l2, = plt... for this step
"""legend( handles=(line1, line2, line3),
           labels=('label1', 'label2', 'label3'),
           'upper right')
"""
~~~
>注：
>1.plt.legend(handles，labels，loc)：绘制图例
>2.图例参数"handles"：表示图例所注释的对象
>3.图例参数"labels"：表示图例注释的内容，需要与 handles 一一对应
>4.图例参数"loc" ：表示图例位置，一般优先选择 'best' 参数，则 Python 会自动选择最佳参数
>5.关于参数"loc"：以数字表示时, best (0), upper right(1), upper left(2),lower left(3),lower right(4), right(5), center left(6),center right(7), lower center(8), upper center(9), center(10)

####3. Annotation 标注
#####3.1 method 1:
~~~
plt.annotate(r'$2x+1=%s$' % y0, xy=(x0, y0), xycoords='data', xytext=(+30, -30),
             textcoords='offset points', fontsize=16,
             arrowprops=dict(arrowstyle='->', connectionstyle="arc3,rad=.2"))
~~~
>注：
>1.plt.annotate()：注释函数，用于补充注释内容
>2.annotate()参数：annotate(s='str' ,xy=(x,y) ,xytext=(l1,l2) ,..)
>>1.s 为注释文本内容 
>>2.xy 为被注释的坐标点
>>3.xytext 为注释文字的坐标位置
>>4.xycoords 设置注释点位置
>>5.textcoords 设置注释文字偏移量
>>6.arrowprops  设置箭头参数,参数类型为字典dict
>>7.bbox给标题增加外框 ，常用参数如下：boxstyle【方框外形】，facecolor【(简写fc)背景颜色】， edgecolor【(简写ec)边框线条颜色】，edgewidth【边框线条大小】
#####3.2 method 2:
~~~
plt.text(-3.7, 3, r'$This\ is\ the\ some\ text. \mu\ \sigma_i\ \alpha_t$',
         fontdict={'size': 16, 'color': 'r'})
~~~
>注：plt.text()，设置注释文字
####4. tick 能见度
~~~
for label in ax.get_xticklabels() + ax.get_yticklabels():
    label.set_fontsize(12)
    # set zorder for ordering the plot in plt 2.0.2 or higher
    label.set_bbox(dict(facecolor='white', edgecolor='none', alpha=0.8, zorder=2))
plt.show()
~~~
