function setup() {
    createCanvas(400, 400);
    background(220);
}


function draw() {
    for (let i=0; i <5;i++) {
        fill(0,0 + i*25,0);
        circle(mouseX , 30 + i*30 ,30+i*30, 30);
    }
    
}