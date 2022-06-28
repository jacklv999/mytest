## Spark BUGS

#### 1.  failed to connect back

Q: Python worker failed to connect back in Pyspark

A:  add new system environment variables

> PYSPARK_DRIVER_PYTHON=jupyter
>
> PYSPARK_DRIVER_PYTHON_OPTS=notebook
>
> PYSPARK_PYTHON=python

#### 2. Spark 安装

- 安装JAVA: 能在cmd调出java命令
  - 创建`JAVA HOME` 系统变量
- 安装spark包
  - 添加spark bin至path;
  - 创建 `SPARK HOME` 系统变量
- 安装pyspark
  - 创建 `PYSPARK_PYTHON` 系统变量
  - 创建上述两个driver变量
- 完成!
