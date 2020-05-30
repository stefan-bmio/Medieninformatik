<?php
  $val = json_decode('[{"text":"Ein toller Fernseher, mit einem grossartigen Bild und gutem Sound.","rating":"5","creator":"user-alice","created":"2018-05-31","publishedState":"IN_AUDIT"},{"text":"Ein mittelmaessiger Fernseher, mit einem durchschnittlichen Bild und O.K. Sound.","rating":"3","creator":"user-bob","created":"2018-05-30","publishedState":"PUBLISHED"}]');
  echo json_encode($val, JSON_PRETTY_PRINT);
?>
