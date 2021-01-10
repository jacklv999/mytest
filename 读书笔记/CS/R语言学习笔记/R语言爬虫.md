## R语言爬虫

##### 1.R语言下载网页数据

使用 `curl::curl_download` 函数下载文件, 但是需要先建立临时文件

```R
url_shen = "https://www.goratings.org/players-json/data-1313.json"

tmp <- tempfile()
curl::curl_download(url_kj, tmp)
```

##### 2.解析Json对象

在R语言里解析JSON对象需要函数包 `rJSON` , 可用的主要函数包括: `fromJSON` 和 `toJSON` 

```R
json_kj = fromJSON(file=tmp)
```

##### 3.JSON数据

R语言JSON对象是以列表形式存储的, 因此需要使用列表的方法访问JSON数据

获取数据后, 一般也需要使用 `unlist()` 函数转换数据才能使用 Vector 或者 Dataframe 对目标进行操作.

```
unlist(json_shen[[1]][[2]][i])
```

#### 4. 保存JSON数据

将数据保存成JSON格式, 可以使用 `write.json` 函数, 但是输出格式不够友好, 一般建议使用如下方式

```R
#转换为JSON数据
t_1 = toJSON(tt)
# 使用cat函数以文本格式输出
cat(t_1, file = (con <- file(
    'json.txt', "w", 
    encoding = "UTF-8")))
close(con)

```

