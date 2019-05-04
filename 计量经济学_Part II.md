## 4.多元回归分析: 推断

#### 1.经典线性模型假定
- MLR.6 正态性假定: 总体误差独立于解释变量,且服从均值为零方差为 σ^2^的正态分布
MLR.1-MLR.6这六个假定被称为经典线性假定,在该假定下OLS估计量是最小方差无偏估计量, 可以表示为 
$$ 
\left. y \right| x ~ Normal(\beta_0 + \beta_1 x_1+ \beta_2 x_2+ \cdots +\beta_k x_k,\sigma^2)
$$

#### 2.对单个总体参数的检验: t检验
1.总体模型为: $$$ \quad y = \beta_0 + \beta_1 x_1 +\cdots+\beta_k x_k + u$$$
2.标准化估计量的t分布
$$
\frac{\hat{\beta_j} - \beta_j}{se(\hat{\beta_j})} \tilde{} t_{n-k-1} = t_df
$$
3.t统计量: $$$ \quad t_\hat{\beta_j} == \frac{\hat{\beta_j}}{se(\hat{\beta_j})}$$$
4.备择假设
设定可行备择假设并设定t临界值
- 单侧备择假设: 假定 $$$\quad H1: \beta_j > 0 \; $$$, 拒绝法则为$$$\quad t_{\hat{\beta_j}} > c $$$,其中 C 为在给定显著性水平下的拒绝值,由t标准分布给出
- 参数小于零的单侧备择假设: 拒绝法则为 $$$ t_{\hat{\beta_j}} < -c $$$, C的值同样由标准分布给出
- 双侧备择假设: 假定 $$$\quad \beta_j \neq 0 $$$,拒绝法则为: $$$ \quad \left| t_{\hat{\beta_j}} \right| > C $$$
- 关于 β 的其他检验: 假定 $$$ \quad H_0: \beta_j = a_j  \; $$$, 则t统计量为 $$$\; t = \frac{\hat{\beta_j} - a_j}{se(\hat{\beta_j})} \;$$$

#### 3.置信区间
置信区间表达式为 $$$ \; \hat{\beta_j} \pm c \cdot se(\hat{\beta_j}) $$$

#### 4.参数线性组合的检验
1.方法一
 - 原假设: $$$ \; \beta_1 = \beta_2 \;$$$
 - 标准化t统计量: $$$ t =  \frac {\hat{\beta_1} - \hat{\beta_2}}{se(\hat{\beta_1}-hat{\beta_2})} \; $$$, 其中 $$$\;se(\hat{\beta_1}-hat{\beta_2}) = \sqrt{[se(\hat{\beta_1})]^2 + [se(\hat{\beta_2})]- 2s_12 } \; $$$

2.方法二
- 构建回归方程: $$$ y = \beta_0 + \theta x_1 + \beta_2 (x_1 + x_2) + \cdots + \beta_k x_k + u$$$
- 对该方程的 θ 参数做t检验

#### 5.对多个线性约束的检验: F检验
- 对多个参数做出假设: 原假设为 $$$ \; H_0 : \beta_1 = 0 ,\beta_2 = 0,\beta_3 = 0 $$$
- 构建不含以上参数的回归方程: $$$ y = \beta_0 + \beta_4 x_4 + u $$$
- 定义F统计量为: $$$ F = \left. \frac{SSR_r - SSR_ur}{q} \right/ \frac{SSR_ur}{n-k-1} \quad $$$(其中 r 指restrict)
- F 统计量的R^2^型: $$$ F = \left. \frac{R_r^2 - R_{ur}^2}{q} \right/ \frac{1- R_{ur}^2}{n-k-1} \quad $$$











