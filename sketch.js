
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	

var world;
var paper1;
var box, boxImg, box1, box2, box3;

function preload()
{

}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.
	
	paper1=new Paper(200,450,70);
	ground=new Ground(width/2,670,width,20);
	box=new Box(1200,650);

    //paper1 = new Paper(60, 50)
	//ground = new Ground(1000, 1140, 2000, 60)
	//box1 = new Box(1725,1100,350,20)
	//box2 = new Box(1550,850,20,500)
	//box3 = new Box(1900,850,20,500)

	Engine.run(engine);


	
	


}


function draw() {
  rectMode(CENTER);
  background(230);


 //box1.display();
 //box2.display();
 box.display();
 paper1.display();
 ground.display();
 
 drawSprites();
}

function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(paper1.body,paper1.body.position,{x:130,y:-145})


}
}