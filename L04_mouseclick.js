let shapeColour = 'blue';
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
    circle(200,200,300)
}
function mousePressed(){
    shapeColour = random(0,255);
}
function mouseReleased(){
    shapeColour = '';
}