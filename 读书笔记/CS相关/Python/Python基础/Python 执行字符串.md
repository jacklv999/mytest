# Python 执行字符串

有时我们需要动态生成代码并执行, 在python中, 有两个内建函数可以实现此类功能

#### 1. eval函数

eval 函数用于执行含返回值的代码, 如下例所示

```python
res_1 = 100
str_code = "res_" + str(1)
res = eval (str_code)
```

#### 2. exec函数

exec函数用于执行无需返回值的代码, 如下例所示:

```python
def function_1(){
    pass
}
str_code = "function_" + str(i)
exec(str_code)
```

