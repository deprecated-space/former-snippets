关于 requirejs 的基础部分，可以先参考下阮一峰老师的 [Javascript模块化编程（三）：require.js的用法](http://www.ruanyifeng.com/blog/2012/11/require_js.html)

requirejs 的诞生，解决了如下两个问题：

- 实现 js 文件的异步加载，避免网页失去响应
- 管理模块之间的依赖性，便于代码的编写和维护

requirejs 定义了三个全局变量，分别是 require、requirejs 以及 define。

基础的应用可以看下 basic 文件夹中的 demo，加载非规范的模块可以参考下 more 文件夹里的 demo。

请求太多？requirejs 同时可以打包成一个文件，在服务端有个 rjs，可以对文件 optimize，如果需要搭配 gulp 进行打包，可以参考 <https://github.com/phated/requirejs-example-gulpfile> 和 <https://github.com/hehongwei44/my-blog/issues/144>
