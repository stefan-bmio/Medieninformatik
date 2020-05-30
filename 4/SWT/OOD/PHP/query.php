<?php
  include "review.php";

  header("Access-Control-Allow-Origin: *");

  const COLUMNS = ["text", "rating", "created", "publishedState", "product"];
  if (!in_array($_GET["filter"], COLUMNS)){
    die("quit.");
  }

  $conn = new mysqli("localhost", "s-berger-bmio_review", "92eP46VqRhvUJM6v", "s-berger-bmio_review");
  if ($conn->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
  }
  $stmt = $conn->prepare("SELECT * FROM review WHERE " . $_GET["filter"] . " = ?");
  if(!$stmt){
    printf("Errormessage: %s, %s", $stmt->error, $conn->error);
    exit();
  }
  $stmt->bind_param("s", $_GET["value"]);
  if(!$stmt){
    printf("Error message: %s", $mysqli->error);
    exit();
  }
  $stmt->execute();
  $stmt->bind_result($text, $rating, $created, $publishedState, $product);
  $result = [];
  while($stmt->fetch()){
    $row = new Review();
    foreach (COLUMNS as $column) {
      $row->{$column} = ${$column};
    }
    array_push($result, $row);
  }
  $conn->close();

  echo json_encode($result, JSON_PRETTY_PRINT);
?>
