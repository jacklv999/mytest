# Pytorch与Py模块化笔记

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

#### 1.Python模块化编程

- 1.模块化编程: 

  - 1.代码: 

    ```python
    if __name__ == "__main__":
    	pass	
    ```

  - 2.含义: Python代码运行时引入其他模块, `__name__`的值变为该模块名称, 若不强制赋值会导致完整运行整个引入模块

- 2.模块路径

  - 1.自定义模块与主程序在同一目录: 

    ```python
    import module_name
    ```

  - 2.自定义模块与主程序在同一工程文件夹

    ```python
    #在每一目录下创建 __init__.py 文件, 内容可为空
    #将模块文件放到某文件夹并添加__init__.py空白文件，则文件夹就变成了python包
    import 工程文件夹顶级目录.次级目录...file_name
    from 工程文件夹顶级目录.次级目录...file_name import func_name
    ```