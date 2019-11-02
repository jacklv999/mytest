# YOLO V3

#### 1.YOLO V2的主要改进

- 1.Batch Normalization: 使用Darknet作为新的backbone并引入BN层, map提高2%
- 2.High Resolution: 训练时将模型输入从224\*224逐渐转为 448\*448, map提高4%
- 3.Anchor Boxes: 借鉴RCNN使用聚类算法产生anchor boxes, 降低map但提高了recall
- 4.坐标回归方式改变: 使用sigmoid函数和指数函数对坐标变形
- 5.Class Loss function: 使用Softmax函数

#### 2.YOLO v3先验框

使用K-means++算法产生9个默认框, 大中小每个尺度三个框. 随机在label boxes中选取K个框, 以 d = 1 - IOU为目标不断更新中心值使d最小, 按照框的大小分为三组, 每组三个框: 

- 1.13\*13的尺度使用大框, 相当于把图片隐式地分为了13\*13的gride cell
- 2.26\*26的尺度使用中框, 相当于把图片隐式地分为了26\*26的gride cell
- 3.52\*52的尺度使用小框, 相当于把图片隐式地分为了52\*52的gride cell

#### 3.多尺度预测

网络结构如下图所示, 左侧虚框内为Darknet骨干网络, 右侧为预测网络, 其中:

- 1.13\*13尺度的预测: 使用第七层直接输出feature map用于预测
- 2.26\*26尺度的预测: 第七层的feature map经过上采样和第六层feature map拼接(concat), 再进行卷积, 然后用于预测
- 3.52\*52尺度的预测 : 26\*26尺度卷积feature map和第五层feature map concat进行卷积后预测

![1572673429693](https://jacklv999.github.io/mytest/pic/3309.jpg) 

#### 3.YOLO v3的损失函数

- 1.中心点: 
  - $b_x = \sigma(t_x) + c_x$ , 其中 $c_x$ 为中心点相对于左上角的偏移量
  - $b_y = \sigma(t_y) + c_y$ , 其中 $c_y$ 为中心点相对于左上角的偏移量
- 2.长和宽
  - $b_w = p_we^{t_w}$
  - $b_h = p_he^{t_h}$ 