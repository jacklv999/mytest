## About nonlinear panel model

FE估计在linear model中通过demean transformation（或者first differencing）控制fixed effects，而这对于nonlinear model是不适用的，在nonlinear model中，很显然我们无法通过差分变换消掉fixed effects。

但是也有一个special case。如果使用Logit model，在施加一个特定假设（Y changes between two time periods）的情况下，可以消掉fixed effects得到一致估计。
我个人的建议是尽可能使用linear model， linear model的那些缺陷在大多数情况下都不会引起严重的问题。如果坚持要使用nonlinear model，就用Logit model。

##### 2.面板数据可以用非线性模型吗？

比如最经常见到的binary choice模型，也就是probit，logit模型：
$$
d_i= 1\{x_i^T\beta +u_i>0\}
一般经典的教课书上都是讲的cross-sectional的应用，其实也是可以扩展到面板数据：
![[公式]](https://www.zhihu.com/equation?tex=d_%7Bit%7D%3D1%5C%7Bx_%7Bit%7D%27%5Cbeta%2B%5Calpha_i%2Bu_%7Bit%7D%3E0%5C%7D)
![[公式]](https://www.zhihu.com/equation?tex=%5Calpha_i)![[公式]](https://www.zhihu.com/equation?tex=x_%7Bit%7D)，
$$
一般经典的教课书上都是讲的cross-sectional的应用，其实也是可以扩展到面板数据：
$$
d_{it}=1\{x_{it}^T\beta+\alpha_i+u_{it}>0 \}
$$
但是这里有一个问题是，如果你还记得线性面板，一定还记得随机效应、固定效应。非线性面板也有这个问题。
对于随机效应，一般来说仍然使用MLE就可以，只不过计算的时候麻烦一点，因为个体效应$\alpha_i$跟$x_{it}$**独立**，所以没有太大的问题。
有意思的是固定效应，这就困难多了，当然现在也有很多方法，比如：

1. Chamberlain的方法，即假设$\alpha_i=\overline{x}_i\delta+u_i$，这样模型就回到随机效应的probit logit了

2. conditional logit

3. maximum score estimator：
    $$
    \max_{\beta_1=1} \frac{1}{N}\sum_{i=1}^N(d_{i2}-d_{i1})K(x_{i2}^T\beta -x_{i1}^T\beta)
    $$

#### 3. logit与Probit的选择

我觉得这和你的分析目的有关系。如果你只是为了研究一下 ![[公式]](https://www.zhihu.com/equation?tex=x) 变动对 ![[公式]](https://www.zhihu.com/equation?tex=y) 取值为 1 的概率的影响，这时候这两个模型得到的结果基本上是没有差别的。

但当我们要研究的问题特别复杂的时候。比如，离散选择模型的等式右侧还包含一些内生的解释变量以及和某些变量的交叉项的时候，采用 Probit 模型，这样一来理论上做推导比较方便。

另外，无论是在倾向得分匹配 (PSM) , 还是我们明天要讲到的 Heckman 模型的第一阶段，多数时候都用到了 Probit 模型。因为 Probit 模型背后依赖的基础是潜变量服从正态分布。有了正态分布这个强大的工具，后面的好多理论推导和分析相对来讲都比较方便。

总结一下，平时你在文章里面如果只是做一个简单地研究, 考察二值变量受什么因素影响，那你既可以用 Logit 也可以用 Probit 模型。等到用那些比较复杂的方法时，一般 Stata 内嵌的都是 Probit 估计你所需要的概率值。

