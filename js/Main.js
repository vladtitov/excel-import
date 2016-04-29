/**
 * Created by Vlad on 4/29/2016.
 */
///<reference path="base.ts"/>
var myapp;
(function (myapp) {
    var Main = (function () {
        function Main(opt) {
            for (var str in opt)
                this[str] = opt[str];
        }
        return Main;
    }());
    myapp.Main = Main;
})(myapp || (myapp = {}));
$(document).ready(function () {
    var options = {};
    var app = new myapp.Main(options);
});
//# sourceMappingURL=Main.js.map