#R语法

##1.赋值操作
符号“<-”表赋值，myString <- "Hello, World!"
##2.注释
单引号和双引号表示跨行注释，#号表单行注释
##3.数据类型：
####1.注意事项
	1.R为动态语言，不需要声明
	2.R与Python类似，以function（）传递函数
####2.基本数据类型
数据类型|值|举例
-|-|-
logical（逻辑型）|TRUE，FALSE|v <- TRUE; print(class(v));输出为：logical
Numeric（数字型）|0-9|v <- 2;print(class(v));输出为：numerical
integer（整型）|0L，1L|v <- 5L;print(class(v));输出为：integer
Complex（复合型）|	3 + 2i|v <- 3 + 2i;print(class(v));输出为：complex
Character（字符）|'a',"b"|v <- 'a';print(class(v));输出为：character
Raw（原型）|'char'直接被储存为编码|v <- charToRaw("Hello");print(class(v));输出为：raw
####3.Vector向量
函数 c() 表示将 多个元素组合成向量
	#creat a vector
    apple <- c('red','green,'yellow')
    print (apple)
输出为
```[1] "red"    "green"  "yellow"```
####4.Lists 列表
使用函数 list()创建，列表是一个R对象，可以包含数字，字母，甚至列表和函数,

	list <- list(c(1,2,3),2.5,2,'test')
    print (list)
    
输出结果为

	[[1]]
	[1] 1 2 3

	[[2]]
	[1] 2.5

	[[3]]
	[1] 2

	[[4]]
	[1] "test"
####5.Matrices 矩阵
使用函数 matrix() 创建，表示二维数据，其中 matrix() 函数参数解析：matrix(vector，nrow，ncol，byrow)

	M <- matrix(c(1,2,3,4,5,6,7,8,9),nrow=3,ncol=3,byrow=TRUE)
    print(M)

输出结果为

	     [,1] [,2] [,3]
	[1,]    1    2    3
	[2,]    4    5    6
	[3,]    7    8    9

####6.Arrays 数组
使用函数 array() 创建，数组Arrays类似于matrix，但是其维数可以多于二维。其中关于 array()函数,完整参数为 array（vector，dim=vector)

	a <- array(c('green','yellow'),dim = c(3,3,2))
	print(a)

输出结果为

	, , 1

     [,1]     [,2]     [,3]    
	[1,] "green"  "yellow" "green" 
	[2,] "yellow" "green"  "yellow"
	[3,] "green"  "yellow" "green" 

	, , 2

     [,1]     [,2]     [,3]    
	[1,] "yellow" "green"  "yellow"
	[2,] "green"  "yellow" "green" 
	[3,] "yellow" "green"  "yellow"  

####7.Factors 因子
因子是使用向量创建的R对象。 它将向量与向量中元素的不同值一起存储为标签。 标签总是字符，不管它在输入向量中是数字还是字符或布尔等。 它们在统计建模中非常有用。
使用 factor() 函数创建因子。nlevels函数给出级别计数。

	apple_colors <- c('green','green','yellow','red','red','red','green')
    factor_apple <- factor(apple_colors)

输出结果为：

	[1] green  green  yellow red    red    red    yellow green 

####8.Data Frames 数据帧
数据帧是表格数据对象。 与数据帧中的矩阵不同，每列可以包含不同的数据模式。 第一列可以是数字，而第二列可以是字符，第三列可以是逻辑的。 它是等长度的向量的列表。
使用==***data.frame()***==函数创建数据帧。

	BMI <- 	data.frame(
	   gender = c("Male", "Male","Female"), 
	   height = c(152, 171.5, 165), 
	   weight = c(81,93, 78),
	   Age = c(42,38,26)
	)

输出结果为：

	 gender height weight Age
	1   Male  152.0     81  42
	2   Male  171.5     93  38
	3 Female  165.0     78  26
##4.变量
####1.变量赋值
- 向左运算符，表示方式：a <- 1；表示将1赋值给a
- 向右运算符，表示方式：2 -> a；表示将2赋值给a
- 等于符号，表示方式：a = 3；表示将3赋值给a

####2.输出变量
- cat()函数：cat('text',var)
- print()函数：print('text',var)

####3.变量的数据类型
- R属于动态类型语言，变量的数据类型取决于输入
- 变量类型函数：**class()**


	a = 1
	print (class(a))

output:

	numeric

