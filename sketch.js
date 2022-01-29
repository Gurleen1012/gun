var bg,bgImg;
var player,playerImg



function preload(){
    bgImg =loadImage("bgnew.jpg");

 playerImg = loadImage("boynew.png")
}


function setup(){
    createCanvas(1000,600)

 bg = createSprite(600,300);
    bg.addImage(bgImg);
    bg.scale =1.0;
bg.velocityX =-2;


player =createSprite(50,500);
player.addImage(playerImg);
player.scale =1.0


}

function draw(){
    background(0);

   
if (bg.x <50){
    bg.x = bg.width/2;
  }

    drawSprites()
}