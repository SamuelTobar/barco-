  
var ship;


function preload(){
shipImg1=loadAnimatiom("ship-1.png","ship-1.png","ship-2.png","ship-1.png")

}

function setup(){
  createCanvas(400,400);
  ship = createSprites(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1); 
  ship.scale =0.25; 
}

function draw() {
  background("blue");
 drawSprites();
}