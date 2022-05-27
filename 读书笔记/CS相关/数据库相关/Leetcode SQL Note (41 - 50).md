## Leetcode SQL Note (41 - 50)

#### 1. select second favorite brand

**Question**:

```mysql
for each user whether the brand of the second item (by date) they sold is their favorite brand. 

It is guaranteed that no seller sold more than one item on a day.
```

**Solution**:

- Using `row_number` to find the second selled item;
- Then join table to return answer;

```mysql
with
second_item as (
    select 
    *,
    row_number() over(
        partition by seller_id 
        order by order_date
    ) as sell_order
    from orders
),
filtered_second_item as (
    select seller_id, 
           item_id
    from second_item
    where sell_order = 2
),
joined_second_item as (
    select user_id,
           favorite_brand,
           filtered_second_item.item_id 
           as second_item_id
    from users
    left join filtered_second_item
    on users.user_id = filtered_second_item.seller_id
),
add_name_joined_table as (
    select user_id,favorite_brand,
           item_brand
    from joined_second_item
    left join items
    on joined_second_item.second_item_id = items.item_id
)


select user_id as seller_id,
       ifnull(if(favorite_brand=item_brand, "yes", "no") ,"no") as 2nd_item_fav_brand
from add_name_joined_table
```

- Carefully about `select *`;

- About `if` clause:

    - If `expr=True`, Return `col_1` ’s value, else return `col_2`’s value to  a new col named A

    ```mysql
    if(
        expr, col_1, col_2
    ) as A
    ```

#### 2. Food deliver

**Question**:

- To find the percentage of immediate orders in the first orders of all customers, rounded to 2 decimal places.

**Solution**:

```mysql
with 
first_order as (
select  customer_id,
        min(order_date) as first_order_date,
        min(customer_pref_delivery_date) as customer_pref_delivery_date
from Delivery
group by customer_id
),
filtered_data as (
select distinct customer_id,
       if (first_order_date=customer_pref_delivery_date, 1, 0) as first_order_as_imdt
from first_order
)

select round( sum(first_order_as_imdt)/count(customer_id)*100 , 2) as  immediate_percentage
from filtered_data
```

- **NOTE**: `group by` clause and `min` function can not guarantee the all record will be the minimal, so do the `max` and others

    ```mysql
    select id,
           min(col_1),
           col_2
    from table_1
    group by id
    # the return value of col_2 may not be the column corresponde to the record of min(col_1)
    ```


#### 3. Find continuous number

**Solution**:

- Creating column that `id_last = id - 1`;
- Creating column that `id_follow = id + 1`;
- Using `where in` to create dummy label of whether an `id` has latter `id`, or following `id`;
- Then using `row_number` to ceate `rank_num`, then join those tables by `rank_num`;

```mysql
# Write your MySQL query statement below
with
add_following_last as (
    select log_id,
           log_id + 1 as following_id,
           log_id - 1 as last_id
    from Logs
),
add_dummy_label as (
    select log_id,
           if (last_id not in (select log_id from Logs), 1, 0) as start_id_dummy,
           if (following_id not in (select log_id from Logs), 1, 0) as end_id_dummy
    from add_following_last
),
star_id_table as (
    select log_id,
           row_number() over() as rank_num
    from add_dummy_label
    where start_id_dummy = 1
),
end_id_table as (
    select log_id,
           row_number() over() as rank_num
    from add_dummy_label
    where end_id_dummy = 1
)

select star_id_table.log_id as start_id,
       end_id_table.log_id as end_id
from star_id_table
left join end_id_table
on star_id_table.rank_num = end_id_table.rank_num
```

#### 4. Computing moving average

**Solution**:

- Ranking rows and computing daily amount;
- Using window function to compute 7 day moving amount;
- Computing moving average by moving amount;

**Code**:

```mysql
with 
ranked_table as (
  select distinct visited_on,
       sum(amount) over (
         partition by visited_on
       ) as daily_amount,
         dense_rank() over(
           order by visited_on
       ) as rank_num
  from customer
),
moving_amount as (
  select visited_on,
     sum(daily_amount) over(
        order by visited_on 
        rows between 6 preceding 
             and 
             current row
        ) as amount,
        rank_num
  from ranked_table
)

select visited_on,
       amount,
       round(
           amount/7
           ,2) as average_amount
from moving_amount
where rank_num >= 7
```

#### 5. Report continuous status

- Emulating `full outer join` in mysql:

    ```mysql
    SELECT * FROM t1
    LEFT JOIN t2 ON t1.id = t2.id
    UNION
    SELECT * FROM t1
    RIGHT JOIN t2 ON t1.id = t2.id
    ```

- Nested `if` clause are allowed

    ```mysql
    if(A=B, 
       C, 
       if(A=C, 
          B, 
          B)
      ) as new_col
    ```

**Unfinished Question**

```
https://leetcode-cn.com/problems/tournament-winners/
https://leetcode-cn.com/problems/report-contiguous-dates/
```