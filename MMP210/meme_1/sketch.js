/*
  meme version 1 example
  2.25.2020
*/

// global scope
var fuegoImage;

function preload() {
  fuegoImage = loadImage("fuego.jpg");
}

function setup() {
  var canvas = createCanvas(500, 500);
  canvas.drawingContext.miterLimit = 2;
}

function draw() {
  background('gray');

  // draw the image
  tint(255, 255, 255);
  image(fuegoImage, 0, 0, 500, height);

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
  var end = map(frameCount, 10, 200, 10, welcome.length);
  text(welcome.substring(), 250, 10);

  var welcome = 'Literally no one:';
  var end = map(frameCount, 60, 200, 20, welcome.length);
  text(welcome.substring(), 250, 37);

    var welcome = 'Me in chemistry class:';
  var end = map(frameCount, 1, 200, 1, welcome.length);
  text(welcome.substring(0, end), 250, 67);

}
