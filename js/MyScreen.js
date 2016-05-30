/**
 * Created by Vlad on 4/29/2016.
 */
///<reference path="base.ts"/>
var myapp;
(function (myapp) {
    var Main = (function () {
        function Main(opt) {
            for (var str in opt) {
                this[str] = opt[str];
            }
        }
        Main.prototype.parseXLS = function (data) {
            var book = XLS.read(data, { type: 'binary' });
            console.log(book);
        };
        Main.prototype.loadXLS = function (url) {
            // $.get(url).done((res)=> this.parseXLS(res));
            console.log(url);
            var book = XLS.readFile(url);
        };
        Main.prototype.onPlusClick = function (plus) {
            var _this = this;
            var input = $('<input type="file">').appendTo(plus.parent()).change(function () {
                console.log(input);
                var val = input.val();
                var el = input.get(0);
                var files = el.files;
                var file = files[0];
                var form = new FormData();
                form.append('myfile', file);
                input.remove();
                $.ajax({
                    url: _this.url_ret,
                    type: 'POST',
                    dataType: 'json',
                    data: form,
                    cache: false,
                    contentType: false,
                    processData: false
                }).done(function (res) {
                    _this.loadXLS(res.result);
                });
            });
        };
        Main.prototype.InitTable = function () {
            var _this = this;
            var collection = new MyScreen.AllPersonCollection({});
            var tableView = new MyScreen.AllPersonView({ collection: collection });
            this.collection = collection;
            setInterval(function () {
                _this.loadData();
            }, 5000);
        };
        Main.prototype.loadData = function () {
            this.collection.fetch({ url: this.url_data, data: { time: this.today } });
        };
        return Main;
    }());
    myapp.Main = Main;
})(myapp || (myapp = {}));
$(document).ready(function () {
    var options = {
        // url_upload_temp:'service/upload-temp.php',
        // url_get_excel:'service/get-excel.php',
        url_data: 'service/screen-data.php',
        today: '2016-04-18'
    };
    var app = new myapp.Main(options);
    app.InitTable();
    app.loadData();
});
//# sourceMappingURL=MyScreen.js.map