var ground,groungimg;
var ironman , ironmanImg;
var bg,bgimg

function preload(){
 groundimg=loadImage("ground.png");
 ironmanImg=loadImage("ironmanstand.png");
 bgimg=loadAnimation("background.gif");
}

function setup(){
  createCanvas(1000,1000);
 ground=createSprite(500,980,1000,50);
ground.addImage("ground",groundimg);
ground.scale=2.0;

bg=createSprite(300,435,1000,800);
bg.addAnimation("bg",bgimg);

ironman=createSprite(500,800,50,50);
ironman.addImage("ironman",ironmanImg);
ironman.scale =0.35;


}


function draw(){
drawSprites();
}