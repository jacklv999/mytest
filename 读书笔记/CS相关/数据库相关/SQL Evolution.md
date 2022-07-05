## SQL Evolution

#### **1. Window Function**

- Definition: Return same value for every row;

- Usage: SQL_Func() OVER (partition by Col_Name(s) order by Col_Name(s))

    - OVER: Key word for window function

    - Partition by: the field used to group

        ```sql
        select *,avg(score) over (partition by class_name) as avg_math_score
        from All_Score
        ```

    - Order by: 

        ```sql
        select *, rank() over(partition by class_name order by math_score desc) as rank_rank
        from score
        ```

        - row_number(): give id number for every row;
        - rank(): ranking rows, but joint rank would have blank after it;
        - dense_rank(): the same, but no blank rank;

#### 2. Table Transposition

the transposition of table in sql is not as convenient as R/Python, we need a long formula to do it. Although Oracle has `pivot` and `unpivot` for transposition, but not all database providers follow it. 

Then, if we are going to do it with out Oracle, we should use `case/when/then` key words:

- Usage: add new col and value

    ```sql
    /* add new column named 性别, 
    and it's value were depends on 
    sex column*/
    
    select u.id,u.name,u.sex,
          (case u.sex
            when 1 then '男'
            when 2 then '女'
            else '空的'
            end
           )性别
    from users u;
    ```

Another solution is use `union` key words, here are example:

- Q: convert table a to table b:

    ![](data:image/jpeg;base64,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)

- A:

    ```sql
    select name, 'english' as subject, english as score from a1
    union
    select name, 'maths' as subject, maths as score from a1
    union
    ........
    ```

#### 3. having、where

this two key words are all used as filter to manipulate data, but the there are some nuances between them: 

- Having:
    - Used after `group by`
    - function `avg`, `sum`, `max`, `mean`, `count` could be used after having;
- Where: 
    - must before `group by`,
    - aggregate function must before where

Let me show you the usage:

```sql
SELECT column_name, aggregate_function(column_name)
FROM table_name
GROUP BY column_name
HAVING aggregate_function(column_name) operator value;
```

Here are examples:

```sql
SELECT name, SUM(log_num) AS nums 
FROM access_log
GROUP BY name
HAVING SUM(log_num) > 200;
```

#### 4. Order by frequency

Return data by frequency of `field`:

```sql
select score, count(*) 
from students 
group by score
```

#### 5. Getting continuous count

Using `row number` and `group` key words:

```sql
select max(index_num) 
from login
```

#### 6. ifnull function

FNULL() 函数用于判断第一个表达式是否为 NULL，如果为 NULL 则返回第二个参数的值，如果不为 NULL 则返回第一个参数的值。

```sql
IFNULL(
    expression, 
    return_value
)
```

