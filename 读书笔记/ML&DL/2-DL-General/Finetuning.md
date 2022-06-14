## Fine-tuning

#### 1.Fine-tuning的意义

我们通常不从头开始随机训练网络, 因为能训练深度神经网络的数据非常少见. 常见的作法是使用在大数据集上训练好的预训练神经网络 

#### 2.影响Fine-tuning的因素

影响Fine-tuning效果的主要因素是: 新数据集的大小和新数据集同原数据集的相似性

**$ \begin{cases}      内容相似        \begin{cases} 新数据集小      &\text{仅训练最后一层} \\    新数据集大 &\text{微调整个网络 }       \end{cases}     \\\\内容不相似\begin{cases}          新数据集小 &\text{冻结大部分卷积层,  训练高层卷积层及全连接层}    \\ 新数据集大&\text{不建议fine-tuning, 可以重新训练网络}                        \end{cases}                     \end{cases} $ ** 

#### 3.Fine-tuning代码

- 方法1.冻结除训练层意外的网络

```python
#导入必要模块
import torch
import torch.nn as nn
from torchvision import models

#读取pytorch自带的resnet-101模型,因为使用了预训练模型，所以会自动下载模型参数
model=models.resnet101(pretrained=True)

#对于模型的每个权重，使其不进行反向传播，即固定参数
for param in model.parameters():
    param.requires_grad = False
#但是参数全部固定了，也没法进行学习，所以我们不固定最后一层，即全连接层fc
for param in model.fc.parameters():
    param.requires_grad = True
```

- 方法2.修改最后一层神经网络

```python
class_num = 200 #假设要分类数目是200
channel_in = model.fc.in_features#获取fc层的输入通道数
#然后把resnet-101的fc层替换成300类别的fc层
model.fc = nn.Linear(channel_in,class_num)
```

- 方法3.删除部分网络层

```python
#这里[:-1]代表删除最后一层
new_model = nn.Sequential(*list(model.children())[:-1])
#或删除最后两层
new_model = nn.Sequential(*list(model.children())[:-2])
```

#### 4. 常见技巧

##### 1. **使用Pretrain模型做约束**

在Finetune阶段，如果我们可用于Finetune的目标任务数据量较少时，很有可能出现过拟合现象或灾难性遗忘问题。

为了解决这种问题，学术界提出利用Pretrain模型作为约束，指导Finetune的过程，让Finetune得到的模型更加鲁棒。具体而言:

> 通过添加Pretrain模型参数和Finetune模型参数之间的某种正则化损失，让Finetune后的模型参数和最开始的Pretrain模型参数更加相似。

通过最终的实验发现，一个简单的L2正则效果最好，即对于Pretrain模型和Finetune模型的对应层的参数计算L2距离，作为Finetune过程中损失函数的一部分

通过L2正则化的方法拉近Pretrain模型和Target模型参数也存在一定问题，如何设定正则化的强度直接决定了迁移效果。百度提出，通过约束网络的behavior，即feature map，而非模型参数，来实现约束目标。具体的，约束项可以表示为如下形式：
$$
\Omega'(w',w^*,x_i,y_i,z)=\sum_{j=1}^NW_j(z,w^*,x_i,y_i)\times\\||FM_j(z,w,x_i)-FM_j(z,w^*,x_i)||_2^2
$$
其中，$W_j$表示第$j$个卷积层的约束强度，$FM$表示第$i$个样本经过参数$w$提取的feaure map。$W_j$的计算方法为，使用Pretrain的模型Freeze住底层Feature Extractor参数，Finetune后面Discriminator参数，通过衡量去掉每个channel后效果的损失，得到这个channel的迁移强度。

如果去掉Pretrain模型某个channel后效果下降特别明显，说明Pretrain得到的这个channel的信息对Target任务是很有效的，这个时候要增大这种channel参数的迁移强度。

##### 2. **选择性地对Pretrain模型迁移**

Pretrain模型中的参数不一定都是对下游任务有帮助的，因此一些研究提出，对Pretrain的模型进行有选择性的迁移，重点迁移那些对下游任务帮助大的信息。

##### 3. **在Finetune阶段调整网络结构**

在Finetune阶段动态剪枝的方法，实现Finetune阶段不仅能够调整模型参数，还能调整模型网络结构。该方法分为Target-aware Pruning和Importance-aware Finetuning两个阶段。在Target-aware Pruning阶段，对于网络中每一层的每一个filter，都对应一个可学习的权重，把Pretrain模型的参数Freeze住，使用Target任务的数据和优化目标进行训练，得到每组参数最终对应的权重.

这个重要性权重会使用泰勒变换，融合全局各层的打分结果得到全局的打分，最后将打分较低的网络参数剪枝掉。