####4.查找变量
1. 查找所有变量，应使用 **ls()函数**
 代码示例：`print(ls())`
 代码输出：`[1] "my var"     "my_new_var" "my_var"     "var.1"`

2. 查找特定变量
使用 **ls()函数** 匹配模式
代码示例：`print(ls(pattern = 'var'))`
代码输出：`[1] "my var"     "my_new_var" "my_var"     "var.1" `

3. 删除变量
使用 **rm()函数** 删除变量，使用 **参数list** 可以删除多个变量
代码示例：`rm(list = ls(pattern = 'var'))`

##5. 运算符
####1. 算术运输符
运算符|描述|示例
-|-|-
+|两向量相加|a = c(1,2,3);b = c(4,5,6);print (a+b) ~~>>~~ 5.0,7.0,9.0
-|两向量相减|a = c(4,5,6);b = c(1,2,3);print (a-b) ~~>>~~ 3.0,3.0,3.0
*|两向量相乘|a = c(1,2,3);b = c(4,5,6);print (a*b) ~~>>~~ 4.0,10.0,18.0
/|两向量相除|a = c(2,4,6);b = c(1,2,3);print (a/b) ~~>>~~ 2.0,2.0,2.0
%%|两向量求余|a = c(1,2,3);b = c(4,5,6);print (a%%b) ~~>>~~ 1.0,2.0,3.0
%/%|两向量相除求整|a = c(1,3,5);b = c(1,2,3);print (a%/%b) ~~>>~~ 1.0,1.0,1.0
^|将第二向量作为第一向量的指数|a = c(1,3,5);b = c(1,2,3);print (a^b) ~~>>~~ 1.0,9.0,125.0

####2. 关系运算符
运算符|描述|示例
-|-|-
>|检查第一向量的每个元素是否大于第二向量的相应元素|v<-c(2,5,6);t<-c(8,2,1);print(v>t) ~~>>~~ FALSE TRUE TRUE
<|检查第一个向量的每个元素是否小于第二个向量的相应元素|v<-c(2,5,6);t<-c(8,2,1);print(v< t) ~~>>~~ TRUE FALSE FALSE
==|检查第一个向量的每个元素是否等于第二个向量的相应元素|v<-c(2,5,6);t<-c(8,2,1);print(v==t) ~~>>~~ FALSE FALSE FALSE
<=|检查第一向量的每个元素是否小于或等于第二向量的相应元素|v<-c(2,5,6);t<-c(8,2,1);print(v<=t) ~~>>~~ TRUE FALSE FALSE
>=|检查第一向量的每个元素是否大于或等于第二向量的相应元素|v<-c(2,5,6);t<-c(8,2,1);print(v>=t) ~~>>~~ FALSE TRUE TRUE
!=|检查第一个向量的每个元素是否不等于第二个向量的相应元素|v<-c(2,5,6);t<-c(8,2,1);print(v!=t) ~~>>~~ TRUE TRUE TRUE

####3. 逻辑运算符
运算符|描述
-|-
&|AND运算符,两向量对应元素均为 TRUE，则输出向量对应元素为 TRUE
 I|或运算符,两向量对应元素有一元素为真，则输出向量对应元素为 TRUE
!|非运算符,对输入向量的元素，取相反值作为 输出向量

####4. 特殊逻辑运算符
运算符|描述
-|-
&&|AND运算符，取两个向量的第一个元素，并且只有两个都为TRUE时才给出TRUE
II|OR运算符，取两个向量的第一个元素，如果其中一个为TRUE，则给出TRUE

####5. 其他运算符
运算符|描述|示例
-|-|-
：|冒号运算符，按顺序创造数字向量|V = 2：5 ~~>>~~ 2 3 4 5
%*%|将矩阵与其转置相乘|略

##6.R语言包
####1. 安装新的包
```
install.packages("Package Name")
//或者
install.packages(file_name_with_path, repos = NULL, type = "source")
```
####2.装载包到库中
```
library("package Name", lib.loc = "path to library")
```

##7.条件语句
####1.IF条件语句
```
if(boolean_expression) {
   // statement(s) will execute if the boolean expression is true.
}
```
####2.IF...ELSE语句
```
if(boolean_expression) {
   // statement(s) will execute if the boolean expression is true.
} else {
   // statement(s) will execute if the boolean expression is false.
}
```
####3.SWITCH语句
```
switch(expression, case1, case2, case3....)
```

