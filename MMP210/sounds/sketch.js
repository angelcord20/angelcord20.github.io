// global sound variables
var musicv1;
var music;
var smokeGif;
var vibecheckGif;

function preload() {
    musicv1 = loadSound("megalovania.mp3");
    music = loadSound("LoboLocoJazz.mp3");
    smokeGif = createImg("smoke.gif")
    vibecheckGif = createImg("mrwatch.gif")
    smokeGif.position(1000, 1000)
    vibecheckGif.position(1000, 1000)

}

function setup() {
    createCanvas(640, 360);
    noStroke();
}

function draw() {
    if (music.isPlaying()) {
        background('black');
    } else {
            background(51);
    }

    if (musicv1.isPlaying()) {
        fill('white');
        vibecheckGif.position(535, 250);
    }

    if(music.isPlaying()) {
        fill('blue')
        smokeGif.position(435,150);


    }
    // instructions
    fill('red')
    textSize(20);
    text('hit q to start both songs and w to get rid of one of them and viceversa!', 10, 20);
}

function keyPressed(){

    //music
    if (keyCode == 81) {
        if(music.isPlaying()) {
            music.pause();
            smokeGif.position(1000, 1000);
        } else {
                music.play();
                smokeGif.position(435, 150);
    }
}

if (keyCode == 87) {
if (musicv1.isPlaying());
    musicv1.pause();
    vibecheckGif.position(1000, 1000)
} else {
    musicv1.play();
    vibecheckGif.position(535, 250);
    }
}
