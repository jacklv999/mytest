# R语言数据接口
## 1.CSV文件
#### 1.获取和设置工作目录
- getwd()函数，可用于获取当前工作目录
- setwd()函数，可用于设置当前工作目录，如：setwd("/web/com")

#### 2.读取CSV文件
读取csv文件应使用**read.csv()函数**
~~~
read.csv("path")
~~~
- csv文件被默认加载为 **数据帧**，即**data.frame格式数据**
- 读取csv文件后，可以通过 **ncol()函数** 与 **nrow函数** 检查读取是否正确

#### 3.写入或创建csv文件
写入或创建csv文件应使用 **write.csv()函数** 实现
~~~
write.csv(data，"path/name.csv")
~~~
#### 4.操作CSV文件
CSV文件被加载为 data.frame 数据格式，所有数据帧的操作均可适用于csv加载对象
1. 获取最值
~~~
a = max(data$col_name)
~~~
2. 条件查询
~~~
subset(data, formula, select, drop = FALSE, ...)
~~~
参数解释
- data，表示用于查询的数据
- formula，表示用于数据查询的公式
- select，用于指定查询的范围
代码示例
	- 单条件查询
~~~
data_subset_1 <- subset(data,dept == "name_1")
~~~
	- 多条件查询
~~~
data_subset_2 <- subset(data,salary > 600 & dept == "name_1")
~~~
	- 时间条件查询
~~~
data_subset_2 <- subset(data,as.Date(col_name_1)>as.Date("Date"))
~~~

## 2.JSON文件
#### 1.读取json文件
使用函数 **fromJSON()** 读取函数
~~~
fromJSON(file = "name.json")
~~~
#### 2.将数据对象转换为数据帧
使用函数 **as.data.frame()函数**可以将 **json对象** 转换为数据帧
~~~
data_frame = as.data.frame(json对象)
~~~
#### 3.保存json文件
- 把R对象序列化为json stream
~~~
json_data = toJSON(data)
~~~
- 保存json文件
~~~
writeLines(json_str, "fin0_out1.json")
~~~