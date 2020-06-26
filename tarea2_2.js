let x = 400;
let y = 0;


function setup() {

  }

function draw(){
  createCanvas(400, 400);
  background(255);
  
  stroke(0);
  x = x-.5;
  y = y+.5;
  
  line(x, x, 200, 200);
  line(200, y, 200, 200);
  line(y, x, 200, 200);
  
  
  if (x < 200){
    noLoop()
  }
  
}
