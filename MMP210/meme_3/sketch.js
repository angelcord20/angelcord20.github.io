/*
  meme version 1 example
  3.3.2020
*/

// global scope
var okboomerImage;
var spongebobImage;


var okboomerSize;
var okboomerSizeSpeed = 5;

var spongebobX;

var counter = 0;
var instructions = "click here to look how people who used to say this looked like last year";
var x;
var y;

function preload() {
  okboomerImage = loadImage("okboomer.jpg");
  spongebobImage = loadImage("spongebob.png");

}

function setup() {
  var canvas = createCanvas(500, 500);
  canvas.drawingContext.miterLimit = 2;

  x = width - 150;
  y = height - 100;

  okboomerSize = width;
  spongebobX = 0;
}

function mousePressed() {
  counter++;
  if (counter == 3) {
    counter = 0;
  }

  if (mouseX > width/2 && mouseY > height/2) {
    // bottom right
    instructions = 'click here to look how people who used to say this looked like last year';
    y = 50;
  }
}

function draw() {
  background('gray');

  // draw the image
  if (counter == 0) {
    
    imageMode(CENTER);
    image(okboomerImage, width/2, height/2, okboomerSize, okboomerSize);

    okboomerSize += okboomerSizeSpeed;
    if (okboomerSize > width * 2 || okboomerSize < width - okboomerSizeSpeed) {
      okboomerSizeSpeed *= -1;
    }


  } else if (counter == 1) {


    image(spongebobImage, spongebobX, height/2, width, height);

    spongebobX += 5;
    if (spongebobX > width) {
      spongebobX = 0;
    }
  
  }
  textSize(100);
  fill('blue');
  stroke('pink');
  strokeWeight(20);
  textStyle(ITALIC);
  textFont('Trade Winds');
  textAlign(CENTER, CENTER);
  textSize(30);
  strokeWeight(5);
  textStyle(NORMAL);
  textAlign(CENTER, TOP);

  
  text(instructions, x, y, 150);
}
