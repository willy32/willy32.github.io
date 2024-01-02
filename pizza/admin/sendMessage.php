<?php

include("connect.php");

$stmt = $db->prepare("INSERT INTO pizza (name, message) VALUES(:name, :message)");
$stmt->bindParam(":name", $_GET["name"]);
$stmt->bindParam(":message", $_GET["message"]);
$stmt->execute();

echo json_encode([
    "name" => $_GET["name"],
    "message" => $_GET["message"]
]);

