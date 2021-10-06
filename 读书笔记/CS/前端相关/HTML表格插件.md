## HTML表格插件

在html页面上显示表格并进行表格操作需要依赖特定的表格插件. 以下仅介绍一款表格插件

#### 1. 引入js和CSS文件

```html
<link rel="stylesheet" type="text/css" href="./css/datatables.min.css"/>
<script type="text/javascript" src="./js/datatables.min.js"></script>
```

#### 2. 初始化表格元素

```html
<table id="H_table" class="display" width="100%"></table>
```

#### 3. 初始化表格

```html
<script>
$(document).ready(function() {
 $('#H_table').DataTable( {
        data: task_status,
        columns: [
            { title: "Task" },
            { title: "Owner" },
            { title: "Model" },
            { title: "Status" },
        ]
    });
});
</script>
```

