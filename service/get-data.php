<?php
if(!isset($_GET['username']) || $_GET['username'] !='myname')  die('hello');
switch($_SERVER['REQUEST_METHOD']){
    case 'GET':
        break;
    case 'POST':
        break;
}

header('Content-type: application/json');
echo file_get_contents('../data/'.$filename);
?>