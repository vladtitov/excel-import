/**
 * Created by yrik6 on 18.04.2016.
 */
///<reference path="base.ts"/>

    
module MyScreen {
    interface People {
        time: string;
        myevent: string;
        location: string;
    }

    export class Person extends Backbone.Model{
        defaults() : People{
            return {
                time: '',
                myevent: '',
                location: ''
            }
        }
    }


    export class PersonView extends Backbone.View<Person> {
        static template:any = _.template( $('#row-template').html() );
        constructor (options: any) {
            super(options);
            this.model.bind('remove', ()=>this.remove());
           
        }
        
        remove (): PersonView  {
            this.$el.remove();
            return this;
        }
        
        render (): PersonView {
            var data = this.model.toJSON();
            var start = moment.unix(data.start).format('h:mm a');
            var end = moment.unix(data.end).format('h:mm a');
            data.time = start + ' - ' + end;
            
            this.$el.html( PersonView.template(data) );
            return this;
        }
    }

    export class AllPersonCollection extends Backbone.Collection<Person> {
        constructor(options:any) {
            super(options);
            for (var str in options) this[str] = options [str];
            
        }
    }

    export class AllPersonView extends Backbone.View<Person> {
        private options:any;

        constructor(options:any) {
            super(options);
            this.options = options;
            this.setElement($('#tablebody'));
            this.collection.bind("add", this.ModelAdded, this);
        }

        ModelAdded(person):any {
            var row:PersonView = new PersonView({tagName: 'tr', model: person});
            this.$el.append(row.render().el);
            return this;
        }
    }
    
}
