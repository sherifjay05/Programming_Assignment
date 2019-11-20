var r, g, b;
var diam1 = 0;

function setup() {
  // put setup code here
    createCanvas(1280, 720);
    r = random(255);
    g = random(255);
    b = random(255);
}
 

function draw() {
  // put drawing code here
    background(r, g, b);
    fill ("#FFF00");
    strokeWeight(3);
    stroke("#6333a6");
    textSize(20);
    textFont("Georgia");
    textStyle(ITALIC);
    textAlign(CENTER);
    text("Hello Pretty Face!!!", width/2, 100);
// face
    ellipse(width/2, height/2, 330,460);
    strokeWeight(25);
    //eye are lines
    line(550, 250, 550, 300);
    line(740, 250, 740, 300);
    fill("#47473b");
 // mouth line
    line(590, 400, 700, 400);
    fill("#FF0000");
    ellipse(width/2, 475, 150, 60);

   
    
//square object.
    fill("#fc03ec");
    noStroke();
    rect(100, 600, 100, 100);
     

//square object.
    fill("#fcba03");
    noStroke();
    rect(100, 300, 100, 100);
     
//triangle object
    fill("#03fcf0");
    noStroke();
    triangle(20, 75, 58, 20, 86, 75);
}

function mousePressed() { 
    r = random(255);
    g = random(255);
    b = random(255);
     diam1 = diam1 + 5; 
      
    if (diam1 > 255) { 
        diam1 = 0; 
    }
}
