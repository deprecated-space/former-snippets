## Demos
	- basic
		- callback
		- promise
	-


# backup

- 一个 Promise 只处理一个异步逻辑
- 一个 Promise 必须有 resolve() 语句，以及 reject() 语句（非必须）
- promise chain 中并非一定要 return 一个 promise，return 一个数值也能当做下个 then 回调函数中的参数被使用
- 通常我们在  reject  方法里处理执行失败的结果，而在 catch 里执行异常结果：
- race 场景：一个有用的场景是，从多个镜像服务器下载资源，一旦有一个返回，其它的返回也就不用处理了


## 参考

- [大白话讲解 Promise（一）](http://www.cnblogs.com/lvdabao/p/es6-promise-1.html)
- [JavaScript Promise API](https://davidwalsh.name/promises)
- [An Overview of JavaScript Promises](https://www.sitepoint.com/overview-javascript-promises/) /  [译文](http://www.html-js.com/article/Learn-JavaScript-every-day-to-understand-what-JavaScript-Promises)
- [Promises/A+](https://promisesaplus.com/)（规范是给实现 polyfill 看的吧）
- [JavaScript Promise 告别异步乱嵌套](https://segmentfault.com/a/1190000002395343)（完善 basci ，增加 reject 代码）
- [Promise MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#Methods)
- [阮一峰](http://es6.ruanyifeng.com/#docs/promise)
- [Promise 简介](https://blog.coding.net/blog/promise)
- <https://wohugb.gitbooks.io/promise/content/>
- <http://liubin.org/promises-book/>
- <http://www.cnblogs.com/dojo-lzz/p/5495671.html>