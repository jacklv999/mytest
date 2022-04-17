# Prompt learning

#### 1. Prompt learning种类

prompt主要有离散化和连续化两种: 

- 模板方法，即离散式prompt；
    - 基于人工知识来定义prompt模板
    - 分prefix prompt和cloze prompt: 
        - cloze prompt表示在句子中填空
        - prefix prompt定义文本前缀
- 连续方法
    - 学习embedding同空间的向量
    - 参数化prompt是另一种形式的adapter
        - 传统adapter是加在ffn后的MLP
        - prefix tune是加到attention的

#### 2. Prompt learning缺陷

但是也有几点代价。

- 极长的训练时间（十倍）
    - 连续化的promot的斜率远远缓于finetune且震荡更为剧烈
    - 此外, 因为优化参数在输入层，所以训练阶段计算代价并没有显著减少。
- 相较于预训练过于specific，和其他组件耦合度太高
    - 连续化prompt包括之前的adapter几乎就是数据集specific的。
- 规模问题。
    - prompt tuning很多都需要非常大的模型才能拿到很好的效果的
    - Prompt本身并不带来新的知识，它的上限是利用到所有原来蕴含于语言模型里面，和任务相关的知识
    - prompt learning有一个很强的隐含假设，PLM包含了丰富的知识，prompt前缀用以帮助PLM回忆这些知识。
- Prompt上限
    - Prompt本身和预训练阶段是脱节的。预训练阶段是不带有Prompt的, 限制了Prompt的上限。

#### 3. Prompt learning意义

总体来说，Prompt的用处主要体现在两个方面:

- **一是通过重新组织输入和输出的方式，将下游任务向预训练任务靠拢**，在小样本甚至零样本的场景下发挥作用。
- **二是作为一种参数高效微调的方法，只微调prompt（或prefix）而冻结模型参数来完成各类任务**，这种场景则更适用于多任务的场景。我们可以把前者称为textual prompt，后者称之为continuous (soft) prompt。

Textual prompt向研究者展示了一种统一的NLP问题的解决范式, 在这种思想下，催生了All tasks as generation 的范式。目前Prompt已经一定程度上完成了其在NLP发展中重新组织输入输出的使命，现在不少工作都不再基于classification head，而是将输入输出重新组织成预训练范式来进行下游任务微调。它的优点也十分明显，由于保持了下游任务和预训练任务形式上的统一，在少样本场景下效果显著。