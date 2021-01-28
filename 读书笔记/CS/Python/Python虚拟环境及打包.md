## Python虚拟环境及打包



#### 1. 安装虚拟环境

- 1.安装 `virtualenv`

    ```python
    pip install virtualenv
    ```

- 2.创建虚拟环境

    ```python
    mkdir File_Folder_Name
    cd File_Folder_Name
    virtualenv MY_Project_Name_Env
    ```

- 3.激活或取消虚拟环境

    ```python
    cd MY_Project_Name_Env
    cd Scripts
    activate     #activate virtual environment
    deactivate   #deactivate virtual environment
    ```

- 4.安装相关软件包

    ```python
    pip install pyinstaller
    pip install pyperclip
    ```

- 5.Coding or Complied code

    ```python
    pyinstaller -F 1.py
    ####
    Pyinstaller -F setup.py 打包exe
    
    Pyinstaller -F -w setup.py 不带控制台的打包
    
    Pyinstaller -F -i xx.ico setup.py 打包指定exe图标打包
    pyinstaller -F 1.py --upx-exclude=vcruntime140.dll
    ```

#### 

