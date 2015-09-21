On Error Resume Next
dim ws    '声明和赋值不能在一行
set ws = wscript.createObject("wscript.shell")
wscript.sleep 100
 
for i = 0 to 20
    wscript.sleep 1000
    ws.AppActivate("xx")    '好友昵称
    ws.sendkeys "shabi "    '或者先复制好自己需要的内容 然后ws.sendkeys "^v"
    ws.sendkeys i
    ws.sendkeys "%s"    'alt + s 发送快捷键
next
 
wscript.quit