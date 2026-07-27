let showCircle = false;
let showTriangle = false;
let showSquare = false;

function setup(){
    createCanvas(800,400);
}
function draw(){
    background(220);
    if(showCircle){
        circle(width/2,height/2,100);
    }
    if(showTriangle){
        triangle(width,height,width/2,height/2,100,100)
    }
    if(showSquare){
        
    }
}
function keyPressed(){
    if(key === 'c'){
        showCircle = !showCircle;
    }
    if(key === 't'){
        showTriangle = !showTriangle
    }
}