/**
 * Created by Vlad on 4/29/2016.
 */
    ///<reference path="base.ts"/>

module myapp{
    declare var XLS: any;
    export class Main{
        private url_ret: string;

        parseXLS(data){
            var book = XLS.read(data, {type: 'binary'});
            console.log(book);
        }

        loadXLS (url: string): void {
            // $.get(url).done((res)=> this.parseXLS(res));
            console.log(url);
            var book = XLS.readFile(url);
        }

        onPlusClick(plus) {
            var input = $('<input type="file">').appendTo(plus.parent()).change(()=>{
                console.log(input);
                var val = input.val();

                var el: HTMLInputElement = input.get(0);
                var files: FileList = el.files;
                var file: File = files[0];
                var form: FormData = new FormData();
                form.append('myfile', file);
                input.remove();

                $.ajax({
                    url: this.url_ret,
                    type: 'POST',
                    dataType: 'json',
                    data: form,
                    cache: false,
                    contentType: false,
                    processData: false
                }).done((res)=>{
                    this.loadXLS(res.result);
                })
            })
        }

        private url_data: string;
        private today:string;
        private collection: MyScreen.AllPersonCollection;
        
        InitTable (){
            var collection: MyScreen.AllPersonCollection = new MyScreen.AllPersonCollection({});
            var tableView: MyScreen.AllPersonView = new MyScreen.AllPersonView({collection: collection});
            this.collection = collection;
            setInterval(()=>{
                this.loadData();
            }, 5000);

        }

        loadData():void{
            this.collection.fetch({url:this.url_data,data:{time:this.today}});
        }

        constructor(opt:any){
            for(var str in opt){
                this[str] = opt[str];
            }
            
        }
    }
}

$(document).ready(function () {
    var options = {
        // url_upload_temp:'service/upload-temp.php',
        // url_get_excel:'service/get-excel.php',
        url_data:'service/screen-data.php',
        today:'2016-04-18'
    }
    var app = new myapp.Main(options);
    app.InitTable();
    
    app.loadData();
})