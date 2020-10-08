var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
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

	

	bottomSprite= new Box(400,650,120,20)
    
	leftSprite=new Box(340,610,20,100)

	rightSprite=new Box(460,610,20,100)
 
	

	
	
	

	//Create a Ground
	ground = new Ground(width/2, 650, width, 10 );

    packageBody = new Package(width/2 , 200 , 20,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.body.position.x
  packageSprite.y= packageBody.body.position.y 
  drawSprites();
  bottomSprite.display()
  leftSprite.display()
  rightSprite.display()
  ground.display()
  packageBody.display()

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody.body, false);
    
  }
}



