## R语言多进程

```R
library(parallel)

cl<- makeCluster(6)    #建立集群  


fl = function(x){print(x)}    #定义函数


parLapply(cl, 1:4000000, fl)    #调用函数

stopCluster(cl)					#停止集群
```

