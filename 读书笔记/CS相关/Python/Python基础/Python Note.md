## Python Note

##### 1. Inline `for` 

```python
x = [i for i in range(10)]
# [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

##### 2. Grammar for `list`:

- One of five basic data type of Python, and it can take almost all data type as element, except `set`;

- Method: 

  - Changing element:

    - Insert: 

      - `L.insert(i, obj)`;

      - inserting obj by index

      - inserting to first:

        `L_N.insert(0,obj)`;

    - append: `L.append(obj)`;

    - pop: `L_Name.pop()`;

    - remove: `L.remove(obj)`;

  - Getting attribution:

    - Max: `max(L_Name)`;
    - Min: `min(L_Name)`;
    - Length: `Len(L_Name)`;

  - Other Operation:

    - Sorting: `L.sort`, asc default;
    - Reverse: `L.reverse()`;
    - Searching: `L.index(obj)`;
      - Find the obj’s index
    - Counting:`L.count(obj)`, 
      - counting obj. num;

##### 3. Grammar for `tuple` 

- Same with list, it can storage any data type, but it can not change since initialization;
- Method(only two):
  - `T.count(obj)`;
  - `T.index(obj)`;





