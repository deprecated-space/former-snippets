<?php
  $file = $_FILES['file'];
  // var_dump($file);

  $fileName = $file['name'];
  $savePath = dirname(__FILE__) . '\\' . $fileName;
  copy($file['tmp_name'], $savePath);

  // 这里应该增加文件上传是否成功的逻辑判断

  // ...

  // 假设后台处理需要时间
  sleep(5);

  // 此时应返回文件上传成功或者失败的信息
  // for example
  echo $_POST['age'];
?>