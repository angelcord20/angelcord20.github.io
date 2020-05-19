/*
    
    5.12.2020
*/
var tiempo;
var DnoteSound, FnoteSound, AnoteSound;
var temple;
var img;


function preload() {
    tiempo = loadSound("tiempo.ogg");
    sarias = loadSound("saria.ogg");
    storm = loadSound("tormenta.ogg");
    sun = loadSound("sol.ogg");
    DnoteSound = loadSound("D.wav");
    FnoteSound = loadSound("F.wav");
    AnoteSound = loadSound("A.wav");
    BnoteSound = loadSound("B.wav");
    D2noteSound = loadSound("D2.wav");
    correctSound = loadSound("correct.wav");
    temple = loadImage('temple.png');
    img = loadImage('Ocarina.png');
    tormenta = loadImage('tormenta.png');
    saria = loadImage('sarias.png');
    sol = loadImage('sol.png');
    epona = loadImage('epona.png');
    abajo = loadImage('Abajo.png');
    arriba = loadImage('arriba.png');
    izquierda = loadImage('izquierda.png');
    derecha = loadImage('Derecha.png');
    As = loadImage('As.png');
    
}
function setup() {
    createCanvas(640, 360);
    noStroke();

}

function draw() {
    background('black');
    

    image(temple, 450, 2, 200, 100);
    image(img, 140, 80);
    image(saria, 450, 110, 200, 100);
    image(tormenta, 450, 220, 200, 100);


    textSize(25);
    text('The ocarina of time', 10, 20, width - 40);
    textSize(15);
    text('Go along with the melody after you do so pulse the big button to', 10, 40, width - 40);
    textSize(15);
    text('hear the complete melody.', 10, 60, width - 40);
    
    

    // calling or invoking the function
    button(tiempo, 590, 30, 30);
    button(correctSound, 590, 30, 30);
    button(sarias, 590, 138, 30);
    button(correctSound, 590, 138, 30);
    button(storm, 590, 248, 30);
    button(correctSound, 590, 248, 30);

    button(DnoteSound, 295, 205, 30);
    button(FnoteSound, 225, 270, 30);
    button(AnoteSound, 248, 220, 30);
    button(BnoteSound, 275, 260, 30);
    button(D2noteSound, 305, 140, 30);
    image(As, 290, 125, 30, 30);
    image(arriba, 230, 203, 35, 35);
    image(izquierda, 207, 253, 35, 35);
    image(derecha, 277, 188, 35, 35);
    image(abajo, 256, 243, 35, 35);
    fill('white');
    
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


