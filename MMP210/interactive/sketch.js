// This code is for the interactive self portrait.
function setup(){
  createCanvas(400, 400);
  noStroke();
}
function draw(){
  background(0);
  var r = 0; // red;
  var g = mouseX; // green
  var b = mouseY; // blue
  fill(r, g, b);

// other definitions
  var s = 200;
  var o = 50;// offset

  var x = width / 2;
  var y = height / 2;
  var s = width / 2;
  ellipse(x, y, s);

fill (60)
ellipse (160, 200, 50, 50)

fill (60)
ellipse (240, 200, 50, 50)

fill(255, 255, 0)
ellipse (200, 200, 100, 100)

// how much it moves to the side
// how much puntiago it will be
// how thick it'll be
// how much of the corner will be up
// how much wide it will become
// 
fill(60)
push();
    translate(0,100);
    triangle(width/2, 6, 6, 80, width-6, 80);


 fill(0, 0, 0)
 arc(170, 100, 30, 30, PI, TWO_PI);

fill(0, 0, 0)
 arc(220, 100, 30, 30, PI, TWO_PI);

 fill(0, 0, 0)
 arc(210, 130, 30, 30, 0, PI)

 fill(255, 255, 0)
 ellipse(220, 99, 15, 15)

 fill(255, 255, 0)
 ellipse(170, 99, 15, 15)

var mouthSize = map(mouseX, 0, width, 5, 200);
  x
mouthSize = max(0, mouthSize); // prevents negative value error

fill(255, 102, 153)
 arc(210, 81 + o, 26, 26, mouthSize, PI); // mouth

fill(0, 0, 0)
 rect(214, 140, 3, 40)

 fill(255, 0, 0)
 ellipse(215, 140, 10, 10) 
 //triangle(18, 18, width-18, 18, width/2, 360);
}
