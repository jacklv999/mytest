## ggplot绘图

#### 1.ggplot绘图方法

- 1.首先指定数据: ``ggplot(dt)``

- 2.叠加绘图图层: ``geom_point(aes(x = dt_1, y = dt_2))`` , 以``aes()`` 参数指定绘图数据
    - 1.对颜色: `geom_point(aes(x, y),color=dt_3)` , 以``color`` 参数指定颜色
    - 2.对形状: ``geom_point(aes(x, y),shape=dt_4)`` , 以`shape`参数指定``point`` 形状
- 3.设定坐标轴: 
    - 1.设定值域: ``xlim(a,b)`` 或者 `ylim(a,b)` 
    - 2.设定标签: ``xlab()`` 或 ``ylab()`` 
    - 3.设置刻度线和标签: ``scale_y_continuous(breaks=v_1, labels=dt_5)`` 
    - 4.隐藏刻度线和刻度标签: ``theme(axis.text.y=element_blank())`` 

#### 2.ggplot常用图形函数

| 图形     | 函数           |
| -------- | -------------- |
| 绝对线   | geom_abline    |
| 柱状图   | geom_bar       |
| 箱型图   | geom_boxplot   |
| 等高线图 | geom_contour   |
| 密度图   | geom_density   |
| 直方图   | geom_histogram |
| 折线图   | geom_line      |
| 地图     | geom_map       |
| 散点图   | geom_point     |
| 文字云图 | geom_text      |
| 小提琴图 | geom_violin    |

#### 3.ggplot的统计变换

| 统计变换      | 含义 |
| ------------- | ---- |
| stat_abline   |      |
| stat_contour  |      |
| stat_identity |      |
| stat_summary  |      |
| stat_density  |      |
| stat_qq       |      |
| stat_quantile |      |
| stat_smooth   |      |
| stat_unique   |      |
| stat_function |      |
| stat_hline    |      |

