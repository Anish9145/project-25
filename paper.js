class Paper 
{
    constructor(x,y,r){
        this.x=x;
        this.y=y;
        this.r=r;

        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.image=loadImage("paper.png")
        this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,options)
        World.add(world, this.body)
    }
    display(){
        var paperposition=this.body,position

        push()
			translate(paperposition.x,paperposition.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(250,255,0)
            imageMode(CENTER)
			image(this.image,0,0,this.r, this.r);
			pop()
    }
}
