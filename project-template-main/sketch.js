const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1
var bob2
var bob3
var bob4
var bob5

world.add(world,bob1,bob2,bob3,bob4,bob5);

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	rope1=new rope(bob1,roof,-80,0);
	rope2=new rope(bob2,roof,-60,0);
	rope3=new rope(bob3,roof,-40,0);
	rope4=new rope(bob4,roof,-20,0);
	rope5=new rope(bob5,roof,0,0);
	rope6=new rope(bob6,roof,20,0);

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  display()
  {
	  rope1()
	  rope2()
	  rope3()
	  rope4()
	  rope5()
	  rope6()
	  bob1()
	  bob2()
	  bob3()
	  bob4()
	  bob5()
	  bob6()
  }

  
  //create ellipse shape for multiple bobs here
  ellipse(100, 100, 100, 200)
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
if (keyDown(UP_ARROW)){
	Matter.Body.applyForce(body,position,force);
}