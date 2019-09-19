## Fine-tuning

#### 1.Fine-tuning的意义

我们通常不从头开始随机训练网络, 因为能训练深度神经网络的数据非常少见. 常见的作法是使用在大数据集上训练好的预训练神经网络 

#### 2.影响Fine-tuning的因素

影响Fine-tuning效果的主要因素是: 新数据集的大小和新数据集同原数据集的相似性

**$ \begin{cases}      内容相似        \begin{cases} 新数据集小      &\text{仅训练最后一层} \\    新数据集大 &\text{微调整个网络 }       \end{cases}     \\\\内容不相似\begin{cases}          新数据集小 &\text{冻结大部分卷积层, 训练高层卷积层及全连接层}    \\ 新数据集大&\text{不建议fine-tuning, 可以重新训练网络}                        \end{cases}                     \end{cases} $ ** 

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