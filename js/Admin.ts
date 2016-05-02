/**
 * Created by Vlad on 4/29/2016.
 */
    ///<reference path="base.ts"/>

module myapp{
    //import color = d3.color;
    interface CellInfo{
        raw:number;
        type:string;
    }
    interface XLSresult{
        maxcol:number;
        maxrow:number;
        numCols:number;
        numRows:number;
        cells:string[][];
        celsInfo:CellInfo[][];


    }
    interface TableResult {
        date: number;
        start: number;
        end: number;
        event: string;
        location: string;
    }

    declare var XLS: any;
    export class Main{

        private url_ret: string;
        private url_upload_temp: string;
        private url_get_excel: string;
        private url_data: string;
        private username:string;
        private collection: Table.AllPersonCollection;

        private $btnSave:JQuery;
        InitTable (){
            var collection: Table.AllPersonCollection = new Table.AllPersonCollection({});
            var tableView: Table.AllPersonView = new Table.AllPersonView({collection: collection});
            this.collection = collection;
            collection.fetch({url:this.url_data,data:{username:this.username}});
        }

        SetData (res){
            this.collection.set(res);

        }

        saveData():void{
        var data:any[] =  this.collection.toJSON();
            $.post(this.url_data+'?username='+this.username,JSON.stringify(data)).done((res)=>{
                console.log(res);
            });

        }

        constructor(opt:any){
            for(var str in opt){
                this[str] = opt[str];
            }
            this.$btnSave = $('#btn-save').click(()=>{
                this.saveData();
            });
            var plus = $('#btn-plus').click(()=>{


                var input = $('<input type="file">').appendTo(plus.parent()).change(()=>{
                    var el: HTMLInputElement = input.get(0);
                    var files: FileList = el.files;
                    var file: File = files[0];
                    var form: FormData = new FormData();
                    form.append('myfile', file);
                    $.ajax({
                        url: this.url_upload_temp,
                        type: 'POST',
                        dataType: 'json',
                        data: form,
                        cache: false,
                        contentType: false,
                        processData: false
                    }).done((res)=>{
                        console.log(res);
                        $.get(this.url_get_excel, {filename: res.result}).done((res)=>{
                            this.SetData(res);
                        })
                      // this.onData(res);
                    })
                })
            })
        }
    }

}
$(document).ready(function(){
    var options = {
        url_upload_temp:'service/upload-temp.php',
        url_get_excel:'service/get-excel.php',
        url_data:'service/my-data.php',
        username:'myname'
    }
    var app = new myapp.Main(options);
    app.InitTable();
})

