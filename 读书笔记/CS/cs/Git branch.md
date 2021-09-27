## Git branch

在GitHub合作中, 我们需要建立不同的分支以方便合作. 

#### 1. git init

当安装新的git时, 我们首先需要初始化git, 首先假设我们已经创建文件夹, 并且在 shell 里切换到了该文件夹. 

```bash
# gen ssh key and add it to GitHub
ssh-keygen -t rsa -C "mail@mail.com"

# configure git accunt
git config user.name "your name"
git config user.email "mail@mail.com"
```

#### 2. github configure

once we setup local git env, then we need to creat new repo in github and pull it to our local. Assuming that we already have a repo in github

```bash
# pull github repo from remote
git clone git@adress
```

#### 3. branch init

创建branch的步骤如下

```bash
# creat branch
git branch test

# change to branch 
git checkout test

# connect to remote
git remote add test git@adress.git
```

想远程分支推送更新如下:

```bash
git push origin test
```

