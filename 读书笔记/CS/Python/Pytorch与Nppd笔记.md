# Pytorch与Np/pd笔记

#### 1.CSV转Matix

```Python
import pandas as pd
dat = pd.read.csv('path')
dat_matrix = df.values
```

#### 2.Matrix切片

```Python
dat_m_0 = dat_matrix[:,1]  #截取矩阵中第二列所有数据
dat_m_1 = dat_matrix[:,1:5]  #截取矩阵中第一至四列所有数据
dat_m_2 = dat_matrix[1,:]  #截取矩阵中第二行所有数据
dat_m_3 = dat_matrix[1:5,:]  #截取矩阵中第二至四行所有数据
```

#### 3.Matrix转torch

```python
dat_array = np.array(dat_matrix)
dat_torch = torch.from_numpy(dat_array)
```

#### 4.torch数据类型更改

```python
dat_t_float = dat_torch.float()
dat_t_long = dat_torch.long()
dat_t_int32 = dat_torch.int()
```

#### 5.关于神经元数量

- 1.神经元数量需要与输入数据的维数对应
- 2.输出神经元与类别对应

#### 6.对于损失函数

- 1.CrossEntropy(), 要求训练 y 数据必须为 long 型
- 2.MSELoss(), 要求训练 y 数据必须为 float 型