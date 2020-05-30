<?php
  include "datasource.php";

  /**
   * Concrete Datasource for MySQL
   */
  class MySQLDatasource implements Datasource{

    /**
     * The connection to MySQL
     */
    private $mysqli;

    /**
     * Constructs a new MySQL client (connection)
     */
    function __construct(){
      $this->mysqli = new mysqli("localhost", "attributes", "4ttr!but3z", "attributes");
      if ($this->mysqli->connect_errno) {
        echo "Failed to connect to MySQL: (" .  $mysqli->connect_errno . ") " . $this->mysqli->connect_error;
      }
    }

    /**
     * Creates a new record in the database
     */
    public function create(Resource $resource){
      // collect field/column names and field/column values of the object/table
      $columns = array();
      $values = array();
      foreach($resource->persistent() as $key => $value){
        $columns[] = $key;
        $values[] = &$resource->$key;
      }

      // build query string for prepared statement, e.g. 'INSERT INTO table (field1, field2) VALUES (?, ?);'
      $query = 'INSERT INTO ' . get_class($resource) . ' (';
      $query .= implode(', ', $columns);
      $query .= ') VALUES (' . implode(', ', array_fill(0, count($columns), '?')) . ');';

      // create and execute prepared statement
      $stmt = $this->mysqli->prepare($query);
      $typedefinition = str_pad('', count($columns), 's');
      call_user_func_array(array($stmt, "bind_param"), array_merge(array($typedefinition), $values));
      $stmt->execute();

      return $stmt->insert_id;
    }

    /**
     * Updates the record with the ID of the given resource, if it exists
     */
    public function retrieve($class, $filter){
      // collect field/column names as comparisons, e.g. "field1 = ?", and field/column values of the object/table
      $columns = array();
      $values = array();
      foreach($filter as $key => $value){
        $columns[] = $key . ' = ?';
        $values[] = &$filter[$key];
      }

      // build query string for prepared statement, e.g. 'SELECT * FROM table WHERE field1 = ? AND field2 = ?;'
      $query = 'SELECT * FROM ' . $class . ' WHERE ';
      $query .= implode(' AND ', $columns);

      // create and execute prepared statement
      $stmt = $this->mysqli->prepare($query);
      echo $this->mysqli->error;
      $typedefinition = str_pad('', count($columns), 's');
      call_user_func_array(array($stmt, "bind_param"), array_merge(array($typedefinition), $values));
      $stmt->execute();

      // extract result rows and return them as objects
      $result = $stmt->get_result();
      $objects = array();
      while ($data = $result->fetch_assoc())
      {
          $objects[] = $data;
      }
      return $objects;
    }

    /**
     * Updates the record with the ID of the given resource, if it exists
     */
    public function update(Resource $resource){
      // collect field/column names as assignments, e.g. "field1 = ?", and field/column values of the object/table
      $columns = array();
      $values = array();
      foreach($resource->persistent() as $key => $value){
        $columns[] = $key . ' = ?';
        $values[] = &$resource->$key;
      }

      // build update statement string for prepared statement, e.g. 'UPDATE table SET field1 = ?, field2 = ?;'
      $query = 'UPDATE ' . get_class($resource)  . ' SET ';
      $query .= implode(', ', $columns);
      $query .= ' WHERE id = ' . $resource->id;

      // create and execute prepared statement
      $stmt = $this->mysqli->prepare($query);
      $typedefinition = str_pad('', count($columns), 's');
      call_user_func_array(array($stmt, "bind_param"), array_merge(array($typedefinition), $values));
      $stmt->execute();
    }
  }
?>
