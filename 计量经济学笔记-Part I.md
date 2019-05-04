# 计量经济学笔记

## 1.计量经济学的性质
1.横截面数据: 在给定时间点对一系列单位采集样本构成的数据集, 如: 某天全国省会城市的平均气温
2.时间序列数据：对某个体的多个变量不同时间的观测值所构成的数据集, 如: 去年北京的每天平均气温
3.混合横截面数据：混合不同时间点的横截面数据
4.面板数据：对多个个体的多个变量的跨时期跟踪数据集（数据单位通常被跟踪了一段时间）,如: 全国省会城市去年每天的平均气温

# 横截面数据分析
## 2.简单回归模型
#### 1.定义
又称双变量线性回归模型，表达式为 $$$ Y = β_0 + β_1X_i + u_i$$$
- Y,因变量
- X,自变量
- u,干扰项, 一般而言, 对干扰项我们假定: E(u|x) = E(u), 即零条件均值假定

#### 2.普通最小二乘法的推导
普通最小二乘法的表达式为: 表达式为 $$$ Y = β_0 + β_1X_i + u_i$$$,其中各个参数的解释如下:

- 对于β<sub>0</sub>而言
##### β<sub>0</sub> =  <SPAN style="TEXT-DECORATION: overline">y</SPAN> - β<sub>1</sub><SPAN style="TEXT-DECORATION: overline">x</SPAN>
- 对于β<sub>1</sub>而言
##### $$$ β_1 = \frac{\sum_{i=1}^n(x_i-\overline{x})(y-\overline{y})}{\sum_{i=1}^n  (x_i-\overline{x})^2}=\rho_{xy}.\left(   \frac {\sigma_x}{\sigma_y}\right)$$$
- 对残差 **u<sub>i</sub>** 而言
$$$  \hat{y_i}  = y_i - \hat{y_i} = y_i - \hat{\beta_0}-  \hat{\beta_1}x_i $$$

#### 3.OLS统计量的代数性质
- SST,即总平方和,度量了 y<sub>i</sub>中的总样本波动, 数学表达式为: $$$SSR = \sum_{i=1}^n(y_i-\hat{y_i})^2$$$
- SSE,即解释平方和,度量了 $$$ \hat{y}$$$ 的样本波荡, 数学表达式为: $$$ SSE = \sum_{i=1}^n   (\hat{y_i} -  \overline{y_i} )^2    $$$
- SSR,即残差平方和,度量 $$$ \hat{u_i}$$$ 的样本波动, 数学表达式为: $$$ SSR = \sum_{i=1}^n \hat{u_i}^2= \sum_{i=1}^n(y_i - \hat{\beta_0}-\hat{\beta_1}x_i)^2$$$


#### 4.拟合优度
拟合优度,有时又称判定系数,一般用 $$$ R^2$$$ 表示, 用数学表达式定义为: $$$ R^2 = \frac{SSE}{SST}  = 1- \frac{SSR}{SST}  $$$

#### 5.度量单位和函数形式
- 1.一般地, 当因变量的度量单位改变时(乘以常数C),则OLS的截距和斜率都扩大为原来的C倍
- 2.模型的拟合优度 $$$ R^2$$$ 不依赖于变量的度量单位

#### 6.含非线性因素的线性回归模型
模型|因变量|自变量|对$$$β_1$$$的解释
---|---:|---:|---
水平值-水平值|y|x|$$$\Delta y = \beta_1\Delta x  $$$
水平值-对数|y|log(x)|$$$ \Delta y = (\frac{\beta_1}{100})\% \Delta x$$$
对数值-水平值|log(y)|x|$$$ \% \Delta y = (100 \beta_1)\Delta x   $$$
对数-对数|log(y)|log(x)| $$$ \% \Delta y = \beta_1 \% \Delta x      $$$

