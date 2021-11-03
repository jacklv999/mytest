## Leetcode SQL Note (11 - 20)

#### 1. Salary of last three month accumulate salary

- Using window function

```mysql
select id, 
       month, 
       sum(salary) over (
           partition by id 
           order by month 
           rows 2 preceding
       ) as salary
from (
    select *,
           max(month) over(
               partition by id
           ) as max_month
    from Employee
)new_table_1
where month < max_month
order by id asc,month desc
```

- About `order by` clause:
    - multiple sorting is allowed;
    - Sorting data by  fields with different requirement；
- `if` clause is allowed in `select` clause
- Window function
    - `rows 2 preceding` 

#### 2. count students num

- `jion` table to compute different `dept`‘s student num;

```mysql
select distinct dept_name,
       count(student_id) over (
           partition by dept_name
       ) as student_number
from department
left join student
on student.dept_id = department.dept_id
order by student_number desc
```

#### 3. find referee

```mysql
select name
from customer
where referee_id != 2 or referee_id is null
```

- About `null`:
    - `null` can be identified by `is`;
    - `count(*)` will take `null` into consideration, but not `count(col_name)`;

#### 4. Find unique location and un-unique input

- Using `row_number` and windows function to label individuals;
- Find the unique and un-unique items;

```mysql
select round(sum(TIV_2016),2) as TIV_2016
from(
    select *,
       max(max_num_money) over(
           partition by TIV_2015
       ) as max_money,
       max(max_num_city) over(
           partition by LAT,LON
       ) as max_city
    from(
        select *,
               row_number() over(
                   partition by TIV_2015
               ) as max_num_money,
               row_number() over(
                   partition by LAT,LON
               ) as max_num_city
       from insurance
    )new_table_1
)new_table_2
where max_money > 1 and max_city = 1
```

#### 5. Sorting on order number

- Using `order` and `aggregate function` ;

```mysql
select  customer_number
from orders
group by customer_number
order by count(order_number) desc
limit 1
```

#### 6. Friends number

```mysql
select id_1 as id,
       num_1 + num_2 as num
from (
    select distinct requester_id as id_1,
           count(
               requester_id
           ) over(
               partition by requester_id
           ) as num_1
    from requestaccepted
)table_1
join(
    select distinct accepter_id as id_2,
           count(
               accepter_id
           ) over(
               partition by accepter_id
           ) as num_2
    from requestaccepted
)table_2
on table_1.id_1 = table_2.id_2
order by num_1 + num_2 desc
limit 1
```

- In `order` sorting, `null` will behavior different, so we need:
    - `order by age desc nulls last`;
    - `order by age desc nulls first`;
- `full outer join`:
    - not supported in MySQL

#### 7. Find continuous seat ID

**Solution**:

- Creating first table by labeling all free seat;
- Creating second table by minusing `seat_id` and `row_number`;
- Filtering `seat_diff` to count continuous seat number 

```mysql
select seat_id
from(
    select seat_id,
           count(*) over(
               partition by seat_diff
           ) as free_seat_num
    from (
        select seat_id,
               abs(seat_id - rk) as seat_diff
        from (
            select seat_id,
                   row_number() over (
                       partition by free 
                       order by seat_id
                   ) as rk
            from cinema
            where free = 1
        )new_table
    )new_table_1
)new_table_2
where free_seat_num > 1 
```

**Another solution**:

```mysql
select distinct a.seat_id
from cinema as a, 
     cinema as b
where abs(a.seat_id - b.seat_id) = 1
	  and a.free = 1 
	  and b.free = 1
order by a.seat_id
```

- When there are more than one table in `from` clause:

    - Returns a table fully connected

        ```mysql
        # input            # return
        # [1,1]            # [2, 0, 1, 1]
        # [2,0]            # [1, 1, 1, 1]
        # [3,1]            # [2, 0, 2, 0]
        #                  # [1, 1, 2, 0]
        ```

#### 8. Tree Node

- Classifying tree node type;

```mysql
select id,
       case 
       when p_id is null then 'Root'
       when p_id in (
           select p_idfrom Tree
       ) then "Inner"
       else "Leaf"
       end as Type
from Tree
```

- `case when` clause:
    - `else` clause is supported;
    - alias is supported;