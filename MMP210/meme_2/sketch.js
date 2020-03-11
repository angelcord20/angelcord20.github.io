/*
  meme version 1 example
  3.3.2020
*/

// global scope
var fuegoImage;
var vibecheckImage;
var vibecheckpassedImage;
var failedvibecheckImage;

var counter = 0;
var instructions = "click here";
var x;
var y;

function preload() {
  fuegoImage = loadImage("fuego.jpg");
  vibecheckImage = loadImage("vibecheck.jpg");
  vibecheckpassedImage = loadImage("vibecheckpassed.jpg");
  failedvibecheckImage = loadImage("failedvibecheck.jpg");

}

function setup() {
  var canvas = createCanvas(500, 500);
  canvas.drawingContext.miterLimit = 2;
}

function mousePressed() {
  counter++;
  if (counter == 4) {
      counter = 0;
}
  if (mouseX > width/2 && mouseY > height/2) {
    // bottom right
    instructions = 'now click here';
    y = 50
  } else if (mouseX > width/2 && mouseY < height/2){
    instructions = 'now im down here';
    x = 50
  } else if (mouseX < width/2 && mouseY < height/2) {
    instructions = 'now im down here';
    y = height - 100;
  }
}

function draw() {
  background('gray');

  // draw the image
  if (counter == 0) {
        image(fuegoImage, 0, 0, 500, height);
  } else if (counter == 1) {

  image(vibecheckImage, 0, 0, 500, height);
} else if (counter == 2) {
        image(vibecheckpassedImage, 0, 0, 500, height);
} else {
        image(failedvibecheckImage, 0, 0, 500, height);
}
  //tint(255, 0, 100);
  //image(fuegoImage, width/2, 0, width/2, height);

  var imageColor = get(mouseX, mouseY);
  fill(imageColor);
  noStroke();
  rect(mouseX, mouseY, 50, 50);


  textSize(100);
  fill('white');
  stroke('black');
  strokeWeight(20);
  textStyle(ITALIC);
  textFont('Segoe UI');
  textAlign(LEFT, CENTER);

  var hello = '';
  var n = map(frameCount, 0, 400, 0, hello.length);
  text(hello.charAt(n), 0, 250);

  textSize(30);
  strokeWeight(5);
  textStyle(NORMAL);
  textAlign(CENTER, TOP);

  var welcome = 'No one:';
  if (counter == 1){
    welcome = 'Now that you are here';
  }
  var end = map(frameCount, 10, 200, 10, welcome.length);
  text(welcome.substring(), 250, 10);

  var welcome = 'Literally no one:';
  if (counter == 1){
    welcome = 'let me check your';
  }
  var end = map(frameCount, 60, 200, 20, welcome.length);
  text(welcome.substring(), 250, 37);

    var welcome = 'Me in chemistry class:';
    if (counter == 1){
      welcome = 'VIBE';
    }
  var end = map(frameCount, 1, 200, 1, welcome.length);
  text(welcome.substring(0, end), 250, 67);

}
