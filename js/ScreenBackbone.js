/**
 * Created by yrik6 on 18.04.2016.
 */
///<reference path="base.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MyScreen;
(function (MyScreen) {
    var Person = (function (_super) {
        __extends(Person, _super);
        function Person() {
            _super.apply(this, arguments);
        }
        Person.prototype.defaults = function () {
            return {
                time: '',
                myevent: '',
                location: ''
            };
        };
        return Person;
    }(Backbone.Model));
    MyScreen.Person = Person;
    var PersonView = (function (_super) {
        __extends(PersonView, _super);
        function PersonView(options) {
            var _this = this;
            _super.call(this, options);
            this.model.bind('remove', function () { return _this.remove(); });
        }
        PersonView.prototype.remove = function () {
            this.$el.remove();
            return this;
        };
        PersonView.prototype.render = function () {
            var data = this.model.toJSON();
            var start = moment.unix(data.start).format('h:mm a');
            var end = moment.unix(data.end).format('h:mm a');
            data.time = start + ' - ' + end;
            this.$el.html(PersonView.template(data));
            return this;
        };
        PersonView.template = _.template($('#row-template').html());
        return PersonView;
    }(Backbone.View));
    MyScreen.PersonView = PersonView;
    var AllPersonCollection = (function (_super) {
        __extends(AllPersonCollection, _super);
        function AllPersonCollection(options) {
            _super.call(this, options);
            for (var str in options)
                this[str] = options[str];
        }
        return AllPersonCollection;
    }(Backbone.Collection));
    MyScreen.AllPersonCollection = AllPersonCollection;
    var AllPersonView = (function (_super) {
        __extends(AllPersonView, _super);
        function AllPersonView(options) {
            _super.call(this, options);
            this.options = options;
            this.setElement($('#tablebody'));
            this.collection.bind("add", this.ModelAdded, this);
        }
        AllPersonView.prototype.ModelAdded = function (person) {
            var row = new PersonView({ tagName: 'tr', model: person });
            this.$el.append(row.render().el);
            return this;
        };
        return AllPersonView;
    }(Backbone.View));
    MyScreen.AllPersonView = AllPersonView;
})(MyScreen || (MyScreen = {}));
//# sourceMappingURL=ScreenBackbone.js.map