## Python调用命令行

在跨语言和跨域调用的时候有时需要使用命令行, 此处记录python调用命令行的代码.

#### 1. 调用方式一

```python
import os
result = os.popen(
    "ls -a"
).readlines()
```

其中 `result` 是命令行的输出.

#### 2. 调用方式二

如果是无需返回输出的命令, 可以使用另一种方式调用.

```python
import os
execl(file, *args)
```

