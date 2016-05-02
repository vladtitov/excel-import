<?php
if(!isset($_GET['filename']))  die('hello');
$filename =$_GET['filename'];
if(substr($filename,-5)=='.json')header('Content-type: application/json');
echo file_get_contents('../data/'.$filename);
?>