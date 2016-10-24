<?php
  $filePath = "data/11.11.csv";
  $file = fopen($filePath, "r");

  while (!feof($file)) {
    $tmp = fgetcsv($file);
    if (is_array($tmp)) {
      var_dump($tmp);
    }
  }

  fclose($file);
?>