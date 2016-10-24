<?php
error_reporting(E_ALL ^ E_NOTICE);
require_once 'src/excel_reader2.php';

$data = new Spreadsheet_Excel_Reader("data/11.11.xls", true, "gbk");

// 行数
$rows = $data->rowcount($sheet_index=0);

// 列数
$cols = $data->colcount($sheet_index=0);


// 打印行数，列数
// var_dump($rows);
// var_dump ($cols);

// 打印每个单元格 value
for ($i = 1; $i <= $rows; $i++)
  for ($j = 1; $j <= $cols; $j++)
    var_dump($data->val($i, $j));

?>