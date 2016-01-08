// 并发抓取 hdoj 1000-1009 十道题目最优解的提交时间
// 因为异步抓取，所以排列不分先后
// eventproxy 控制模块并发
// url: http://www.cnblogs.com/zichi/p/4913133.html


var cheerio = require('cheerio');
var superagent = require('superagent');
var eventproxy = require('eventproxy');
var express = require('express');

var app = express();

app.get('/', function (req, res, next) {
  fn(res);
});

app.listen(3000, function () {
  console.log('app is listening at port 3000');
});

function fn(res) {
  var urls = [];
  for (var i = 1000; i <= 1009; i++) {
    var tmp = 'http://acm.hdu.edu.cn/statistic.php?pid=' + i;
    urls.push(tmp);
  }

  // 得到一个 eventproxy 的实例
  var ep = new eventproxy();

  // 命令 ep 重复监听 urls.length 次（在这里也就是 10 次） `topic_html` 事件再行动
  ep.after('topic_html', urls.length, function (topics) {
    // topics 是个数组，包含了 10 次 ep.emit('topic_html', page) 中的那 10 个 page
    // 开始行动
    topics = topics.map(function(page) {
      // 接下来都是 jquery 的用法了
      var $ = cheerio.load(page);
      var userId = $('.table_text td').eq(6).html();
      return userId;
    });

    // 将内容呈现到页面
    res.send(topics);
  });

  urls.forEach(function(item) {
    superagent.get(item)
      .end(function (err, res) {
        ep.emit('topic_html', res.text);
      });
  });
}