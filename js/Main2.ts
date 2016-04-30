/**
 * Created by Vlad on 4/29/2016.
 */
    ///<reference path="base.ts"/>

module myapp{
    declare var XLS: any;
    export class Main{
        private url_ret: string;


        private parseSheet(sheet):void{
            console.log(sheet);
            var range = sheet['!range'];
            for(var R = range.s.r; R <= range.e.r; ++R) {
                for(var C = range.s.c; C <= range.e.c; ++C) {
                    var cell_address = {c:C, r:R};
                    console.log(cell_address);
                }
            }
          //  var ar  = XLS.utils.sheet_to_json(sheet);
          //  ar.forEach(function(item){
          //      console.log(JSON.stringify(item));
          //  })

          console.log(ar);
        }
        parseXLS(data){
            console.log(data);
          var book = XLS.readAsBinaryString(data, {type: 'binary'});
            //console.log(book);
        }

        loadXLS (url: string): void {
            $.get(url).done((res)=> this.parseXLS(res));
           // console.log(url);
           // var book = XLS.readFile(url);

        }

        readFile(file:File):void{
            var reader = new FileReader();
            reader.onload = (e:any) =>{
                var data = e.target.result;
                var workbook = XLS.read(data, {type: 'binary'});
                var firstName:string = workbook.SheetNames[0];
                var sheet = workbook.Sheets[firstName];
                this. parseSheet(sheet);
                console.log(workbook);
            };
            reader.readAsBinaryString(file);
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
                  //  this.readFile(file);
                   // return;

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
                        console.log(res);
                      //  this.loadXLS(res.result);

                    })
                })
            })
        }
    }

}

