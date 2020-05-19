/*/*
    final project pitch (template)
    5.4.2020
*/
function preload() {
    img = loadImage ('Ocarina.png');
    correctSound = loadSound ('correct.wav');
    tormenta = loadSound ('tormenta.ogg');
}
var currentSlide = 0;
var numberOfSlides = 3;

// next slide button
var nextButtonX = 850;
var nextButtonY = 680;
var nextButtonW = 100;
var nextButtonH = 33;

// prev slide button
var prevButtonX = 10;
var prevButtonY = nextButtonY;
var prevButtonW = nextButtonW + 30;
var prevButtonH = nextButtonH;


function setup() {
    createCanvas(960, 720);
}

function draw() {
    background(51);

    // text('slide ' + currentSlide, 100, 100);

    var title; // the title of the slide
    var description;
    var img;

    // setup each slide
    if (currentSlide == 0) {
        title = "My final project";
        description = "For this project I'll be making a working ocarina from the Legend Of Zelda: Ocarina Of Time.";
    } 
    else if (currentSlide == 1) {
        title = "How it works";
        description = "The user will be able to interact with the ocarina via the mouse, they will be able to play different songs that I'll leave on the side as tutorials. Interactions will work with buttons as well that will reproduce different type of notes, that way you can play whatever you want and if you follow one of the examples you can play the whole thing by pressing the button on top of the example.";
        button(correctSound, 500, 630, 60);
        button(tormenta, 500, 630, 60);
    } 
    else if (currentSlide == 2) {
        title = "How it was made";
        description = "Several images will be used in the process to represent the ocarina and the way it works. Certain fuctions such as the button function, function preload and function draw will be key in this project.";
    }

    // function definition
function button(sound, x, y, s) {
    // detect if mouse is in button
    var d = dist(x, y, mouseX, mouseY);
    if (d < s / 2) {
        if (mouseIsPressed) {
            fill('gold');

            if (!sound.isPlaying())  {
                sound.play();
            }

            // shorter sounds
            /*
            if (sound.isPlaying()) {
                sound.pause();
            } else {
                sound.play();
            }
            */

        } else {
            stroke('gray');
            strokeWeight(4);            
        }
    } else {
        noStroke();
        fill('yellow');
    }

    ellipse(x, y, s); 
    
}

    // display title
    textSize(80);
    fill(255);
    noStroke();
    textAlign(LEFT, TOP);
    text(title, 20, 20);

    // display description
    textSize(40);
    text(description, 20, 200, width - 40);

    // slide button display
    // button background design
    fill('blue');
    stroke(255);
    strokeWeight(2);
    
    if (currentSlide < numberOfSlides - 1) {
        rect(nextButtonX, nextButtonY, nextButtonW, nextButtonH, 5); // next
    }

    if (currentSlide > 0) {
        rect(prevButtonX, prevButtonY, prevButtonW, prevButtonH, 5); // prev
    }
    
    
    // text design
    fill(255);
    textSize(25);
    noStroke();
    textAlign(CENTER, CENTER);

    if (currentSlide < numberOfSlides - 1) {
        text("Next", nextButtonX, nextButtonY, nextButtonW, nextButtonH);
    }
    
    if (currentSlide > 0) {
        text("Previous", prevButtonX, prevButtonY, prevButtonW, prevButtonH);
    }
    
}


function mousePressed() {
    // detecting mouse collision with the next button
    if (mouseX > nextButtonX && mouseX < nextButtonX + nextButtonW &&
        mouseY > nextButtonY && mouseY < nextButtonY + nextButtonH) {
        if (currentSlide < numberOfSlides - 1) {
            currentSlide++;
        }
        
    }

    // detect mouse collision with prev button
    if (mouseX > prevButtonX && mouseX < prevButtonX + prevButtonW &&
        mouseY > prevButtonY && mouseY < prevButtonY + prevButtonH) {
        if (currentSlide > 0) {
            currentSlide--;
        }
    }
}
