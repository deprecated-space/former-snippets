// math.js
// 模块的编写采用 AMD 规范
// 如果这个模块还依赖其他模块，那么 define() 函数的第一个参数，必须是一个数组，指明该模块的依赖性
define(function() {
  let add = (x, y) => {
    return x + y;
　};

　return {
　  add: add
　};
});