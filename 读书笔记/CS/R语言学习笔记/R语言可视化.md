## R语言可视化

#### 1.abline函数

两种绘图方式：

- 1.使用slope和intercept

~~~R
abline(a = intercept, b = slope)
~~~

- 2.使用vertical和horizontal data: 输出指定位置的直线

~~~R
abline(v=c(1,2),h=vector=c(1,3))#表示绘制x=1,2和y=1,3的参考线
#h and v forms draw horizontal and vertical lines at the specified coordinates.
~~~

#### 2.Pie图

~~~R
pie(rep(1,10),labels=rainbow(10), col=rainbow(10))
pie(rep(1,20),lables=gray(0:20/20),col=gray(0:20/20))
~~~

- 1.lables指定标签
- 2.col指定颜色

#### 3.定义main

~~~R
title("Main Title", sub = "sub title",
      cex.main = 2,   font.main= 4, col.main= "blue",
      cex.sub = 0.75, font.sub = 3, col.sub = "red")
~~~

#### 4.坐标轴axis

~~~R
axis(side, at = NULL, labels = TRUE, tick = TRUE, line = NA,
     pos = NA, font = NA, lty = "solid",
     lwd = 1, lwd.ticks = lwd, col = NULL, col.ticks = NULL)
~~~

- 1.side表示在图形的哪边绘制坐标轴（1,2,3,4：下左上右）
- 2.at用于指定坐标轴原点

#### 5.图例legend

~~~R
legend(location,title="text",pos)

legend("topleft",inset=.1, title="Drug type",c("A","B"),lty=c(1,3),col=c("cyan","magenta"))
~~~

- 1.inset：表示以位置方向按整张图移动的比例
- 2.pos： 位置下左上右

#### 6.注释text

~~~R
text(wt,mpg,row.names(mtcars),cex=.4,pos=4,col="green")
~~~

- pos: 上左下右以1，2，3，4表示