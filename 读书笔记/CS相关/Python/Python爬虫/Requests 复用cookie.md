## Requests 复用cookie

使用requests的session登录即可复用cookie。

```python
login_url = "https://aa.com/login.html"
login_data = {"account":"aaaa","password":"bbb"}
s.post(url=login_url,data = login_data)
```

