<?php
  $file = $_FILES['file'];
  // var_dump($file);

  $fileName = $file['name'];
  $savePath = dirname(__FILE__) . '\\' . $fileName;
  copy($file['tmp_name'], $savePath);

  // 这里应该增加文件上传是否成功的逻辑判断

  // ...


  // 随机返回
  if (rand(0, 100) > 50)
    echo "success!";
  else
    echo "fail!";
?>