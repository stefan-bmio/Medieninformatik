<?php
  /**
   * Provides methods to respond to HTTP requests
   */
  class RequestHandler {
    /**
     *  The CRUDStrategy to use when accessing the database.
     */
     private $crudStrategy;

     public function __construct($crudStrategy){
       $this->crudStrategy = $crudStrategy;
     }

    /**
     * Determines the HTTP request method and calls the appropriate handler methods
     */
    public function handleRequest($class){
      switch ($_SERVER['REQUEST_METHOD']){
        case 'GET':
          $response = self::handleGet($class);
          break;
        case 'POST':
          $response = self::handlePost($class);
          break;
        case 'PUT':
          $response = self::handlePut($class);
          break;
        default:
          http_response_code(405);
      }

      return json_encode($response, JSON_PRETTY_PRINT);
    }

    /**
     * Retrieves records from the database depending on the URL parameters
     *  - all records of the type of the implementing class if no parameters are given
     *  - the record with the id from the "id" parameter, if given
     *  - the records with the project id from the "project_id" parameter, if given
     */
    private function handleGet($class){
      if(isset($_GET['id'])){
        return self::getById($class, $_GET['id']);
      }else if(isset($_GET['project_id'])){
        return self::getByProjectId($class, $_GET['project_id']);
      }else{
        $result = self::getAll($class);
      }

      return $result;
    }

    /**
     * Retrieves the record of the given class with the given id
     */
    private function getById($class, $id){
      $result = $this->crudStrategy->retrieve($class, ['user_id' => $_SESSION['user_id'], 'id' => $id]);
      if(count($result) == 1){
        $response = new $class((object)$result[0]);
        http_response_code(200);
      }else{
        $response = null;
        http_response_code(404);
      }

      return $response;
    }

    /**
     * Retrieves all records of the given class with the given project id
     */
    private function getByProjectId($class, $project_id){
      $result = $this->crudStrategy->retrieve($class, ['user_id' => $_SESSION['user_id'], 'project_id' => $project_id]);
      http_response_code(200);

      return $result;
    }

    /**
     * Retrieves all records of the given class
     */
    private function getAll($class){
      $result = $this->crudStrategy->retrieve($class, ['user_id' => $_SESSION['user_id']]);
      http_response_code(200);

      return $result;
    }

    /**
     * Creates a new record from the JSON object in the HTTP request body if
     * that object represents a valid new instance of the implementing class;
     * responds with "Invalid Request" otherwise
     */
    private function handlePost($class){
      $object = json_decode(file_get_contents('php://input'));
      $resource = new $class($object);

      $validation = $resource->validate();

      if($validation->is_success === true){
        if(isset($_SESSION) && isset($_SESSION['user_id'])){
          $resource->user_id = $_SESSION['user_id'];
        }
        $id = $this->crudStrategy->create($resource);
        $validation->messages["id"] = $id;

        http_response_code(201);
      }else{
        http_response_code(400);
      }

      return $validation;
    }

    /**
     * Creates a new or updates an existing record from the JSON object in the
     * HTTP request body if that object represents a valid new or existing
     * instance of the implementing class; responds with "Invalid Request"
     * otherwise
     */
    private function handlePut($class){
      $object = json_decode(file_get_contents('php://input'));
      $resource = new $class($object);
      $validation = $resource->validate();

      if($validation->is_success){
        http_response_code(200);
        $resource->id = $object->id;
        $resource->user_id = $_SESSION['user_id'];
        $this->crudStrategy->update($resource);
      }else{
        http_response_code(400);
      }
    }
  }
?>
