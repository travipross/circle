function setup() {
  createCanvas(640, 480);
  background('red');
}

function draw() {
  if (mouseIsPressed) {
    background('red');
  }
  fill(255);
  ellipse(mouseX, mouseY, 60, 60);
  
}