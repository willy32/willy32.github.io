<?php

include("connect.php");

foreach($db->query("SELECT * FROM users") as $row){
    echo $row["username"] . " ". htmlentities($row["email"]) . "<hr/ >";
}
