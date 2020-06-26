let x = 100;
let y = 300;

function setup() {
  createCanvas(400, 400);
  }

function draw() {
  x = x+.5;
  y = y-.5;
  background(255);
  fill (255)
  circle(x, x, 50);
  circle(y, x, 50);
  circle(x, y, 50);
  circle(y, y, 50);
  if(x == y){
    noLoop() }
}
