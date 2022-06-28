## CMD环境变量

#### 1. 修改用户环境变量

```bash
setx new_var new_value
```

注: 当存在空格或其它符号时, 可以用双引号将其包起来

#### 2. 修改系统环境变量

```bash
setx /m new_var new_value
```

#### 3. 引用变量

使用双百分号可以引用变量

```bash
%var_name%
```

#### 4. 临时修改环境变量

使用 `set` 命令

```
set var_name vae_value
```

