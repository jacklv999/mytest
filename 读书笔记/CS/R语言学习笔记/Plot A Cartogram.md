## Plot A Cartogram

#### 1.调用 `maptools` 包提取地图

```R
# Get the shape file of Africa
library(maptools)
data(wrld_simpl)
afr=wrld_simpl[wrld_simpl$REGION==2,]
```

#### 2.使用 `cartogram` 扭曲地图

```R
library(cartogram)
# construct a cartogram using the population in 2005
afr_cartogram <- cartogram(afr, "POP2005", itermax=5)
#如果要使用其他权重, 可以使用 afr[["POP2005"]] 传入权重数据
#或者使用自定义数据
#cartogram(X, weight, itermax=5), 该函数采用 X[[weight]]的
#方式调用数据
```

#### 3.和 `ggplot2` 配合

```R
ggplot() +
  geom_polygon(data = spdf_fortified, aes(fill = POP2005, x = long, y = lat, group = group) , size=0, alpha=0.9) + coord_map() 
#可以使用 geom_polygon 函数绘制地图
```

