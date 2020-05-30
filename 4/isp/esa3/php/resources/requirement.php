<?php
  session_start();
  require "../vendor/autoload.php";
  include 'authorize.php';
  include 'resource.php';
  include '../request_handler.php';
  include '../datasource/mysql_datasource.php';
  include '../validation.php';

  /**
   * Represents a requirement of a project; has a 1:n relation with projects
   * via the project id field
   */
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

    /**
     * Constructs a new Requirement from the given resource object
     */
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

    /**
     * Determines whether the current instance is a valid Requirement.
     * A Requirement must have a name and a priority, and it must be
     * assigned to a project.
     */
    public function validate(){
      $validation = new Validation();
      foreach(array("name", "priority") as $field){
        if(empty($this->$field)){
          $validation->fail($field, "bitte ausf&uuml;llen");
        }

        if($this->project_id == "0"){
          $validation->fail("save", "Kein Projekt ausgew&auml;hlt");
        }
      }

      return $validation;
    }

    /**
     *  Returns the fields to be persisted in the database as an array of strings.
     */
    public function getPersistentFields(){
      return array('name', 'author', 'ac', 'use_case', 'priority', 'dependencies', 'history', 'description', 'project_id');
    }
  }

  // create a request handler using MySQL as datasource (strategy pattern)
  $datasource = new MySQLDatasource();
  $requestHandler = new RequestHandler($datasource);

  // forward the request to the request handler
  echo $requestHandler->handleRequest('Requirement');
?>
