<?php
session_start();
session_destroy();
header('Location: /isp/esa2/login.php');
?>
