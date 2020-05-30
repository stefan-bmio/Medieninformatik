<?php
include 'includes.php';
if(!(isset($_SESSION['user_id']) || $_SERVER['REQUEST_METHOD'] === 'POST')){
  http_response_code(401);
  $validation = new Validation();
  $validation->fail("login", "unauthorized");
  die(json_encode($validation, JSON_PRETTY_PRINT));
}

class User extends Resource{
  public $username;
  public $email;
  public $password_hash;

  public function __construct($resource){
    $this->username = $resource->username;
    $this->email = $resource->email;
    if(isset($resource->password_hash)){
      $this->password_hash = $resource->password_hash;
    }else{
      $this->password_hash = password_hash($resource->password, PASSWORD_DEFAULT);
    }
  }

  public static function validate($object){
    $validation = new Validation();
    foreach(array("username", "password") as $field){
      if(empty($object->$field)){
        $validation->fail($field, "bitte ausf&uuml;llen");
      }
    }

    if (!filter_var($object->email, FILTER_VALIDATE_EMAIL)) {
      $validation->fail("email", "ung&uuml;ltig");
    }

    if($object->password != $object->password_confirm){
      $validation->fail("password_confirm", "stimmt nicht mit Passwort &uuml;berein");
    }

    foreach(array("username", "email") as $field){
      if(!empty($object->$field)){
        $result = CRUD::retrieve("User", [$field => $object->$field]);
        if(count($result) != 0){
          $validation->fail($field, "existiert bereits");
        }
      }
    }

    return $validation;
  }
}

echo Resource::handleRequest("User");
?>
