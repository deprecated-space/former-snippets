<?php
  header("Content-type: text/html; charset=utf-8");

  $name = $_GET["name"];

  if ($name == "a") {
    $val = "Wardell Stephen \"Steph\" Curry II (born March 14, 1988)[1] is an American professional basketball player for the Golden State Warriors of the National Basketball Association (NBA). He is considered by some to be the greatest shooter in NBA history.[2] Curry won the 2015 NBA Most Valuable Player (MVP) award and is a three-time NBA All-Star.";
  } else if ($name == "b") {
    $val = "Jason Frederick Kidd (born March 23, 1973) is an American basketball coach and former player. He is currently the head coach of the Milwaukee Bucks of the National Basketball Association (NBA). Previously a point guard in the NBA, he was a ten-time NBA All-Star, a five-time All-NBA First Team member, and a nine-time NBA All-Defensive Team member.";
  } else {
    $val = "Kobe Bean Bryant (born August 23, 1978) is an American professional basketball player for the Los Angeles Lakers of the National Basketball Association (NBA). He entered the NBA directly from high school, and he has played for the Lakers his entire career, winning five NBA championships. Bryant is an 18-time All-Star, 15-time member of the All-NBA Team, and 12-time member of the All-Defensive team. He has led the league in scoring twice, and he ranks third on both the league's all-time regular season scoring and all-time postseason scoring lists. After beginning his 20th season with the Lakers in 2015–16, which set an NBA record for the most seasons with the same team, Bryant announced that he would retire after the season.";
  }

  echo $val;
?>