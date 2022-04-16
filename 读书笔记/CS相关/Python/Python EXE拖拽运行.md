## Python EXE拖拽运行

有时, 为了方便文件操作, 拖拽文件到exe上并直接运行, 是一个重要的功能. Python 也可以实现以下功能.

```python
import sys

file_paths = sys.argv[1:]
for p in file_paths:
    print(p)
```

使用 Python 的 `sys` 库可以捕捉拖拽文件的路劲参数. 

将上述代码用 Pyinstaller 打包成EXE, 即可正常实现文件的拖拽操作. 其中 `p` 为拖拽的文件路径.