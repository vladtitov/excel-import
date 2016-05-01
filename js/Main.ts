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

        constructor(opt:any){
            for(var str in opt){
                this[str] = opt[str];
            }
            var plus = $('#btn-plus').click(()=>{
                this.onPlusClick(plus);
            })
        }
    }
}