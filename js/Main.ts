/**
 * Created by Vlad on 4/29/2016.
 */
    ///<reference path="base.ts"/>

module myapp{
    export class Main{
        private url_ret: string;
        constructor(opt:any){
            for(var str in opt){
                this[str] = opt[str];
            }
            var plus = $('#btn-plus').click(()=>{

                var input = $('<input type="file">').appendTo(plus.parent()).change(()=>{
                    console.log(input);
                    var val = input.val();
                    // $.post(this.url_ret, {file: val}).done((res)=>{
                    //     console.log(res);
                    // })

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
                        console.log(res);
                    })
                })
            })
        }
    }

}

