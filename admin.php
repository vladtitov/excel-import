<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Admin</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
    <link href='https://fonts.googleapis.com/css?family=Headland+One' rel='stylesheet' type='text/css'>
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet">
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.3.3/backbone-min.js"></script>
    <script src="libs/moment.js"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.1/animate.min.css" rel="stylesheet">
    
</head>
<body>
<div class="container">
    <div class="row">
        <div class="pull-left">
            <a id="btn-plus" class="btn">
                <span class="fa fa-exchange"></span>
                <span>Import</span>
            </a>
        </div>
        <div class="pull-left">
            <a id="btn-save" class="btn">
                <span class="fa fa-save"></span>
                <span>Save</span>
            </a>
        </div>
    </div>

    <table id="tableone" class="table table-condensed">
        <script id="row-template" type="text/template">
            <td class="date">
                <span><%=date%></span>
            </td>
            <td class="start">
                <span><%=start%></span>
            </td>
            <td class="end">
                <span><%=end%></span>
            </td>
            <td class="event">
                <span><%=event%></span>
            </td>
            <td class="location">
                <span><%=location%></span>
            </td>
        </script>
        <tbody id="tablebody">
        
        </tbody>
    </table>
</div>

<!--    <script src="libs/xls.min.js" ></script>-->
    <script src="js/StaticObject.js" ></script>
    <script src="js/Utils.js" ></script>
    <script src="js/AdminBackbone.js" ></script>
    <script src="js/Admin.js" ></script>
<!--    <script>-->
<!--        $(document).ready(function(){-->
<!--            var options = {-->
<!--                url_upload_temp:'service/upload-temp.php',-->
<!--                url_get_excel:'service/get-excel.php',-->
<!--                url_save_data:'service/save-data.php'-->
<!--//                url_ret:'service/excel-to-json.php'-->
<!--            }-->
<!--            var app = new myapp.Main(options);-->
<!--        })-->
<!---->
<!--    </script>-->

</div>
</body>
</html>