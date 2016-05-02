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
    <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.1/animate.min.css" rel="stylesheet">
    
</head>
<body>
<div class="container">
    <div class="row">
        <table class="table table-condensed table-one">
            <tbody>
                <tr>
                    <td style="width:25%; border-right:2px solid #000000!important;">
                        <span>TIME</span>
                    </td>
                    <td style="width:45%; border-right:2px solid #000000!important;">
                        <span>EVENT</span>
                    </td>
                    <td style="width:30%;">
                        <span>LOCATION</span>
                    </td>
                </tr>
            </tbody>
        </table>

<!--        <table id="tableone" class="table table-condensed table-two">-->
<!--            <script id="row-template" type="text/template">-->
<!--                <td class="time">-->
<!--                    <span><%=time%></span>-->
<!--                </td>-->
<!--                <td class="event">-->
<!--                    <span><%=event%></span>-->
<!--                </td>-->
<!--                <td class="location">-->
<!--                    <span><%=location%></span>-->
<!--                </td>-->
<!--            </script>-->
<!---->
<!--            <style>-->
<!--                body {-->
<!--                    background:#000000;-->
<!--                    color:white;-->
<!--                    font-family:"Myriad Arabic";-->
<!--                }-->
<!--                .table-one {-->
<!--                    height:7vh;-->
<!--                    background:#6b6b6b;-->
<!--                    margin: 0px;-->
<!--                }-->
<!--                .table-one tbody tr td {-->
<!--                    border: 0px;-->
<!--                    padding: 0px;-->
<!--                    text-align: center;-->
<!--                    font-weight: bold;-->
<!--                    font-size:6.0vh;-->
<!--                }-->
<!--                .table-two {-->
<!--                    overflow-y: auto;-->
<!--                    /*height:82vh;*/-->
<!--                    margin:0px;-->
<!--                    background:#1d1d1d;-->
<!--                    border-color:#9e9e9e;-->
<!--                    border-bottom:2px solid #9e9e9e!important;-->
<!--                }-->
<!--                .table-two tr {-->
<!--                    width: 100%;-->
<!--                    display: inline-table;-->
<!--                    font-size:3.5vh;-->
<!--                    padding: 0px;-->
<!--                }-->
<!--                .table-two tr:nth-child(odd) {-->
<!--                    background-color:#3d3d3d;-->
<!--                }-->
<!--                .table-two tr td {-->
<!--                    padding: 0px;-->
<!--                }-->
<!--                .table-two td span{-->
<!--                    vertical-align:middle;-->
<!--                    margin-left: 10px;-->
<!--                }-->
<!--                .time {-->
<!--                    width:25%;-->
<!--                    border-right:2px solid #878787!important;-->
<!--                }-->
<!--                .event {-->
<!--                    width:45%;-->
<!--                    border-right:2px solid #878787!important;-->
<!--                }-->
<!--                .location {-->
<!--                    width:30%;-->
<!--                }-->
<!--            </style>-->
<!--        </table>-->




        <table class="table table-condensed table-two">
            <tbody>
                <tr>
                    <td style="width:25%; border-right:2px solid #878787!important;">
                        <span>07:30<small class="small">AM</small> - 05:30<small class="small">PM</small></span>
                    </td>
                    <td style="width:45%; border-right:2px solid #878787!important;">
                        <span>Montessori Preschool</span>
                    </td>
                    <td style="width:30%;">
                        <span>Comm. Room 3</span>
                    </td>
                </tr>
                <tr>
                    <td style="width:25%; border-right:2px solid #878787!important;">
                        <span>07:30<small class="small">AM</small> - 05:30<small class="small">PM</small></span>
                    </td>
                    <td style="width:45%; border-right:2px solid #878787!important;">
                        <span>Montessori Preschool</span>
                    </td>
                    <td style="width:30%;">
                        <span>Servery</span>
                    </td>
                </tr>
                <tr>
                    <td style="width:25%; border-right:2px solid #878787!important;">
                        <span>04:00<small class="small">PM</small> - 05:00<small class="small">PM</small></span>
                    </td>
                    <td style="width:45%; border-right:2px solid #878787!important;">
                        <span>Kidsplay Sports with Coach David</span>
                    </td>
                    <td style="width:30%;">
                        <span>Double Gym - Single 1</span>
                    </td>
                </tr>
                <tr>
                    <td style="width:25%; border-right:2px solid #878787!important;">
                        <span>05:00<small class="small">PM</small> - 06:00<small class="small">PM</small></span>
                    </td>
                    <td style="width:45%; border-right:2px solid #878787!important;">
                        <span>Kidsplay Sports with Coach David</span>
                    </td>
                    <td style="width:30%;">
                        <span>Double Gym</span>
                    </td>
                </tr>
                <tr>
                    <td style="width:25%; border-right:2px solid #878787!important;">
                        <span>06:00<small class="small">PM</small> - 07:30<small class="small">PM</small></span>
                    </td>
                    <td style="width:45%; border-right:2px solid #878787!important;">
                        <span>GE Water</span>
                    </td>
                    <td style="width:30%;">
                        <span>Double Gym - Single 1</span>
                    </td>
                </tr>
            </tbody>

            <style>
                body {
                    background:#000000;
                    color:white;
                    font-family:"Myriad Arabic";
                }
                .table-one {
                    height:7vh;
                    background:#6b6b6b;
                    margin: 0px;
                }
                .table-one tbody tr td {
                    border: 0px;
                    padding: 0px;
                    text-align: center;
                    font-weight: bold;
                    font-size:6.0vh;
                }
                .table-two {
                    overflow-y: auto;
                    /*height:82vh;*/
                    margin:0px;
                    background:#1d1d1d;
                    border-color:#9e9e9e;
                    border-bottom:2px solid #9e9e9e!important;
                }
                .table-two tr {
                    width: 100%;
                    display: inline-table;
                    font-size:4.5vh;
                    padding: 0px;
                }
                .table-two tr:nth-child(odd) {
                    background-color:#3d3d3d;
                }
                .table-two tr td {
                    padding: 0px;
                }
                .table-two td span{
                    vertical-align:middle;
                    margin-left: 10px;
                }
                .small {
                    font-size:3.0vh;
                }
            </style>
        </table>



    </div>

<!--    <script src="libs/xls.min.js" ></script>-->
    <script src="js/StaticObject.js" ></script>
    <script src="js/Utils.js" ></script>
    <script src="js/Index.js" ></script>
    <script>
        $(document).ready(function(){
            var options = {
                url_ret:'service/excel-to-json.php',
                lala: 35
            }
            var app = new myapp.Main(options);
        })

    </script>

</div>
</body>
</html>