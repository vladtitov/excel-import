<?php
$file = $_FILES['myfile'];
$result = saveUploaded($file,'temp');
header('Content-type: application/json');
echo json_encode($result);

function saveUploaded($file,$folder){
    $out=new stdClass();
    if ($file["error"] > 0){
        $out->error= $file["error"];
        switch ($file["error"]) {
            case UPLOAD_ERR_OK:
                $out->result = 'UPLOAD_ERR_OK';
                break;
            case UPLOAD_ERR_NO_FILE:
                $out->result = 'UPLOAD_ERR_NO_FILE';
            case UPLOAD_ERR_INI_SIZE:
            case UPLOAD_ERR_FORM_SIZE:
                $out->result = 'UPLOAD_ERR_INI_SIZE';
            default:
                $out->result = 'UNKNOWN_ERROR';
        }

        return $out;
    }

    if (!file_exists($folder)) mkdir($folder, 0755, true);
    $filename = $file["name"];
    if(move_uploaded_file($file["tmp_name"],$folder.'/'.$filename)){
        $out->success='success';
        $out->result=$filename;
    }
    return $out;
}

?>