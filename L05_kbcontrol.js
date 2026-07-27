let showCircle = false;
let showTriangle = false;
let show
function setup(){
    createCanvas(800,400);
}
function draw(){
    background(220);
    if(showCircle){
        circle(width/2,height/2,100);
    }
}
function keyPressed(){
    if(key === 'c'){
        showCircle = !showCircle;
    }
}