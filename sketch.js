var fixedRect, movingRect;
var gameobj1, gameobj2;

function setup() {
  createCanvas(800,400);
  fixedRect =createSprite(600, 300, 50, 50);
  movingRect =createSprite(200, 200, 60, 40);
  movingRect.shapeColor = "Pink";
  fixedRect.shapeColor = "Pink";
  gameobj1 =createSprite(200, 200, 50,50);
  gameobj2 =createSprite(200, 300, 50, 50);
  gameobj2.velocityX = 3;
  fixedRect.velocityX = -3;
}

function draw() {
  background("Red");  
  movingRect.y = mouseY;
  movingRect.x = mouseX;
  drawSprites();
  if (isTouching(movingRect,gameobj1)){
    movingRect.shapeColor = "cyan";
    gameobj1.shapeColor = "cyan";
  }
  else{
    movingRect.shapeColor = "purple";
    gameobj1.shapeColor = "purple";
  }
    bounceOff(fixedRect,gameobj2);
}
