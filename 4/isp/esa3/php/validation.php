<?php
/**
 * Holds the result of the validation before a record get created in the
 * database
 */
class Validation{
  /**
   * Human readable error messages of the Validation
   */
  public $messages;

  /**
   * Boolean value that represents whether the validation was successful or not
   */
  private $is_success;

  /**
   * Contructs a new Validation object that represents a successful validation
   */
  public function __construct(){
    $this->is_success = true;
    $this->messages = array();
  }

  /**
   * Sets the validation object to a failed state and adds a human readable
   * error message; once failed a Validation can never go back to the success
   * state 
   */
  public function fail($field, $message){
    $this->is_success = false;
    $this->messages[$field] = $message;
  }

  public function __get($is_success){
    return $this->is_success;
  }
}
?>
