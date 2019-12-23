# R语言动态图绘制

R语言绘制动态图是基于 ```gganimate ``` 包制作, 该函数包是对 `ggplot` 的扩展. 基于这个包可以制作出很多非常漂亮的动态 GIF .

![](https://jacklv999.github.io/mytest/pic/3.gif)

### 1.安装

```R
install.packages("png","gifski","gganimate")
```

### 2.绘制动态图

- 1.用 `ggplot` 定义需绘制的静态图

```R
p = ggplot(gapminder, aes(x = log(gdpPercap), y=lifeExp,
		size = pop, colour = country)) +
	geom_point(show.legend = FALSE, alpha = 0.7)
```

- 2.添加动态元素
    - 1.函数 `transition_states()` : 定义用作动态变化的变量, 其中`state_length` 指定起始变量
    - 2.函数 `ggtitle()` : 指定动态坐标轴标题, 参数 `{closest_state}` 调用

```R
p = ggplot(gapminder, aes(x = log(gdpPercap), y=lifeExp,
		size = pop, colour = country)) +
	geom_point(show.legend = FALSE, alpha = 0.7)+
	transition_states(year, state_length = 1952) +
	ggtitle('Now showing {closest_state}',
          subtitle = 'Frame {frame} of {nframes}')
```

- 3.渲染动态图
    - 1.参数 `fps` : 指定每秒帧数, 使图片更流畅
    - 2.参数 `duration` : 指定动态图的时长
    - 3.参数 `renderer` : 指定用于渲染的渲染器

```R
animate(p,fps = 35, detail=5,renderer = gifski_renderer())
```

注: `gganimate` 不支持插帧, 所以 `fps`, `duration` 等参数需要相互契合

### 3.各种参数

- 1.设置动态图大小: `options(gganimate.dev_args = list(width = 1200, height = 1000))`
- 2.设置起止停顿: `animate(end_pause = 10)` 