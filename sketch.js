
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var score;
var ground;
var score;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  //creates  the area for the game
  createCanvas(600,300);

  //sprite for the monkre
  monkey=createSprite(60,200,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  //sprite for the ground
  ground=createSprite(100,230,500,5);
  ground.x=ground.width/2;
  ground.velocityX=-4;
  
  score=0;
}


function draw() {
background(180);
  console.log(monkey.y);
  
  score=score+ Math.round(frameCount/100);
  
  //gives the jump functionality to the monkey
   if(keyDown("space")&& monkey.y >= 150) {
    monkey.velocityY = -10;
}
  
  // gives gravitation effect to the monkey
  monkey.velocityY=monkey.velocityY+0.8;
  
  
  // gives the infinite effect to the ground
  if(ground.x<0){
    ground.x=ground.width/2;
    
}
  //makes the monkey collide 
  monkey.collide(ground);
  
  fruit();
  rocks();
  drawSprites();
   text("SURVIVAL TIME:"+score,200,50);
   text.scale=2;
}

function fruit(){
 // write code to spawn the bananas 
  if(frameCount % 100===0){
    banana =createSprite(400,100,20,10);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.y=Math.round(random(60,210));
    banana.velocityX=-4;
}
  
}

function rocks  (){
  //writes code  to spawn obstacles 
 if(frameCount % 150===0){
    obstacle =createSprite(400,0,20,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    obstacle.y=Math.round(random(210,210));
   obstacle.velocityX=-4;
} 
}


