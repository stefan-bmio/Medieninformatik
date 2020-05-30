<?php
session_start();
include 'authorize.php';

class Requirement extends Resource{
  public $name;
  public $author;
  public $ac;
  public $use_case;
  public $priority;
  public $dependencies;
  public $history;
  public $description;
  public $project_id;

  public function __construct($resource){
    $this->name = $resource->name;
    $this->author = $resource->author;
    $this->ac = $resource->ac;
    $this->use_case = $resource->use_case;
    $this->priority = $resource->priority;
    $this->dependencies = $resource->dependencies;
    $this->history = $resource->history;
    $this->description = $resource->description;
    $this->project_id = $resource->project_id;
  }

  public static function validate($object){
    $validation = new Validation();
    foreach(array("name", "priority") as $field){
      if(empty($object->$field)){
        $validation->fail($field, "bitte ausf&uuml;llen");
      }

      if($object->project_id == "0"){
        $validation->fail("save", "Kein Projekt ausgew&auml;hlt");
      }
    }

    return $validation;
  }
}

echo Resource::handleRequest("Requirement");
?>
