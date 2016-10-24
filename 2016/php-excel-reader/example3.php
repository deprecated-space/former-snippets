<?php
  $file = "data/11.11.csv";
  $str = file_get_contents($file);
  $rows = explode("\n", $str);

  // .xls -> .csv 转换中最后会多一个空行
  $rowsCount = count($rows) - 1;

  for ($i = 0; $i < $rowsCount; $i++) {
    $cols = explode(",", $rows[$i]);
    $colsCount = count($cols);
    for ($j = 0; $j < $colsCount; $j++)
      var_dump($cols[$j]);
  }
?>