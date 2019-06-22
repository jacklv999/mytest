#R语言强制数据类型转换

### 1.as.character(x)
强制转化 **对象X**为 **字符类型** 对象
~~~
a = 123
b = as.character(a)
calss(a)
class(b)
#Output
[1] "numeric"
[2] "character"
~~~
### 2.as.numeric(x)
强制转化 **对象X** 为 **数值类型** 对象
~~~
c = as.numeric(b)
class(c)
#Output
[1] "numeric"
~~~
### 3.as.logical(x)
强制转化 **对象X** 为 **布尔类型** 对象
~~~
a = 1
b = as.logical(a)
class(a)
class(b)
#Output
[1] "numeric"
[2] "logical"
~~~
### 4.as.Date(x)
~~~
a = '2014-1-1'
b = as.Date(a)
class(b)
#Output
[1] "Date"
~~~





