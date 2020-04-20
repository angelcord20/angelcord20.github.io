function setup() { 
  createCanvas(500, 360);
  background(220);
  rectMode(CENTER);

  // change color
  for (var x = 50; x < width; x += 50) {
    var c = map(x, 0, width, 0, 255);
    fill(c);
    ellipse(x, 20, 40);
    ellipse(x, 60, 40);
    ellipse(x, 100, 40);
    ellipse(x, 140, 40);
    ellipse(x, 180, 40);
    ellipse(x, 220, 40);
    ellipse(x, 260, 40);
    ellipse(x, 300, 40);
    ellipse(x, 340, 40);
    //ellipse(x - 10, height/2 - 10, 10);
    ellipse(x - 0, 200 - 10, 10);
    ellipse(50, 340 + 10, 10)
    ellipse(100, 300 + 10, 10)
    ellipse(150, 260 + 10, 10)
    ellipse(200, 220 + 10, 10)
    ellipse(250, 180 + 10, 10)
    ellipse(300, 140 + 10, 10)
    ellipse(350, 100 + 10, 10)
    ellipse(400, 60 + 10, 10)
    ellipse(450, 20 + 10, 10)
     ellipse(450, 340 + 10, 10)
    ellipse(400, 300 + 10, 10)
    ellipse(350, 260 + 10, 10)
    ellipse(300, 220 + 10, 10)
    ellipse(250, 180 + 10, 10)
    ellipse(200, 140 + 10, 10)
    ellipse(150, 100 + 10, 10)
    ellipse(100, 60 + 10, 10)
    ellipse(50, 20 + 10, 10)
    rect(x, 165 + 10, 30, 10, 5);
    rect(50, 325 + 10, 30, 10, 5);
    rect(100, 285 + 10, 30, 10, 5);
    rect(150, 245 + 10, 30, 10, 5);
    rect(200, 205 + 10, 30, 10, 5);
    rect(250, 165 + 10, 30, 10, 5);
    rect(300, 125 + 10, 30, 10, 5);
    rect(350, 85 + 10, 30, 10, 5);
    rect(400, 45 + 10, 30, 10, 5);
    rect(450, 5 + 10, 30, 10, 5);
     rect(x, 165 + 10, 30, 10, 5);
    rect(450, 325 + 10, 30, 10, 5);
    rect(400, 285 + 10, 30, 10, 5);
    rect(350, 245 + 10, 30, 10, 5);
    rect(300, 205 + 10, 30, 10, 5);
    rect(250, 165 + 10, 30, 10, 5);
    rect(200, 125 + 10, 30, 10, 5);
    rect(150, 85 + 10, 30, 10, 5);
    rect(100, 45 + 10, 30, 10, 5);
    rect(50, 5 + 10, 30, 10, 5);
      }
}
