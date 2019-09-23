## Yolo笔记

#### 1.核心思想

把物体检测看作回归问题, 来预测空间分布的边界框和类别的概率

#### 2.Object detacting metric

- 1.MAP: 平均准确率
- 2.AP: 准确率

#### 3.实现过程

- 1.核心思想:
    - 1.Resize to 448*448
    - 2.Run conv net
    - 3.non-max suppression: 使用非极大值抑制得到结果
- 2.算法:
    - 1.将图片隐式地分为 S*S 个网格
    - 2.物体的中心在哪个网格, 哪个网格就负责预测
    - 3.每个网格需要预测 B个框, C个类别
    - 4.每个框包含了 X, Y, W, H, confidence 五个信息

#### 4.网络结构

- 1.结构: 24个卷积层, 2个全连接层, 输出为 7\*7\*30
- 2.作用: 前20层卷积为分类层, 后6层为目标检测层

#### 5.损失函数分析

$Loss = \lambda_{coord}\sum_{i=0}^{s^2}\sum_{j=0}^{B}1_{ij}^{obj}((X_i-\hat{X_i})^2 + (Y_i-\hat{Y_i})^2) \\\quad\quad \quad\; + \lambda_{coord}\sum_{i=0}^{s^2}\sum_{j=0}^{B}1_{ij}^{obj} [(\sqrt{W_i} - \sqrt{\hat{W_i}}\,\;\,)^2 +(\sqrt{h_i} - \sqrt{\hat{h_i}}\;)^2 ] \\  \quad \quad\quad \;\;+ \sum_{i=0}^{s^2}\sum_{j=0}^{B}1_{ij}^{obj}(C_i - \hat{C_i})^2 \\ \quad \quad\quad \;\;+ \sum_{i=0}^{s^2}\sum_{j=0}^{B}1_{ij}^{nobj}(C_i - \hat{C_i})^2 \\ \quad \quad\quad\;\;+ \sum_{i=0}^{s^2}1_i^{obj}(P_i(c)-\hat{P_i}(c_i))^2  $  

- 1.损失函数的第一部分预测边框中心点误差
- 2.损失函数的第二部分预测目标框的高度和宽度误差
- 3.损失函数的第三部分预测框 $ij$ 含有 $obj$ 的概率
- 5.损失函数的第四部分预测框 $ij$ 不含有 $obj$ 的概率
- 5.损失函数的第五部分预测框 $i$ 的类别预测误差

对损失函数: 

- 对 $\lambda_{coord} $ 和 $\lambda_{nobj}$ , 因为有 $obj$ 的框远小于 $nobj$ 的框, 因此, 为了使损失函数平衡, 设定超参数: $\lambda_{coord}$ = 5, $\lambda_{nobj}$ = 0.5
- 小的边框很小的移动即会对 loss 产生较大的影响, 因此对边框宽度和高度取平方根

#### 6.YOLO网络训练

- 1.预训练分类网络: 网络前20层为分类网络
- 2.再训练检测网络: 使用 VOC 数据训练, 该数据集包含物体的类别和边框的位置
- 3.对gride cell 进行归一化, 将中心点坐标归一至 7*7 坐标