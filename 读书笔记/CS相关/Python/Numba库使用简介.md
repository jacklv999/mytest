## Numba库使用简介

#### 1.基本用法

- 1.以非python方式编译

```python
@jit(nopython=True)
```

- 2.释放GIL锁

```python
@jit(nogil=True)
@jit(nopython=True, nogil=True)
```

- 3.储存编译

```python
@jit(cache=True)
#保存函数编译结果到一个基于文件的缓存中。可以通过传递cache=True实现
```

#### 2.高级用法

- 1.编译原生多线程

```python
@jit(nopython=True, parallel=True)
#编译器将编译一个版本，并行运行多个原生的线程（没有GIL）
```

- 2.默认非python模式

```python
@njit #这个装饰器与@jit(nopython=True)等价
```

- 3.创建Ufunc函数

```python
@vectorize([float64(float64, float64)])
#注意顺序，精度低的在前，高的在后
#其中, float64(float64, float64)]表示数据精度

#示例
@vectorize([int32(int32, int32),
            int64(int64, int64),
            float32(float32, float32),
            float64(float64, float64)])
def f(x, y):
    return x + y

```



