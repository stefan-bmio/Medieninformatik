<?php
  // log the user out and redirect to the login screen 
  session_start();
  session_destroy();
  header('Location: /isp/esa3/login.php');
?>
