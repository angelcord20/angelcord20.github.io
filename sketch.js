var redMouse;
var blueMouse

function setup() {
    createCanvas(400, 400);
  fill(240);
  noStroke();
}


let snowflakes = []; // array to hold snowflake objects



function draw() {
    console.log(mouseX);
        background(redMouse, 0, blueMouse);
        fill(0,100,0);
    //++ will increase the value of i by 1 each loop
    for(var i= 0; i < 10; i++){
//        console.log(i);
    }
//    function setup() {
//    //figures
//    createCanvas(200, 200);
//    background(0)
//    noStroke();
//    fill(0)
    push();
    translate(0,100);
    triangle(width/2, 18, 18, 360, width-18, 360);  
    pop();
//    }
    ellipse(width/2,height/2,200,200);
    triangle(18, 18, width-18, 18, width/2, 360);
    fill(255);
    ellipse(mouseX,mouseY,100,100);
    var redMouse = map(mouseX, 0, 400, 0, 255);
    var blueMouse = map(mouseY, 0, 400, 0, 255);
    // console.log(redmouse);

  let t = frameCount /30; // update time

  // create a random number of snowflakes each frame
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }
}

// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };    
}
