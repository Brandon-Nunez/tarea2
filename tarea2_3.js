var x = 200;
var y = 100;
var z = 200;

function setup() {
  createCanvas(350, 350);
  }

function draw() {

  if (y < 0){
    noLoop();
  }
  
  x = x-1;
  y = y-.5;
  z = z-.5;
  
  background(255);
  fill (255)
  rect(100, 100, x, x);
  fill (255);
  arc(z, z, y, y, 0, PI+PI);

}
