window.requestAnimFrame = (function() {  
  return  window.requestAnimationFrame ||   
    window.webkitRequestAnimationFrame ||   
    window.mozRequestAnimationFrame    ||   
    window.oRequestAnimationFrame      ||   
    window.msRequestAnimationFrame     ||   
    function(callback){  
      window.setTimeout(callback, 1000 / 60);  
    };  
})();  

var currentnumber = 0;

//调用 相当于setTimeout里的callback
function animationLoop(){   
  // logic  
  document.body.innerHTML = currentnumber++; 
  // 循环
  requestAnimFrame(animationLoop);
}  

// 启动
requestAnimFrame(animationLoop);