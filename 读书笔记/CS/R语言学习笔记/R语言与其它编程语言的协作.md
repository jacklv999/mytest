## R语言与其它编程语言的协作

#### 1.Python

- 1.相关包

```R
library(reticulate)
use_python("/usr/local/bin/python")
```

- 2.运行 Python 代码

```R
py_run_string(code, local = FALSE, convert = TRUE)

py_run_file(file, local = FALSE, convert = TRUE)

py_eval(code, convert = TRUE)
```

#### 2.MATLAB

- 1.测试或添加 MATLAB

```R
get_matlab()
have_matlab()
```

- 2.转换至 MATLAB 数据

```R
rmat_to_matlab_mat(x, matname = NULL, transpose = FALSE)
rvec_to_matlabclist(x, matname = NULL)
```

- 3.运行 MATLAB 代码

```R
run_matlab_code("code;pause", verbose = FALSE, display = TRUE)	
##在代码后以";"隔开并添加 pause 以显示结果
```

- 4.运行 MATLAB 脚本

```R
run_matlab_script(fname, verbose = FALSE, display = TRUE)
```

#### 3.C Language

- 1.安装 RTools 并添加 Path
- 2.安装 MingW 并添加 Path
- 3.生成dll 文件

```R
setwd("H:/test/")
system("R CMD SHLIB massdistnew.c")
```

- 4.加载 dll 文件

```R
 dyn.load('H:/test/massdistnew.dll')
```

- 5.调用函数

```R
dyn.load('H:/test/Rcpp_test/massdistnew.dll')
y = .C("massdisttest", x = as.double(xtrunc), y = double(n))$y
```

