<?php

include("connect.php");

$stmt = $db->query("SELECT * FROM users");

$results = $stmt->fetchAll();

foreach($results as $row){
    echo $row["username"] . " ". htmlentities($row["email"]) . "<hr/ >";
}
