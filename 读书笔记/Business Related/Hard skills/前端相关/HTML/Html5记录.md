# Html5视频

## 1.视频播放代码
~~~
<video width="320" height="200" controls loop muted>
  <source src="" type="video/webm">
  </object> 
</video>
~~~

- 在Haropad中直接输出html,不需要在chrome中再次转化

- 视频使用绝对路径, 图片使用相对路径,但最终效果以Haropad预览为准

- loop属性: 使视频播放循环不停止

- muted属性: 使视频播放时静音

## 2.Markdown解决方案
- 插入视频
~~~
![video](http://www.html5rocks.com/en/tutorials/video/basics/devstories.webm)
~~~
- 插入音频
~~~
![audio](http://v2v.cc/~j/theora_testsuite/320x240.ogg)
~~~

