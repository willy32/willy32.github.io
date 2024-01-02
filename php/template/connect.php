<?php

$host = "localhost";
$username = "root";
$password = "";
$database = "db";

try{
    $db = new PDO("mysql:host=$host;dbname=$database;charset=utf8", $username, $password);
    //var_dump($db);
} 
catch(Exception $e){
    echo $e->getMessage() . "<hr />";
}

