var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var boxbase,boxleft,boxright;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	//groundSprite=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor=color(255)
	

	//Create a Ground
	ground = Bodies.rectangle(width/2 , 650, width, 10 , {isStatic:true});
	 World.add(world, ground);
	 
	boxbase = Bodies.rectangle(width/2 , 640, 160, 20, {isStatic:true});
	 World.add(world, boxbase);
	 
	 boxleft = Bodies.rectangle(width/2-80 , 590, 20,100 , {isStatic:true});
	 World.add(world, boxleft);
	 
	 boxright = Bodies.rectangle(width/2+80 , 590, 20,100 , {isStatic:true});
 	World.add(world, boxright);

	 packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	
	//Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);

  
  //display a rectungalur groung of brown colour
  fill("brown");
  rect(ground.position.x,ground.position.y,width,10);

  //display a red box
  fill ("red")
  rect (boxbase.position.x,boxbase.position.y,160,20);

  fill ("red")
  rect (boxleft.position.x,boxleft.position.y,20,100);

  fill ("red")
  rect (boxright.position.x,boxright.position.y,20,100);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  drawSprites();

 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}