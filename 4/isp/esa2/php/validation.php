<?php
class Validation{
  public $messages;

  private $is_success;

  public function __construct(){
    $this->is_success = true;
    $this->messages = array();
  }

  public function fail($field, $message){
    $this->is_success = false;
    $this->messages[$field] = $message;
  }

  public function __get($is_success){
    return $this->is_success;
  }
}
?>
