class Canvas{
    constructor(){
        this.init();
    }

    init(){
        const canvas = document.querySelector("#chart");
        const context = canvas.getContext("2d");
        canvas.width = innerWidth/1.5;
        canvas.height = innerHeight/2;
        context.lineWidth = 2;
        this.cnv = canvas;
        this.ctx = context;

        console.log(this);
    }
    clear(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    render(){

    }
}


export default new Canvas();