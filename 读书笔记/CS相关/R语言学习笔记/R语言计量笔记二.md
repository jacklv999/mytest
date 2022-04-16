## R语言笔记

#### 1.功效分析

- 1.功效分析：取伪错误的概率为  $$\alpha$$ , 则功效值为 `1-β` 

- 2.作用：

  - 1.给定置信度， 确定给定效应值所需的样本量
  - 2.给定置信度， 检测制定效应值的概率

- 3.使用:

  - 当两样本有相同的样本量时，功效分析的R函数为`pwr.t.test`，基本书写格式为：

    ```R
    pwr.t.test(d=效应量,n=样本量,sig.level=显著性水平,power=统计功效,type=检验类型,alternative=检验方向)
    ```

  - 当两样本的样本量不同时，功效分析的R函数为`pwr.t2n.test`，基本书写格式为：

    ```R
    pwr.t2n.test(d=效应量,n1=样本量1, n2=样本量2,sig.level ,power=统计功效,type=two.sample)
    ```

#### 2.聚类分析

- 1.R语言函数是 `kmeans` ，基本书写格式为：

```r
kmeans(x=矩阵名,centers=聚类个数,nstart=初始类中心个数)
```

- 2.层次聚类的R函数是`hclust`，基本书写格式为

```r
hclust (d=距离矩阵名,method=聚类方法)
```

#### 3.R语言绘图

- 1.高级绘图: 创建新的绘图模块
- 2.低级绘图: 在指定绘图框中添加模块
  - 1.绘制点: `point(x,y)`, 添加点 (x,y)
  - 2.绘制线: `line()`







#### 5.其他信息补充

- 1.隐藏元素

```html
style="display:none;"
```

- 2.安装 jupyter notebook

  ```python
  pip install jupyter#安装
  jupyter notebook#在cmd输入命令直接启动
  ```

- 3.在jupyter中使用R语言

  ```R
  #安装依赖
  install.packages(c('repr', 'IRdisplay', 'evaluate', 'crayon', 'pbdZMQ', 'devtools', 'uuid', 'digest'))
  #安装jupyter的R核
  devtools::install_github('IRkernel/IRkernel')
  
  # 启动R核
  IRkernel::installspec()
  ```

- 4.R语言中隐藏警告: `warnings(off)`

- 5.jupyter notebook的基础快捷键

  - 1.编辑模式

    | 快捷键 | 含义         |
    | ------ | ------------ |
    | ESC    | 进入命令模式 |
    | Ctrl + Enter | 运行当前cell代码 |
    
  - 2.命令行模式
  
    | 快捷键 | 含义                   |
  | ------ | ---------------------- |
    | Enter  | 进入编辑模式           |
    | A      | 在当前代码上插入代码块 |
    | B      | 在当前代码下插入代码块 |
    | X      | 剪切/删除当前代码块    |
    | H      | 显示快捷键             |
    | Space  | 向下滚动               |
    |        |                        |
  
    

