let showCircle = false;
let showTriangle = false;
let showSquare = false;

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
        if(key === 'g'){
            fill(0,255,0);
        }else if(key === 'b'){
            fill(0,0,255);
        }else if(key === 'y'){
            fill(255,255,0);
        }else(
            fill(0)
        )
        if(key==='+'){
            size+=1;
        }else if (key==='-'){
            size-=1
        }else if (keyCode === 38){
            fill(0,0,0)
        }else if (keycode === 40){
            fill(255,255,255)
        }

    }

}
function keyPressed(){
    console.log("key:", key);
    console.log("keyCode:", keyCode);
}