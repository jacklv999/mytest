## Leetcode SQL Note (21-30)

#### 1. Find closest dist in plane

```mysql
select round(sqrt(min(dist)),2) as shortest
from(
    select abs(A.x - B.x)*abs(A.x - B.x) + abs(A.y - B.y)*abs(A.y - B.y) as dist
    from Point2D as A,
         Point2D as B
)new_table
where dist != 0
```

- SQL frequently used function

    - Time Related: `month()`, `Year()`, `day()`;

        ```mysql
        select getdate() #return '2021-10-29 16:31:00'
        select year('2021-10-29')   # return 2021
        select month('2021-10-29')   # return 10
        select day('2021-10-29')     # return 29
        ```

    - Math Related: `abs`, `ceiling`, `floor`, `exp`, and so on

        ```mysql
        select abs(col)            #return abs value
        select ceiling(col)        # return ceiling
        select floor(col)          # return floor value
        select exp(col)            # return e^col
        select pi()                # return 3.141..
        select power(col,pow_col)  # return col^pow
        select sqrt(col)           # return sqrt
        ```

#### 2. Find follower’s follower

**Question**:

```mysql
# for following input: 
| followee    | follower   |
+-------------+------------+
|     A       |     B      |
|     B       |     C      |
|     B       |     D      |
|     D       |     E      |
# return: 
| follower    | num        |
+-------------+------------+
|     B       |  2         |
|     D       |  1         |
```

**Solution**:

- Finding follower by `select` and `where in` clause
- Using windows function to count total number

```mysql
select distinct followee as follower,
       count(*) over(
           partition by followee
       ) as num
from follow
where followee in (
    select follower 
    from follow
)
```

#### 3. Comparison department salary 

```mysql
select distinct pay_month,
       department_id,
       case 
       when dep_mean > com_mean then "higher"
       when dep_mean = com_mean then "same"
       when dep_mean < com_mean then "lower"
       end as comparison
from (
    select concat(
        	year(pay_date),
        	"-", 
        	if(month(pay_date)>9,
               month(pay_date),
               concat("0",month(pay_date)))
    		) as pay_month,
       		department_id,
       		salary.employee_id,
       		avg(amount) over(
                partition by pay_date
            ) as com_mean,
       		avg(amount) over(
                partition by pay_date,
                			 department_id
            ) as dep_mean
    from salary
    left join employee t_2
    on salary.employee_id = t_2.employee_id
) new_table
order by pay_month, department_id asc
```

- About window function:
    - multiple columns in `partition by` are allowed;
- About `concat` function:`concat("A","B","C")`
    - It could be used to concatenate str;

#### 4. Sorting by employee number

```mysql
select project_id
from Project
group by  project_id
having count(employee_id)>=all(
    select count(employee_id) 
    from Project 
    group by  project_id
)
```

#### 5. Person has A but does not B

**Question**

```mysql
Product table:
| product_id | product_name |
+------------+--------------+
| 1          | S8           |
| 2          | G4           |
| 3          | iPhone       |
Sales table:
| seller_id | product_id | buyer_id |
+-----------+------------+----------+
| 1         | 1          | 1        |
| 1         | 2          | 2        |
| 2         | 1          | 3        |
| 3         | 3          | 3        |
Result table:
| buyer_id    |
+-------------+
| 1           |
```

**MySQL Code**

```mysql
select distinct buyer_id
from(
    select buyer_id
    from Sales
    left join Product
    on Sales.product_id = Product.product_id
    where product_name = "S8"
) new
where buyer_id not in (
    select buyer_id
    from Sales
    left join Product
    on Sales.product_id = Product.product_id
    where product_name = "iPhone"
)
```

#### 6. Retention rate

**Solution**

```mysql
SELECT d1 AS install_dt,
       ROUND(COUNT(t1.player_id),2) AS installs,
       ROUNT(COUNT(t2.player_id)/COUNT(t1.player_id),2) AS Day1_retention
FROM
  (SELECT player_id,
          MIN(event_date) AS d1
   FROM Activity
   GROUP BY player_id) t1

LEFT JOIN

  (SELECT player_id,
          event_date AS d2
   FROM Activity) t2 ON t1.player_id=t2.player_id
AND DATE_SUB(d2,INTERVAL 1 DAY) = d1
GROUP BY d1;
```

**Another Solution**:

- Creat `first day` column
- Then computing whether the is the next day of `first day`;

```mysql
SELECT
    first_day as install_dt,
    count(DISTINCT player_id) as installs,
    ROUND((
        SUM(
            if(datediff(event_date, first_day) = 1, 1, 0))
    ) / (count(DISTINCT player_id)
    ), 2) as Day1_retention
FROM(
    SELECT player_id,
           event_date,
           MIN(event_date) over(
               partition by player_id
           ) as first_day
    FROM Activity
) a 
GROUP BY first_day
```

#### 7. Students reports

