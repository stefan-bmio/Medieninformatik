<?php
session_start();
include 'authorize.php';

class Project extends Resource{
  public $name;
  public $description;

  public function __construct($resource){
    $this->name = $resource->name;
    $this->description = $resource->description;
  }

  public static function validate($object){
    $validation = new Validation();
    if(empty($object->name)){
        $validation->fail("name", "bitte ausf&uuml;llen");
    }

    return $validation;
  }
}

echo Resource::handleRequest("Project");
?>
