
function setup() { 
    createCanvas(600,400);
    background(220);
    noLoop(); // Stops continuous drawing
  }
  
function draw() {
  // Recap 1: Repeating Circles
  // fill(225);
  // circle(75,200,100);
  // fill(0,225,0);
  // circle(225,200,100);
  // fill(0,0,225);
  // circle(375,200,100);
  // fill(225,0,0);
  // circle(525,200,100);
  // for ( let i = 0; i < 5; i++) {
  //     fill(100 + i * 50,255,255);
  //     noStroke();
  //     circle(50 + i * 50, 100,40);
  // }

  // Task 1: Colour Gradient
  // for(let i=10; i>0 ;i-- ) {
  //    if(colourValue %2 ---0){
  //      fill(0);
  //    }else{
  //     fill(255);
  //    }
  //    circle(50+i*50,100,50);
  //   colourvalue += 1;
  // }
  // Task 2: Colour Loop
  //  fill(colouValue)
  //  circle(100,100,100);
  //  colourValue += 1
  // // Task 3: Row of Circles

  // Task 4: Grid of Circles
  let circleDiameter = 30;
  let numCircles = 5;
  let totalWidth =numCircles * circleDiameter;
  let startX = (Width - totalWidth) / 2 +cicleDiameter / 2;
  let startY = (Height - totalWidth) / 2 +cicleDiameter / 2;
  for (let row = 0; row < numCircles; row++){
      let rowY = startY + (circleDiameter * row);
      for(let i = 0; i <numCircles; i++){
        
      }
  }
}