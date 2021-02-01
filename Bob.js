class Bob{
    constructor(x,y,r){
        var options={
            isStatic : false,
            friction : 0.5,
            density : 1.2,
            restitution : 0.3
        }
        this.r=r;
     this.x=x;
     this.y=y;

     this.body=Bodies.circle(this.x,this.y,r,options);
     
     World.add(world,this.body);
    }

    display(){
       var pos=this.body.position;
       push();
       translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill("purple");
        ellipse(0,0,this.r,this.r);
        pop();
        }
};