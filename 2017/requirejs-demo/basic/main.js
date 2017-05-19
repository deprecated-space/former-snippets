// 使用 require.js 必须有一个配置项
// 这个配置项可以单独引入，也可以跟在 require.js 后面
require.config({
  paths: {
    // "underscore": "http://cdn.bootcss.com/underscore.js/1.8.3/underscore-min"
    "underscore": "underscore.min"
  }
});

// 'underscore' 和 'math' 的路径定义在 require.config 中
// 如果没有定义，会在 main.js 相同目录中寻找 underscore.js 以及 math.js（math 模块就没有定义)
require(['underscore', 'math'], (_, math) => {
  let a = [1, 2, 3];
  let b = _.each(a, (item) => {
    return item * 2;
  });

  console.log(b);
  console.log(math.add(1, 2));
})