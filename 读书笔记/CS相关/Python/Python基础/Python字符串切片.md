## Python字符串切片

#### 1. 字符串可以直接索引

```python
lang = 'python'
lang[0]
# p
lang[3]
# h
```

#### 2. 字符串可以 `:` 切片

```python
lang = 'python'
lang[1:4]
# yth
```

#### 3. 尾索引未给出, 默认截到末尾

```python
lang = 'python'
lang[1:]
# ython
```

#### 4. 无头索引, 默认从头开始

```python
lang = 'python'
lang[:3]
# pyt
```

#### 5. 负索引表末尾

`-1` 为末尾元素, 从后向前编号

```python
lang = 'python'
lang[-2:]
# on
```

