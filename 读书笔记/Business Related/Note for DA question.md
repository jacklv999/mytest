## Note for Data Analyst Question

#### 数据库事务

数据库事务( transaction)是访问并可能操作各种数据项的一个数据库操作序列，这些操作要么全部执行,要么全部不执行，是一个不可分割的工作单位。事务由事务开始与事务结束之间执行的全部数据库操作组成。

- 四大特性:
  - 原子性：事务一个不可分割的工作单位，事务中的操作要么都发生，要么都不发生;
    - 依赖归滚日志(undo log)实现, 未成功则回滚;
  - 一致性：事务的执行的前后，数据的完整性要得到保证;
    - 使用锁操作, 将事务并行化;
    - 使用MVCC机制, 记录所有操作的日志形成版本链, 执行操作时先访问版本链;
  - 隔离性：数据库并发的时候，一个用户事务不能被其他用户的事务所干扰到;  
  - 持久性：事务一旦提交就是数据的永久性改变，数据库故障也不应对其有影响。
    - 维护额外的中间层(redo log), 将所有操作写入redo log并保存至硬盘, 同时刷新内存;
- 数据库故障
  - 脏数据：一个事务修改数据且未提交时，另一事务读该数据，则得到脏数据;
  - 脏读: 读取脏数据的读操作
  - 不可重复读:  重复性的脏读, 得到的不一致数据;
  - 幻觉读:  全表操作时存在插入操作, 导致全表操作不完整;

#### 泊松分布与指数分布

- Poison distribution:  
  - Definition One: the random variable of nonnegative was poison distribution;
  - Definition Two: if a thing happened randomly in a time, then it is poison distribution;
  - Definition Three: in a binomial distribution, if N goes infinity and p goes infinitesimal, then we have poison distribution;
- Normal distribution: the N goes infinity in a binomial distribution
- Exp distribution: equals poison distribution when $\theta =  1/\lambda$ 

#### 数据库三级模式

- 用户级--> 外模式(反映了数据库系统的用户观)

  外模式又称子模式或用户模式，对应于用户级。它是某个或某几个用户所看到的数据库的数据视图，是与某一应用有关的数据的逻辑表示。

  用户可以通过外模式描述语言来描述、定义对应于用户的数据记录(外模式)，也可以利用数据操纵语言对这些数据记录进行操作。

- 概念级--> 概念模式（反映了数据库系统的整体观）

  概念模式又称模式或逻辑模式，对应于概念级。它是由数据库设计者综合所有用户的数据，按照统一的观点构造的全局逻辑结构，是对数据库中全部数据的逻辑结构和特征的总体描述，是所有用户的公共数据视图(全局视图)。它是由数据库管理系统提供的数据模式描述语言(Data Description Language，DDL)来描述、定义的。

- 物理级 --> 内模式（反映了数据库系统的存储观）

  内模式又称存储模式，对应于物理级。它是数据库中全体数据的内部表示或底层描述，是数据库最低一级的逻辑描述，它描述了数据在存储介质上的存储方式和物理结构，对应着实际存储在外存储介质上的数据库。

总结：

总之，数据按外模式的描述提供给用户；按内模式的描述存储在磁盘上；而概念模式提供了连接这两级模式的相对稳定的中间层，并使得两级中任意一级的改变都不受另一级的牵制。

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

#### Database Design

data table or system design follows the procedure of concept model(概念模型), logic model(逻辑模型), physical model(物理模型). 

- **concept model stage**:  finding out the core entity and relation;

  **For example**: 

  - class and students — 1 v N: the class have multiple students;
  - teacher and class — N v N: a class has multiple teacher, and a teacher also has multiple class;

  **Result**:  resulting in “entity - relation” graph, argo E-R graph, to define what is this database table;

- **Logic model stage**: completing the relation and field name

  **Example**:

  - Table Name: students table, teacher table;
  - Function Name: maintaining students and teacher info;

  **Result**: to describe what concept model has done, how many table we need to construct;

- **Physical model stage**:  to describe the database 

**Logic Model**: 

常用的逻辑模型：

- 层次模型: Storing data in tree
- 网状模型: Storing data in graph;
- 关系模型: Storing data in table;



















