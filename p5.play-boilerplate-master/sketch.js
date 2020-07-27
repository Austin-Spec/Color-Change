var rectb, fixrect


function setup() {
  createCanvas(800,400);
  rectb = createSprite(400, 200, 50, 50);
  fixrect = createSprite(200,200,50,50);
}

function draw() {
  background(255,255,255);  

  if(rectb.x - fixrect.x < rectb.width/2 + fixrect.width/2 
    && fixrect.x - rectb.x < fixrect.width/2 + rectb.width/2
    && rectb.y - fixrect.y < rectb.height/2 + fixrect.height/2
    && fixrect.y - rectb.y < fixrect.height/2 + rectb.height/2){
    rectb.shapeColor="green"
    fixrect.shapeColor="green"
    console.log(rectb.x - fixrect.x)
  }
  else {
    rectb.shapeColor="red"
    fixrect.shapeColor="red"
  }



rectb.y=World.mouseY
rectb.x=World.mouseX

  drawSprites();
}