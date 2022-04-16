## About nonlinear panel model

FE估计在linear model中通过demean transformation（或者first differencing）控制fixed effects，而这对于nonlinear model是不适用的，在nonlinear model中，很显然我们无法通过差分变换消掉fixed effects。

但是也有一个special case。如果使用Logit model，在施加一个特定假设（Y changes between two time periods）的情况下，可以消掉fixed effects得到一致估计。
我个人的建议是尽可能使用linear model， linear model的那些缺陷在大多数情况下都不会引起严重的问题。如果坚持要使用nonlinear model，就用Logit model。

##### 2.面板数据可以用非线性模型吗？

比如最经常见到的binary choice模型，也就是probit，logit模型：
![[公式]](https://www.zhihu.com/equation?tex=d_i%3D1%5C%7Bx_i%27%5Cbeta%2Bu_i%3E0%5C%7D)
一般经典的教课书上都是讲的cross-sectional的应用，其实也是可以扩展到面板数据：
![[公式]](https://www.zhihu.com/equation?tex=d_%7Bit%7D%3D1%5C%7Bx_%7Bit%7D%27%5Cbeta%2B%5Calpha_i%2Bu_%7Bit%7D%3E0%5C%7D)
![[公式]](https://www.zhihu.com/equation?tex=%5Calpha_i)![[公式]](https://www.zhihu.com/equation?tex=x_%7Bit%7D)，

但是这里有一个问题是，如果你还记得线性面板，一定还记得随机效应、固定效应。非线性面板也有这个问题。
对于随机效应，一般来说仍然使用MLE就可以，只不过计算的时候麻烦一点，因为个体效应![[公式]](https://www.zhihu.com/equation?tex=%5Calpha_i)跟![[公式]](https://www.zhihu.com/equation?tex=x_%7Bit%7D)**独立**，所以没有太大的问题。
有意思的是固定效应，这就困难多了，当然现在也有很多方法，比如：

1. Chamberlain的方法，即假设![[公式]](https://www.zhihu.com/equation?tex=%5Calpha_i%3D%5Cbar%7Bx_i%7D%5Cdelta%2Bv_i)，这样模型就回到随机效应的probit logit了
2. conditional logit
3. maximum score estimator：![[公式]](https://www.zhihu.com/equation?tex=%5Cmax_%7B%5Cbeta_1%3D1%7D%5Cfrac%7B1%7D%7BN%7D%5Csum_%7Bi%3D1%7D%5EN%28d_%7Bi2%7D-d_%7Bi1%7D%29K%28x_%7Bi2%7D%27%5Cbeta-x_%7Bi1%7D%27%5Cbeta%29)