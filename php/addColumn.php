<?php
include_once("connect.php");
$Name = $_POST['name'];
$query="ALTER TABLE pianists ADD $Name TEXT";
if($connection->query($query))
	echo "ok";
else
	echo "faile";	
?>
<?php
$connection->close();
?>
