## SQL教程

**1.  选择: SELECT**

- 选择特定key, 或所有key

    ```sql
    SELECT column_name
    FROM table_name;
    ```

- 选择所有key

    ```sql
    SELECT * FROM table_name;
    ```

- 选择唯一值

    ```sql
    SELECT DISTINCT column_name
    FROM table_name;
    ```

    **注意**：使用distinct clause时，选择的是结果中的唯一列。如果结果不是唯一列，则无法选择。

    下列子句无法筛选唯一列：

    ```sql
    select distinct salary,
           row_number() over(order by salary) as rx
    from Employee
    ```

    下列子句可以筛选唯一列：

    ```sql
    select distinct salary,
           dense_rank() over(order by salary) as rx
    from Employee
    ```

- 选择前n项: 不是所有SQL都支持

    ```sql
    SELECT TOP number|percent column_name(s)
    FROM table_name
    ```

**3. 过滤: WHERE**

```sql
SELECT column_name,column_name
FROM table_name
WHERE column_name operator value;
```

- 复杂过滤条件

    -  **IN**: 多个值

        ```sql
        SELECT column_name(s)
        FROM table_name
        WHERE column_name IN (value1,value2,...);
        ```

    - **BETWEEN**: 值范围

        ```sql
        SELECT column_name(s)
        FROM table_name
        WHERE column_name BETWEEN value1 AND value2;
        ```

**4. 逻辑运算: AND/OR**

```sql
SELECT * FROM Websites
WHERE alexa > 15
AND (country='CN' OR country='USA');
```

**5. 排序: ORDER BY**

```sql
SELECT column_name,column_name
FROM table_name
ORDER BY column_name,column_name ASC|DESC;
```

**6. 插入: INSERT**

```sql
INSERT INTO table_name
VALUES (value1,value2,value3,...);

INSERT INTO table_name (column1,column2,column3,...)
VALUES (value1,value2,value3,...);
```

**7. 更新: UPDATE**

```sql
UPDATE table_name
SET column1=value1,column2=value2,...
WHERE some_column=some_value;
```

**8. 删除: DELETE**

```sql
DELETE FROM table_name
WHERE some_column=some_value;
```

**9. 模式搜索: LIKE**

```sql
SELECT column_name(s)
FROM table_name
WHERE column_name LIKE pattern;
```

- **通配符**

    | %                              | 替代 0 个或多个字符        |
    | ------------------------------ | -------------------------- |
    | _                              | 替代一个字符               |
    | [*charlist*]                   | 字符列中的任何单一字符     |
    | [^*charlist*] 或 [!*charlist*] | 不在字符列中的任何单一字符 |

**10. 合并: JOIN**

```sql
SELECT column_name(s)
FROM table1
JOIN table2
ON table1.column_name=table2.column_name;
```

**11. 聚合SELECT: UNION**, used to combine `select` result, and the return of different select clause must have same column name and data type;

```sql
SELECT column_name(s) FROM table1
UNION
SELECT column_name(s) FROM table2;
```

#### 12. ifnull函数

不用选择表，可以直接使用!!!!

**用于处理选择结果为空（即没有符合条件的item）的情况！！！** 

```mysql
select ifnull(
	(select salary
    from employee),
    0
) as all_salary
```
