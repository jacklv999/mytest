##一  Pytorch安装
####1. 依赖库
Pytorch配合N家的CUDA库可运行GPU加速，所以一般应先安装CUDA库
####2.安装工具：pip 或 anaconda
~~~
pip install      #安装地址由Pytorch官网来
pip install torchvision
~~~
##二 Pytorch与Numpy对比

####1.引入Pytorch与Numpy包
~~~
import torch
import numpy as np  
~~~
>注：   Numpy包常简写做np
####2. 产生随机数据
~~~
# convert numpy to tensor or vise versa
np_data = np.arange(6).reshape((2, 3))        
torch_data = torch.from_numpy(np_data)
tensor2array = torch_data.numpy()
print(
    '\nnumpy array:', np_data,          # [[0 1 2], [3 4 5]]
    '\ntorch tensor:', torch_data,      #  0  1  2 \n 3  4  5    [torch.LongTensor of size 2x3]
    '\ntensor to array:', tensor2array, # [[0 1 2], [3 4 5]]
)
~~~
>1. reshape函数：将Numpy数列转化至制定形式（2行3列）
>2. torch.from_numpy(np_data)：将 Numpy 数列转换为 Tensor
>3. torch_data.numpy()：将 Tensor 转换为 Numpy 数列

####3. Pytorch函数
#####1. abs
~~~
data = [-1, -2, 1, 2]
tensor = torch.FloatTensor(data)  # 32-bit floating point
print(
    '\nabs',
    '\nnumpy: ', np.abs(data),          # [1 2 1 2]
    '\ntorch: ', torch.abs(tensor)      # [1 2 1 2]
)
~~~
#####2. sin
~~~
print(
    '\nsin',
    '\nnumpy: ', np.sin(data),      # [-0.84147098 -0.90929743  0.84147098  0.90929743]
    '\ntorch: ', torch.sin(tensor)  # [-0.8415 -0.9093  0.8415  0.9093]
)
~~~

#####3. mean
~~~
print(
    '\nmean',
    '\nnumpy: ', np.mean(data),         # 0.0
    '\ntorch: ', torch.mean(tensor)     # 0.0
)
~~~

#####4. matrix multiplication
```
data = [[1,2], [3,4]]
tensor = torch.FloatTensor(data)  # 32-bit floating point

print(
    '\nmatrix multiplication (matmul)',
    '\nnumpy: ', np.matmul(data, data),     # [[7, 10], [15, 22]]
    '\ntorch: ', torch.mm(tensor, tensor)   # [[7, 10], [15, 22]]
)
```
>注：在 torch 中 dot() 函数表示矩阵点积，而非矩阵乘积
