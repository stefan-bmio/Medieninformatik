<?php
require 'vendor/autoload.php';

class CRUD{
  private static $instance;

  private function __construct($collection){
    $client = new MongoDB\Client('mongodb://localhost:27017"');
    $this->collection = $client->attributes->$collection;
  }

  private static function getCollection($resource)
  {
    if (is_null(CRUD::$instance[$resource])){
      CRUD::$instance[$resource] = new self($resource);
    }
    return CRUD::$instance[$resource]->collection;
  }

  public static function create($document){
    $result = CRUD::getCollection(get_class($document))->insertOne($document);
    return $result->getInsertedId() . '';
  }

  public static function retrieve($class, $filter){
    $objects = CRUD::getCollection($class)->find($filter)->toArray();
    foreach ($objects as $object){
      $object->id = $object->_id . '';
    }
    return $objects;
  }

  public static function update($filter, $document){
    $document->user_id = $_SESSION['user_id'];
    CRUD::getCollection(get_class($document))
          ->replaceOne($filter, $document, ["upsert" => true]);
  }
}
?>
