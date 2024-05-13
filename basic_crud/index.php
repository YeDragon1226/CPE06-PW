<?php include('connection.php'); ?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<title> Basic CRUD Application </title>
		<link rel="stylesheet" href="css/style.css">
		<link rel="icon" href="favicon.ico" type="image/x-icon">
	</head>
<body>

	<div id="wrapper">
		
		<form action="add.php" method="post">
			
			<fieldset>
				<legend><strong> Add Record </strong></legend>
				<div>
					<label for="firstname"> First Name </label>
					<input type="text" name="firstname" id="firstname">
				</div>
				<div>
					<label for="lastname"> Last Name </label>
					<input type="text" name="lastname" id="lastname">
				</div>
				<div>
					<label for="middlename"> Middle Name </label>
					<input type="text" name="middlename" id="middlename">
				</div>
				<div>
					<label for="course"> Course </label>
					<input type="text" name="course" id="course">
				</div>
				<div>
					<label for="birthplace"> Birth Place </label>
					<input type="text" name="birthplace" id="birthplace">
				</div>
				<div>
					<label> &nbsp; </label>
					<input type="submit" value="CREATE">
				</div>

			</fieldset>
			
		</form>

		<hr>

		<?php

			

		?>
		
	</div>

</body>
<script src="js/jquery.js"></script>
<script src="js/main.js"></script>
</html>