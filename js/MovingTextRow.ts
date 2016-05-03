///<reference path="base.ts"/>
module movingtext{
  export  class MovingTextRow{
        private timer:number;
        private interval:number=200000;
        private scrollWidth
        private isFirstTime:boolean=true;
        private separator="\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"
        $el:JQuery;
        url:string;
        requestParams:any;
        messages:Array<string>;

        constructor(options:any){
            for(var str in options)this[str]=options[str];
            this.$el=$(options.selector);
            this.$el.on("scroll",()=>{this.onScroll();});
            this.start()
            this.loadData();
        }

        start():void{
            this.timer=setInterval(()=>{
              this.loadData();
            },this.interval);
        }

      loadData():void{
          $.get(this.url,this.requestParams,(result)=>{
              this.messages=result.list;
             // console.log(this.messages);

              if (this.isFirstTime){
                  this.render();
                  this.isFirstTime=false;
              }
          });
      }

         Stop(){
            clearInterval(this.timer);
        }

        private render(){
            console.log('render    ');

            this.$el.html(this.messages.join(this.separator));
            setTimeout(()=>{this.scrollWidth=this.$el.get(0).scrollWidth -this.$el.get(0).offsetWidth},10) ;
        }

        private onScroll():void{
            if (this.$el.scrollLeft()>=this.scrollWidth){
                this.render();
            }
        }
    }
}
var MTROptions={
    selector:"#MovingTextRow",
    url:"http://callcenter.front-desk.ca/service/crawl",
    requestParams:{a:"get"},
    interval:25000,
}
var movingTextRow = new movingtext.MovingTextRow(MTROptions);