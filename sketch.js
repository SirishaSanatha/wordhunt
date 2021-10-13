

var bg, form, player
function preload(){
  bg=loadImage("hunt.jpg")
}

function setup()
{
  createCanvas(displayWidth-40, displayHeight-180);
  game=new Game()
  game.start()
 
}

function draw() 
{
  background(255);
 

}