#### 7.OLS估计量的期望和方差
1.OLS的无偏性
- SLR1.线性于参数: 模型中因变量、自变量和误差的关系为 $$$ y = \beta_0 + \beta_1 x + u $$$
- SLR2.随机抽样
- SLR3.解释变量的样本有波动: x的样本结果不是完全相同的数值
- SLR4.零条件均值: 给定解释变量的任何值,误差的期望值都为零,即 $$$E\left(\left.u \right|x \right)= 0  $$$

利用假定SLR1-SLR4,对β~1~和β~0~的任何值,我们都有 $$$ E(\hat{\beta_0}) = \beta_0 \quad  和 \quad E(\hat{\beta_1}) = \beta_1 $$$

2.OLS估计量的方差
- SLR5.同方差性: 给定解释变量的任何值,误差都有相同的方差,即 $$$ Var( \left. u \right| x) = \sigma^2 $$$
- 同方差性对假定对于证明 $$$\hat{\beta_0} 和 \hat{\beta_1} $$$ 的无偏性毫无作用,但有助于简化计算

OLS估计量的抽样方差
$$
Var(\hat{\beta_1}) = \frac{\sigma_2}{\sum_{i=1}^n (x_i - \overline{x_i})^2} = \frac{\sigma_2}{SST_x}
$$
和
$$
Var  (\hat{\beta_0}) = \frac{\sigma^2\frac{\sum_{i=1}^nx_i^2} {n}} {\sum_{i = 1}^n  (x_i - \overline{x_i})^2}
$$


3.OLS的误差方差
对以上两式,我们可以很方便地把影响 $$$ Var(\hat{\beta_1}) \quad 和 \quad Var(\hat{\beta_0})$$$ 的因素分离出来,但是我们一般很难知道 $$$ \sigma^2$$$,所以需要使用观测数据估计 $$$ \sigma^2$$$
一般而言,我们可以得到以下表达式:
$$
\hat{\sigma}^2 = \frac   {\sum_{i = 1}^n  \hat{u}_i^2}  {n-2} = \frac {SSR}{n-2}
$$
和
$$
sd ( \hat{\beta_1}) = \frac {\sigma}{\sqrt{SST_x}}
\quad \\ 所以 \quad
se( \hat{\beta_1}) = \frac {\hat{\sigma}}{\sqrt{SST_x }} = \frac {\hat{\sigma}}{\sqrt{\sum_{i=1}^n    ( x_i - \overline{x} )^2}}
$$

#### 8.过原点回归
在过原点回归的情形中,我们假定回归方程为 $$$\tilde{y} = \tilde{\beta_1}x $$$, 在这种情况下,我们可以得出 $$$\tilde{ \beta_1}\quad 和 \quad R^2 $$$ 如下示:
$$
\tilde{\beta_1} = \frac {\sum_{i = 1}^n x_i y_i}{\sum_{i = 1}^n x_i^2}  \quad 和\quad R^2 = 1- \frac {\sum_{i=1}^n  (y_i - \tilde{\beta_1}x_i)^2}{\sum_{i=1}^n  y_i^2}
$$

## 3.多元回归模型: 估计
#### 1.多元回归模型
多元回归可以表示就为 $$$ y = \beta_0 + \beta_1x_1 + \beta_2 x_2 + \beta_3 x_3+ \cdots + \beta_k x_k + u$$$, 其中条件期望表示为 $$$ E( \left. u \right| x_1,x_2,\cdots,x_k) = 0  $$$

