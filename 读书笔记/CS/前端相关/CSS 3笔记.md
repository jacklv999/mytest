## CSS 3笔记

#### 1.渐变

- 线性渐变

```css
linear-gradient(direction, color-stop1, color-stop2, ...);
/*1.使用预定义: to bottom、to top、to right、to left、to bottom right...
  2.使用角度: linear-gradient(x deg, ...);*/
```

```css
<div style="height:150px;width:100%;background-image:linear-gradient(141deg,#9fb8ad 0%,#1fc8db 51%,#2cb5e8 75%);"></div>
```

<div style="height:150px;width:100%;background-image:linear-gradient(141deg,#9fb8ad 0%,#1fc8db 51%,#2cb5e8 75%);"></div>

- 径向渐变

```css
 radial-gradient(shape size at position, start-color, ..., last-color);
```

#### 2.2D转换

```css
/*旋转 */
<div style="transform: rotate(30deg);">Aquamarine</div>
/*translate*/
<div style="transform: translate(50px,100px)">Cyan</div>
/*缩放*/
<div style="transform: scale(0.5,0.5);">CornflowerBlue </div>
/*扭曲*/
<div style="transform: skew(10deg,10deg);">CornflowerBlue</div>
```

<div style="float:left;width:20%;height:120px;background-color:AntiqueWhite;">AntiqueWhite</div>
<div style="float:left;width:20%;height:50px;transform: rotate(10deg);background-color:Aquamarine ">Aquamarine</div>
<div style="float:left;height:100px;width:20%;transform: translate(15px,10px);background-color:Cyan">Cyan</div>
<div style="float:left;height:100px;width:20%;transform: scale(0.5,0.5);background-color:CornflowerBlue ">CornflowerBlue</div>
<div style="float:left;height:60px;width:15%;transform: skew(10deg,10deg);background-color:DarkTurquoise  ">DarkTurquoise</div>

| 函数                      | 描述                                     |
| :------------------------ | :--------------------------------------- |
| translate(*x*,*y*)        | 定义 2D 转换，沿着 X 和 Y 轴移动元素。   |
| scale(*x*,*y*)            | 定义 2D 缩放转换，改变元素的宽度和高度。 |
| rotate(*angle*)           | 定义 2D 旋转，在参数中规定角度。         |
| skew(*x-angle*,*y-angle*) | 定义 2D 倾斜转换，沿着 X 和 Y 轴。       |

#### 3.过渡

```css
<style> 
div{width:10;height:10;background:LightSkyBlue;transition:width 2s;}
div:hover{width:300px;}
</style>
<div></div>

div
{
    transition: width 2s, height 2s, transform 2s;
    -webkit-transition: width 2s, height 2s, -webkit-transform 2s;
}
```

| 属性                                                         | 描述                                         |
| :----------------------------------------------------------- | :------------------------------------------- |
| [transition](https://www.runoob.com/cssref/css3-pr-transition.html) | 简写属性，用于在一个属性中设置四个过渡属性。 |
| [transition-property](https://www.runoob.com/cssref/css3-pr-transition-property.html) | 规定应用过渡的 CSS 属性的名称。              |
| [transition-duration](https://www.runoob.com/cssref/css3-pr-transition-duration.html) | 定义过渡效果花费的时间。默认是 0。           |
| [transition-timing-function](https://www.runoob.com/cssref/css3-pr-transition-timing-function.html) | 规定过渡效果的时间曲线。默认是 "ease"。      |
| [transition-delay](https://www.runoob.com/cssref/css3-pr-transition-delay.html) | 规定过渡效果何时开始。默认是 0。             |

```html
<style> 
div
{
	width:100px;
	height:100px;
	background:red;
	transition:width 2s;
	-webkit-transition:width 2s; /* Safari */
}
div:hover
{
	width:300px;
}
</style>
```

#### 4.动画

```css
div
{
    animation-name: myfirst;
    animation-duration: 5s;
    animation-timing-function: linear;
    animation-delay: 2s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-play-state: running;
}
```

#### 5.按钮

```html
<style>
.button {
    background-color: #4CAF50; /* Green */border: none;color: white;font-size: 10px;
    padding: 15px 32px;text-align: center;text-decoration: none;display: inline-block;
    margin: 4px 2px;cursor: pointer;
}
.button2 {background-color: #008CBA;font-size: 12px;} /* Blue */
.button3 {background-color: #f44336;font-size: 16px;} /* Red */ 
.button4 {background-color: #e7e7e7; color: black;border-radius: 12px;} /* Gray */ 
.button5 {background-color: #555555;border-radius: 50%;} /* Black */
</style>
<button class="button button2">Blue 12px</button>
<button class="button button3">Red 16px</button>
<button class="button button4">Gray 圆角12px</button>
<button class="button button5">Black 圆角50%</button>
```

![](data:image/jpeg;base64,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)






