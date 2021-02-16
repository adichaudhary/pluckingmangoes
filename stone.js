class stone
{
	constructor(x,y,w,h)
	{
		var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
			}
		this.body = loadImage('sprites/stone.png');
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
		image(this.body,200,20);
			var stonePos=this.body.position;		

			push();
			translate(stonePos.x, stonePos.y);
			rectMode(CENTER)
			rect(0,0,this.w, this.h);
			pop();
	}

}