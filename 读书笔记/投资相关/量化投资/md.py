import os

if not os.path.exists('md.db'):
    with open('md.db','w') as f:
        for fs in os.listdir():
            f.write(fs+'\n')
else:
    with open('./md.db','r') as f:
        file_list = f.read().splitlines()


add_items = []

for item in os.listdir():
    if item not in file_list:
        add_items.append(item)


with open("./README.md", "a") as f:
    for item in add_items:
        if item[-4:] == 'html':
            tmp_str = "- [" + item[:-5] + "](./" + item + ") \n"
            f.write(tmp_str)
        
with open('./md.db', "r+") as f:
        read_data = f.read()
        f.seek(0)
        f.truncate()   #清空文件

with open('./md.db','a') as f:
    for file in os.listdir():
        f.write(str(file)+'\n')