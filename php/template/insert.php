<?php

include("connect.php");
$stmt = $db->prepare("INSERT INTO users (username, email, password) VALUES(?, ?, ?)");
$stmt->bindValue(1, $_GET["name"]);
$stmt->bindValue(2, "filip@hotmail.com");
$stmt->bindValue(3, "honda");
$stmt->execute();

