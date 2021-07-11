export class Chart{
    constructor(data, color){
        this.color = color;
        this.data = data;
    }

    appendData(data){
        this.data.push(data);
        this.draw();
    }
    draw(ctx){
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        this.data.map(value=>{
            ctx.lineTo(value.date, value.value);
        });
        ctx.stroke();
    }
}