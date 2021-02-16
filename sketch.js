const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var boyIMG;

function preload()
{
	boyIMG = loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango1 = new mango(750, 100, 50, 50);
	mango2 = new mango(100, 200, 50, 50);
	mango3 = new mango(75, 150, 50, 50);
	stoneObj = new stone(90, 120, 100, 25);

	constraint1 = new constraint(stoneObj, 100, 340);

	var render = Render.create(
		{ element: document.body, engine: engine, options: 
			{ width: 1300, 
			height: 600, 
			wireframes: false 
		} 
	}
		);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  mango1.display();
  mango2.display();
  mango3.display();
  image(boyIMG, 100, 340, 200, 300);
	
  drawSprites();
 
}

function mouseReleased(){
    constraint1.fly();
}

