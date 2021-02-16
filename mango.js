class mango
{
	constructor(x,y,w,h)
	{
		var options={
            isStatic:true,
            restitution:0,
            friction:1,
			}
		this.x=x;
		this.y=y;
		this.w=w;
		this.h=h;
		this.body=Bodies.rectangle(x, y, w, h, options);
		World.add(world, this.body);
		this.image = loadImage("sprites/mango.png");

	}
	display()
	{
			var mangoPos=this.body.position;		

			push();
			translate(mangoPos.x, mangoPos.y);
			rectMode(CENTER)
			rect(0,0,this.w, this.h);
			pop();
	}

}