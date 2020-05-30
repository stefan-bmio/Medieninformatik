<?php
  /**
   * Interface for datasource access implementations (MongoDB, MySQL)
   * Used in the strategy pattern
   */
  interface Datasource{
    /**
     * Creates a new record in the database
     */
    function create(Resource $resource);

    /**
     * Reads the records from the database that match the given filter
     */
    function retrieve($class, $filter);

    /**
     * Updates the record with the ID of the given resource, if it exists
     */
    function update(Resource $resource);
  }
?>
