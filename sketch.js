
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint 

var roof;
var bob1;
var rope1;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = createSprite(400,100,500,40);
	bob1 = new Bob(400,550);
	rope1 = new Rope(roof,bob1.body,-15,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  
  drawSprites();
 
  bob1.display();
  rope1.display();

}



