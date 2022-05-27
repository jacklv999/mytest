## Leetcode SQL Note (31 - 40)

#### 1. Report Num

**Question**:

```mysql
Actions table:
| user_id | post_id | action_date | action | extra  |
+---------+---------+-------------+--------+--------+
| 1       | 1       | 2019-07-01  | view   | null   |
| 2       | 4       | 2019-07-04  | view   | null   |
| 2       | 4       | 2019-07-04  | report | spam   |
| 3       | 4       | 2019-07-04  | report | spam   |
Result table:
| report_reason | report_count |
+---------------+--------------+
| spam          | 1            |
```

**Solution**:

```mysql
select distinct extra as report_reason,
       count(post_id) over (
           partition by extra
       ) as report_count
from (
    select distinct post_id, action_date, action, extra
    from actions
    where action_date = date("2019-07-04") 
    	  and action = "report"
)new_table
```

- Filtering data that is report and is in `2019-07-04`;
- set `extra` alias as `report_reason`;
- for every record of `extra`, using window function  to `count` num;
- removing duplicate records;

#### 2. session rate

**Question**:

```mysql
Activity table:
| user_id | session_id | activity_date | activity_type |
+---------+------------+---------------+---------------+
| 1       | 1          | 2019-07-20    | end_session   |
| 2       | 4          | 2019-07-20    | open_session  |
| 2       | 4          | 2019-07-21    | send_message  |
| 3       | 2          | 2019-07-21    | open_session  |
| 3       | 2          | 2019-07-21    | end_session   |
| 3       | 5          | 2019-07-21    | open_session  |
Result table:
| average_sessions_per_user |
+---------------------------+ 
| 1.33                      |
```

**Solution**:

```mysql
select ifnull(round((
                  count(distinct session_id)/
                  count(distinct user_id)
              ),2),0) 
              as average_sessions_per_user
from activity
where activity_date 
      between date("2019-06-28") 
          and date("2019-07-27")
```

- `ifnull(A, B)` function: return `B` if `A=null`;

- About `active_date`: far more effective than hard code date

    - return the day diff of first minus second

    ```mysql
    select *
    from Activity
    where datediff('2019-07-27',activity_date) <30 
    ```

- SQL  alias: Using `with as` to define clause slices, 

    - `with as` clause must close to the clause use it;
    - multiple `as` are allowed;
    - Last `with as` can be used by latter `with as ` clause;

    ```mysql
    with tmp_1 as (select A from tmp_0),
    	 tmp_2 as (select B from tmp_1)
    ```

#### 3. Spam remove ratio

**Question**:

```mysql
Actions table:
| user_id | post_id | action_date | action | extra  |
+---------+---------+-------------+--------+--------+
| 2       | 2       | 2019-07-04  | report | spam   |
| 3       | 4       | 2019-07-04  | report | spam   |
| 4       | 3       | 2019-07-02  | report | spam   |
| 5       | 2       | 2019-07-03  | report | racism |
Removals table:          
| post_id | remove_date |   # Result table:
+---------+-------------+   # | average_daily_percent |
| 2       | 2019-07-20  |   # +-----------------------+
| 3       | 2019-07-18  |   # | 75.00                 |
```

**Solution**:

```mysql
select round(
            avg(avg_day)*100,
       2) as average_daily_percent
from (
    select action_date,
           count(r.post_id)/count(new_1.post_id) 
           as avg_day
    from(
        select distinct post_id,
               action_date
        from actions
        where extra = 'spam'
    )new_1
    left join removals r 
    on new_1.post_id = r.post_id
    group by action_date
)new_2
```

#### 4. Daily new user summary

**Question**:

```mysql
Traffic: 
+---------+----------+---------------+
| user_id | activity | activity_date |
+---------+----------+---------------+
| 1       | login    | 2019-05-01    |
| 4       | login    | 2019-06-21    |
| 4       | groups   | 2019-06-21    |
| 5       | login    | 2019-03-01    |
| 5       | login    | 2019-06-21    |
Result: 
+------------+-------------+
| login_date | user_count  |
+------------+-------------+
| 2019-05-01 | 1           |
| 2019-06-21 | 1           |
```

**Solution**:

```mysql
with min_day as (
select user_id,
       min(activity_date) as first_day
from traffic
where activity = "login"
group by user_id
having datediff(date("2019-06-30"), first_day) <= 90
)

select distinct first_day as login_date,
       count(*) over(partition by first_day) as user_count
from min_day
```

#### 5. People read articles more than two

**Question**:

```mysql
Views table:
| article_id | author_id | viewer_id | view_date  |
+------------+-----------+-----------+------------+
| 1          | 3         | 5         | 2019-08-01 |
| 1          | 3         | 6         | 2019-08-02 |
| 2          | 7         | 7         | 2019-08-01 |
| 2          | 7         | 6         | 2019-08-02 |
Result table:
| id   |
+------+
| 6    |
```

**Solution**:

- In the complex ordering, we could group by multiple field;

```mysql
select distinct viewer_id as id
from views
group by viewer_id,view_date
having count(distinct article_id) > 1
order by viewer_id
```

#### 6. Retention calculation

**Question**:

for a giving login data, return retention ratio of every day;

**Solution**:

- Using `group by` and `min` to find the first day of every user;

- Using `row_number` to find the second day of every user;
- Using `datediff` to filter user who logined in second day;
- Using `if` clause to create dummy variable of retented user;
- Deleting duplicated user id and login date, and join table;
- Using `ifnull` to handle zero problem;

```mysql
with tmp_1 as (
    select *,
           row_number() over(partition by player_id order by event_date) as rank_num
    from activity
),
tmp_2 as (
    select *
    from tmp_1
    where rank_num = 2
    group by player_id
),
tmp_3 as (
    select player_id,
       min(event_date) as first_day
from activity
group by player_id
),
tmp_4 as (
    select tmp_3.player_id,
       first_day,
       tmp_2.event_date as day_2
from tmp_3
left join tmp_2
on tmp_3.player_id = tmp_2.player_id
),
tmp_5 as (
    select player_id, first_day,
       if(datediff(day_2, first_day) = 1,1,0) as login_second
from tmp_4
)

select distinct first_day as install_dt,
       count(*) as installs,
       round(ifnull(sum(login_second)/count(*),0),2 ) as Day1_retention
from tmp_5
group by first_day
```

#### 7. Pivot table

**Question**:

```mysql
# Input
| name   | continent |
|--------|-----------|
| Jack   | America   |
| Pascal | Europe    |
| Xi     | Asia      |
| Jane   | America   |

# output
| America | Asia | Europe |
|---------|------|--------|
| Jack    | Xi   | Pascal |
| Jane    |      |        |
```

**Solution**:

- Using `with as` clause to  filter every continent’s students;
- Using `row_number` to create `key` for every sub-table
- Joining sub-table by `key` create in last clause

```mysql
with 
America_students as (
    select *,
           row_number() over() as rk
    from student
    where continent = "America"
    order by name
),
Asia_students as (
    select *,
           row_number() over() as rk
    from student
    where continent = "Asia"
    order by name
),
Europe_students as (
    select *,
           row_number() over() as rk
    from student
    where continent = "Europe"
    order by name
),
res_table_1 as (
    select America_students.rk, America_students.name as America,
       Asia_students.name as Asia
from America_students
left join Asia_students
on America_students.rk = Asia_students.rk
)

select America,
       Asia,
       Europe_students.name as Europe
from res_table_1
left join Europe_students
on Europe_students.rk = res_table_1.rk
```

