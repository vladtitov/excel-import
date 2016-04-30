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
                    console.log(input);
                    var val = input.val();
                    // $.post(this.url_ret, {file: val}).done((res)=>{
                    //     console.log(res);
                    // })
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
                        // console.log(res);
                        _this.loadXLS(res.result);
                    });
                });
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
        return Main;
    }());
    myapp.Main = Main;
})(myapp || (myapp = {}));
//# sourceMappingURL=Main.js.map