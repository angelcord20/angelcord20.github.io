/*
	Self portrait


*/
function setup() {
	createCanvas(640, 360);
}

function draw() {
	background("lightgreen");
	
	// sjaes wotj xy coordinate + size

	ellipse(200, 160, 200);	
	ellipse (220, 160, 20);
	ellipse(160, 160, 30, 10);

	rectMode(CENTER)
	rect(200,220,100,20,10);

	arc(290, 180, 40,60) -HALF_PI, HALF_PI);
	arc(290, 190, 30, 50, -HALF_PI, HALF_PI);
}
