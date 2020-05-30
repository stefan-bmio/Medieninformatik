<?php
  include "datasource.php";

  /**
   * Concrete Datasource implementation for MongoDB
   */
  class MongoDbDatasource implements Datasource{

    /**
     * The connection to MongoDB
     */
    private $client;

    /**
     * Constructs a new MongoDB client (connection)
     */
    function __construct(){
      $this->client = new MongoDB\Client('mongodb://localhost:27017');
    }

    /**
     * Returns the MongoDB collection with the given name
     */
    private function getCollection($resourceName)
    {
      return $this->client->attributes->$resourceName;
    }

    /**
     * Creates a new document in the collection
     */
    public function create(Resource $resource){
      $result = $this->getCollection(get_class($resource))->insertOne($resource->persistent());
      return $result->getInsertedId() . '';
    }

    /**
     * Reads the documents from the database that match the given filter
     */
    public function retrieve($class, $filter){
      if(isset($filter['id'])){
        $filter['_id'] = new MongoDB\BSON\ObjectId($filter['id']);
        unset($filter['id']);
      }
      $objects = $this->getCollection($class)->find($filter)->toArray();
      foreach ($objects as $object){
        $object->id = $object->_id . '';
        unset($object->_id);
      }
      return $objects;
    }

    /**
     * Updates the document with the ID of the given resource, if it exists
     */
    public function update(Resource $resource){
      $resource->user_id = $_SESSION['user_id'];
      $this->getCollection(get_class($resource))
            ->replaceOne(['_id' => new MongoDB\BSON\ObjectId($resource->id)], $resource->persistent());
    }
  }
?>
