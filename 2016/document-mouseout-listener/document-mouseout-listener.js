// 一个网页嵌套了一个 iframe
// 我们需要监听鼠标移出该 iframe 的事件
// 这段代码应在该 iframe 指向的 src 页面中
// @see http://stackoverflow.com/questions/923299/how-can-i-detect-when-the-mouse-leaves-the-window


function addEvent(obj, evt, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
    }
    else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
    }
}

addEvent(window,"load",function(e) {
    addEvent(document, "mouseout", function(e) {
        e = e ? e : window.event;
        var from = e.relatedTarget || e.toElement;
        if (!from || from.nodeName == "HTML") {
            // stop your drag event here
            // for now we can just use an alert
            alert("left window");
        }
    });
});