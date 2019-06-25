// Create sinewave on screen
// Sources:
//  Setting canva width the same size as window: https://github.com/processing/p5.js/issues/193
//  Sine wave: https://p5js.org/examples/math-sine-wave.html
//  Text on screen: https://p5js.org/reference/#/p5/textFont
//  Image: 

let xspacing = 20; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 0.0; // Start angle at 0
let amplitude = 75.0; // Height of wave
let period = 500.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave
let diameter = xspacing;


function setup() {
    createCanvas(innerWidth, innerHeight); 
    w = innerWidth + diameter;
    dx = (TWO_PI / period) * xspacing;
    yvalues = new Array(floor(w / xspacing));      

}

function draw() {
    background(0);
    calcWave();
    renderWave(); 
    
    textSize(100);
    textFont('Times New Roman');
    fill(0);
    text('eA', innerWidth/2-50,innerHeight/2-50,100, 100);   

}

function calcWave() {
  // Increment theta (try different values for
  // 'angular velocity' here)
  theta += 0.02;

  // For every x value, calculate a y value with sine function
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}

var xoff = 0;
function renderWave() {
  noStroke();
  
  for (let x = 0; x < yvalues.length; x++) {
    fill(map(x,0,yvalues.length,50,100), 200-map(x,0,yvalues.length,150,255), map(x,0,yvalues.length,200,255));       
    ellipse(x * xspacing, height / 2 + yvalues[x], diameter, diameter);    
  }
  xoff += 0.05;
}