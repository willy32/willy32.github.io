<?php

include("connect.php");
$stmt = $db->prepare("UPDATE users set username = :username, email = :email, password = :password WHERE id = :id");
$stmt->bindParam(":username", $_GET["username"]);
$stmt->bindParam(":email", $_GET["email"]);
$stmt->bindParam(":password", $_GET["password"]);
$stmt->bindParam(":id", $_GET["id"]);
$stmt->execute();

echo json_encode([
    "id" => $_GET["id"],
    "username" => $_GET["username"],
    "email" => $_GET["email"]
]);;
