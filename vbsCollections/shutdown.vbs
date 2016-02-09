dim ws
set ws = wscript.createObject("wscript.shell")
ws.run "shutdown -s -t 30 -c ""电脑将被关闭"" ", 0, true    '-c 后是提示 -t(秒)后是关机时间 shutdown -a 解除