#### 1.Python模块化编程

- 1.模块化编程: 

  - 1.代码: 

    ```python
    if __name__ == "__main__":
    	pass	
    ```

  - 2.含义: Python代码运行时引入其他模块, `__name__`的值变为该模块名称, 若不强制赋值会导致完整运行整个引入模块

- 2.模块路径

  - 1.自定义模块与主程序在同一目录: 

    ```python
    import module_name
    ```

  - 2.自定义模块与主程序在同一工程文件夹

    ```python
    #在每一目录下创建 __init__.py 文件, 内容可为空
    #将模块文件放到某文件夹并添加__init__.py空白文件，则文件夹就变成了python包
    import 工程文件夹顶级目录.次级目录...file_name
    from 工程文件夹顶级目录.次级目录...file_name import func_name
    ```

#### 