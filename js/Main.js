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
//# sourceMappingURL=Main.js.map