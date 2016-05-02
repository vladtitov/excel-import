/**
 * Created by Vlad on 4/29/2016.
 */
///<reference path="base.ts"/>
var myapp;
(function (myapp) {
    var Main = (function () {
        function Main(opt) {
            var _this = this;
            this.url_get_data = 'service/get-data.php?filename=allData.json';
            for (var str in opt) {
                this[str] = opt[str];
            }
            var plus = $('#btn-plus').click(function () {
                var input = $('<input type="file">').appendTo(plus.parent()).change(function () {
                    var el = input.get(0);
                    var files = el.files;
                    var file = files[0];
                    var form = new FormData();
                    form.append('myfile', file);
                    $.ajax({
                        url: _this.url_upload_temp,
                        type: 'POST',
                        dataType: 'json',
                        data: form,
                        cache: false,
                        contentType: false,
                        processData: false
                    }).done(function (res) {
                        console.log(res);
                        $.get(_this.url_get_excel, { filename: res.result }).done(function (res) {
                            _this.SetData(res);
                        });
                        // this.onData(res);
                    });
                });
            });
        }
        Main.prototype.onData = function (data) {
            var out = [];
            var sheet = data[0];
            console.log(data);
            _.map(sheet.cells, function (item) {
                console.log(item);
                out.push(item);
            });
            console.log(out);
        };
        Main.prototype.InitTable = function () {
            var collection = new Table.AllPersonCollection({});
            var tableView = new Table.AllPersonView({ collection: collection });
            this.collection = collection;
        };
        Main.prototype.CallData = function () {
            $.get(this.url_get_data).done(function (res) {
                console.log(res);
            });
        };
        Main.prototype.SetData = function (res) {
            this.collection.set(res);
        };
        return Main;
    }());
    myapp.Main = Main;
})(myapp || (myapp = {}));
$(document).ready(function () {
    var options = {
        url_upload_temp: 'service/upload-temp.php',
        url_get_excel: 'service/get-excel.php',
        url_save_data: 'service/save-data.php'
    };
    var app = new myapp.Main(options);
    app.InitTable();
});
//# sourceMappingURL=Admin.js.map