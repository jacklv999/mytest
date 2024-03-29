## SQL related

**Getdate**:

return date in `2008-12-29 16:25:46.635`;

**Dateadd**:

func format: `DateAdd(interval, number, date)`;

- interval:
  - yyyy/yy, add by year;
  - q, add by quarter;
  - m, add by month;
  - d, add by day;
  - w/ww, add by week;
  - hh, add by hour;
  - s, add by second;

**Delete**:

same as `select` clause;

#### Define Clause

**Create**:

```sql
CREATE TABLE table_name (
    column_name column_type,
    `id` INT AUTO_INCREMENT,
    `title` VARCHAR(2) NOT NULL,
    `date` DATE,
)
```

**DROP**:

```sql
# drop table
DROP TABLE table_name ;
```

**ALTER**:

```sql
# add col
ALTER TABLE table_name
ADD column_name datatype

# alter col type
ALTER TABLE Persons
ALTER COLUMN DateOfBirth year

# drop col
ALTER TABLE Persons
DROP COLUMN DateOfBirth
```

**VIEW**: Return of a sql clause;

```sql
# CREATE VIEW
CREATE VIEW view_name AS
SELECT column_name(s)
FROM table_name

# Update VIEW
CREATE OR REPLACE VIEW 

# DROP VIEW
DROP VIEW view_name
```

**TRIGGER**:

```sql
CREATE TRIGGER
ALTER TRIGGER
DROP TRIGGER
```

#### Control Clause

```sql
# grant user privilege
GRANT
# grant all database
GRANT select on BookStore.* to UserA

# deny user privilege
DENY
DENY SELECT  ON  MyView  TO user4

# revoke privilege, but inherit privilege still exist;
REVOKE
```

#### SQL Optimization

- Do select as early as possible;
- Avoid multiple table select;
  - instead by join
- Do not use pattern-like, is null, in or any other complicated operation in `where` clause;
  - it will result in full table search;

#### 其它问题

- 基本的select from where group by having，左右外内连接，union和union all，去重，if then else，case when end 还要熟练掌握各种聚合函数，如sum,max,count 

- 开窗函数 
- 字符串处理函数 
- 索引 
- SQL常见优化手段
  - 为使查询更有效率，应该大表在前还是小表在前，为什么要这么做；
- 应用题
  - 估算明日DAU，查询各科成绩大于平均成绩的学生名单
