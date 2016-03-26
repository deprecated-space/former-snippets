on error resume Next  '遇到错误继续执行   
dim url, val
url = InputBox("输入需要灌水的网址:")
val = InputBox("输入需要灌水的内容:")
set ie = wscript.createObject("internetExplorer.application")
ie.navigate(url)
ie.visible = true
 
do while ie.busy or ie.readystate <> 4
    wscript.sleep 50
loop
 
do
  ie.document.getElementById("fastpostmessage").innerHTML = val
  ie.document.getELementById("fastpostsubmit").click()
  wscript.sleep 3000
loop