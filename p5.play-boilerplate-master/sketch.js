var fixedrect,movingrect;
function setup() {
  createCanvas(1200,600);
  fixedrect=createSprite(400, 200, 50, 50);
  fixedrect.shapeColor="green";

  movingrect=createSprite(600,600,60,60);
  movingrect.shapeColor="green";
}

function draw() {
  background(255,255,255);
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;

  if(fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2 && 
     movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2 &&
     fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2 && 
        movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2 ){
       fixedrect.shapeColor="red";
       movingrect.shapeColor="red";
    
  }
  else{
    fixedrect.shapeColor="green";
    movingrect.shapeColor="green";
  }
  drawSprites();
}