## SQL模糊匹配

#### 使用Like关键字

##### 1.1 %符号

'%' 表示匹配任意0个或多个字符。 For example：

```sql
select *
from TableA
where id like 'A%'
```

##### 1.2 _符号

'_' 表示任意单个字符。For example：

```sql
select *
from tableA
where id like'A_'
```

##### 1.3 []符号

'[]' 表示匹配括号内的所列字符的任意一个。For example：

```sql
select *
from tableA
where id like '[张李王]三'
```

##### 1.4 [^]符号

'[^]' 表示不在括号内的任意符号。For example：匹配A5-A9

```sql
select *
from tableA
where id like 'A[^1-4]'
```
