## R语言笔记

#### 1.文件操作

- 基本文件操作

```R
file.remove(“A”, “B”, “C”) #移除三个文件
file.rename("293T", "HEK_293T") #重命名
file.create(“A”) #创建一个文件A, 注意会覆盖原来的文件 
file.copy(“A”, “C”) #复制文件A保存为C文件，同一个文件夹
dir.create(“tmp”) #创建名为tmp的文件夹 
file.copy(c(“A”, “B”), “tmp”) #将文件夹拷贝到tmp文件夹中 
list.files(“tmp”) #查看文件夹tmp中的文件名 
```

- 文件读写
  - 1.关于打开DTA文件
    DTA文件使用函数 **read.dta()** 打开，该函数需要首先加载 **"foreign包"**
  - 2.读取CSV文件

```R
write.table(dddd,"result.csv",row.names=TRUE,col.names=TRUE,sep=",")
write.csv(dd,"dd.csv",row.names=TRUE)
```

#### 2.文件夹操作

```R
first_category_name = list.files("文件夹路径") #文件遍历
first_category_name = list.files("文件夹路径",pattern="*.*")
filelist <- list.files(pattern=".*.csv")
temp=list.files(path="D:/file",pattern="*.txt")
```

#### 3.字符串操作

```R
chartr (old,new,x)，chartr-将对象中旧的字符用新的字符替代。
paste(..., sep = " ", collapse = NULL)
nchar(x, type = "chars", allowNA = FALSE, keepNA = FALSE)
substr(x, start, stop)
substring(text, first, last = 1000000L)
grep(pattern, x)#返回下标
grepl(pattern, x)#返回bool值
sprintf("This is where a %s goes.", a)#字符格式化输出
```

#### 4.异常处理

- #### tryCatch()函数

```R
result = tryCatch ( {

expr

} , warning = function ( w ) {

warning - handler - code

} , error = function ( e ) {

error - handler - code

} , finally = {

cleanup - code

}
```

- #### try()函数

  ```R
  try(expr, silent = FALSE,
      outFile = getOption("try.outFile", ))#
  ```

  - try()函数第一个参数为调用的方法，第二个参数为是否显示异常消息。
  - 代码块用大括号包含, `try({code},silent = FALSE)` 

#### 5.data.frame数据

1.对于数据帧对象的数据提取

- 1.以切片方式提取：data_col = dat[,N_1:N_2];data_row = dat[N_1:N_2,]
- 2.以列名称提取:dat.new = data.frame[dat$col_name]

2.按条件取子集

- 使用 **subset()函数**

```
data_sub = subset(data,formula，select)
#formula，表示用于选取的条件式
#select，指最后展示的数据的 col_name
```

- 使用 **which()方法** :  new.dt = dt[which(dt$'col_name' == 'Value you need'),'col_name you needed')]

3.dataframe的数据运算

- 对数据型: dataframe支持直接运算和直接赋值, 如:dat$col_name = dat$col_name + 1
- 对非数据型: dataframe支持修改数据类型后赋值, 如 dat$col_name <- as.Date(dat$col_name)

#### 6.基本函数

- MAX函数，求最大值
- MIN函数，求最小值
- Mean函数，求平均值
- Median函数，求中位数
- var函数,求方差
- sd函数,求标准差

#### 7.使用Apply函数进行运算：

对数据帧的运算一般使用 **apply（）函数** ，不直接使用函数运算

```
#求平均值
mean_a = apply(a,2,mean)    # "1"表示对行进行运算, "2"表示对列进行运算
#求最值
max_a = apply(a,2,max)
min_a = apply(a,2,min)
```

#### 8.删除变量

- 删除变量:rm(var_name)
- 删除某类变量:rm(list=ls(pattern = 'var_name'))
- 删除所有变量:rm(list=ls())

#### 9.数据对象

- 1.显示数据的标签
  使用 **names()函数** 可以显示数据标签,用法: names(data)

- 2.str函数

  获取对象结构