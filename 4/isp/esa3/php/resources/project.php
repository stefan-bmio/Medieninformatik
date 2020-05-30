<?php
  session_start();
  require "../vendor/autoload.php";
  include 'authorize.php';
  include '../request_handler.php';
  include '../datasource/mysql_datasource.php';
  include 'resource.php';
  include '../validation.php';

  /**
   * Represents a project with a name and a description
   */
  class Project extends Resource{
    public $name;
    public $description;

    /**
     * Constructs a new Project from the given resource object
     */
    public function __construct($resource){
      $this->name = $resource->name;
      $this->description = $resource->description;
    }

    /**
     * Determines whether the current instance is a valid Project.
     * A Project must have a name.
     */
    public function validate(){
      $validation = new Validation();
      if(empty($this->name)){
          $validation->fail("name", "bitte ausf&uuml;llen");
      }

      return $validation;
    }

    /**
     * Returns the fields to be persisted in the database as an array of strings.
     */
    public function getPersistentFields(){
      return array('name', 'description');
    }
  }

  // create a request handler using MySQL as datasource (strategy pattern)
  $datasource = new MySQLDatasource();
  $requestHandler = new RequestHandler($datasource);

  // forward the request to the request handler
  echo $requestHandler->handleRequest("Project");
?>
