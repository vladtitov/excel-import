<?php
/**
 * Created by PhpStorm.
 * User: yrik6
 * Date: 03.05.2016
 * Time: 19:55
 */

//    $current = date('Y-m-d');
//    echo date('Y-m-d');
    if(!isset($_GET['time'])) die ('Hello');
//    $time = (int)$_GET['time'];
    $current = $_GET['time'];
    $data = json_decode(file_get_contents('../data/data.json'));
    $out = array();
    foreach ($data as $item) {
        $d = $item->date;
        $d = date('Y-m-d', $d);
        $item->d = $d;
        if($d == $current)
            $out[] = $item;
//        if($item->date > $time && $item->date < $time + (24*60*60) )
//            $out[] = $item;
    }
    header('Content-type: application/json');
    echo json_encode($out);
?>