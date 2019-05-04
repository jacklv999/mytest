Variable变量是Pytorch中用于计算和优化梯度所用到的数据类型，非Variable类变量不能计算梯度

####1. 数据准备
~~~
import torch
from torch.autograd import Variable

tensor = torch.FloatTensor([[1,2],[3,4]])            # build a tensor
variable = Variable(tensor, requires_grad=True)      # build a variable, usually for compute gradients

print(tensor)       # [torch.FloatTensor of size 2x2]
print(variable)     # [torch.FloatTensor of size 2x2]
~~~




####2. Variable 的反向传递
~~~
t_out = torch.mean(tensor*tensor)       # x^2
v_out = torch.mean(variable*variable)   # x^2

v_out.backward()    # backpropagation from v_out
print(variable.grad)
'''
 0.5000  1.0000
 1.5000  2.0000
'''

print(variable)     # this is data in variable format
"""
Variable containing:
 1  2
 3  4
[torch.FloatTensor of size 2x2]
"""

# v_out = 1/4 * sum(variable*variable)
# the gradients w.r.t the variable, d(v_out)/d(variable) = 1/4*2*variable = variable/2
~~~
>1. Variable.backward() ：Variable 变量的反向传递函数，用于实现反向传递过程
>2. Variable.grad：经过反向传递过程后，Variable的grad属性即其梯度
>3. Variable.data ：在计算中，Variable的data属性即其本身的Tensor
>4. Variable.grad_fn：构建过程及方式即Variable的grad_fn属性
>5. 以上2/3/4即Variable的三个属性
