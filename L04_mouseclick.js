let shapeColour = 'blue';
let x1,y1,x2,y2,x3
function setup() {    
    createCanvas(400, 400);
    background(220);
}
function draw() {
    // for (let i=0; i <5;i++) {
    //     fill(shapeColour);
    //     circle(mouseX ,mouseY, 30);
    // }  

    //Task 1: Random Colour Preview
    fill(shapeColour)
    // circle(200,200,300)
    triangle(random(0,400),random(0,400),random(0,400),random(0,400),random(0,400),random(0,400));
}
function mousePressed(){
    shapeColour = color(random(0,255),random(255),random(255));
}
function mouseReleased(){
    shapeColour = 'white';
}