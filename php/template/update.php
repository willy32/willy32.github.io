<?php

include("connect.php");
$stmt = $db->prepare("UPDATE users set username = :username WHERE username = :userSearch");
$stmt->bindValue(":username", "filip");
$stmt->bindValue(":userSearch", "<h1>FUCK</h1>");
$stmt->execute();

