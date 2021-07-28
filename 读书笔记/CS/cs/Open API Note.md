# Open API Note

Open API是一个开放的标准, 可以用来创建和维护API, 其各部分如下:

##### 简介部分

OpenAPI的第一部分是API的简介.

```yaml
swagger: "2.0"
info:
  version: "1.0.0"
  title: "FAW API"
host: "service-2iw0gjai-1257408844.gz.apigw.tencentcs.com"
basePath: "/"
```



- `swagger: "2.0"`: 指明其标准, 其中 `open API` 由 `Swagger` 捐献, 所以两者一致
- `info` : 介绍API的基本信息, 包括版本和名字
- `host` : 介绍 host 该 API 的主机地址
- `basepath` : 介绍该 API 在主机地址下的具体位置

##### Tag部分

常见API通常分为多类, 即某个主机host的API通常有多类API, 不同的API用不同的tag区分.

```yaml
tags:
- name: "release"
  description: "release version API"
```

##### API具体注释

一般情况下, 我们以 OpenAPI 的格式公布 API 通常遵循以下注释:

```yaml
paths:
  /release/{URL}:
    get:
      tags:
      - "release"
      summary: "test"
      description: "test"
      operationId: "test"
      produces:
      - "application/xml"
      - "application/json"
      parameters:
      - name: "URL"
        in: "path"
        description: "base 64 encoded URL"
        required: true
        type: "string"
        format: "string"
      responses:
        "200":
          description: "successful operation"
          schema: 
            type: "string"
        "400":
          description: "Invalid URL"
        "404":
          description: "not found"
```

- `path`: 表示该 API 在 `basepath` 下的路径
- `get` : 表示该 API 的访问方法, 通常包括 `get`, `post`, `patch` 等
- `parameters`: 表示该 API 的参数方法
  - `name`: 表示传入的参数名
  - `in`: 表示参数的位置, 包括 `path`, `query`, `header` , `body` 等
  - `type` : 表示参数的类型, 包括 `string`, `int` 等
  - `format`: 表示参数的格式, 包括 `string`, `int64` 等
  - `response`: 表示回应