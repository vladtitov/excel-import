<?php
if(!isset($_GET['filename']))  die('hello');
$filename =$_GET['filename'];
$data = file_get_contents('php://input');
$out = new stdClass();
$res = file_put_contents('../data/'.$filename,$data);
if($res){
    $out->success='success';
    $out->size=$res;
    $out->result = $filename;
}else $out->error='cant save file';
header('Content-type: application/json');
echo json_encode($out);
?>