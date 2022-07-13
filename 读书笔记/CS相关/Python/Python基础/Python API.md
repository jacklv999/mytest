## Python API

#### 1. 排序

##### 使用sort方法

```python
a = [1,3,5,4]
a.sort()#ascending
a.sort(reverse=True)#descending
```

##### 使用sorted函数

仅可以用于可迭代对象，同样使用`reverse`参数控制升降序。

```python
sorted(a)
#[1,3,4,5]
```

#### 2. set、tuple

set是仅有key的dict；

- set不可变，仅可含int、float和str

tuple是不可变的list；

- tuple可以包含list，int等

#### 3. list 相关API

##### 3.0 创建list

快速创建具有相同元素的列表

```python
[0] * 3
[0 for i in range(3)]
# [0, 0, 0]
```

使用循环创建列表

```python
[i for i in range(3)]
# [0,1,2]
[i+j for i in range(3) for j in range(2)]
# [0,1,1,2,2,3]
```

创建字符串列表

```python
a = 'abc'
list(a)
#['a','b','c']
```

##### 3.1 切片index

##### 普通切片：

list切片时，包含left index，不包含right index；

```python
a = [1,2,3,4]
a[0:4]
# [1,2,3,4]
a[0:3]
# [1,2,3]
```

##### 拓展切片：

```python
list[start:stop:step]
# 倒置list
a[::-1]
```

##### 3.2 default index

```python
# after mth
# from 0
a[m:]
# before nth
# from 0
a[:n]
# 序列
a == a[:m] + a[m:]
```

##### 3.3 list 复制

list复制是复制引用，因此对复制后list的修改会传回原list；

完全复制使用`list.copy()`;

```python
a = [1,2]
b = a.copy()
```

**注**：indexed list同样适用

也需要使用显式复制才能获取值拷贝

```python
a = [[1,2]]
b = a[1]
b.append(0)
# a = [[1,2,0]]
```

##### 3.4 列表倒序

`reverse` 方法可以使用列表完全倒序；

```python
a = [1,3,2]
a.reverse()
#[2,3,1]
```

##### 3.5 列表合并

方法一：使用切片

列表不能用切片访问界限外的方式赋值，但是可以用这种方式合并任意长度的列表

```python
a = [1,2,3]
a[3:] = [0]
#a = [1,2,3,0]
a[3:] = 0
# wrong, index out of range
```

方法二：使用内建方法

iterable的对象都可以用来增加，如set

```python
a = [1,2,3]
b = [4,5]
a.extend(b)
# [1,2,3,4,5]
```

#### 4. set方法

##### 4.1 求差

找出 set A 有，但 set B 没有的元素

```python
a = set([1,2])
b = set([2,3])
a.difference(b)
```

##### 4.2 求交集

```python
a = set([1,2])
b = set([2,3])
a.intersection(b)
```

##### 4.3 求并集

```python
a = set([1,2])
b = set([2,3])
a.union(b)
```

##### 4.4 修改

set是无序的，修改后增加的元素也会以无序的方式存储。

```python
a = set([1,2])
# method 1
# for int
a.add(3)
# method 2
# for iterable obj
a.update([3,4])
```

#### 5. 字符串

常用方法：

- count：`s.count(i)`, 计算出现次数
- r/index：`s.index(i)`, 首/末次出现的index
  - r/find：the same，但返回-1，而不是异常
- 改变大小写：lower & upper
- 对齐：ljust & rjust，左右对比（补空格）
- 合并拆分：split & join
- 判断元素
  - islower & isupper
  - isalnum & isalpha & isspace
  - isdigit & isnumeric
  - endswith & startswith
  - lstrip & rstrip & strip：删除空白符

