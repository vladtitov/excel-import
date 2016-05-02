/**
 * Created by Vlad on 4/29/2016.
 */
    ///<reference path="base.ts"/>

module myapp{
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
        private url_save_data: string;
        private url_get_data: string = 'service/get-data.php?filename=allData.json';

        onData(data:XLSresult[]):void{
            var out:string[][]=[];
            var sheet = data[0];
            console.log(data);
            _.map(sheet.cells,function(item){
                console.log(item)
                out.push(item)
            })
            console.log(out);
        }
        private collection: Table.AllPersonCollection;

        InitTable (){
            var collection: Table.AllPersonCollection = new Table.AllPersonCollection({});
            var tableView: Table.AllPersonView = new Table.AllPersonView({collection: collection});
            this.collection = collection;
        }

        CallData (){
            $.get(this.url_get_data).done((res)=>{
                console.log(res);
            })
        }

        SetData (res){
            this.collection.set(res);
        }

        constructor(opt:any){
            for(var str in opt){
                this[str] = opt[str];
            }
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
        url_save_data:'service/save-data.php'
    }
    var app = new myapp.Main(options);
    app.InitTable();
})

