// Create sinewave on screen
// Sources:
//  Setting canva width the same size as window: https://github.com/processing/p5.js/issues/193
//  Sine wave: https://p5js.org/examples/math-sine-wave.html
//  Text on screen: https://p5js.org/reference/#/p5/textFont
//  Image: 

let xspacing = 20; // Distance between each horizontal location
let w_plus_diameter; // Width of entire wave
let w = innerWidth; // Canvas width equal window width
let h = innerHeight; // Canvas height equal window height
let theta = 0.0; // Start angle at 0
let amplitude = 75.0; // Height of wave
let period = 500.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave
let diameter = xspacing;
var canvas;
let f = 1; // 1/period of sine wave
let fkey = 0; // release key for frequency change
let textKey = 0;
let R = 255;
let G = 255;
let B = 255;


function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight);
    w_plus_diameter = window.innerWidth + diameter;
    dx = (TWO_PI / period) * xspacing;
    yvalues = new Array(floor(w_plus_diameter / xspacing));      

}

function draw() {
    background(0);
    calcWave();
    renderWave(); 
    
    textSize(200);
    textFont('Times New Roman');
    fill(0);
    text('eA', w/2-100,h/2-80,200, 200);   

    if(textKey == 0){

      fill(255);
      textSize(16);
      textAlign(LEFT);
      text('Clique e arraste', mouseX+5, mouseY)
    } 
    

}

function calcWave() {
  // Increment theta (try different values for
  // 'angular velocity' here)
  theta += 0.02;

  // Change wave oscillation frequency according to mouseY
  
  if(fkey != 0){
    f = map(mouseX,0,window.innerWidth,0.5,1.5);
    amplitude = map(mouseY, 0, window.innerHeight, window.innerHeight/4,0)
  }  

  // For every x value, calculate a y value with sine function
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x*f) * amplitude;
    x += dx;
  }
}

function renderWave() {
  noStroke();  
  

  if (fkey != 0){
    R = map(mouseX, 0, window.innerWidth, 0,255);
    G = map(mouseY, 0, window.innerWidth, 0,255);
    B = map(mouseX*mouseY, 0, window.innerWidth*window.innerHeight, 0,255);
  }

  fill(R,G,B); 
  for (let x = 0; x < yvalues.length; x++) {          
    ellipse(x * xspacing, height / 2 + yvalues[x], diameter, diameter);    
  }
}

window.onresize = function() {
  w = window.innerWidth;
  h = window.innerHeight;  
  canvas.size(w,h);
  width = w;
  height = h;

  // Redimension values for sine wave
  w_plus_diameter = w + diameter;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w_plus_diameter / xspacing));
};

function mousePressed(){    
  fkey = 1;
  textKey = 1;
  return false;
}

function mouseReleased(){    
  fkey = 0;
  return false;
}
    