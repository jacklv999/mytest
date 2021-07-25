import os
import time

tmp_str_1 = set()
tmp_str_2 = set()
for root,dirs,files in os.walk("D:\Python\Pages\mytest\读书笔记"):
        for file in files:
            tmp_str_1.add(str(os.path.join(root,file))+'\n')
            
with open('D:\\Python\\Pages\\mytest\\读书笔记\\1.txt', "r+") as f:
    line = f.readline()
    while line:
        tmp_str_2.add(line)
        line = f.readline()


t_n = time.localtime(time.time())
time_now_1 = str('0'+str(t_n[1])) if t_n[1]<10 else str(t_n[1])
time_now_2 = str('0'+str(t_n[2])) if t_n[2]<10 else str(t_n[2])
time_now = time_now_1+time_now_2

tmp_str_3 = tmp_str_1.difference(tmp_str_2)
for i in tmp_str_3:
    if str(i)[-5:-1]=='html':
        tmp_1 = str(str(i)[30:]).replace('\\','/')
        tmp_2 = '](./读书笔记/'+tmp_1[:-1]+')'
        tmp_1 = tmp_1[:-6]
        tmp_3 = tmp_1.split('/')
        tmp_4 = '- [ ] '+time_now+'['+tmp_3[-1]+tmp_2
        fp = open('D:\\Python\\Pages\\mytest\\README.md','r+',encoding='UTF-8')
        s = fp.read()                   #将指定文件读入内存
        fp.close()
        a = s.split('\n')
        a.insert(5, tmp_4)    #在第 LINE+1 行插入
        s = '\n'.join(a)                #用'\n'连接各个元素
        #print(s)
        fp = open('D:\\Python\\Pages\\mytest\\README.md','w',encoding='UTF-8')
        fp.write(s)
        fp.close()
                                       

with open('D:\\Python\\Pages\\mytest\\读书笔记\\1.txt', "r+") as f:
        read_data = f.read()
        f.seek(0)
        f.truncate()   #清空文件

for root,dirs,files in os.walk("D:\Python\Pages\mytest\读书笔记"):
    with open('D:\\Python\\Pages\\mytest\\读书笔记\\1.txt','a') as f:
        for file in files:
            f.write(str(os.path.join(root,file))+'\n')
            
  
