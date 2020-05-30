<?php
include 'includes.php';
if(!isset($_SESSION['user_id'])){
  http_response_code(401);
  $validation = new Validation();
  $validation->fail("login", "unauthorized");
  die(json_encode($validation, JSON_PRETTY_PRINT));
}
?>
