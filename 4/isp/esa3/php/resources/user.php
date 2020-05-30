<?php
  require '../vendor/autoload.php';
  include '../validation.php';
  include '../request_handler.php';
  include '../datasource/mongo_db_datasource.php';
  include 'resource.php';

  // handle only requests for logged in users and requests to create a new user (registration)
  if(!(isset($_SESSION['user_id']) || $_SERVER['REQUEST_METHOD'] === 'POST')){
    http_response_code(401);
    $validation = new Validation();
    $validation->fail("login", "unauthorized");
    die(json_encode($validation, JSON_PRETTY_PRINT));
  }

  /**
   * Represents a user with a username, email and password
   */
  class User extends Resource{
    /**
     * The unique username to be displayed in the navigation bar
     */
    public $username;

    /**
     * The unique email address of the user
     */
    public $email;

    /**
     * The user's password as entered
     */
    public $password;

    /**
     * The user's password as entered in the confirmation box when registering
     */
    public $password_confirm;

    /**
     * The encrypted password of the user
     */
    public $password_hash;

    /**
     * Initialise the user object from the given resource object
     */
    public function __construct($resource){
      $this->user_id = null;
      $this->username = $resource->username;
      $this->email = $resource->email;
      $this->password = $resource->password;
      $this->password_confirm = $resource->password_confirm;
      if(isset($resource->password_hash)){
        $this->password_hash = $resource->password_hash;
      }else{
        $this->password_hash = password_hash($resource->password, PASSWORD_DEFAULT);
      }
    }

    /**
     * Determines whether the current instance is a valid User.
     * A User must have a username, a valid email address and the same password
     * in "password" and "password_confirm". The username and the email address
     * must not already exist in the database.
     */
    public function validate(){
      $validation = new Validation();
      foreach(array("username", "password") as $field){
        if(empty($this->$field)){
          $validation->fail($field, "bitte ausf&uuml;llen");
        }
      }

      if (!filter_var($this->email, FILTER_VALIDATE_EMAIL)) {
        $validation->fail("email", "ung&uuml;ltig");
      }

      if($this->password != $this->password_confirm){
        $validation->fail("password_confirm", "stimmt nicht mit Passwort &uuml;berein");
      }

      foreach(array("username", "email") as $field){
        global $requestHandler;
        if(!empty($this->$field)){
          $datasource=new MongoDbDatasource();
          $result = $datasource->retrieve("User", [$field => $this->$field]);
          if(count($result) != 0){
            $validation->fail($field, "existiert bereits");
          }
        }
      }

      return $validation;
    }

    /**
     *  Returns the fields to be persisted in the database as an array of strings.
     */
    public function getPersistentFields(){
      return array('username', 'email', 'password_hash');
    }
  }

  // create a request handler using MongoDB as datasource (strategy pattern)
  $datasource = new MongoDbDatasource();
  $requestHandler = new RequestHandler($datasource);

  // forward the request to the request handler
  echo $requestHandler->handleRequest("User");
?>
