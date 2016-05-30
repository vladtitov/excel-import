<?php
if(!isset($_GET['username']) || $_GET['username'] !='myname')  die('hello');
$out = new stdClass();
require('User.php');
$user = new User();
if(!$user->isAdmin()){
    $out->result='Please login';

}else{
    switch($_SERVER['REQUEST_METHOD']){
        case 'GET':
            $out = json_decode(file_get_contents('../data/data.json'));
            break;
        case 'POST':
            $data = file_get_contents('php://input');
            $res = file_put_contents('../data/data.json',$data);
            if($res){
                $out->success='success';
                $out->size=$res;
            }else $out->error='cant save file';
            break;
    }
}


header('Content-type: application/json');
echo json_encode($out);
?>