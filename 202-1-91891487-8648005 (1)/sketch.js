/*

Officer: 8648005
CaseNum: 202-1-91891487-8648005

Case 202 - The case of Bob and Daisy - stage 2

Here’s another letter kid. This time it’s from Daisy (aka. Woz).
Decode it to uncover more about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Medium Violet Red filled text with a Brown outline 
(see https://www.w3.org/TR/css3-iccprof#numerical).
Only comment out text commands - leave fill & stroke commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Melissa.otf');
}

function setup()
{
	createCanvas(526,420);
	textFont(letterFont);
	textSize(26);
}

function draw()
{
	background(255);
    
	fill(233,150,122);
	stroke(0,100,0);
//	text("sprin", 460,160);
	fill(64,224,208);
	stroke(255,215,0);
//	text("it", 442,78);
	fill(0,0,205);
	stroke(0,139,139);
//	text("much", 313,134);
	fill(138,43,226);
	stroke(165,42,42);
//	text("this", 54,160);
	fill(255,215,0);
	stroke(210,105,30);
//	text("the", 430,160);
	fill(184,134,11);
	stroke(46,139,87);
//	text("this", 183,193);
	stroke(0,250,154);
//	text("in", 414,160);
	fill(64,224,208);
	stroke(139,0,139);
//	text("town", 258,193);
	fill(255,69,0);
	stroke(255,0,0);
//	text("we", 226,160);
	fill(153,50,204);
	stroke(34,139,34);
//	text("we", 8,105);
	fill(138,43,226);
	stroke(0,191,255);
//	text("the", 454,105);
	fill(199,21,133);
	stroke(165,42,42);
    text("the", 219,78);
	fill(0,128,0);
	stroke(255,0,255);
//	text("do", 400,134);
	fill(0,0,205);
	stroke(165,42,42);
//	text("you", 141,78);
	fill(0,100,0);
	stroke(255,69,0);
//	text("my", 280,105);
	fill(218,112,214);
	stroke(0,128,0);
//	text("at", 432,105);
	fill(0,255,127);
	stroke(139,0,0);
//	text("My", 6,26);
	fill(128,0,0);
	stroke(25,25,112);
//	text("How", 279,134);
    fill(65,105,225);
	stroke(255,140,0);
//	text("you", 236,105);
	fill(139,0,139);
	stroke(127,255,0);
//	text("your", 6,224);
	fill(0,0,255);
	stroke(0,0,255);
//	text("and", 82,134);
	fill(128,0,128);
	stroke(46,139,87);
//	text("of", 226,134);
	fill(152,251,152);
	stroke(0,255,255);
//	text("small", 217,193);
	fill(184,134,11);
	stroke(210,105,30);
//	text("you.", 248,134);
	fill(255,215,0);
	stroke(0,0,139);
//	text("since", 459,78);
//	text("have", 436,134);
	fill(222,184,135);
	stroke(184,134,11);
//	text("hold", 203,105);
	fill(0,250,154);
	stroke(0,250,154);
//	text("you", 68,193);
	fill(32,178,170);
	stroke(0,100,0);
//	text("miss", 54,78);
	fill(30,144,255);
	stroke(128,128,0);
//	text("und", 192,78);
	fill(255,140,0);
	stroke(0,139,139);
//	text("only", 194,134);
	fill(25,25,112);
	stroke(34,139,34);
//	text("to", 181,105);
	fill(154,205,50);
	stroke(127,255,0);
//	text("night", 6,134);
	fill(72,209,204);
	stroke(160,82,45);
//	text("desolate.", 340,193);
	fill(173,216,230);
	stroke(128,128,0);
//	text("at", 96,193);
	fill(244,164,96);
	stroke(0,0,255);
//	text("arms.", 306,105);
	fill(0,250,154);
	stroke(255,165,0);
//	text("kissed", 70,105);
	fill(153,50,204);
	stroke(255,0,0);
//	text("will", 197,160);
	fill(222,184,135);
	stroke(154,205,50);
//	text("Forever", 6,276);
	fill(199,21,133);
	stroke(165,42,42);
	text("bank", 438,193);
	text("is", 424,78);
	text("united", 275,160);
    fill(160,82,45);
	stroke(148,0,211);
//	text("again", 321,160);
	fill(147,112,219);
	stroke(255,140,0);
//	text("last", 36,105);
	fill(210,105,30);
	stroke(255,0,255);
//	text("up", 411,105);
	fill(30,144,255);
	stroke(0,0,205);
//	text("When", 152,160);
	fill(255,0,0);
	stroke(199,21,133);
//	text("I", 422,134);
	fill(165,42,42);
	stroke(107,142,35);
//	text("Daisy", 6,328);
	fill(135,206,250);
	stroke(127,255,0);
//	text("return.", 86,224);
	fill(238,130,238);
	stroke(160,82,45);
//	text("in", 264,105);
	fill(165,42,42);
	stroke(0,0,255);
//	text("How", 6,78);
	fill(124,252,0);
	stroke(139,69,19);
//	text("to", 474,134);
	fill(255,69,0);
	stroke(160,82,45);
//	text("long", 149,105);
	fill(0,255,255);
	stroke(153,50,204);
//	text("ging", 106,160);
	fill(199,21,133);
	stroke(34,139,34);
//	text("can", 125,134);
	fill(0,255,127);
	stroke(127,255,0);
//	text("sky,", 46,134);
	fill(0,0,139);
	stroke(0,0,205);
//	text("?", 138,160);
	fill(178,34,34);
	stroke(32,178,170);
//	text("I", 111,134);
	fill(139,0,139);
	stroke(25,25,112);
//	text("g,", 495,160);
	fill(127,255,212);
	stroke(0,100,0);
//	text("?", 361,160);
	fill(222,184,135);
	stroke(127,255,0);
//	text("Bob,", 84,26);
	fill(255,255,0);
	stroke(154,205,50);
//	text("darling", 34,26);
	fill(25,25,112);
	stroke(0,250,154);
//	text("Even", 375,160);
	fill(173,255,47);
	stroke(0,255,127);
//	text("think", 154,134);
	fill(128,0,0);
	stroke(178,34,34);
//	text("I'm", 409,193);
	fill(152,251,152);
	stroke(255,140,0);
//	text("longer", 353,134);
	fill(218,112,214);
//	text("without", 7,193);
    fill(135,206,235);
	stroke(46,139,87);
//	text("yours,", 66,276);
	fill(65,105,225);
	stroke(34,139,34);
//	text("be", 254,160);
	fill(178,34,34);
	stroke(255,215,0);
//	text("I", 40,78);
	fill(255,215,0);
	stroke(153,50,204);
//	text("sw", 41,224);
	fill(138,43,226);
	stroke(75,0,130);
//	text("store", 8,160);
	fill(34,139,34);
	stroke(128,0,128);
//	text("stare", 365,105);
	fill(138,43,226);
	stroke(255,215,0);
//	text("side,", 144,193);
	fill(0,255,255);
	stroke(148,0,211);
//	text("?", 121,105);
	fill(160,82,45);
	stroke(0,128,0);
//	text("x", 50,328);
	fill(219,112,147);
	stroke(139,69,19);
//	text("on", 492,193);
	fill(160,82,45);
	stroke(0,255,255);
//	text("lon", 88,160);
	fill(173,255,47);
	stroke(199,21,133);
//	text("many", 325,78);
	fill(165,42,42);
	stroke(0,255,255);
//	text("ift", 61,224);
	fill(219,112,147);
	stroke(0,128,128);
//	text("How", 291,78);
	fill(199,21,133);
	stroke(0,191,255);
//	text("ing", 468,193);
	fill(0,0,128);
	stroke(124,252,0);
//	text("having", 93,78);
	fill(34,139,34);
//	text("aro", 169,78);
	fill(139,69,19);
	stroke(184,134,11);
//	text("I", 351,105);
	fill(199,21,133);
	stroke(165,42,42);
	text("place", 249,78);
	fill(160,82,45);
	stroke(0,255,127);
//	text("I", 135,105);
	fill(240,230,140);
	stroke(154,205,50);
//	text("months", 366,78);
	fill(160,82,45);
	stroke(0,255,127);
//	text("my", 118,193);
	fill(154,205,50);
	stroke(0,0,139);
//	text("feels", 298,193);

}
