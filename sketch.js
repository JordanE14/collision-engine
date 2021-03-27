var movingRect
var fixedRect, gameObject1, gameObject2,gameObject3,gameObject4
function setup() {
  createCanvas(1200,800);
  //creating fixed rectangle
  fixedRect = createSprite(200,200,50,80)
  //creating moving rectangle
  movingRect = createSprite(400,200,50,80)
  //adding color to fixed and moving rectangle
  movingRect.shapeColor = "green"
  fixedRect.shapeColor = "green"
  //creating game object sprites
   gameObject1= createSprite(100,100,50,50)
   gameObject2= createSprite(200,100,50,50)
   gameObject3= createSprite(300,100,50,50)
   gameObject4= createSprite(400,100,50,50)
   //adding color to game objects
   gameObject1.shapeColor = "green"
   gameObject2.shapeColor = "green"
   gameObject3.shapeColor = "green"
   gameObject4.shapeColor = "green"
}

function draw() {
  background(255,255,255);
  //moking moving rectangle follow the mouse x and y positions
  movingRect.x = World.mouseX
  movingRect.y = World.mouseY  
  //logs the x position of the moving rectangles distance from the fixed rectangle
  console.log (movingRect.x - fixedRect.x)
  
  //changes the moving rectangle's color to blue when it touches an object
  if (isTouching (movingRect,gameObject2)){
    movingRect.shapeColor = "blue"
    gameObject2.shapeColor = "blue"
  //moving recctangle is green when not touching another object
  }else{
    movingRect.shapeColor = "green"
    gameObject2.shapeColor = "green"
  }
  //drawing sprites
  drawSprites();
}
//creating function for collision with other objects
function isTouching(object1,object2){
  if (object1.x - object2.x < object1.width/2 + object2.width/2 
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object1.height/2 + object2.height/2 
    && object2.y - object1.y < object2.height/2 + object1.height/2){
   return true;
  }
  else{
   return false;
  }
}