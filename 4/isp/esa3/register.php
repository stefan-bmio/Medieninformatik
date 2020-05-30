<!DOCTYPE html>
<!-- no PHP in this file - the file extension is for consistency -->
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
          <span class="register-label">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand attrlogo">attributes</a>
      </div>
    </div>
  </nav>

  <div class="text-center" style="padding:50px 0">
  	<div class="logo">Benutzerkonto erstellen</div>
  	<div class="login-form-1">
  		<form id="register-form" class="text-left">
  			<div class="login-form-main-message"></div>
  			<div class="main-login-form">
  				<div class="login-group">
  					<div class="form-group">
  						<label for="username" id="label-username" class="register-label" text="Benutzername">Benutzername</label>
  						<input type="text" class="form-control" name="username" id="username">
  					</div>
  					<div class="form-group">
  						<label for="email" id="label-email" class="register-label" text="E-Mail-Adresse">E-Mail-Adresse</label>
  						<input type="text" class="form-control" name="email" id="email">
  					</div>
  					<div class="form-group">
  						<label for="password" id="label-password" class="register-label" text="Passwort">Passwort</label>
  						<input type="password" class="form-control" name="password" id="password">
  					</div>
  					<div class="form-group">
  						<label for="password_confirm" id="label-password_confirm" class="register-label" text="Passwortbest&auml;tigung">Passwortbest&auml;tigung</label>
  						<input type="password" class="form-control" name="password_confirm" id="password_confirm">
  					</div>
  				</div>
  				<button type="submit" class="login-button"><i class="fa fa-chevron-right"></i></button>
  			</div>
        <div class="alert alert-success alert-login-invisible">
          Das Benutzerkonto wurde angelegt.<br>
          Der Login ist ab sofort m&ouml;glich.
        </div>
  			<div class="etc-login-form">
  				<p>Schon registriert? <a href="login.php">Hier einloggen</a></p>
  			</div>
  		</form>
  	</div>
  </div>

  <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
  <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js"></script>
  <script src="js/attributes.js"></script>
  <script src="js/register.js"></script>
</body>
</html>
