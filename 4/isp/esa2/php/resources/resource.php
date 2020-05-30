<?php
abstract class Resource{
  public $user_id;

  public function __toString(){
    return json_encode($this, JSON_PRETTY_PRINT);
  }

  public static function validate($resource){
    return new Validation();
  }

  public static function handleRequest($class){
    switch ($_SERVER['REQUEST_METHOD']){
      case 'GET':
        $response = Resource::handleGet($class);
        break;
      case 'POST':
        $response = Resource::handlePost($class);
        break;
      case 'PUT':
        $response = Resource::handlePut($class);
        break;
      default:
        http_response_code(405);
    }

    return json_encode($response, JSON_PRETTY_PRINT);
  }

  private static function handleGet($class){
    if(isset($_GET['id'])){
      return Resource::getById($class, $_GET['id']);
    }else if(isset($_GET['project_id'])){
      return Resource::getByProjectId($class, $_GET['project_id']);
    }else{
      $result = Resource::getAll($class);
      http_response_code(200);
    }

    return $result;
  }

  private static function getById($class, $id){
    $result = CRUD::retrieve($class, ['user_id' => $_SESSION['user_id'], '_id' => new MongoDB\BSON\ObjectId($id)]);
    if(count($result) == 1){
      $result = new $class($result[0]);
      http_response_code(200);
    }else{
      $result = null;
      http_response_code(404);
    }

    return $result;
  }

  private static function getByProjectId($class, $project_id){
    $result = CRUD::retrieve($class, ['user_id' => $_SESSION['user_id'], 'project_id' => $project_id]);
    http_response_code(200);

    return $result;
  }

  private static function getAll($class){
    $result = CRUD::retrieve($class, ['user_id' => $_SESSION['user_id']]);
    http_response_code(200);

    return $result;
  }

  private static function handlePost($class){
    $object = json_decode(file_get_contents('php://input'));
    $validation = $class::validate($object);

    if($validation->is_success === true){
      http_response_code(201);
      $resource = new $class($object);
      if(isset($_SESSION) && isset($_SESSION['user_id'])){
        $resource->user_id = $_SESSION['user_id'];
      }
      $id = CRUD::create($resource);
      $validation->messages["id"] = $id;
    }else{
      http_response_code(400);
    }

    return $validation;
  }

  private static function handlePut($class){
    $object = json_decode(file_get_contents('php://input'));
    $validation = $class::validate($object);
    if($validation->is_success){
      http_response_code(200);
      $resource = new $class($object);
      $resource->user_id = $_SESSION['user_id'];
      CRUD::update(['_id' => new MongoDB\BSON\ObjectId($object->id)], $resource);
    }else{
      http_response_code(400);
    }
  }
}
?>
