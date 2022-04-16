## SQL Note (01 - 10)

#### 1. Find first login time

**Solution**:

- Using `min` to find the first login data
- `Group by`  the `player_id`;

**Code**:

```mysql
select player_id, min(event_date) as first_login 
from Activity
group by player_id
```

- Using SQL math function, including:

    - Aggregate functions: `avg`, `count`, `first`, `last`, `max`, `min`, `sum`;
        - used in `group by` function;
    - Scalar functions: `ucase`, `lcase`, `substring`, `len`, `round`, `now`; 

- About `group by`  and `order by`: when using this two function simultaneously, 

  - `order by` must be the latter one;
  - the result order will take all record into sorting;
  
- among group ordering:
  
  - using windows function:
    
    ```mysql
    select player_id,
           event_date, 
           row_number() over (
               partition by player_id 
               order by event_date
           ) as n
    from Activity
    ```
  
- **NOTE**: It can only be used in `select` clause;
  

#### 2. First login device

**Solution**:

- Using `row_number` sorting login date by player
- Creating new table and then select from it

**Code**:

  ```mysql
select player_id,
       device_id
from (
    select player_id,
           device_id, 
           row_number() over(
               partition by player_id 
               order by event_date
           ) as r_n
    from Activity
) new_table
where r_n = 1
  ```

- `row_number` is a windows function, so it can return sorting by `over` function’s parameters

- variable name `index` has been banned;

- Another solution is  `where ` and `in` :

    ```mysql
    select player_id,
           device_id 
    from activity 
    where (player_id,event_date) in (
        select player_id,
               min(event_date) 
        from activity 
        group by player_id
        )
    ```

- Sometimes, there may be duplicated value!

#### 3. Aggregated played games

- Using default window function range to compute accumulative sum;

```mysql
select player_id,
       event_date, 
       sum(games_played) over(
           partition by player_id 
           order by event_date
       ) as games_played_so_far
from Activity
```

- About Window Function range: 
    - Default:
        -  `rows between unbounded preceding and current row`
    - Other Choice:
        - `unbound preceding/N preceding` 
        - `current row` 
        - `unbound/N following` 

#### 4. Continuously login ratio

**Solution I**:

- Using nested `select` clause to compute total id number;
- Using `min` to find first login date;
- Using math operation and `Date` function to convert date

```mysql
select 
    round(
        count(distinct player_id)/(
            select count(
                distinct player_id
            ) 
            from Activity
        ), 2) as fraction
from Activity
where (player_id, event_date) in (
    select player_id, 
           Date(min(event_date) +1)
    from Activity
    group by player_id
)
```

- Using `where` and `in` clause to find record;
- About `round` function: `round(input, digit_number)`;
- Nested `select` clause is allowed;
- Date can be manipulated by math operation
    - Must use `Date` to convert it into date format again;

**Solution II**:

- Using `datediff` and `left join`:

```mysql
select round(
    count(distinct second_day.player_id)/count(distinct all_record.player_id),
    2
) as fraction
from Activity all_record
left join (
    select player_id, 
           min(event_date) as min_date
    from Activity
    group by player_id
) second_day
on second_day.player_id = all_record.player_id
and datediff(all_record.event_date, second_day.min_date) = 1
```

- **NOTE**: Using aggregate function will change the column name, Careful !

#### 5. Middle Salary 

- Using `row_rank` and `round` function to compute middle salary;
- Using `where in` to handling even and odd rank number;

```mysql
select id, Company, Salary
from (
    select id, 
           Company, 
           Salary, 
           row_number() over(
               partition by Company 
               order by Salary
           ) as salary_rank,
           count(id) over(
               partition by Company
           ) as total_number
    from Employee
) new
where salary_rank in (
    round(total_number/2,0), 
    round((total_number+1)/2,0)
)
```

- `Where` and `Having` clause:

    - Filtering data

        - `Where`: Must used before `group by` clause, return records for `group by` clause;

            ```mysql
            select id,
                   score
            from Tab_Name
            where score > 80
            group by id
            ```

        - `Having`: filtering `group` that satisfied `having` requirement;

            ```mysql
            select id,
                   score
            from Tab_Name
            group by id
            having max(score) > 80
            ```

    - Aggregate function

        - `Where`: Ag_func not allowed

            ```mysql
            select *
            from Tab_Name
            where Col_Name = Val
            ```

        - `Having`: Ag_func allowed

            ```mysql
            select *
            from Tab_Name
            where Ag_Func(Col_Name) = Val
            ```

#### 6. Manager with 5 or more employee

**Solution I**:

- Using `join` and `count` function

```mysql
select distinct Manager_Name as Name
from (
    select Employee.Name,
           count(*) over(
               partition by Employee.ManagerId
           ) as Employee_Number,
           new_E.Name as Manager_Name
    from Employee
    join Employee new_E
    on Employee.ManagerId = new_E.ID
) new_table
where Employee_Number >= 5
```

- Do not use `left join` to avoid `null` return

**Solution II**:

- Using `join` and `having`;

```mysql
select e2.name 
from employee e1 
join employee e2
on e1.managerid=e2.id
group by e2.id
having count(*)>=5
```

**Solution III**:

- Using `group by` and `having` to find manager_id

```mysql
select name 
from employee 
where id in(
    select managerid 
    from employee 
    group by managerid
    having count(id)>4
) 
```

#### 7. Compute median with frequency

```mysql
select avg(num) as median
from (
    select *,
           sum(Frequency) over(
               order by num
           ) as rank_1,
           sum(Frequency) over(
               order by num desc
           ) as rank_2,
           sum(Frequency) over(
           ) as total_num
    from Numbers
) new_table
where 
   rank_1 >= ceiling(total_num/2) 
and 
   rank_2 >= ceiling(total_num/2)
```

- **Using two column to compute median index**
    - **using ascending and descending**

#### 8. Get most popular candidate

```mysql
select Name 
from Candidate 
where id = (
    select CandidateId 
    from Vote 
    group by CandidateId 
    order by count(CandidateId) desc 
    limit 0,1
    )
```

- For `limit` function: 

    ```mysql
    limit a,b
    # return records from ath
    # to (a + b)th record 
    ```

    - `a`:  offset, default to be 0;
    - `b`: limited number;

- For `group by` clause:

    - return grouped value;
    - if no aggregate function, it will return the first record of every group;

- Aggregate function in `order` clause:

    - There must be a `group by` clause;
    - Then, compute aggregated value and sorting

#### 9. Get bonus

- Select employee has bonus < 1000;

```mysql
select name,
       bonus
from Employee
left join Bonus
on Employee.empId = Bonus.empId
where bonus < 1000 or bonus is null
```

- SQL key word: `null`, `is`, `null`, `not`
    - `null` can only be identify by `is`, not `=`;
    - `is not` and `!=`: operations are limit to un-null, so the latter one will omit `null` value;

#### 10. sorting by answer ratio

```mysql
select  question_id as survey_log 
from survey_log 
group by question_id
order by sum(if(action="answer",1,0))/count(*)  desc
limit 1
```

- Function `if`:

    - expr: `IF(expr1,expr2,expr3)`
    - it returns `expr2` when `expr1` = `True`;

- `case when` clause:

    ```mysql
    select
    case 
    when A.id='1' then '一'
    when A.id='2' then '二'
    end as ORDER_NUM 
    from A;
    ```