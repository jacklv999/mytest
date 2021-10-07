## Git Config

Git非常常用, 此处记录 git config 的部分用法.

#### 1. Config 文件

一般情况下, 有关 git 的配置文件是全局的, 通常由 `git config --global` 进行设置, 但是, 当我们创建一个新的目录, 并使用 `git init` 初始化之后, 在该文件夹下会存在 `.git` 文件, 用于存储 git 的配置, 我们可以直接修改 `config` 文件以修改配置.

#### 2. 查看config

```bash
# 查看配置
git config --list

# 查看全局配置
git config --global --list

# 查看本git下配置
git config --local --list
```

#### 3. 增加config

```bash
# 增加local配置
git config configName configValue

# 增加global配置
git config --global configName configValue
```

#### 4. 删除config

```bash
# 删除配置
git config --unset configName

# 删除全局配置
git config  --global --unset configName
```

#### 5. 修改config

```bash
git config configName configValue
```

