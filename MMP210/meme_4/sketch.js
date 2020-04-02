/*
  meme version 1 example
  3.3.2020
*/

// global scope
var spongebobImage;
var s = 1;  // scale for cat image
var speed = 0.01; // speed for scale
var x = 100;
var y = 100;

function preload() {
  spongebobImage = loadImage("spongebob.png");
}

function setup() {
  createCanvas(800, 500);
}

var a = -300;
var b = -200;

function draw() {
  background(0);

  // mmp 210 text styles 
  textSize(30);
  textFont('Helvetica');
  textAlign(CENTER, CENTER);
  fill('white');

  // first transformation
  translate(width/2, height/2);


 // push();
 // scale(s);
  //s += speed;

  //imageMode(CENTER);


 
  image(spongebobImage, a, b);
  a += random(-5, 5);
  b += random(-5, 5); 
  

 // if (s > 2 || s < 1) {
  //  speed *= -1;
  //}

 // pop();


  // calculate rotation angle
  var r = frameCount * PI / 600;

  push();
  shearX(r);
  text("Everyone in my country when the curfew starts at 5:00 PM", 80, -180);
  pop();

  shearX(r);
  text("And is 5:01 and you can hear the PD getting ready to hunt", 180, 180);

}
