## SQL字符串

#### SQL数据类型转化

`cast` 函数可以用于数据类型的转换，常见的数据类型包括：

- Integer：
  - MYSQL: SIGNED
  - Oracle/SQLServer: INT
- Float：
  - SQLServer/MySQL/Orcale: float
- String:
  - MYSQL: Char
  - SQLServer: Varchar
  - Orcale: Varchar(length)

常见用法为：

```sql
select cast(col_name as data_type)
from table_name
```

#### 字符串截取

使用 `Left` 和 `Right` 函数可以进行字符串剪切(对 MYSQL and SQL Server)!

##### 从左至右截取

```SQL
select left(name, 2)
from employee
```

##### 从右至左截取

```SQL
select right(name, 2)
from employee
```

##### 截取指定位置

```SQL
select substring(name, 1,3)
from Employee
```

#### 字符串拼接

使用 `concat` 函数可以拼接字符串。

##### 对MYSQL and MS SQL Server：

we can concatenate any numbers of string！

```SQL
select concat(
          name, '-', name
        ) as new_str
from Employee
```

##### 对 Oracle SQL：

we can only concatenate two str！

```SQL
select concat(
          name, name
       ) as new_str
from Employee
```

CREATE NEW PURE CHAT COL:

```SQL
select *,
       case when id > 0 then '--'
            else '--'
       end as new_col
from Employee
```

#### 字符串预处理

##### 去除前后空格

```sql
select trim(name)
from employee
```

