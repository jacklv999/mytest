## Probability Theory Related

#### 泊松分布与指数分布

- Poison distribution:  
  - Definition One: the random variable of nonnegative was poison distribution;
  - Definition Two: if a thing happened randomly in a time, then it is poison distribution;
  - Definition Three: in a binomial distribution, if N goes infinity and p goes infinitesimal, then we have poison distribution;
- Normal distribution: the N goes infinity in a binomial distribution
- Exp distribution: equals poison distribution when $\theta =  1/\lambda$ 

#### Permutation and Combination

- Permutation

  - get out $k$ from $n$ object with order, we have:
    $$
    P(n, k) = \frac{n!}{(n - k)!}
    $$

- Combination

  - get out $k$ from $n$ object without order, we have: 
    $$
    C(n,k) = \frac{n!}{(n-k)!\times k!}
    $$

#### Time serial model

- AR model: 线性预测，即已知N个数据，可由模型推出第N点前面或后面的数据（设推出P点），所以其本质类似于插值;
- MA model: 移动平均法模型，其中使用趋势移动平均法建立直线趋势的预测模型;
- ARMA model:
- GARCH model: 是ARCH模型的拓展， GARCH对误差的 方差进行了进一步的建模，特别适用于波动性的分析和 预测

#### Confidential Zone

for a giving event, we were observed N times in M observation, then we have probability:
$$
P = \frac{N}{M}
$$
then, the confidential zone equals:
$$
P \pm Z_{95\%}\times \sigma\\
\sigma = \sqrt{\frac{P(1-P)}{N}}
$$