##8.循环语句
####1.Repeat循环
Repeat循环重复执行相同的代码，直到满足停止条件
```
repeat { 
   commands 
   if(condition) {
      break
   }
}
```
####2.While循环
While循环一次又一次地执行相同的代码，直到满足停止条件
```
while (test_expression) {
   statement
}
```
####3. For循环
R的for循环是特别灵活的，因为它们不限于整数，或者输入中的偶数。 我们可以传递字符向量，逻辑向量，列表或表达式
```
for (test_expression) {
   statement
}
```
此处补充示例：
```
v <- LETTERS[1:4]
for ( i in v) {
   print(i)
}
```
####4.循环控制语句
- break语句：跳出循环，执行以后语句
- next语句：跳过本次迭代，并开始循环的下一次迭代

##9.数据重塑
修改R数据集的格式，改变行列数据呈现方式
####1.合并向量
- **cband()函数**：用于合并多个向量为一个数据帧（矩阵合并，按行合并）

- **rband()函数**：用于合并两个数据帧（矩阵合并，安列合并）
```
a = c(1,1,1)
b = c(2,2,2)
c = rbind(a,b)
d = cbind(a,b)
```
输出结果为：
```
#rbind函数
  [,1] [,2] [,3]
a    1    1    1
b    2    2    2
#cbind函数
     a b
[1,] 1 2
[2,] 1 2
[3,] 1 2
```
####2.合并数据帧————merge函数
~~~
merge(x, y, by = intersect(names(x), names(y)),
      by.x = by, by.y = by, all = FALSE, all.x = all, all.y = all,
      sort = TRUE, suffixes = c(".x",".y"),
      incomparables = NULL, ...)
~~~
函数解析：
~~~
 merge函数参数的说明:

    x,y:用于合并的两个数据框

    by,by.x,by.y:指定依据哪些行合并数据框,默认值为相同列名的列.

    all,all.x,all.y:指定x和y的行是否应该全在输出文件.

    sort:by指定的列是否要排序.
~~~
####3.重塑数据————melt函数
melt函数可用于重塑数据集
~~~
melt(data,id.vars=c("Name1","Name2",...),variable.name="Name3",value.name="Name4")
~~~
函数参数解析：
data，为 **melt函数** 的数据对象
id.var，表示数据对象中保持不变的数据标签，除id.vars指定的标签外，其余标签均需要重塑
variable.name，用以指定需要重塑的标签所在列的名称
value.name，用以指定需要重塑的标签的值所在列的名称
#####代码示例
~~~
data<-data.frame(
Name = c("苹果","谷歌","脸书","亚马逊","腾讯"),
Company = c("Apple","Google","Facebook","Amozon","Tencent"),
Sale2013 = c(5000,3500,2300,2100,3100),
Sale2014 = c(5050,3800,2900,2500,3300)
）
print(data)
mydata<-melt(data,id.vars=c("Name","Company"),variable.name="Year",value.name="Sale")
print(mydata)
~~~
#####输出结果
~~~
#output 1
Name	Company	Sale2013	Sale2014
苹果	Apple	5000	5050
谷歌	Google	3500	3800
脸书	Facebook	2300	2900
亚马逊	Amozon	2100	2500
腾讯	Tencent	3100	3300
#output 2
Name	Company	Year	Sale
苹果	Apple	Sale2013	5000
谷歌	Google	Sale2013	3500
脸书	Facebook	Sale2013	2300
亚马逊	Amozon	Sale2013	2100
腾讯	Tencent	Sale2013	3100
苹果	Apple	Sale2014	5050
谷歌	Google	Sale2014	3800
脸书	Facebook	Sale2014	2900
亚马逊	Amozon	Sale2014	2500
腾讯	Tencent	Sale2014	3300
~~~
####4.重塑数据——————cast函数
cast函数的作用于melt函数相反，可以将单列数据转化为多列数据,按输出结果为向量，矩阵等采用acast；输出结果为data frames采用dcast
~~~
#function-1
dcast(data, formula, drop = TRUE,value.var = guess_value(data))
#function-2
acast(data, formula, drop = TRUE,value.var = guess_value(data))
~~~
##10.函数
####1.定义函数
~~~
function_name <- function(arg_1, arg_2, ...) {
   Function body 
}
~~~
####2.函数示例
~~~
# Create a function to print squares of numbers in sequence.
new.function <- function(a) {
   for(i in 1:a) {
      b <- i^2
      print(b)
   }
}
# Call the function new.function supplying 6 as an argument.
new.function(6)
~~~
