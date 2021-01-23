
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
  ground = new Ground (400,700)

  polygon = new Polygon (100,500)

  block1 = new Block(300,600,30,40)
  block2 = new Block(330,600,30,40)
  block3 = new Block(360,600,30,40)
  block4 = new Block(390,600,30,40)
  block5 = new Block(420,600,30,40)
  block6 = new Block(450,600,30,40)
  block7 = new Block(480,600,30,40)
  block8 = new Block(330,560,30,40)
  block9 = new Block(360,560,30,40)
  block10= new Block(390,560,30,40)
  block11= new Block(420,560,30,40)
  block12= new Block(450,560,30,40)
  block13= new Block(360,520,30,40)
  block14= new Block(390,520,30,40)
  block15= new Block(420,520,30,40)
  block16= new Block(390,480,30,40)

 thrower = new Throw(polygon.body,{x: 100,y:500});
  
    
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

 // keyPressed()
  
 
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  block16.display()

  thrower.display()

  ground.display()
  polygon.display()
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
  thrower.fly();
}

function keyPressed(){
  if(  keyCode === 32){
   thrower.attach(polygon.body)
   Matter.Body.setPosition(polygon.body, {x: 100 , y: 500});
  }

}

