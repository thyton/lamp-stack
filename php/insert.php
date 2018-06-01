<!DOCTYPE html>
<html>
<head>
<title>Insert Page</title>
</head>
<body>
<?php
include_once("connect.php");
$numAlbums = (int)$_POST['num_of_albums'];
$Name = $_POST['name'];
$Birthdate = $_POST['birthdate'];
$query = "INSERT INTO pianists (name, birthdate, num_of_albums) VALUES('$Name', '$Birthdate', '$numAlbums')";
echo "<h3>Inserting the item ";
if($connection->query($query))
	echo "succeeded.</h3>";
else
	echo "failed.</h3>";	
?>
</body>
</html>
<?php
$connection->close();
echo "Connection closed";
?>
