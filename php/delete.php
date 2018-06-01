<?php
include_once("connect.php");
$Id=$_POST['id'];
$query="DELETE FROM pianists WHERE id=$Id";
if($connection->query($query))
  echo "ok";  
else
	echo "failed";
$connection->close();
?>
