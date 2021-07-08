var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var leaves,leavesImg;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leavesImg = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=World.mouseX

  var select_sprits = Math.round(random(1,3));
  if(frameCount%80==0){
    if(select_sprits == 1){
      createApples()
    }
    else{
      createLeaves()
    }

  }


  drawSprites();
}

function createApples() {
 apple = createSprite(200,200,10,10);
 apple.velocityY=3;
 apple.addImage(appleImg);
 apple.lifetime=60;
 apple.scale=0.1;
 apple.x=Math.round(random(1,400));
}
function createLeaves(){
 leaves = createSprite(200,200,10,10);
 leaves.velocityY=3;
 leaves.addImage(leavesImg);
 leaves.lifetime=60;
 leaves.scale=0.1
 leaves.x=Math.round(random(1,400));
}