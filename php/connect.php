<?php
$hostname = "localhost";
$username = "root";
$password = '';
$dbname = "jazz";
$connection = new mysqli($hostname, $username, $password, $dbname);
if($connection->errno)
{
    echo "Failed to Connect to MySQL Database";
    exit();
}
?>