#### 2.OLS的拟合值和残差
OLS残差的表达式为: $$$ \hat{u_i} = y_i - \hat{y_i} $$$,其具有以下性质: 
- 1.残差的样本均值为零,即$$$ \overline{y} = \hat{\overline{y}}  $$$
- 2.每个自变量和OLS残差的样本协方差 为零
- 3.点 $$$ (\overline{x_1},\overline{x_2},\cdots,\overline{x_k},\overline{y} $$$ 总是在OLS回归线上: 即 $$$ \overline{y} = \hat{\beta_0} + \hat{\beta_1}x_1 + \hat{\beta_2}x_2 + \cdots + \hat{\beta_k}x_k $$$

#### 3.简单回归和多元回归估计值的比较
对于两者的估计值,存在如下关系: $$$ \tilde{\beta_1} = \hat{\beta_1} + \hat{\beta_2}\tilde{\delta_1}    $$$
- 在样本中,若X~2~对y的偏效应为零时, $$$ \tilde{\beta_1} = \hat{\beta_1}$$$, 即缺少变量不影响估计结果
- 样本中X~1~和X~2~不相关时,$$$ \tilde{\beta_1} = \hat{\beta_1}$$$ , 即缺少变量不影响估计结果

#### 4.拟合优度
在多元回归中,拟合优度为:
$$
R^2 = \frac{\sum_{i=1}^n  (y_i - \overline{y})(\hat{y_i}-\overline{\hat{y}})}    {(\sum_{i=1}^n(y_i-\overline{y})^2)(\sum_{i=1}^n(\hat{y_i}-\overline{\hat{y}})^2)}
$$

#### 5.OLS估计量的期望值和方差
1.OLS估计量的期望
- MLR1.线性于参数
- MLR2.随机抽样
- MLR3.不存在完全共线性
- MLR4.零条件均值

在上述四个假定的条件下,OLS估计量具有无偏性,即 $$$\quad E(\,\hat{\beta_j}) = \beta_j$$$

2.OLS估计量的方差
- MLR5.同方差性: 给定解释变量的任何值,误差具有同样的方差,即$$$ \; Var( \left. u \right| x_1,x_2,\cdots,x_k) = \sigma^2 $$$
- 多元回归模型中, 抽样方差为 $$$
Var(\hat{\beta_j}) = \frac{\sigma_2}{SST_j(1-R_j^2)}
$$$



#### 6.模型误设
- 模型包含无关变量: 不影响模型的无偏性
- 模型遗漏变量: 遗漏变量偏误为 $$$ Bais(\tilde{\beta_1}) = E(\tilde{\beta_1}) - \beta_1 = \beta_2 \tilde{\delta_1} $$$
 - 1.若 β~2~ = 0 ,则有 $$$\tilde{\beta_1}$$$无偏
 - 2.若$$$\; \tilde{\delta_1}  = 0$$$, 即使 β~2~ 不为零,$$$\; \tilde{\beta_1}$$$也可能是无偏的
- 存在遗漏变量的情况下,偏误方向的判定: 
$$$\;$$$|Corr(x~1~,x~2~)>0|Corr(x~1~,x~2~)<0
---|--------:|-------:
β~2~>0|偏误为正|偏误为负
β~2~<0|偏误为负|偏误为正
- 更一般的情况,若解释变量和误差存在相关,会导致所有OLS估计量产生偏差
- 误设模型中的方差: 大样本下对多重共线性的减弱和误差方差的原因使得前者的估计较后者更好
 - $$$Var(\hat{\beta_1}) = \frac{ \sigma^2}{SST_1(1-R_1^2)} $$$
 - $$$ Var(\tilde{\beta_1}) = \frac{\sigma^2}{SST_1 } $$$
- 多元回归下的标准误:
 - $$$ \hat{\sigma}^2 = \frac{\sum_{i = 1}^n}  {n-k-1 } = \frac{SSR}{n-k-1}    $$$
 - $$$ sd(\hat{\beta_j}) = \frac{\sigma}    {\sqrt{SST_j(1-R_j^2)} }  $$$
 - $$$ se(\hat{\beta_j}) = \frac{\hat{\sigma}}    {\sqrt{SST_j(1-R_j^2)} }  $$$  或者 $$$ \; se(\hat{\beta_j}) = \frac{\hat{\sigma}}    {\sqrt{n} \; sd(x_j)\; \sqrt{(1-R_j^2)} }  $$$


