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

#### 假设检验原理

- 定义
  - 假设检验是先对总体参数提出一个假设值，然后利用样本信息判断这一假设是否成立;
  - 假设检验基于**小概率原理**，即发生概率很小的随机事件在特定实验中几乎不可能发生;
- 步骤
  - 第1步：首先提出统计假设，即 (原假设（$\beta=0$）和备择假设)
  - 第2步：从所研究总体中出抽取一个随机样本, 在承认原假设的前提下，构造检验统计量
  - 第3步：根据显著性水平拒绝或接受原假设

#### 多重检验问题

即multiple hypothesis testing，简称 MHT 问题

- 例: 1024个人结对猜硬币则总有人连赢十次, 即某些指标/变量显著, 可能真的是运气;
- 解决方法: 
  - 更高的 $t$ 检验阈值(时序回归中使用3.8而不是2作为阈值);
  - 经过 adjusted p value (Q value);
  - 对数据采用正交/残差矫正的 Panels regression 或 cross-section regression;

#### p值、显著性水平

- p-value：在原假设成立的前提下，检验统计量出现当前值或者更为极端的值的概率;
- 显著性水平：在假设检验中，犯第一类错误的上限，用 $\alpha$ 表示;
- 置信度：用 $1-\alpha$ 表示检验的置信度
- 检验效能：规避第二类错误的概率，$1-\beta$，也用power表示;

#### 一类错误和二类错误 

- 第一类错误: 弃真
- 第二类错误: 取伪

#### T 分布 

- 定义: 

  - 用于根据小样本来估计[标准差](https://zh.wikipedia.org/wiki/標準差)未知的[正态分布](https://zh.wikipedia.org/wiki/常態分布)总体的[期望值](https://zh.wikipedia.org/wiki/期望值);

  - 若总体标准差已知，或是样本数足够大时，则应使用Z检验 (Z与t统计量公式完全一致);

  - 公式:

    设随机变量 $X\sim N(0,1), Y\sim \chi_n^2$, 且 $X$ 和 $Y$ 独立, 则称: $T = \frac{X}{\sqrt{Y/n}}$ 为自由度为 $n$ 的 $t$ 变量, 其分布称为自由度为 $n$ 的 $t$ 分布, 

- 哪些情况可以使用t分布描述?

  单样本均值: 

  - 从某厂零件中随机抽取若干件，其重量的均值服从t分布;
  - 从某高中抽取部分高三学生检测视力, 其视力水平均值服从t分布;

- T检验: $t = (\overline{x}-\mu)/(s/\sqrt{n})$, 其中 $\mu$ 为总体均值, $s$ 为样本方差, $n$ 为样本数量

  - 单样本均值检验: 检验**方差未知的正态数据样本均值是否与已知的总体均值相等**;
  - 两独立样本均值检验: 检验**两对独立的正态数据的样本均值是否相等**;
  - 配对样本均值检验: 检验**配对样本的均值的差 是否等于某一个值**;
  - 回归系数的显著性检验: 检验**回归模型的解释变量对被解释变量是否有显著影响**;

#### F 分布

- 定义:
  - 设随机变量 $X\sim \chi_m^2$, $Y\sim \chi_n^2$, 且 $X$ 和 $Y$ 独立, 则称 $F = \frac{X/m}{Y/n}$ 为自由度分别为 $m$ 和 $n$ 的 $F$ 分布.
- 哪些情况可以用F分布统计
  - 
- F 检验
  - 方差齐次检验
  - 方差分析
  - 作用: 检验模型有效性, 原假设所有系数为零;
  - 公式: $F=\frac{(SSE_r-SSE_{ur})/q}{SSE_{ur}/(n-k-1)}$ 

#### 卡方分布(不适合连续分布)

- 定义
  - 设 $X_1, X_2,..,X_n \;i.i.d\sim N(0,1)$, 令 $X=\sum_{i=1}^n X_i^2$ 则 $X$ 服从 $\chi^2$ 分布;
- 卡方检验: 考察某无序分类变量各水平在多组间的分布是否一致
  - 拟合优度检验：检验一组给定数据与指定分布的吻合程度;
    - 掷硬币时，正反两面出现的概率是否均为0.5;
      - (T~正~ - 预期数)^2^/ 预期数+ (T~反~ - 预期数)^2^/预期数服从$\chi^2$分布;
    - 多袋糖果, 每袋有5种, 检验不同袋的糖果品种比例是否相同;
      - 随机抽10袋, 不同种类糖果数量服从卡方分布;
  - 变量独立性检验：通过这个方法检查变量之间是否存在某种关系;
    - 新闻类别和关键字的相关性: 希望获取和娱乐类别相关性最强的100个词;
    - 性别和对禁烟的观点差异: 随机咨询100人对禁烟的观点, 男女性的观点分布;

#### 大数定律、中心极限定理 

- **大数定律**: 样本数量越多，则其算术平均值就有越高的概率接近期望值
- 中心极限定理 : 大量相互独立随机变量的均值经适当标准化后依分布收敛于标准正态分布;
