## Requests下载文件

使用requests下载文件：

- 发送请求后，下载内容在 res.content 中，直接保存即可。

```python
s = requests.session()

down_url = 'https://qaa.com/atera-01'
down_res = s.get(down_url)

with open("./static/data/raw_data/dz.csv","wb") as code:
    code.write(down_res.content)

```

