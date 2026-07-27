let rectsizee = 50;

function setup(){
    createCanvas(800,400);
}
function draw(){
    background(220);
    if(showcircle){
        circle(width/2,height/2,100);
    }
}
function keyPressed(){
    if(key === 'c'){
        showCircle = !show
    }
}