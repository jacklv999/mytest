## HTML杂项

#### 1. 对 `for` 属性

`for` 属性用于绑定表单元素, 绑定后表单元素的事件等同于该元素.

```html
<form>
  <label for="male">Male</label>
  <input type="radio" name="sex" id="male" />
</form>
```

在上述案例中, 点击 `male` label 即等于点击 `male ` 的 radio 按钮.

但是, 需要注意的是`for` 属性绑定的是 `id` 属性, 而非 `name` 等属性.

#### 2. 判断null与undefine

```JavaScript
a == null
b == 'undefined'
```

#### 3. data-toggle与data-target

HTML5允许用户自定义属性, 而bootstrap自定义了上述两种属性. 两种属性配合使用, 其中:

- `data-toggle` 表示设定事件
- `data-target` 表示目标

两者联合, 表示将事件传输给某一目标.

