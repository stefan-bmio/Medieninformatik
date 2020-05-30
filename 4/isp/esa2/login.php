<?php
  session_start();
  include 'php/CRUD.php';
  if($_SERVER['REQUEST_METHOD'] === "POST"){

    $users = CRUD::retrieve("User", array("username" => $_POST["username"]));

    if (count($users) == 1 && password_verify($_POST["password"], $users[0]->password_hash)){
      $_SESSION["user_id"] = $users[0]->_id . '';
      $_SESSION["username"] = $users[0]->username;
      header("Location: /isp/esa2/projects.php");
      die();
    }
  }
?>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
<link href='http://fonts.googleapis.com/css?family=Varela+Round' rel='stylesheet' type='text/css'>
<link href="css/attributes.css" rel="stylesheet">
<link href="css/login.css" rel="stylesheet">
</head>
<body>
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand attrlogo">attributes</a>
      </div>
    </div>
  </nav>

  <div class="text-center" style="padding:50px 0">
  	<div class="logo">Login</div>
  	<div class="login-form-1">
  		<form action="login.php" method="POST" id="login-form" class="text-left">
  			<div class="login-form-main-message"></div>
  			<div class="main-login-form">
  				<div class="login-group">
  					<div class="form-group">
  						<label for="username" class="sr-only">Username</label>
  						<input type="text" class="form-control" id="username" name="username" placeholder="Benutzername">
  					</div>
  					<div class="form-group">
  						<label for="password" class="sr-only">Password</label>
  						<input type="password" class="form-control" id="password" name="password" placeholder="Passwort">
  					</div>
  				</div>
  				<button type="submit" class="login-button"><i class="fa fa-chevron-right"></i></button>
  			</div>
  		</form>
      <div class="alert alert-danger <?php echo ($_SERVER['REQUEST_METHOD'] === 'POST') ? "alert-login-visible" : "alert-login-invisible";?>">
        Ung&uuml;ltiger Login
      </div>
      <div class="etc-login-form">
        <p>Neuer Benutzer? <a href="register.php">Hier anmelden</a></p>
      </div>
    </div>
  </div>

  <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
  <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js"></script>
  <script src="js/attributes.js"></script>
</body>
</html>
