seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png,ship-2.png,ship-3.png,ship-4.png");

function preload(){
  spriteName.addImage(seaImg);

}

function setup(){
  spriteName.addImage(seaImg);
  createCanvas(400,400);
  if (sea.x <0) {
    sea.x =sea.width/2;
    }
}

function draw() {
  background("blue");
 
}