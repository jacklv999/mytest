## DearPyGUI Tutorial Note

#### 1. Themes

to be specific, the theme “light” is most suitable theme for every scene.

```python
from dearpygui.core import *
from dearpygui.simple import *

with window("Tutorial"):
    set_theme("Light")

start_dearpygui()
```

#### 2. Primary Window

The DearPyGUI could display multiple windows simultaneously, so, it is important to set main windows as default.

```python
start_dearpygui(primary_window="Tutorial")
```

#### 3. Menu Bar

Setting menu bar is warped by `menu_bar` function, so, we could have code as follow:

```python
with window("Tutorial"):
    with menu_bar("Main Menu Bar"):
        with menu("File"):
            add_menu_item("Save", 
                      callback=A)
            add_menu_item("Save As", 
                      callback=B)
        with menu("Settings"):
            add_menu_item("Setting 1", 
                          callback=A)
        add_menu_item("Help", 
                      callback=A)
        with menu("Widget Items"):
            add_checkbox("Pick Me", 
                         callback=A)

start_dearpygui()
```

#### 4. Wiget Layout

Using `add_same_line` to control same line space, and using `add_space` to control different line

```python
with window("Tutorial"):
    add_button("Apply")			#line 1
    add_same_line(spacing=5)	#line 1
    add_button("Apply##1")		#line 1
    
    add_spacing(count=5)		#line 2
    
    add_button("Apply##3")		#line 3

start_dearpygui() 
```

#### 5. Value and Data Storage

Values are retrieved from the value system using `get_value`. 
Values can be changed manually using `set_value`.

```python
with window("Tutorial"):
    add_checkbox("Radio Button1", source="value_1")
    add_checkbox("Radio Button2", source="value_1")
    add_input_text("Text Input 1", source="value 2")
    add_input_text("Text Input 2", source="value 2", 
                   password=True, tip="this is password")

start_dearpygui()
```

#### 6. Using Image

In draw item, image could be displayed

```python
with window("Tutorial"):
    add_drawing("Drawing_1", width=700, height=700)

draw_image("Drawing_1", 
           'Example.png', 
           [0, 700], 
           pmax=[200, 500], 
           uv_min=[0, 0], uv_max=[1, 1], 
           tag="image")

start_dearpygui()
```

#### 7. File and Directory Operation

In directory operation:

```python
def directory_picker(sender, data):
    select_directory_dialog(callback=apply_selected_directory)

def apply_selected_directory(sender, data):
    directory = data[0]
    folder = data[1]
    set_value("directory", directory)
    set_value("folder", folder)
    set_value("path", f"{directory}\\{folder}")


with window("Tutorial"):
    add_button("Directory Selector", 
               callback=directory_picker)
    
    add_text("Directory: ")
    add_same_line()
    add_label_text(source="directory")
    
    add_text("Folder: ")
    add_same_line()
    add_label_text(source="folder")
    
    add_text("Path: ")
    add_same_line()
    add_label_text(source="path")

start_dearpygui()
```

in file operation:

```python
def file_picker(sender, data):
    open_file_dialog(callback=apply_selected_file, extensions=".*,.py")

def apply_selected_file(sender, data):
    directory = data[0]
    file = data[1]
    set_value("directory", directory)
    set_value("file", file)
    set_value("file_path", f"{directory}\\{file}")

with window("Tutorial"):
    add_button("Directory Selector", callback=file_picker)
    
    add_text("Directory Path: ")
    add_same_line()
    add_label_text(source="directory")
    
    add_text("File: ")
    add_same_line()
    add_label_text(source="file")
    
    add_text("File Path: ")
    add_same_line()
    add_label_text(source="file_path")

start_dearpygui()
```

