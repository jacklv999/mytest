RNN在文本预测等方面有着诸多使用，也是重要的神经网络结构，其结构包括RNN，LSTM，GRU等。本文以分类这一任务为基础分析RNN的简单结构
####1. 引入包和设置超参数
~~~
import torch
from torch import nn
import torchvision.datasets as dsets
import torchvision.transforms as transforms
import matplotlib.pyplot as plt


# torch.manual_seed(1)    # reproducible

# Hyper Parameters
EPOCH = 1               # train the training data n times, to save time, we just train 1 epoch
B_S = 64
TIME_STEP = 28          # rnn time step / image height
INPUT_SIZE = 28         # rnn input size / image width
LR = 0.01               # learning rate
DOWNLOAD_MNIST = True   # set to True if haven't download the data
~~~
####2. 准备MNIST数据
~~~
# Mnist digital dataset
train_data = dsets.MNIST(
    root='./mnist/',
    train=True,                         # this is training data
    transform=transforms.ToTensor(),    # Converts a PIL.Image or numpy.ndarray to
    # torch.FloatTensor of shape (C x H x W) and normalize in the range [0.0, 1.0]
    download=DOWNLOAD_MNIST,            # download it if you don't have it
)

# plot one example
print(train_data.train_data.size())     # (60000, 28, 28)
print(train_data.train_labels.size())   # (60000)
plt.imshow(train_data.train_data[0].numpy(), cmap='gray')
plt.title('%i' % train_data.train_labels[0])
plt.show()

# Data Loader for easy mini-batch return in training
train_loader = torch.utils.data.DataLoader(dataset=train_data, batch_size=B_S, shuffle=True)

# convert test data into Variable, pick 2000 samples to speed up testing
test_data = dsets.MNIST(root='./mnist/', train=False, transform=transforms.ToTensor())
test_x = test_data.test_data.type(torch.FloatTensor)[:2000]/255.   
# shape (2000, 28, 28) value in range(0,1)
test_y = test_data.test_labels.numpy()[:2000]    # covert to numpy array
~~~
>注：
>1. torchvision.datasets.MNIST(root, train, transform,download)：root为MNIST数据所在路径，train为设置该数据集为训练数据(True)或检验数据(False)，transform表示转换数据至某种形式，download为设置是否下载该数据(若已下载则设置为False)
>2. torch.utils.data.DataLoader(dataset, batch_size, shuffle)：装载训练数据，其中dataset用于指定所装载数据集路径

####3. 构建RNN网络
~~~
class RNN(nn.Module):
    def __init__(self):
        super(RNN, self).__init__()

        self.rnn = nn.LSTM(         # if use nn.RNN(), it hardly learns
            input_size=INPUT_SIZE,
            hidden_size=64,         # rnn hidden unit
            num_layers=1,           # number of rnn layer
            batch_first=True,       
# input & output will has batch size as 1s dimension. e.g. (batch, time_step, input_size)
        )

        self.out = nn.Linear(64, 10)

    def forward(self, x):
        # x shape (batch, time_step, input_size)
        # r_out shape (batch, time_step, output_size)
        # h_n shape (n_layers, batch, hidden_size)
        # h_c shape (n_layers, batch, hidden_size)
        r_out, (h_n, h_c) = self.rnn(x, None)   # None represents zero initial hidden state

        # choose r_out at the last time step
        out = self.out(r_out[:, -1, :])
        return out


rnn = RNN()
print(rnn)
~~~
>注1：
>1. self.rnn=nn.LSTM(input_size,hidden_size,num_layers )：设定第一层级的RNN网络为LSTM，其中input_size表示输入数据的维度，hidden_size表示隐藏神经元数量，num_layers表示LSTM网络的层数
>2. self.out = nn.Linear(P1, P2)：P1表示隐藏神经元个数，P2表示输出类别数
>3. LSTM存在两个输出和输入，表示预测内容与状态


>注2：不同LSTM比较
>![单层三隐藏神经元LSTM](https://upload-images.jianshu.io/upload_images/3065026-b6007d2798a66bde.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
>![三层六隐藏神经元LSTM](https://upload-images.jianshu.io/upload_images/3065026-a322dbfc1676ab0a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


####4. 选择优化器与损失函数
~~~
optimizer = torch.optim.Adam(rnn.parameters(), lr=LR)   # optimize all cnn parameters
loss_func = nn.CrossEntropyLoss()                       # the target label is not one-hotted
~~~
>注：
>1. adam()：最常用优化器之一，为AdaGrad与动量算法的组合
>2. nn.CrossEntropyLoss() ：判断实际输出与期望输出的差异程度，多用于分类问题中判断预测目标概率分布与实际概率分布的差异


####5. 训练和测试
~~~
# training and testing
for epoch in range(EPOCH):
    for step, (b_x, b_y) in enumerate(train_loader):        # gives batch data
        b_x = b_x.view(-1, 28, 28)              # reshape x to (batch, time_step, input_size)

        output = rnn(b_x)                               # rnn output
        loss = loss_func(output, b_y)                   # cross entropy loss
        optimizer.zero_grad()                           # clear gradients for this training step
        loss.backward()                                 # backpropagation, compute gradients
        optimizer.step()                                # apply gradients

        if step % 50 == 0:
            test_output = rnn(test_x)                   # (samples, time_step, input_size)
            pred_y = torch.max(test_output, 1)[1].data.numpy()
            accuracy = float((pred_y == test_y).astype(int).sum()) / float(test_y.size)
            print('Epoch: ', epoch, '| train loss: %.4f' % loss.data.numpy(), '| test accuracy: %.2f' % accuracy)

# print 10 predictions from test data
test_output = rnn(test_x[:10].view(-1, 28, 28))
pred_y = torch.max(test_output, 1)[1].data.numpy()
print(pred_y, 'prediction number')
print(test_y[:10], 'real number')
~~~
