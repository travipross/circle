// runs once
function setup() {
    createCanvas(640, 480);  // set up canvas where all objects are drawn
    background('red');  // set background colour of canvas
}

// loops indefinitely
function draw() {
    
    if (mouseIsPressed) {  // set background color again if mouse button is pressed
        background('red');
    }
    fill(255); // set shape fill color to white
    ellipse(mouseX, mouseY, 60, 60); // draw an ellipse centered on the mouse position with 60 pixel width and height
}
