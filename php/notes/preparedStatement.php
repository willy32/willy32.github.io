<?php

include("connect.php");

$stmt = $db->prepare("SELECT * FROM users WHERE username = ?");
$name = "johan";
//$stmt->bindParam(1, $name);     //Same as bindValue but used for variables instead of strings
$stmt->bindValue(1, "%r%");
//$stmt->bindValue(2, "%gmail.com%");
$stmt->execute();

while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
    echo $row["username"] . " ". htmlentities($row["email"]) . "<hr/ >";
}
