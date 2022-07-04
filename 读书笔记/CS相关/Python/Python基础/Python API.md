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

#### 3. 滑动窗口模板

##### 模板一

以右指针作为驱动，拖着左指针向前走。

右指针每次只移动一步，而左指针在内部 while 循环中每次可能移动多步。

右指针是主动前移，探索未知的新区域；左指针是被迫移动，负责寻找满足题意的区间。

```python
def maxArray(self, 
             nums: List[int]
            ) -> int:
    num_sum = list()
    right = 0
    while right <= len(nums):
        left = 0
        while right > left:
            num_sum.append(sum(
                nums[left:right]
            ))
            left += 1
        right += 1
    return max(num_sum)
```

##### 模板二

以左指针作为驱动，右指针向前探索。

```python
def maxArray(self, 
             nums: List[int]
            ) -> int:
    num_sum = list()
    left = 0
    while left < len(nums):
        right = left + 1
        while right <= len(nums):
            num_sum.append(sum(
                nums[left:right]
            ))
            right += 1
        left += 1
    return max(num_sum)
```

#### 4. list 相关API

##### 4.1 切片index

list切片时，包含left index，不包含right index；

```python
a = [1,2,3,4]
a[0:4]
# [1,2,3,4]
a[0:3]
# [1,2,3]
```

##### 4.2 default index

```python
# after mth
# from 0
a[m:]
# before nth
# from 0
a[:n]
#
a == a[:m] + a[m:]
```

##### 4.3 list 复制

list复制是复制引用，因此对复制后list的修改会传回原list；

完全复制使用`list.copy()`;

```python
a = [1,2]
b = a.copy()
```

##### 4.4 列表倒序

`reverse` 方法可以使用列表完全倒序；

```python
a = [1,3,2]
a.reverse()
#[2,3,1]
```

