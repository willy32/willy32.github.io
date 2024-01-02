<?php

include("connect.php");
$stmt = $db->prepare("DELETE FROM users WHERE username = :username");
$stmt->bindValue(":username", "filip");
$stmt->execute();

