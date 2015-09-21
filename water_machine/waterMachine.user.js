// ==UserScript==
// @name        waterMachine
// @namespace   http://www.cnblogs.com/zichi
// @include     *
// @version     1.0
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_deleteValue
// ==/UserScript==
 
 
///////////////////////---图形界面---////////////////////////
var mainDiv = document.getElementById("ct");
var newDiv = document.createElement("div");
newDiv.innerHTML = '\
  <b>回复内容</b>\
  <input id="txt1" type="text" style="width:400px" >\
  <b>回复次数</b>\
  <input id ="txt2" type="text" style="width:30px" >\
  <b>间隔时间(秒)</b>\
  <input id="txt3" type="text" style="width:30px" >\
  <button id="btn" style="float:right;margin-right:200px">\
  <strong> 开启灌水模式 </strong> </button>';
 
mainDiv.appendChild(newDiv);
document.getElementById('btn').onclick = function() {
  GM_setValue('value', document.getElementById('txt1').value);
  GM_setValue('interval', document.getElementById('txt3').value);
  GM_setValue('count', document.getElementById('txt2').value);
  startWater();
};
///////////////////////---图形界面---////////////////////////
 
function startWater() {
  var count = GM_getValue('count') ;
  if(!count)
    return;
  GM_setValue('count', count - 1);
  document.getElementById('fastpostmessage').value = GM_getValue('value');
  document.getElementById('fastpostsubmit').click();
  window.setTimeout(function() {startWater();}, GM_getValue('interval') * 1000);
}