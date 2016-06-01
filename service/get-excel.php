<?php
if(!isset($_GET['filename'])) die('hello');
$filename = $_GET['filename'];
    require_once 'ExcelReader/reader.php';
    $reader = new Spreadsheet_Excel_Reader();
    $reader->setOutputEncoding('CP1251');
    $reader->read($filename);
    $out =  $reader->sheets;

$sheet = $reader->sheets[0];
$out = array();
$ar = $sheet['cells'];
$i=0;

foreach($ar  as $row){
    $item = new stdClass();
    if($i++<2) continue;

    if(count($row)<6) continue;
    if(isset($row[1])) $item->date = convertTime($row[1]);
    if(isset($row[2])) $item->start = convertTime($row[2]);
    if(isset($row[3])) $item->end = convertTime($row[3]);
    $item->myevent = isset($row[7])? formatAccount($row[7]):'';
    $item->location =  isset($row[4])?  $row[4]:'';
    $out[] = $item;
}

function formatAccount($val){
    return str_replace('FWS','',$val);
}
function convertTime($val){
    return  is_numeric($val)?($val -25569) * 86400:$val;
}
header('Content-type: application/json');
echo json_encode($out);

?>