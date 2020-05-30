<?php
  session_start();
  if(!isset($_SESSION['orders'])){
    $_SESSION['orders'] = array();
  }
  include 'validation/validation.php';
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">

    <title>Buchung</title>

    <link rel="stylesheet" href="./bootstrap-3.3.7-dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="./bootstrap-3.3.7-dist/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

    <!-- Custom styles for this template -->
    <link href="bootstrap-templates/sticky-footer-navbar.css" rel="stylesheet">

    <!-- bootstrap-select -->
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.4/css/bootstrap-select.min.css">

    <link href="css/index.css" rel="stylesheet">
    <link href="css/form.css" rel="stylesheet">
  </head>

  <body>
    <!-- Fixed navbar -->
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href=".">spacetrip24.de</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href=".">Home</a></li>
            <li><a href="about.php">About</a></li>
            <li><a href="contact.php">Contact</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>

    <!-- Begin page content -->
    <div class="container">
      <div class="page-header">
        <h1>Reise buchen</h1>
      </div>

      <form class="cf" method=POST>
        <div class="half left cf">
        <?php
          $textInputs = array("firstname", "lastname", "street", "zip", "city", "country");
          foreach($textInputs as $key){
            echo '<input type="text" name="' . $key . '" ' . ((empty($_POST) || !isset($_POST[$key])) ? 'placeholder="' . PLACEHOLDERS[$key] : 'value="' . $_POST[$key]) . '"';
            if(isset($_POST['reset-session']) || empty($_POST) || validateTextValue($key, $_POST[$key])){
              echo '>';
            }else{
              echo ' class="input-error">';
              echo '<div class="error-message">Dieses Feld muss ausfgef&uuml;llt sein.</div>';
            }
          }
        ?>
        </div>

        <div class="half right cf">
        <select name="destination" class="selectpicker customselect" title="<?php echo PLACEHOLDERS['destination']; ?>">
          <?php
          $destination = (empty($_POST) || !isset($_POST['destination'])) ? "" : $_POST['destination'];
          foreach (array("Venus", "Mars", "Mond", "Jupiter", "Saturn", "Uranus", "Neptun") as $planet){
            echo '<option ';
            if($destination == $planet){
              echo 'selected ';
            }
            echo '>' . $planet . '</option>';
          }
          ?>
        </select>
        <?php
          if(!(isset($_POST['reset-session']) || empty($_POST) || validateTextValue("destination", $_POST['destination']))) {
            echo '<div class="error-message">Dieses Feld muss ausfgef&uuml;llt sein.</div>';
          }
        ?>

        <select name="transportation" class="selectpicker customselect" title="<?php echo PLACEHOLDERS['transportation']; ?>">
          <?php
          $transportation = (empty($_POST) || !isset($_POST['transportation'])) ? "" : $_POST['transportation'];
          foreach (array("Space Shuttle", "Todesstern", "USS Enterprise", "Sojus-Kapsel") as $vessel){
            echo '<option ';
            if($transportation == $vessel){
              echo 'selected ';
            }
            echo '>' . $vessel . '</option>';
          }
          ?>
        </select>
        <?php
          if(!(isset($_POST['reset-session']) || empty($_POST) || validateTextValue("transportation", $_POST['transportation']))) {
            echo '<div class="error-message">Dieses Feld muss ausfgef&uuml;llt sein.</div>';
          }
        ?>
        <?php
        echo '<input name="numberofpassengers" type="text" ' . (empty($_POST['numberofpassengers']) ? 'placeholder="' . PLACEHOLDERS['numberofpassengers'] : 'value="' . $_POST['numberofpassengers']) . '">';
          if(!(isset($_POST['reset-session']) || empty($_POST) || validateNumberValue("numberofpassengers", $_POST['numberofpassengers']))) {
            echo '<div class="error-message">Dieses Feld muss eine Zahl zwischen 1 und 5 enthalten.</div>';
          }
        ?>
        <textarea name="message" type="text" <?php echo (empty($_POST['message']) ? 'placeholder="' . PLACEHOLDERS['message'] . '">': '>' . $_POST['message'])?></textarea>
        </div>
          <input type="submit" value="Zwischenstopp einf&uuml;gen" id="input-submit">
      </form>
    </div>

    <?php
      if(isset($_POST["reset-session"]) && $_POST["reset-session"] == true){
        $_SESSION['orders'] = array();
      }else if($valid == TRUE){
        $order = array();
        foreach($_POST as $key => $value){
          $order[$key] = $value;
        }
        array_push($_SESSION['orders'], $order);

        echo '<script src="js/form.js"></script>';

        echo '<div class="container"><table class="table"> <tr><th></th><th>Zwischenstopp</th><th>Transportmittel</th><th>Personen</th><th>zus&auml;tzliche Informationen</th></tr>';

        for($i = 0; $i < count($_SESSION['orders']); $i++){
          $order = $_SESSION['orders'][$i];
          echo "<tr><td>" . ($i + 1) . "</td>";
          echo "<td>" . $order['destination'] . "</td><td>" .
                $order['transportation'] . "</td><td>" .
                $order['numberofpassengers'] . "</td><td>" .
                $order['message'] . "</td>";
          echo "</tr>";
        }
        echo '</table> <form class="cf" method=POST> <input name="reset-session" type="submit" value="zur&uuml;cksetzen"> </form> </div>';
      }
      ?>

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery.min.js"><\/script>')</script>
    <script src="./bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>

    <!-- bootstrap-select-->
    <!-- Latest compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.4/js/bootstrap-select.min.js"></script>
  </body>
</html>
