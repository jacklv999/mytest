## Reduce and Structure Form

关于这个问题，我也思考过很久，到底什么时候用reduced form，什么时候用structural form，具体行为模型和纯统计分析方法到底如何结合。

#### Reduced form

reduced form的优点在于：

- 直观，能够迅速得到想要的某组因果关系；
- 模型估计假设要求少，因为我们实际是把一个复杂的经济过程和人类行为模型看成了黑箱。这样的话我们就不用impose复杂的模型行为假设了，尤其是当我们使用非参或者半参的方法时，我们所做的假设是很弱很弱的。

但是reduced form的缺点就在于，我们把这个过程看作了黑箱，就使得我们无法得到任何有关这组因果关系的具体实现机制的信息了。

所以，当我们想要考察一个具体作用机制，那就必须impose更多的structure，更多的行为的经济环境假设。这就是structural approach能够补充reduced form的地方。

#### Structural approach

再继续说说structural approach。Structural approach和reduced form最大的区别就在于，我们不再只考虑某一组因果关系本身，不再把行为人的决策过程和不同行为人之间的交互过程看做一个黑箱，而是尝试着从最基础的行为人效用最大化开始建立关于整个决策过程的模型。这样做的好处有两个:

- 通过构建整个决策过程的模型能分析一个因果关系的作用机制，而不仅是因果关系本身
- 通过一个完整的决策模型（而不是纯粹的简约式模型）做反事实分析

虽然看上去structural approach比reduced form逼格高很多，但是其实它的问题也比reduced form多很多:

- 在进行建模的时候，我们必须impose更多假设，尤其是如果想要用MLE来进行估计的话，就必须有关于unobservable的大量分布假设，比如logit里面的EV1，或者正态分布等等。这些unobservable的分布假设完全是从天而降没道理的，假设成某种形式完全只是为了模型好解或者好估计（比如EV1能推导出一个closed form的logit），同时这些假设也是无法验证的。
- 更复杂的结构意味着模型更难解，更难估计。直到Rust(1987) 和 Hotz and Miller(1993) 提出了NFP算法或者用CCP近似解value function，我们才有了比较好的数值方法。

总的来说，structural approach需要更多的假设，但能reveal问题里更多的方面。但是为了能reveal问题更多的方面，你就只能以这更多的假设为代价。

#### 例一

考虑一个简单的妇女劳动参与模型。我们现在希望研究，丈夫收入对妇女工作决策的影响。

c是消费，w是参与工作能获得的工资，y是每一期获得的固定收入（丈夫收入，妇女自己工不工作都有）。pa是表示是否工作的discrete choice，即，若i参与劳动市场则pa=1，反之pa=0. X代表控制的其他变量， ![[公式]](https://www.zhihu.com/equation?tex=%5Cepsilon) 代表某个人固有的不可观测的preference。

对于Reduce-form来说，我们要的只是一个CEF，也就是：
$$
E(Pa|y)=P(Pa|y,X)=h(y,X)
$$
对于这个模型的估计，我们只需要非参的方法就可以。如果我们简单假设线性概率模型，那就变成了一个我们最常见的回归：
$$
P(Pa|y,X)=\beta_1 y+\beta_2 X\\
Pa=\beta_1 y+\beta_2 X+u
$$
在这里，我们没有给予任何有关丈夫收入对女性劳动选择的作用机制的解释，而是把它看成了一个黑箱，用纯统计学的方法，靠某种外生冲击（或者试验），去识别$\beta_1$ !. 我们能在很少的假设下，得到比较robust的关于某种平均处理效应的结论。但是研究到这里就结束了，没有更多的东西了。

假设我们写出行为人的具体模型，以偏好和一个简单的partial equilibrium为primitive，我们就可以构造一个更复杂的行为结构，一个structural model。
$$
\max U(c,Pa,\varepsilon)\\
s. t. c=y+w\times Pa\\
U(0,0)=0,U_c>0, U_cc<0,U(c,1)<U(c,0),\frac{\part{U}}{\part{c}}|_{p=0}\neq \frac{\part{U}}{\part{c}}|_{p=1}
$$
然后我们通过解这个模型，可以得到:
$$
Pa=1\;\; \text{if $U(y+w,1,\varepsilon)>U(y,0,\varepsilon)$}
$$
这是一个最简单的典型的discrete choice model的潜变量表达形式。如果我们假设 $\varepsilon$在人群中的分布是EV1，那就能得到一个logit模型。之后再通过MLE就可以进行估计了。但是要注意，如果想估计这个模型，就必须给  $\varepsilon$ 某一个分布的假设，EV1也好，正态分布也好。这就是你为更复杂的结构而付出的代价之一。

#### 例二

假设某个变量 $y$ 由 $x_1, x_2, x_3$ 三个因素决定，并且它的真实决定式是 $y=\frac{(x_1 x_2)^{\alpha}}{(x_2x_3)^{\beta}}$  。Take log，我们得到 $\ln{y}=\alpha \ln{x_1}+(\alpha-\beta)\ln{x_2} -\beta \ln{x_3} $。

- Structural form 的搞法：先构建理论，尝试还原出上式，再估计出$\alpha$ 和$\beta$（primitive parameters）。

- Reduced form 的搞法：比方说你手中只有数据$z(z= x_1 x_2)$ 和 $y$，好在现实中发生了一个外生冲击（政策变化，技术变化，自然灾害，等等），假设环境能够维持 $x_2 x_3$ 恒定，冲击只通过改变$x_1 x_2$来影响式$y$。于是，我们不必构建理论，直接 regress $ \ln{y}$ on $\ln{z}$  ，可以得到 $\ln{y}=\alpha \ln{z} +e_t$。我们同样可以估计出$\alpha$ .

- 比较：可以看到，reduced form 里， $\alpha$ 是 $\ln{z}$ 的系数，但 $z$ 到底是个什么玩意呢？ 我们只知道它是$x_1$, $x_2$的某种组合，但并不知道最底层的$x_1$, $x_2$到底是怎么影响 $y$ 的。当然，有的学者可能会直接把 作为 $x_1$ 或$x_2$的代理变量。这么做对不对呢？不妨开一下上帝视角。如果我们只关注$x_1$ 和 $y$ 的关系，这时以 $z$ 作为$x_1$ 的代理，你会发现，reduced form 和 structural form 的搞法其实是等价的。如果我们关注$x_2$ 和$y$ 的关系，且用$z$ 作$x_2$的代理变量，这时估计的结果就是错的。除此以外，reduced form 的另一个局限性是：比方说，几年后，经济环境改变了，$x_2 x_3$不再保持恒定了，我们再用一次 reduced form 估计出来的 $\alpha$ 也是错的（这就是所谓的卢卡斯批判）。



既然如此，structural form 总是更优的咯？ 未必。

在现实中，其实我们常常写不出$y$  的决定式来。即便能够做出预测力还算可以的结构模型，也要费时甚久。这时，reduced form 就是退而求其次的选择。

Structural form 直面问题的本质，它的结果看起来更加权威和规范，但也有可能你设定出来的 theoretical basis 根本就是错的。此外，结构方法非常 time-consuming。

Reduced form 一开始就放弃去打开黑箱，而是另辟蹊径，希望借助足够强的外生冲击，间接识别出关键系数来。这样，问题就变成你的 IV 到底够不够好。



