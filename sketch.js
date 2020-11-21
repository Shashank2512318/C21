var fixedRect, movingRect;
var obj1, obj2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  obj1= createSprite(300, 200, 50, 50);
  obj2= createSprite(300, 500, 50, 50);
  obj1.shapeColor= "blue";
  obj2.shapeColor= "red";


  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  obj1.velocityY = 5;
  obj2.velocityY = -5
}

function draw() {
  background(0,0,0);  

  bouncing(movingRect, fixedRect);
  
  bouncing(obj1, obj2);
  
  drawSprites();
}

