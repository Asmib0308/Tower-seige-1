class Box{
    constructor(x,y){
        var options = {
            isStatic:false,
            restitution:0.2,
            friction:0.1,
            density:0.02
        }
        this.body = Bodies.rectangle(x,y,60,80,options);
        this.width = 60;
        this.height = 80;
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
    }
}