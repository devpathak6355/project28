
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;
var launchingForce=100;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stoneObj=new stone(235,420,30); 

	mango1=new mango(1100,100,30);
  mango2=new mango(1170,130,30);
	mango3=new mango(1010,140,30);
	mango4=new mango(1000,70,30);
	mango5=new mango(1100,70,30);
	mango6=new mango(1000,230,30);
	mango7=new mango(900,230,40);
	mango8=new mango(1140,150,40);
	mango9=new mango(1100,230,40);
	mango10=new mango(1200,200,40);
	mango11=new mango(1120,50,40);
	mango12=new mango(900,160,40);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	slingshotObject=new slingshot(stoneObj.body,{x:235,y:420})
  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1300,
      height: 600,
      wireframes: false
    }
  });
	
	Engine.run(engine);
 // Render.run(render);
}

function draw() {

  background(230);
    
  image(boy ,200,340,200,300);


  treeObj.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
 mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  stoneObj.display();

  groundObject.display();
  slingshotObject.display();
  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  detectCollision(stoneObj,mango6);
  detectCollision(stoneObj,mango7);
  detectCollision(stoneObj,mango8);
  detectCollision(stoneObj,mango9);
  detectCollision(stoneObj,mango10);
  detectCollision(stoneObj,mango11);
  detectCollision(stoneObj,mango12);
}

function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
    slingshotObject.fly();
    // distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  
	}
  }
function detectCollision(){
  mango1BodyPosition=mango1.body.position;
  mango2BodyPosition=mango2.body.position;
  mango3BodyPosition=mango3.body.position;
  mango4BodyPosition=mango4.body.position;
  mango5BodyPosition=mango5.body.position;
  mango6BodyPosition=mango6.body.position;
  mango7BodyPosition=mango7.body.position;
  mango8BodyPosition=mango8.body.position;
  mango9BodyPosition=mango9.body.position;
  mango10BodyPosition=mango10.body.position;
  mango11BodyPosition=mango11.body.position;
  mango12BodyPosition=mango12.body.position;
  stoneBodyPosition=stoneObj.body.position;

  var distance1= dist(stoneBodyPosition.x,stoneBodyPosition.y,mango1BodyPosition.x,mango1BodyPosition.y);
  if(distance1<=mango1.r+stoneObj.r){
    Matter.Body.setStatic(mango1.body,false);
  }

  var distance2= dist(stoneBodyPosition.x,stoneBodyPosition.y,mango2BodyPosition.x,mango2BodyPosition.y);
  if(distance2<=mango2.r+stoneObj.r){
    Matter.Body.setStatic(mango2.body,false);
  }

  var distance3= dist(stoneBodyPosition.x,stoneBodyPosition.y,mango3BodyPosition.x,mango3BodyPosition.y);
  if(distance3<=mango3.r+stoneObj.r){
    Matter.Body.setStatic(mango3.body,false);
  }

  var distance4= dist(stoneBodyPosition.x,stoneBodyPosition.y,mango4BodyPosition.x,mango4BodyPosition.y);
  if(distance4<=mango4.r+stoneObj.r){
    Matter.Body.setStatic(mango4.body,false);
  }

  var distance5= dist(stoneBodyPosition.x,stoneBodyPosition.y,mango5BodyPosition.x,mango5BodyPosition.y);
  if(distance5<=mango5.r+stoneObj.r){
    Matter.Body.setStatic(mango5.body,false);
  }

  var distance6= dist(stoneBodyPosition.x,stoneBodyPosition.y,mango6BodyPosition.x,mango6BodyPosition.y);
  if(distance6<=mango6.r+stoneObj.r){
    Matter.Body.setStatic(mango6.body,false);
  }

  var distance7= dist(stoneBodyPosition.x,stoneBodyPosition.y,mango7BodyPosition.x,mango7BodyPosition.y);
  if(distance7<=mango7.r+stoneObj.r){
    Matter.Body.setStatic(mango7.body,false);
  }

  var distance8= dist(stoneBodyPosition.x,stoneBodyPosition.y,mango8BodyPosition.x,mango8BodyPosition.y);
  if(distance8<=mango8.r+stoneObj.r){
    Matter.Body.setStatic(mango8.body,false);
  }

  var distance9= dist(stoneBodyPosition.x,stoneBodyPosition.y,mango9BodyPosition.x,mango9BodyPosition.y);
  if(distance9<=mango9.r+stoneObj.r){
    Matter.Body.setStatic(mango9.body,false);
  }

  var distance10= dist(stoneBodyPosition.x,stoneBodyPosition.y,mango10BodyPosition.x,mango10BodyPosition.y);
  if(distance10<=mango10.r+stoneObj.r){
    Matter.Body.setStatic(mango10.body,false);
  }

  var distance11= dist(stoneBodyPosition.x,stoneBodyPosition.y,mango11BodyPosition.x,mango11BodyPosition.y);
  if(distance11<=mango11.r+stoneObj.r){
    Matter.Body.setStatic(mango11.body,false);
  }
  
  var distance12= dist(stoneBodyPosition.x,stoneBodyPosition.y,mango12BodyPosition.x,mango12BodyPosition.y);
  if(distance12<=mango12.r+stoneObj.r){
    Matter.Body.setStatic(mango12.body,false);
  }

}