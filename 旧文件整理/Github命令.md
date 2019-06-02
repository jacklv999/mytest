# GitHub简单命令

1.git clone  //本地如果无远程代码，先做这步，不然就忽略

2.cd //定位到你blog的目录下

3.git status //查看本地自己修改了多少文件

4.git add . //添加远程不存在的git文件

5.git commit  -m "what I want told to someone" //提交修改

6.git push  //更新到远程服务器上

7.git rm //移除文件
~~~
rm test.txt
git rm test.txt
git commit -m "remove test.txt"
~~~

8.git pull
~~~
git pull命令用于从另一个存储库或本地分支获取并集成(整合)。git pull命令的作用是：取回远程主机某个分支的**更新**(云端修改或其他主机修改文件)，再与本地的指定分支合并，它的完整格式稍稍有点复杂
~~~

9.git checkout -- test.txt
git checkout其实是用版本库里的版本替换工作区的版本，无论工作区是修改还是删除，都可以“一键还原”。

10.批量删除文件
直接在文件夹里删除文件,然后使用提交修改
~~~
git status
git add .
git commit -m "text"
git pull #确保云端文件与本地初始文件一致
git push
~~~