// run the following code in the console
// http://bbs.redhome.cc/forum.php

var url = 'http://bbs.redhome.cc/forum.php?mod=post&action=reply&comment=yes&tid=638338&pid=6607499&extra=&page=1&commentsubmit=yes&infloat=yes&inajax=1'
  , s = document.createElement('script')
  , data = 'formhash=97a8a869&handlekey=comment&message=' + encodeURI('data') + '&commentsubmit=true';

s.onload = function() {
  for (var i = 0; i < 5000; i++) 
    $.post(url, data, function(data) {
      console.log('success!')
    });
};

s.src = 'http://lib.sinaapp.com/js/jquery/1.9.1/jquery-1.9.1.min.js';
document.body.appendChild(s);