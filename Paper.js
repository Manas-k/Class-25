class Paper
{
    constructor(x,y,r)
    {
        var options={
        isStatic:false,
        restituton:0.3,
        friction:0.5,
        density:1.2
        //scale=0.5;
        }

        this.image = loadImage("paper.png");
        this.x=x;
        this.y=y;
        this.r=r
        this.body=Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world,this.body)
    }
    
    display()
    {
        
        push()
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER)
        image(this.image, 0, -50, this.width, this.height);
        pop()
    }
}