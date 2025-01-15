/*

Officer: 8648005
CaseNum: 403-2-26445076-8648005

Case 403 - Cornered - stage 3

We have Shiffman cornered at Gates Bank and more help is on the way.
Until our backup arrives the orders are to make sure he stays inside Gates Bank

Your job is to indicate that Shiffman (signified by the mouse) is indeed within the North - East - South - West bounds of Gates Bank.
Draw a Sienna rectangle covering Gates Bank for as long as Shiffman is in it.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you should use ONLY the following commands, operators and variables:

  if(){}
  >
  <
  &&
  fill()  - Use r,g,b values between 0 and 255.
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
    //x 1986 2122
    //y 1047  1175
    if (mouseX > 1986 && mouseX < 2122 && mouseY > 1047 && mouseY < 1175) {
        fill(160, 82, 45);
        rect(1986, 1047, 2122 - 1986, 1175 - 1047);
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



/*//var img;
var gatesBank = {x: 50, y: 50, width: 200, height: 200}; // replace with the actual coordinates and dimensions of Gates Bank

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

    // check if Shiffman is within the bounds of Gates Bank
    if(mouseX > gatesBank.x && mouseX < gatesBank.x + gatesBank.width && mouseY > gatesBank.y && mouseY < gatesBank.y + gatesBank.height)
    {
        // Shiffman is inside Gates Bank, draw a Sienna rectangle over it
        fill(160, 82, 45); // RGB values for Sienna
        rect(gatesBank.x, gatesBank.y, gatesBank.width, gatesBank.height);
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
}*/