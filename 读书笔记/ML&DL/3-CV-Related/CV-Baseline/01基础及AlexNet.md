## CV笔记

#### 1.AlexNet笔记

- 1.关于Conv层的输入与输出size关系: 根据Padding方式为 $$F_o = [\frac{F_i - k +1}{stride}]$$  
- 2.数据增强: 对原始图像做截取, 翻转, 镜像等操作, 增加数据量
- 3.对图像的RGB数据做PCA处理, 并对主成分做标准差为0.1的正态扰动以增加噪音
- 4.超参数: $$data_{num} = batchsize\, \times \, steps$$ , $$epoch$$为训练全部数据的次数

#### 2.AlexNet的进步

- 1.首先使用 $Relu$
- 2.首先使用 $Dropout$
- 3.首先在 CNN 中使用 MaxPooling

#### 3.Conv层

```python
torch.nn.Conv2d(in_channels, out_channels, kernel_size, stride=1, padding=0, dilation=1, groups=1, bias=True, padding_mode='zeros')
```

- 1.in_channels: 表示输入的通道, 图片输入多为3通道或1通道
- 2.out_channels: 表示输出通道, 第一层的输出多为64

#### 4.Flatten层

```python
x = x.view(x.size(0), 256 * 6 * 6) #上一层输出通道为256, pixel为 6*6
```

- 1.Returns a new tensor with the same data but of a different `shape` 
- 2.参数: reshape后的维度以元组方式传入

#### 5.Sequential容器

- 1.Modules will be added to it in the order they are passed in. 
- 2.Alternatively, an ordered dict of modules can also be passed in.

```python
# Example of using Sequential with OrderedDict
model = nn.Sequential(OrderedDict([
          ('conv1', nn.Conv2d(1,20,5)),
          ('relu1', nn.ReLU())
        ]))
```

