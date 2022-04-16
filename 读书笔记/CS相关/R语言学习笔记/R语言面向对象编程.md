## R语言面向对象编程

#### 1.相关概念

R语言面向对象包括四种实现方式: S3, S4, RC和R6. 其中 S3 和 S4 是以泛型为基础, 与真正的面向对象尚有差距, 而 RC 和 R6 更接近真正意义上的面向对象. R语言的RC对象和R6对象都可以称之为真正意义上的面向对象, 但是一般而言, 我们认为R6所提供的面向对象是一种更加安全的实现方式.

#### 2.R6面向对象

- 1.R6面向对象不是原生实现的, 需要额外下载函数包 R6

```R
install.packages("R6")
library(R6)
```

- 2.R语言的面向对象主要有三个重要内容: public对象, Private对象 和 Active对象

- 3.R6面向对象的基本结构: R6对象的主要对象如下

    ```R
    R6Class(classname = NULL, public = list(), private = NULL,
      active = NULL, inherit = NULL, parent_env = parent.frame())
    ```
    - 1.classname: 指定对象的名称
    - 2.public: 指定公有对象
    - 3.private: 指定私有对象
    - 4.active: 指定主动绑定对象
    - 5.inherit: 指定继承来源

##### 注: 使用列表是因为R语言中列表可以存储不同形式的变量, 以传递不同类型的值

#### 3.对 Public 列表

```R
Fm = R6Class("Fm",
		public = list(
			name = NA,age = NA,num = NA,#必须全部初始化
			initialize = function(name,age){#实例化赋值
				self$name = name
				self$age = age
		},
        pt = function(){
        	print("11")
        }    
        )
)
```

- 1.对 name 参数: 指定对象或类的名次, 不可为空
- 2.对 Public 列表: 指定公用的对象和方法, 一般首先初始化变量为 NA 
- 3.对 initialize 方法: 指定用于实例化的参数和方法, 在对象实例化的时候使用
- 4.新建公有函数: 直接在 Public 列表中建立即可
- 5.实例化对象:  `zs = Fm$new(12,5)` 

#### 4.对 Private 列表

```R
library(R6)

Fm = R6Class("Fm",
	public = list(
		name = NA,age = NA,num = NA,chd = NA,#必须全部初始化
		initialize = function(name,age){#实例化赋值
			self$name = name
			self$age = age
            self$chd = private$h1()
		}
        )
    private = list(
		h1 = function(){
			return(self$age*3)
		}
	)
)
```

- 1.对 Private 方法: 用于创建只能在内部访问的方法和变量
- 2.对 Private 中的方法和变量, 对象内使用`private$func` 或 `private$num` 调用

#### 5.Active列表

```R
Fm = R6Class("Fm",
	public = list(
		name = NA,age = NA,num = NA,chd = NA,#必须全部初始化
		initialize = function(name,age){#实例化赋值
			self$name = name
			self$age = age
		}
	),
	active = list(#绑定方法为属性
		h1 = function(){
			return (self$age*3)
		}
	)
)
```

- 1.对 Active 方法: 旨在绑定方法为属性, 以属性的方式调用方法 `zs$h1` 
- 2.R语言中的 Active 方法接近 Python 中的 `@property` 装饰器

- 3.传递参数: `zs.h1 <- 1` , 使用 `<-` 符号将参数传入对象内部并运算

#### 6.批量处理对象

- 1.批量实例化对象

```R
for (i in 1:10) {
  s <- sprintf("a%s <- Fm$new(%s,%s)",i,i,i+1)
  eval(parse(text = s))
}
```

- 2.批量调用对象

```r
for (i in 1:10) {
  s <- sprintf("print(a%s$h1)",i)
  eval(parse(text = s))
}
```

##### 注: 对  `eval()` 函数, 作用把字符串转化成表达式来执行, eval和parse结合使用，参数 text 等于要转化的字符串

```R
s<- "print('hello world')"
eval(parse(text = s))
```

