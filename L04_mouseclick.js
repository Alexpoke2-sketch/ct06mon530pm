let shaprColour = 'blue';
function setup() {    
    createCanvas(400, 400);
    background(220);
}
function draw() {
    for (let i=0; i <5;i++) {
        fill(shapeColour);
        circle(mouseX ,mouseY, 30);
    }  
}
function mousePressed(){
    shapeColour = ''
}