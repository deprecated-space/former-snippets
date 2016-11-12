# form + iframe

文件上传最经典的形式。一年前写过一篇文章 [JavaScript，php文件上传简单实现](http://www.cnblogs.com/zichi/p/4610528.html)，简单描述了下。因为表单提交后，页面会跳到表单提交的地址去，所以可以用一个隐藏的 iframe，然后将 form 的 target 属性指向这个隐藏的 iframe。

还有个问题，如何判断文件是否上传成功？[之前做过这个功能](http://huodong.2345.com/skin/)，把主要逻辑写在了后端 PHP 里，在前端定义好上传成功或者失败的回调方法，然后 PHP 里根据实际结果 die 出相应的 JavaScript 代码。（注意用 window.parent 才能调到前端页面的 JavaScript 方法，因为 target 属性指向了用于发送请求和接收响应的窗口名称，所以 die 出的 JavaScript 代码应该作用在 target 指向的 iframe）

```php
if ($isOk) // 成功上传
  die("<script>window.parent.success();</script>");
else
  die("<script>window.parent.fail();</script>");
```

这样做其实不大优雅，后端应该只返回数据。我们可以监听 iframe 的 load 事件，具体可以看代码 <https://github.com/hanzichi/practice/tree/master/2016/file-upload/form%2Biframe>



# AJAX

如果不考虑兼容性，可以用 AJAX（XMLHttpRequest 2.0） 提交 FormData，利用 FormData 还可以上传二进制（Blob）文件，非常强大。因为使用了 AJAX，所以有一点需要注意，就是不能跨域。

我们还可以利用 Blob，将大文件切割后一段一段地 AJAX 上传，可以参考 <https://segmentfault.com/a/1190000006600936>

代码参考 <https://github.com/hanzichi/practice/tree/master/2016/file-upload/ajax/>


# 其他

一些参考文献：

- [html5的file实践](http://wanchun.me/2016/08/20/html5%E7%9A%84file%E5%AE%9E%E8%B7%B5/)
- [两种文件上传的实现－Ajax上传和form+iframe](http://luckykun.com/work/2016-08-16/file-upload.html)
- [前端文件上传问题（文件上传插件求推荐）](https://segmentfault.com/q/1010000006250551)







