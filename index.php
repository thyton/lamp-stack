<!DOCTYPE html>
<html>
<head>
<script
  src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>
	<script src='script/makeColTitle.js'></script>
        <title>table</title>
        <link rel="stylesheet" type="text/css" href="style.css">
	<link rel="icon" type="image/x-icon" href="favicon.ico" />

</head>
<body>
<script src='script/delete.js'></script>
<script src='script/loadTable.js'></script>
<script src='script/addColumn.js'></script>
<script src='script/update.js'></script>
<script src='script/sortTable.js'></script>
<div id="container">
	<div id="menu-top-container">
		<nav>
			<ul>
				<li></li>
				<li></li>
				<li></li>
				<li> </li>
			</ul>
		</nav>
	</div>
	<div id="table-container">

<form>
  <input type="text" placeholder="New Column" id="new-column-name" value=""/> 
  <input type="submit" id="add-column" value="Add"/>
</form>
        <table id="display-table">
        <thead>
        <tr id='pianists-titles'>
	</tr>
	</thead>
	<tbody id='pianists-table-content'>
	</tbody>
	</table>
	</div><!--table-container-->
</div><!--container-->
</body>
</html>
