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
    declare var XLS: any;
    export class Main{

        private url_ret: string;
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
                        url: this.url_ret,
                        type: 'POST',
                        dataType: 'json',
                        data: form,
                        cache: false,
                        contentType: false,
                        processData: false
                    }).done((res)=>{
                      this.onData(res);
                    })
                })
            })
        }
    }

}

