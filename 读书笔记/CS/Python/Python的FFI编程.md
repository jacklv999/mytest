## Python的FFI编程

本文就 Python 的FFI编程做出一些尝试, DLL本来是最好的办法, 但是 Python 的特性 DLL 库跨平台非常受限. 本文尝试使用 EXE 作为跨语言调用的一种尝试.

#### 1.Python对于剪切板的控制

- 1.Python剪切板相关包: pyperclip包

  ```python
  pip install pyperclip
  ```

- 2.核心函数: copy and paste()

  - 1.读取剪切板: paste()

    ```python
    import pyperclip
    text = pyperclip.paste()
    lines = text.split("\n")
    ```

  - 2.传递值至剪切板: copy()

    ```python
    import pyperclip
    text = "hello world"
    pyperclip.copy(text)
    ```

#### 2.补充: R语言读取剪切板

```R
y = read.table("clipboard")
```

#### 3.补充: 减少 Python 打包 EXE 的体积

```python
pyinstaller -F 1.py --upx-exclude=vcruntime140.dll
```



