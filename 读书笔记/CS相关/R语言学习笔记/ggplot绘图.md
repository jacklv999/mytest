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

```R
ggplot(dt)+geom_point(aes(x = dt_1, y = dt_2),
        color=dt_3,shape=dt_4)+xlim(a,b)+ylim(a,b)+
		xlab("text")+ylab("text")
```



#### 2.ggplot常用图形函数

| 图形     | 函数                                         |
| -------- | -------------------------------------------- |
| 绝对线   | geom_abline                                  |
| 柱状图   | geom_bar       `geom_bar(stat = "identity")` |
| 箱型图   | geom_boxplot                                 |
| 等高线图 | geom_contour                                 |
| 密度图   | geom_density                                 |
| 直方图   | geom_histogram                               |
| 折线图   | geom_line                                    |
| 地图     | geom_map                                     |
| 散点图   | geom_point                                   |
| 文字云图 | geom_text                                    |
| 小提琴图 | geom_violin                                  |

#### 3.ggplot的常用参数

- 1.颜色填充: 以 `fill`  参数传递, `ggplot(Dtmp, aes(x = Value, 	fill = Area)` 

- 2.图标排序: 对 `X` 排序后再传入参数, `ggplot(Dtmp, aes(x = reorder(Area_1, -Value))` 

- 3.水平画图:  `coord_flip()` 

- 4.去除背景线和背景色: 

     ```theme(panel.background=element_rect(fill='transparent',	color ="gray")```  

- 5.设置图例字号: 

    ```R
    theme(legend.text=element_text(size=10),
          legend.title=element_text(size=20))
    ```

- 6.设置坐标轴刻度字号:

    ```R
    theme(axis.text.x = element_text(size = 14),
    	 axis.text.y = element_text(size = 14)) 
    ```

- 7.设置图例列数:

    ```R
    guides(fill=guide_legend(ncol=1))
    ```

    