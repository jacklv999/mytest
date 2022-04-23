## 推荐系统Bias

#### 1 bias 的几种类型

1. position bias: 用户倾向于点击位置靠前的用户
2. exposure bias: 用户只能看到曝光后的并产生交互，但数据中没交互的item不代表用户不喜欢，可能是没曝光
3. selection bias: 用户倾向于给非常喜欢或者非常不喜欢的打分
4. conformity bias: 用户打分的分数倾向于和群体观点保持一致
5. inductive bias: 对模型的各种假设，用于提升泛化性，通常是有利的 ，例如我们常用的奥卡姆剃刀原理、CNN的局部性假设、RNN的时间依赖假设、注意力机制假设等等
6. popularity bias: 热门物品曝光多，长尾物品得不到有效曝光
7. unfairness: 数据不均匀导致某些推荐结果有偏，例如在做新闻的时候，同性恋、宗教类文章

#### 2 解决方法

##### position bias

- position作为训练特征，预测时设置为一个定值

- 计算CTR时考虑位置效应(如某个位置的历史平均点击)

- 单独建模position bias，线上预测只用rank部分。

    - 例如华为PAL 
        $$
        P(y=1|x,pos)=p(seen|pos)p(y=1|x,seen)
        $$

##### exposure bias

- 阿里的ESMM，通过ctr和ctrcvr求解cvr。
    $$
    p(z=1,y=1|x)=p(y=1|x)p(z=1|y=1,x)
    $$

- 通过启发式方法补充未观测的交互反馈，将所有未观测的交互看作负样本，并赋予较低权重或根据用户和物品的活跃程度设置置信度

- 尽可能将那些没进入训练集的样本用上。例如召回中的随机负例等

- IPS.假设样本曝光或点击服从一个伯努利分布，然后从概率论推导出：只要给每个曝光样本加权(权重即位inverse propensity score)，最终在曝光的样本上求期望就等于在全量样本上求期望。其实思想就是importance sampling。

##### selection bias

- 同时学习打分预测和缺失数据预测两个任务，目前更多采用启发式方法，如直接对缺失值填充，最后结果严重依赖于缺失数据模型的预测准确度

##### popularity bias

- **阿里的ESAM**，利用Domain Adaptation的思想将热门物品（曝光集合）学到的知识迁移到长尾物品（未曝光集合）上
- 因果图或因果推断方法
- 正则化方法

##### unfairness

- Ranking：对不同人群的训练数据进行re-labeling或者re-sampling，实现平等
- Rerank：根据业务上的公平性要求进行替换和排序