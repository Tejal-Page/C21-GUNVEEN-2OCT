//objects' names
var r1, r2, r3, r4;

function setup() {
  createCanvas(800,400);
  r1=createSprite(100, 300, 20, 50);
  r1.shapeColor="pink";
  r2=createSprite(600, 300, 20, 50);
  r2.shapeColor="orange";
  r3=createSprite(700, 100, 20, 50);
  r3.shapeColor="red";
  r4=createSprite(200, 350, 20, 50);
  r4.shapeColor="blue";

  r1.velocityX=2;
  r2.velocityX=-2;
}

function draw() {
  background(255,255,255); 

  r3.x=World.mouseX;
  r3.y=World.mouseY;
  if(isT(r3, r4)){
    r3.shapeColor="yellow";
  }
  else{
    r3.shapeColor="red";
  }

  bou(r1, r2);
  //isTouching();
  drawSprites();
}
