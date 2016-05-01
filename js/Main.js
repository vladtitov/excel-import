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
            var plus = $('#btn-plus').click(function () {
                _this.onPlusClick(plus);
            });
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
        return Main;
    }());
    myapp.Main = Main;
})(myapp || (myapp = {}));
//# sourceMappingURL=Main.js.map