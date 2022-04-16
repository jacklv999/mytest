## Flask on Tencent Cloud

#### 1. 对端口

内部代码需要设置

```python
if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=XXXX
    )
```

此时, 运行 `python3 main,py` 会显示内网的路径和端口, 使用外网IP和端口即可访问.