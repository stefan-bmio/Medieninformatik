// Form validation functions
<?php
  const PLACEHOLDERS = array('firstname' => "Vorname",
                              'lastname' => "Nachname",
                              'street' => "Stra&szlig;e",
                              'zip' => "Postleitzahl",
                              'city' => "Ort",
                              'country' => "Land",
                              'destination' => "Ziel w&auml;hlen",
                              'transportation' => "Transportmittel w&auml;hlen",
                              'numberofpassengers' => "Anzahl der Personen (1-4)",
                              'message' => "zus&auml;tzliche Informationen");

  $valid = TRUE;

  function validateTextValue($key, $value){
    global $valid;
    if (!isset($value) || empty($value) || $value == PLACEHOLDERS[$key]){
      $valid = FALSE;
      return FALSE;
    }

    return TRUE;
  }

  function validateNumberValue($key, $value){
    global $valid;
    if(!validateTextValue($key, $value)){
      $valid = false;
      return false;
    }

    $number = intval($value);
    if (!($number >= 1 && $number <= 5)){
      $valid = false;
      return false;
    }

    return true;
  }
?>
