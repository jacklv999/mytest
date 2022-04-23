## JavaScript 基础

#### 1.直接写入HTML输出流

```JavaScript
document.write("<h1>这是一个标题</h1>");
document.write("<p>这是一个段落。</p>");
```

#### 2.对事件的反应

```JavaScript
<button type="button" onclick="alert('欢迎!')">点我!</button>
```

#### 3.改变HTML内容

```javascript
x=document.getElementById("demo");  //查找元素
x.innerHTML="Hello JavaScript";    //改变内容
```

#### 4.改变HTML样式

```JavaScript
x=document.getElementById("demo")  //找到元素 
x.style.color="#ff0000";           //改变样式
x.style.display="none";
```

#### 5.JavaScript的输出

- 弹出警告窗: 使用 ` window.alert()` 

  ```php+HTML
  <h1>我的第一个页面</h1>
  <script>window.alert(5 + 6);</script>
  ```

- 将内容写到 HTML 文档: 使用 `document.write()` ,在文档加载后执行 `document.write`，整个页面将被覆盖

  ```php+HTML
  <h1>我的第一个 Web 页面</h1>
  <script>document.write(Date());</script>
  ```

- 将内容写入HTML元素: 

  ```php+HTML
  <p id="A">我的第一个段落</p>
  <script>document.getElementById("A").innerHTML = "已修改" </script>
  ```

- 输出到控制台: 使用 ` console.log()` 写入到浏览器的控制台

  ```php+HTML
  <h1>我的第一个 Web 页面</h1>
  <script>
  c = 5 + 6;console.log(c);
  </script>
  ```

#### 6.JavaScript数据类型

```javascript
var length = 16;                                  // Number 通过数字字面量赋值
var points = x * 10;                              // Number 通过表达式字面量赋值
var lastName = "Johnson";                         // String 通过字符串字面量赋值
var cars = ["Saab", "Volvo", "BMW"];              // Array  通过数组字面量赋值
var person = {firstName:"John", lastName:"Doe"};  // Object 通过对象字面量赋值
/*let声明一个作用域被限制在块级中的变量、语句或者表达式,局部变量推荐使用let变量，避免变量名冲突。
const 关键字用来声明 JavaScript中的常量（与变量相对，不可修改）*/
person.lastName;person["lastName"];				  // Object 的两种访问方式
typeof 3.14                                       // 返回 number
```

#### 7.条件语句

通常在写代码时，您总是需要为不同的决定来执行不同的动作。您可以在代码中使用条件语句来完成该任务.在 JavaScript 中，我们可使用以下条件语句：
- **if 语句** - 只有当指定条件为 true 时，使用该语句来执行代码
- **if...else 语句** - 当条件为 true 时执行代码，当条件为 false 时执行其他代码
- **if...else if....else 语句**- 使用该语句来选择多个代码块之一来执行
- **switch 语句** - 使用该语句来选择多个代码块之一来执行

#### 8.不同类型的循环

JavaScript 支持不同类型的循环：
- **for** - 循环代码块一定的次数
- **for/in** - 循环遍历对象的属性
- **while** - 当指定的条件为 true 时循环指定的代码块
- **do/while** - 同样当指定的条件为 true 时循环指定的代码块

#### 9.错误处理

- **try** 语句测试代码块的错误
- **catch** 语句处理错误
- **throw** 语句创建自定义错误
- **finally** 语句在 try 和 catch 语句之后，无论是否有触发异常，该语句都会执行

#### 10.this 关键字

面向对象语言中 this 表示当前对象的一个引用。

但在 JavaScript 中 this 不是固定不变的，它会随着执行环境的改变而改变。

- 在方法中，this 表示该方法所属的对象。

- 如果单独使用，this 表示全局对象。

- 在函数中，this 表示全局对象。但在严格模式下，this 是未定义的(undefined)。

- 在事件中，this 表示接收事件的元素。

  