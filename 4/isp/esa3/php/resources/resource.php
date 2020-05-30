<?php
  /**
   * Abstract base class (template pattern) for REST resources
   */
  abstract class Resource{
    /**
     * Unique identifier for relations and delete operations
     */
    public $id;
    
    /**
     * Every resource belongs to a user and therefore is assigned a user id;
     * the only exception is the User resource, where this field is always null.
     */
    public $user_id;

    /**
     * Determines whether the current instance is valid for the implementing class;
     * returns an object of type Validation that contains the result
     */
    abstract public function validate();

    /**
     * Returns the resource as an object with only the fields to be persisted in
     * the database
     */
    public function persistent(){
      $class = get_called_class();
      $persistent = new stdClass($this);
      $persistent->user_id = $this->user_id;
      foreach($this->getPersistentFields() as $field){
        $persistent->$field = $this->$field;
      }

      return $persistent;
    }

    /**
     *  Returns the fields to be persisted in the database as an array of strings.
     */
    abstract public function getPersistentFields();
  }
?>
