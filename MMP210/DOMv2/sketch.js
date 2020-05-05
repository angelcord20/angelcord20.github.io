/*
    4/28/2020
*/

var bgSlider;
var redSlider;

function setup() {
    createCanvas(500, 500);
    noStroke();

    createP("Brightness");
    bgSlider = createSlider(0, 128, 100);
    bgSlider.input(pattern);

    createP("Change pattern");
    redSlider = createSlider(0, 128, 0);
    redSlider.input(pattern);

    var patternButton = createButton("Pattern");
    patternButton.mousePressed(pattern);

    var saveButton = createButton("Save");
    saveButton.mousePressed(saveImage);

    pattern();
}

function saveImage() {
    save("virus.png");
}


function pattern() {
    background(bgSlider.value());

    var w = 10; // width of one cell
    var h = w; // height of one cell

    for (let x = 0; x <= width; x += w) {
        for (let y = 0; y <= height; y += h) {
            push();
            translate(x, y);

            var r = redSlider.value(); // red
            var g = random(100, 255);
            var b = random(50, 150);

            stroke(r, g, b);
            //strokeWeight(1);
            noStroke();
            textSize(15);

            var randomChoice = random(4);
            if (randomChoice < 1) {
                text('0', w, h);
            } else if (randomChoice < 2) {
                text('1', w, h);
            } else if (randomChoice < 3) {
                text('0', w, h);
            } else {
                text('1', w, h);
            }
            
            pop();
        }
    }

    
}
