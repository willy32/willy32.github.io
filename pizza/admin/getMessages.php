<?php

include("connect.php");

$stmt = $db->prepare("SELECT * FROM pizza");
$stmt->execute();
$result = $stmt->fetchAll();

echo json_encode([
    "data" => $result
]);

