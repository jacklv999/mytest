# REmap Note

REmap 是一个非常好得地图可视化工具, 支持中国地图数据和全球地图数据可视化, 其中国内数据还支持省级和更低级别得数据可视化

#### 一. 安装

```R
install.packages("devtools")
devtools::install_github("lchiffon/REmap") 
library(REmap)
```

#### 二.主要函数介绍

- 1.数据类函数

    - 1.函数 get_city_coord: 获取单个城市的位置信息

    ```R
    get_city_coord(city)				#不区分中英文和大小写
    ```

    - 2.函数 get_geo_position: 获取城市向量的位置信息

    ```R
    city_v = c("New York", "beijing", "shanghai")
    get_geo_position(city_v)			#不区分中英文和大小写
    ##output
            lon      lat     city
    1 -73.86483 40.84478 New York
    2 116.41338 39.91092  BeiJing
    3 139.76489 35.68208    Tokyo
    ```

- 2.地图绘制类函数

    - 1.函数 remap: 绘制中国地图

    ```R
    remap(mapdata, title = "", subtitle = "", theme = get_theme("Dark"))
    ```

    - 2.函数 remapB: 使用百度地图的 API 绘制地图

    ```R
    remapB(center = c(104.114129,37.550339),
           zoom = 5,
           color = "Bright",
           markLineData = NA,
           markPointData = NA,
           markLineTheme = markLineControl(),
           markPointTheme = markPointControl(),
           geoData = NA)
    ```

    - 3.函数 remapC: 绘制地图

        ```
        remapC(data,
               maptype = 'china',		##包括"world", "china" 或 中国省市名
              markLineData = NULL,
              markPointData = NULL,
              color = c('#1e90ff'),
              theme = get_theme("Bright"),
              title = "",
              subtitle = "",
              markLineTheme,		##theme for mark point
              markPointTheme,
              geoData = NA,			##geoData for markLine and markPoint 		)						##format is similar as get_geo_position	
        ```

    - 4.函数 remapH: 绘制热力图

    ```R
    remapH(data,
          maptype = 'china',
          theme = get_theme("Dark"),
          blurSize = 30,
          color = c('blue', 'cyan', 'lime', 'yellow', 'red'),
          minAlpha = 0.05,
          opacity = 1,
          ...)
    ```

    