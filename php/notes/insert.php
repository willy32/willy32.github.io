<?php

include("connect.php");
$stmt = $db->prepare("INSERT INTO users (username, email, password) VALUES(?, ?, ?)");
$stmt->bindParam(1, $_GET["username"]);
$stmt->bindParam(2, $_GET["email"]);
$stmt->bindParam(3, $_GET["password"]);
$stmt->execute();

echo json_encode([
    "id" => $db->lastInsertId(),
    "username" => $_GET["username"],
    "email" => $_GET["email"]
]);