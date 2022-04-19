## DPG使用细节笔记

#### 1. 全局数据

DPG中全局数据使用 `add_data()` 和 `get_data()` 处理

```python
def fun_1(sender, data):
    dt_tmp = pd.DataFrame(dt['datas'])
    add_data("stored_data", dt_tmp)

def fun_2(sender, data):
    dt = get_data("stored_data")
```

#### 2. 表格相关

- 创建表格

    ```python
    add_table("Table##widget", dt['x'],before="txt")
    tabdt = []
    for i in range(0, 3):
         w = dt[i]
         tabdt.append(w)
    
    set_table_data("Table##widget", tabdt)
    ```

- 修改表格

    ```python
    insert_column("Table##widget",0,"new_col", range(4))
    ```

#### 3. 设定窗口大小

```python
set_main_window_size(650, 850)
start_dearpygui(primary_window="Tutorial")
```

#### 4. 动态添加 Widget

动态添加组件, 必须手动指明其父容器或者在何组件之前; 删除组件, 使用 `delete_item()`

```python
def reset(sender,data):
    delete_item("Table##widget")
    delete_item("txt")
    add_input_text("txt",multiline=True,before="csv")
```

#### 5. 使用中文字体

使用中文字体可以在工作目录添加 “NotoSerifCJKjp-Medium.otf” 或第三方TTF/OTF字体文件, 并在`start_dearpygui()` 导入字体, 指明字号和字体类型.

NOTE: 华文新魏貌似是体积最小的中文字体

```python
add_additional_font("NotoSerifCJKjp-Medium.otf", 20, "chinese_full")
start_dearpygui(primary_window="Main Window")
```

