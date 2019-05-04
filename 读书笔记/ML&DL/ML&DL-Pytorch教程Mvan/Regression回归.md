回归是ML&DL中最基础的任务，本文通过简单的DNN网络实现分类，仅供参考
####1. 数据准备
~~~
import torch
import torch.nn.functional as F
import matplotlib.pyplot as plt

# torch.manual_seed(1)    # reproducible

x = torch.unsqueeze(torch.linspace(-1, 1, 100), dim=1)  # x data (tensor), shape=(100, 1)
y = x.pow(2) + 0.2*torch.rand(x.size())                 # noisy y data (tensor), shape=(100, 1)

# torch can only train on Variable, so convert them to Variable
# The code below is deprecated in Pytorch 0.4. Now, autograd directly supports tensors
# x, y = Variable(x), Variable(y)

# plt.scatter(x.data.numpy(), y.data.numpy())
# plt.show()
~~~

####2. 神经网络搭建
~~~
class Net(torch.nn.Module):
    def __init__(self, n_feature, n_hidden, n_output):
        super(Net, self).__init__()
        self.hidden = torch.nn.Linear(n_feature, n_hidden)   # hidden layer
        self.predict = torch.nn.Linear(n_hidden, n_output)   # output layer

    def forward(self, x):
        x = F.relu(self.hidden(x))      # activation function for hidden layer
        x = self.predict(x)             # linear output
        return x

net = Net(n_feature=1, n_hidden=10, n_output=1)     # define the network
print(net)  # net architecture
~~~
>1. class Net(torch.nn.Module)：Pytorch 中神经网络的构建通常是继承nn.Module类以构建
>2. super(Net, self)._ _ _init_ _  _()：以关键字 super 开始构建神经网络
>3. torch.nn.Linear()：torch的全连接层函数
>4. def forward(self, 'data')：构建前向传播层，以 data 的传播顺序构建神经网络结构


####3. 选择优化器和损失函数
~~~
optimizer = torch.optim.SGD(net.parameters(), lr=0.2)
loss_func = torch.nn.MSELoss()  # this is for regression mean squared loss
~~~

####4. 优化
~~~
for t in range(200):
    prediction = net(x)     # input x and predict based on x

    loss = loss_func(prediction, y)     # must be (1. nn output, 2. target)

    optimizer.zero_grad()   # clear gradients for next train
    loss.backward()         # backpropagation, compute gradients
    optimizer.step()        # apply gradients
~~~
>1. prdct = net(x)：构建预测函数
>2. loss_func(prdct, y)：计算预测值与对比值的差距
>3. optimizer.zero_grad()：初始化优化器
>4. loss.backward() ：计算损失函数的梯度并反向传递
>5. optimizer.step()：应用反向传播的梯度优化网络结构



####5. 画图部分
~~~
    plt.ion()   # something about plotting，should be placed before “for”
    if t % 5 == 0:
        # plot and show learning process
        plt.cla()
        plt.scatter(x.data.numpy(), y.data.numpy())
        plt.plot(x.data.numpy(), prediction.data.numpy(), 'r-', lw=5)
        plt.text(0.5, 0, 'Loss=%.4f' % loss.data.numpy(), fontdict={'size': 20, 'color':  'red'})
        plt.pause(0.1)

plt.ioff()
plt.show()
~~~
