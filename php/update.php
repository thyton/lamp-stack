<?php
include_once("connect.php");
$Id=$_POST['id'];
// remove id from $_POST
unset($_POST['id']);

$query="UPDATE pianists SET";
foreach($_POST as $key => $value)
{
	$query .= " $key=\"$value\" ,";
}
$query = substr($query, 0 , -1);
$query .= "WHERE id=$Id"; 
if($connection->query($query))
    echo "ok";
else
    echo "failed";	

$connection->close();
?>
