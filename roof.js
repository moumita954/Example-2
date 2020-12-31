class Roof{
    constructor(){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(200,100,200,10,options);
        this.width=200;
        this.height=10;
        World.add(myWorld,this.body);
    }
    display(){
        var pos=this.body.position;
        fill("yellow");
        rect(pos.x,pos.y,this.width,this.height);
    }
}