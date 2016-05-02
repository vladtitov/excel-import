<?php
if(!isset($_GET['filename']))  die('hello');
$filename =$_GET['filename'];
$data = file_get_contents('php://input');
file_put_contents('../data/'.$filename,$data);
?>