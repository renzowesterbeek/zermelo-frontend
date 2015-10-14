<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Zermelo Notificaties</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 9]>
	  <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
	  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->
	<link href="css/base.min.css" rel="stylesheet" type="text/css">
</head>
<body>
	<div class="container">
		<h1>Zermelo Notificaties</h1>
		<h2>Ontvang notificaties voor elke wijziging in je rooster</h2>
		<ol>
			<li>Registreer je bij <a href="https://www.pushbullet.com/" target="_blank">Pushbullet</a></li>
			<li>Download de Pushbullet app voor <a href="" target="_blank">iPhone</a> of <a href="#" target="_blank">Android</li>
			<li>Vul je, bij Pushbullet-geregistreerde email-adres, in</li>
			<li>Vul een App Code in die je via de <a href="https://scmoost.zportal.nl/" target="_blank">Zermelo Portal</a> hebt verkregen <br>(deze code had je ook nodig bij het activeren van de Zermelo app)</li>
			<li>Nu ontvang je notificaties!</li>
		</ol>
		<form action="http://localhost:3000/register" method="post">
			<input type="text" name="email" id="email" placeholder="Email-adres" value="<?php if(isset($_GET['email'])){ echo($_GET['email']);	} ?>">
			<input type="text" name="appcode" id="appcode" placeholder="App Code" value="<?php if(isset($_GET['appcode'])){ echo($_GET['appcode']);	} ?>"><br>
			<p><?php
				if(isset($_GET['m'])){
					echo($_GET['m']);
				}
			?></p>
			<input type="submit" value="Registreer">
		</form>
		<footer>
			<p>Ontwikkeld door <a href="http://twitter.com/renzowesterbeek" target="_blank">Renzo Westerbeek</a>.</p>
		</footer>
	</div>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
	<script src="js/scripts.min.js"></script>
</body>
</html>
