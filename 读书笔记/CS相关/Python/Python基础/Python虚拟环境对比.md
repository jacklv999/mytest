## Python虚拟环境对比

#### 常见虚拟环境工具

##### Virtualenv

最常见, 使用最多. 

```python
## 创建环境
virtualenv new_env

## 激活环境
source ./bin/activate
```

##### venv

类似于virtualenv, 在python3.3过后由官方软件包自带

##### conda

第三方工具, 优势在于更方便地管理多个python版本

#### miniconda

conda具有很大的优势, 但是包过大, 仅仅是为了管理环境可以使用miniconda. 

```python
## 创建环境
conda create --name env_name python=3.9

## 复制环境
conda create --name env_new --clone env_old

## 查看已有虚拟环境
conda info --envs

## 激活环境
conda activate py27

## 取消激活
conda deactivate

## 删除环境
conda remove --name py27 --all
```

其中, 参数`--name`可以简写为`-na` .

#### conda设置环境路径

conda默认将环境放在C盘, 但是可以自定义环境路径.  修改.condarc文件,在.condarc文件后面添加两行代码。

```bash
envs_dirs:
  - /userdata/peter/envs
```

表示以后创建的虚拟环境默认就存在/userdata/peter/envs目录下面。

#### conda设置环境变量

##### 1. 设置环境变量

```bash
conda env config vars set PYSPARK_PYTHON=python
```

##### 2. 查看环境变量

```bash
conda env config vars list
```

##### 3. 使环境变量生效

```bash
## 需要再次激活环境才能使环境变量生效
conda activate env_name
```

##### 4. 删除环境变量

```python
conda env config vars unset my_var -n test-env
```

