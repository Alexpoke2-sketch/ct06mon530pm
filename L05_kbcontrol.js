let showCircle = false;
let showTriangle = false;
let showSquare = false;
let circleColor = 0;

function setup(){
    createCanvas(800,400);
}
//function draw(){
//     background(220);
//     if(showCircle){
//         fill(random(255),random(255),random(255))
//         circle(width/2,height/2,100);
//     }
//     if(showTriangle){
//         fill(random(255),random(255),random(255))
//         triangle(width,height,width/2,height/2,100,100)
//     }
//     if(showSquare){
//         fill(random(255),random(255),random(255))
//         rect(width/2,height/2,100,100);
//     }
// }
// function keyPressed(){
//     if(key === 'c'){
//         showCircle = !showCircle;
//     }
//     if(key === 't'){
//         showTriangle = !showTriangle
//     }
//     if(key === 's'){
//         showSquare = !showSquare
//     }
// }
function keyReleased(){
    background(220);
    if(showCircle){
        background(220);
        fill(circlecolor,0,0);
        circle(width/2,height/2,100);
    }

}
function keyPressed(){
    if(keyCode === 38){
        circleColor = 255;
    }else if(KeyCode === 40){
        circleColor = 0;
    }else{
        circleColor= 200;
    }
    
    console.log("key:",key);
    console.log("keyCode:",keyCode);
}