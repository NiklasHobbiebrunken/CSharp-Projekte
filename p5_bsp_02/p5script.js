var ellipseRadius = 100;

function setup() {
    createCanvas(800, 600);
    colorMode(RGB, 255);
    background(0);
    smooth();
    frameRate(60);
}

function draw() {
    ellipse(mouseX, mouseY, ellipseRadius, ellipseRadius);
}