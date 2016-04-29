/**
 * Created by Vlad on 4/29/2016.
 */
    ///<reference path="base.ts"/>

module myapp{
    export class Main{
        constructor(opt:any){
            for(var str in opt)this[str] = opt[str];
        }
    }

}

