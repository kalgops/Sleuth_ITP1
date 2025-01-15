/*

Officer: 8648005
CaseNum: 403-3-67951368-8648005

Case 403 - Captured - stage 4

A coordinated action is under way to arrest Shiffman. Police are currently in pursuit on Gosling Road.
In order to catch him we must be able to alert all forces of his whereabouts according to the following rules:

- if Shiffman is within 121 meters from Kay Twin's Hideout then alert local police by drawing a Peru circle around it with a radius of 121 pixels.
- if Shiffman is in Gates Department Store then the neighbourhood watch must be notified by drawing a FireBrick rectangle around it.
- if Shiffman is in neither position, a global alert must be issued by drawing a DeepSkyBlue rectangle covering the area between Turing Place, Berners-Lee Street, Gosling Road and Adele Street.

Shiffman's position is signified by the mouse.

Note: all road coordinates are measured from their center.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you should use ONLY the following commands, operators and variables:

  if(){}
  >
  <
  &&
  else
  fill()  - Use r,g,b values between 0 and 255.
  dist()
  ellipse()
  rect()
  mouseX
  mouseY

*/

var img;

function preload()
{
	img = loadImage('map.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
}

function draw()
{
    // draw the image
    image(img,0,0);

    //Write your code below here ...
    
     // 206 339
  if (dist(206, 339, mouseX, mouseY) < 121) {
    fill(205, 133, 63);
    ellipse(206, 339, 121 * 2);
  }
//    x 1953 2102
//    y 293 369
    else if (mouseX > 1953 && mouseX < 2102 && mouseY > 293 && mouseY < 369) {
    fill(178,34,34);
    rect(1953, 293, 2102 - 1953, 369 - 293);
  }
//    x 1397 1590
//    y 61 940
    else {
    fill(0,191,255);
    rect(1397, 61 , 1590 - 1397, 940 - 61);
  }

    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);


    // a helpful mouse coordinate pointer
    fill(255);
    noStroke();
    text(`${mouseX},${mouseY}`,mouseX, mouseY);
}

