<?php

include("connect.php");

$stmt = $db->prepare("SELECT * FROM users WHERE username LIKE :username");
$name = "johan";
//$stmt->bindParam(":username", $name);     //Same as bindValue but used for variables instead of strings
$stmt->bindValue(":username", "%r%", PDO::PARAM_STR); // PDO::PARAM_STR optional 
//$stmt->bindValue(":username", "%gmail.com%");
$stmt->execute();

while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
    echo $row["username"] . " ". htmlentities($row["email"]) . "<hr/ >";
}

