## R语言画流向图

### 一 准备包

```R
library(tidyverse)
library(viridis)
library(patchwork)
library(hrbrthemes)
library(circlize)
library(networkD3)
```

### 二. 准备数据

```R
data_tmp = read.csv("RelationShip.csv",stringsAsFactors = FALSE)
#source			target			value
#Brazil			China		52281524.1
#United States	China		32033314.7
#Argentina_IM	China		6591394.93
#United States	Indonesia	2440345.76
```

### 三.创建 `node` 和 `ID` 

```R
nodes <- data.frame(name=c(as.character(data_tmp$source), 
		as.character(data_tmp$target)) %>% unique())
data_tmp$IDsource=match(data_tmp$source, nodes$name)-1 
data_tmp$IDtarget=match(data_tmp$target, nodes$name)-1
```

### 四. 准备颜色和画图

```R
## prepare colour scale
ColourScal ='d3.scaleOrdinal() .range(["#FDE725FF","#B4DE2CFF",
	"#6DCD59FF","#35B779FF","#1F9E89FF","#26828EFF","#31688EFF",
	"#3E4A89FF","#482878FF","#440154FF"])'
## Make the Network
sankeyNetwork(Links = data_tmp, Nodes = nodes,Source = "IDsource", Target = "IDtarget",
		Value = "value", NodeID = "name", sinksRight=FALSE, colourScale=ColourScal, 
		nodeWidth=40, fontSize=13, nodePadding=20)
```

