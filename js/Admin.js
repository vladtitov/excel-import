/**
 * Created by Vlad on 4/29/2016.
 */
///<reference path="base.ts"/>
var myapp;
(function (myapp) {
    var Main = (function () {
        function Main(opt) {
            var _this = this;
            for (var str in opt) {
                this[str] = opt[str];
            }
            this.$btnSave = $('#btn-save').click(function () {
                _this.saveData();
            });
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
        Main.prototype.InitTable = function () {
            var collection = new Table.AllPersonCollection({});
            var tableView = new Table.AllPersonView({ collection: collection });
            this.collection = collection;
            collection.fetch({ url: this.url_data, data: { username: this.username } });
        };
        Main.prototype.SetData = function (res) {
            this.collection.set(res);
        };
        Main.prototype.saveData = function () {
            var data = this.collection.toJSON();
            $.post(this.url_data + '?username=' + this.username, JSON.stringify(data)).done(function (res) {
                console.log(res);
            });
        };
        return Main;
    }());
    myapp.Main = Main;
})(myapp || (myapp = {}));
$(document).ready(function () {
    var options = {
        url_upload_temp: 'service/upload-temp.php',
        url_get_excel: 'service/get-excel.php',
        url_data: 'service/my-data.php',
        username: 'myname'
    };
    var app = new myapp.Main(options);
    app.InitTable();
});
//# sourceMappingURL=Admin.js.map