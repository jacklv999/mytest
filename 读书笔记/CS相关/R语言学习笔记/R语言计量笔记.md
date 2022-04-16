## R语言计量笔记

[TOC]

#### 1.相关性分析

- R语言中用于相关性分析的函数是: **cor()函数**

```
cor(X,Y,method="")  #method为"spearman","pearson","kendall",缺省为 pearson
```

- 检测相关系数的显著性: **cor.test函数**

```
cor.test(X,Y,method="")
```

- 显著性检验
  对数据进行显著性检验,可使用 **t.test()函数** 对样本进行 **t检验**, 函数参数如下

```
t.test(x, y = NULL,
       alternative = c("two.sided", "less", "greater"),
       mu = 0, paired = FALSE, var.equal = FALSE,
       conf.level = 0.95, ...)
```

- X, 非空向量 #其中**mu**表示单样本检验中的样本估计均值
- Y, NULL时表示单样本检验,或输入另一样本进行双样本检验
- alternative, 表可选假设: greater 表X均值大于Y; less表X均值小于Y; 默认为相等
- var.equal, 表示是否使用合并方差检验
- conf.level, 表示置信水平

#### 2.处理缺失值

R语言中处理缺失值多使用 **mice包**

- 检查缺失值: md.pattern(data), 检查数据是否有缺失值
- 参数处理: 参数 na.rm = TRUE 表示排除运算过程中的缺失值,该参数可用于大部分R函数
- 函数处理: **na.omit()函数** 可以用于生成不含缺失值的数据, 如: data = na.omit(data)

#### 3.简单线性回归: **lm()函数**

```
lm(formula, data, weights, na.action,singular.ok = TRUE...)
```

参数解释:

- formula,表示用于拟合的公式, 形式为 y~x_1+x_2...; #默认含截距项,若y~x-1或0+x表示无截距项
- data,表示用于拟合的数据
- weights,表示采用加权最小二乘法时使用的权重,若为空则表示使用普通最小二乘法

- 当回归参数中存在高阶幂,对数等特殊计算时,需要使用 **I(表达式)** 表示复杂回归量

```
lm(f~x+I(x^2)+I(x^3)+y+I(y^3)+I(log(z))+I(x+y))
# 表示拟合 f = x + x^2 + y + y^3 + log(z)+(x+y)
```

- 存在交互项的回归: 使用 " 冒号 " 表示交互项拟合

```
lm(z ~ x + y + x:y)
# 表示拟合 z= x + y + xy
```

#### 4.逻辑回归: 使用函数 **glm()函数**

```
glm(formula, family = gaussian, data, weights, subset,
    na.action,method = "glm.fit",singular.ok = TRUE, contrasts = NULL, ...)
```

- family, 表示误差分布类型和变量间关系,常用参数为binomial, gaussian, Gamma, poisson
- Intercept,表示拟合函数的截距
- Coefficients,表示拟合函数的参数

#### 5.attach函数与detach函数

- attach函数: 将data.frame的标签变为全局变量以调用, 使用方法: attach(data.frame_name)
- detach函数: 撤销 **attach()函数** 的操作, 使用方法: detach(data.frame_name)

#### 6.格式化展示回归信息: **stargazer()函数**

```
stargazer(  model, type = "latex", title = "",out = '')
```

- model,表示用于输出的model,可以同时输入多个model对比
- type,表示输出格式,可选 'text','latex'和'html', 默认为'latet'

#### 7.使用线性模型预测: **predict()函数**

```
predict(lm,data.frame(x = value))
```

- data.frame,表示 predict函数的输入,必须为 dataframe 输入
- dataframe中可以直接用 **自变量 = 值** 的方式存入所需预测的自变量

#### 8.生成正态分布数据

- 1.生成正态分布概率值

```
dnorm(x,mean,sd)
# 其中 X 为给定数值向量, 输出结果为该向量中数值对应的取值概率
```

- 3.生生成正态分布随机数

```
rnorm(n,mean,sd)
# 其中 n 为给定观察数量, 输出结果为 n 个随机正态分布值
```

#### 9.生成其他数据

- 生成均匀分布数据: 使用 **unif()函数** 

```
runif(n,min,max)
```

- 生成二项分布数据

```
rbinom(n,size,prob)
#生成 N 个服从B(size,prob)分布的随机数, 当size = 1时为伯努利分布
```

#### 10.生成截尾正态分布: 使用 **rtrun()函数**

```
rtrun(mean, sd, lower_bound, upper_bound)
# 需先加载 bayesm 包
```

#### 11.数据对象操作

- 对list: list不同于data.frame,不可直接进行算术运算
- 对data.frame: list数据可以任意增删修改,dataframe只能修改,不能增删

```
# a = data.frame(num = c(1:500))
# for (i in v){la$num[i] = rtrun(0,1,0,1)}
```

#### 12.抽样函数: 简单随机抽样函数 **sample()**

```
sample(x, size, replace = FALSE)
```

- X,表示用于抽样的数据
- size,表示抽取样本的数量
- replace,表示是否重复抽样

#### 13.round函数

四舍五入取近似值函数,用法: round(X,digit = value)