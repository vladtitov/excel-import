/**
 * Created by yrik6 on 18.04.2016.
 */
///<reference path="base.ts"/>

    
module Table {
    interface People {
        date: number;
        start: number;
        end: number;
        myevent: string;
        location: string;
    }

    export class Person extends Backbone.Model{
        defaults() : People{
            return {
                date: 0,
                start: 0,
                end: 0,
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
            data.date = moment.unix(data.date).format('MM DD YYYY');
            data.start = moment.unix(data.start).format('h:mm a');
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
