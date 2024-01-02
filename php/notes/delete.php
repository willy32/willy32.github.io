<?php

include("connect.php");

$stmt = $db->prepare("DELETE FROM users WHERE id = :id");

$id = $_GET["id"];

$stmt->bindParam(":id", $id);
$stmt->execute();

echo json_encode(["id" => $id]);
