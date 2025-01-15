/*

Officer: 8648005
CaseNum: 101-3-75163170-8648005

Case 101 - The Case of Anna Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Anna’s style. Now’s our chance to find out the root of all
of this. Lets see who is Anna meeting.

Identify Anna by drawing a Yellow filled rectangle with a Dark Cyan outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar by drawing a Pale Violet Red filled
rectangle with a Dark Magenta outline around him.

Identify the man reading the newspaper by drawing a Orange filled rectangle
with a Indigo outline around him.

Identify the woman with the dog by drawing a Crimson filled rectangle with a
Medium Violet Red outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.
  stroke() Use r,g,b values between 0 and 255.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	strokeWeight(2);
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
    
    stroke(0,139,139);
    fill(255,255,0,100);
    rect(440,241,98,190);
    
    stroke(139,0,139);
    fill(219,112,147,100);
    rect(541,397,199,266);
    
    stroke(75,0,130);
    fill(255,165,0,100);
    rect(1116,291,135,250);
    
    stroke(199,21,133);
    fill(220,20,60,100);
    rect(20,190,199,449);



	//A helpful mouse pointer
	push();
		fill(0);
		noStroke();
		text(mouseX + "," + mouseY, mouseX,mouseY);
	pop();


}
