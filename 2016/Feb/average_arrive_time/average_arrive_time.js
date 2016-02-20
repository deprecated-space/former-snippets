// average_arrive_time.js for oa.xxxx.com to find out your average coming time

var lis = window.frames[3].document.getElementsByClassName('day_name');

var num = 0;
var hours = 0;
var minutes = 0;

for (var i = 0, len = lis.length; i < len; i++) {
  var tmp = lis[i].getElementsByTagName('div');
  
  if (tmp.length === 0) 
    continue;

  num++;
  
  // "出勤情况：07:58-19:36"
  var str = tmp[0].innerHTML;

  var h = + str.substr(5, 2);
  var m = + str.substr(8, 2);

  if (h === 8) 
    m += 60;

  hours += 7;
  minutes += m;
}

if (minutes / num >= 60) {
  var average_m = minutes / num - 60;
  var average_h = hours / num + 1;
} else {
  var average_m = minutes / num;
  var average_h = hours / num;
}

console.log(average_h + ":" + average_m);