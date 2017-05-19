// 使用 require.js 必须有一个配置项
// 这个配置项可以单独引入，也可以跟在 require.js 后面
require.config({
  paths: {
    'math': 'math',
    // 不能加 .js 后缀
    'jQuery': 'https://cdn.bootcss.com/jquery/3.2.1/jquery.min',
    'jQuery_plugin_js': 'jQuery.plugin'
  },
  shim: {
    'jQuery_plugin_js': {
      // 定义依赖，如果加载的是符合 AMD 规范的模块，那么模块中已经定义了依赖
      deps: ['jQuery'],
      // 输出的变量名，表明这个模块外部调用时的名称（好像并没有什么卵用）
      exports: '$.fn.addStyle'
    },
    'math': {
      // add 和 math.js 中的方法名对应
      exports: 'add'
    }
  }
});

require(['math', 'jQuery_plugin_js'], (add2) => {
  console.log(add2(1, 2));

  // 其实 add 方法是全局的，可以直接调用
  console.log(add(1, 2));
  
  // 因为 jQuery 插件加载的方法是全局的，所以可以直接调用
  $('div').addStyle({width: '100px', height: '100px', backgroundColor: 'red'});
})