<?php

include("connect.php");

$stmt = $db->query("SELECT * FROM users");

while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
    echo $row["username"] . " ". htmlentities($row["email"]) . "<hr/ >";
}
