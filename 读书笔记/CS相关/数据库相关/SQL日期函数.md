## SQL日期函数

#### 获取年月日

##### 获取年份

```SQL
select year("2020-09-01")

select year("20200901")
```

##### 获取月份

```sql
select month("2020-09-01")

select month("20200901")
```

##### 获取周数

```sql
select week("2020-09-01")

select month("20200901")
```

##### 获取日期

```sql
select day("2020-09-01")

select day("20200901")
```

#### 日期计算

##### dateadd

```sql
select dateadd(d, 20, '20210812')
```

##### datediff

```sql
select datediff(d,'20220201','20220301')
```

##### 日期type

可选的包括：`y`, `q`, `m`, `w`, `d`.