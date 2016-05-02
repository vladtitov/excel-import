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
                var input = $('<input type="file">').appendTo(plus.parent()).change(function () {
                    var el = input.get(0);
                    var files = el.files;
                    var file = files[0];
                    var form = new FormData();
                    form.append('myfile', file);
                    $.ajax({
                        url: _this.url_ret,
                        type: 'POST',
                        dataType: 'json',
                        data: form,
                        cache: false,
                        contentType: false,
                        processData: false
                    }).done(function (res) {
                        _this.onData(res);
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
        return Main;
    }());
    myapp.Main = Main;
})(myapp || (myapp = {}));
//# sourceMappingURL=Main2.js.map