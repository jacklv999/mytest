## 高清R绘图

在使用R语言绘图的时候, R GUI 和 R Studio 直出的图清晰度通常都很差, 为了绘制高清图片, 需要使用绘图函数. 示例如下: 

```R
png(
  filename = "Box Chart I.png",
  type = "cairo", # 抗锯齿
  res = 300, # 300ppi 分辨率
  width = 2000, height = 1600,
  bg = "transparent", # 透明背景
  family = 'SimSun'
)
BX_1
dev.off()

```

在通常的绘图中, 不能显示中文字体, 需要特殊指定, 常见的中文字体代码如下所示:

| 字体中文名  | 字体英文名         |
| ----------- | ------------------ |
| 字体中文名  | 字体英文名         |
| 黑体        | SimHei             |
| 宋体        | SimSun             |
| 新宋体      | NSimSun            |
| 仿宋        | FangSong           |
| 楷体        | KaiTi              |
| 仿宋_GB2312 | FangSong_GB2312    |
| 楷体_GB2312 | KaiTi_GB2312       |
| 微软正黑体  | Microsoft JhengHei |
| 微软雅黑    | Microsoft YaHei    |
| 新细明体    | PMingLiU           |
| 细明体      | MingLiU            |
| 标楷体      | DFKai-SB           |
| 隶书        | LiSu               |
| 幼圆        | YouYuan            |
| 华文细黑    | STXihei            |
| 华文楷体    | STKaiti            |
| 华文宋体    | STSong             |
| 华文中宋    | STZhongsong        |
| 华文仿宋    | STFangsong         |
| 方正舒体    | FZShuTi            |
| 方正姚体    | FZYaoti            |
| 华文彩云    | STCaiyun           |
| 华文琥珀    | STHupo             |
| 华文隶书    | STLiti             |
| 华文行楷    | STXingkai          |
| 华文新魏    | STXinwei           |

