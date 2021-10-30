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

    ```mysql
    select *
    from Activity
    where datediff('2019-07-27',activity_date) <30 
    ```

- SQL  alias: Using `with as`:

    ```mysql
    with tmp as (
        select user_id
        from activity
    )
    ```

    

