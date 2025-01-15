/*

Officer: 8648005
CaseNum: 202-3-86038255-8648005

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Light Coral filled text with a Orange outline in Diggity font (see https://www.w3.org/TR/css3-iccprof#numerical).
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(524,525);
	textSize(29);
}

function draw()
{
	background(255);

	fill(238,232,170);
	stroke(199,21,133);
	textFont(RonsFont);
//	text("I", 365,154);
	fill(34,139,34);
	stroke(153,50,204);
	textFont(Diggity);
//	text("If", 117,284);
	fill(173,255,47);
	stroke(165,42,42);
	textFont(RonsFont);
//	text("x", 92,400);
	fill(0,100,0);
	stroke(0,206,209);
	textFont(Diggity);
//	text("we", 13,216);
	fill(107,142,35);
	stroke(160,82,45);
	textFont(Melissa);
//	text("this", 431,216);
	fill(255,215,0);
	stroke(0,100,0);
	textFont(RonsFont);
//	text("should", 53,216);
	fill(222,184,135);
	stroke(255,140,0);
	textFont(Ballpointprint);
//	text("send", 248,284);
	fill(250,128,114);
	stroke(0,128,0);
//	text("out.", 18,252);
	fill(178,34,34);
	stroke(165,42,42);
	textFont(RonsFont);
//	text("Are", 7,87);
	fill(127,255,212);
	stroke(255,255,0);
	textFont(Ballpointprint);
//	text("are", 60,154);
	fill(0,255,127);
	stroke(255,140,0);
//	text("Forever", 12,342);
	fill(238,232,170);
	stroke(184,134,11);
	textFont(Diggity);
//	text("ing", 151,87);
	fill(0,139,139);
	stroke(255,0,255);
	textFont(Ballpointprint);
//	text("our", 87,252);
	fill(238,130,238);
	stroke(255,140,0);
//	text("delays.", 295,184);
	fill(0,128,0);
	stroke(46,139,87);
	textFont(Diggity);
//	text("I", 78,120);
	push();
	fill(124,252,0);
	stroke(75,0,130);
	textFont(Ballpointprint);
//	text("can", 390,154);
	pop();
	stroke(0,0,128);
	textFont(RonsFont);
//	text("I'm", 241,87);
	fill(135,206,250);
	stroke(154,205,50);
//	text("sometimes.", 230,154);
	fill(255,99,71);
	stroke(124,252,0);
	textFont(Ballpointprint);
//	text("The", 206,120);
	push();
	fill(139,0,0);
	stroke(0,255,255);
	textFont(Melissa);
//	text("you", 347,252);
	pop();
	stroke(50,205,50);
	textFont(Melissa);
//	text("Bob,", 118,29);
	stroke(139,69,19);
	textFont(Ballpointprint);
//	text("a", 262,216);
	fill(50,205,50);
	stroke(255,0,255);
	textFont(Diggity);
//	text("short", 379,252);
	fill(240,128,128);
	stroke(160,82,45);
	textFont(RonsFont);
//	text("I", 181,284);
	fill(64,224,208);
	stroke(255,0,0);
	textFont(Ballpointprint);
//	text("and", 338,216);
	push();
	fill(0,128,128);
	stroke(0,100,0);
//	text("yours,", 110,342);
	pop();
	fill(176,224,230);
	stroke(255,69,0);
	textFont(RonsFont);
//	text("th", 140,184);
	fill(186,85,211);
	stroke(255,140,0);
	textFont(Melissa);
//	text("darl", 62,29);
	fill(240,128,128);
	stroke(255,165,0);
	textFont(Diggity);
	text("guard", 143,154);
	text("go", 139,216);
	text("the", 375,120);
	push();
	fill(0,139,139);
	stroke(139,0,139);
	textFont(RonsFont);
//	text("secrets,", 269,120);
	pop();
	text("for", 219,216);
	text("you", 61,87);
	text("avoid", 104,87);
	text("money", 18,284);
	fill(255,99,71);
	stroke(218,165,32);
	textFont(Melissa);
//	text("can", 92,120);
	fill(128,0,0);
	stroke(75,0,130);
//	text("sort", 388,216);
	push();
	fill(184,134,11);
	stroke(128,0,0);
	textFont(Diggity);
//	text("cash.", 312,284);
	pop();
	stroke(0,128,0);
	textFont(Diggity);
//	text("me", 183,87);
	push();
	fill(127,255,212);
	stroke(0,250,154);
	textFont(Ballpointprint);
//	text("so", 109,154);
	pop();
	fill(160,82,45);
	stroke(0,100,0);
//	text("?", 270,252);
	stroke(50,205,50);
	textFont(Melissa);
//	text("ing", 91,29);
	fill(0,0,255);
	stroke(153,50,204);
//	text("sure", 336,87);
	fill(255,69,0);
	stroke(50,205,50);
//	text("?", 190,120);
	fill(218,112,214);
	stroke(0,255,255);
	textFont(Diggity);
//	text("ed", 195,154);
	fill(124,252,0);
	stroke(220,20,60);
	textFont(Ballpointprint);
//	text("isy", 48,400);
	fill(233,150,122);
	stroke(75,0,130);
	textFont(RonsFont);
//	text("so,", 142,284);
	push();
	fill(0,0,139);
	stroke(218,165,32);
	textFont(Ballpointprint);
//	text("Are", 292,252);
	pop();
	fill(0,128,128);
	textFont(Ballpointprint);
//	text("more", 16,120);
	fill(30,144,255);
	stroke(255,69,0);
	textFont(Diggity);
//	text("how", 377,87);
	fill(0,191,255);
	stroke(34,139,34);
	textFont(Ballpointprint);
//	text("?", 85,284);
	fill(138,43,226);
	stroke(210,105,30);
	textFont(Melissa);
//	text("b", 288,216);
	fill(139,69,19);
	stroke(0,0,205);
	textFont(Ballpointprint);
//	text("all", 469,216);
	fill(0,0,205);
	stroke(220,20,60);
//	text("My", 16,29);
	push();
	fill(50,205,50);
	stroke(160,82,45);
	textFont(Diggity);
//	text("You", 15,154);
	pop();
	fill(127,255,212);
	stroke(127,255,0);
	textFont(Melissa);
//	text("relationship", 129,252);
	fill(176,224,230);
	stroke(139,69,19);
//	text("silence.", 419,120);
	fill(210,105,30);
	stroke(255,140,0);
//	text("away", 169,216);
	push();
	fill(176,224,230);
	stroke(255,255,0);
	textFont(Diggity);
//	text("ignore", 77,184);
	pop();
	fill(255,127,80);
	stroke(0,128,128);
	textFont(RonsFont);
//	text("take", 125,120);
	fill(154,205,50);
	stroke(128,0,0);
	textFont(Melissa);
//	text("reak", 296,216);
	push();
	fill(173,216,230);
	stroke(46,139,87);
	textFont(Diggity);
//	text("can", 206,284);
	pop();
	fill(72,209,204);
	stroke(154,205,50);
	textFont(Ballpointprint);
//	text("Da", 16,400);
	push();
	fill(176,224,230);
	stroke(0,0,139);
	textFont(Diggity);
//	text("Is", 64,252);
	pop();
	fill(0,255,255);
	stroke(184,134,11);
	textFont(Diggity);
//	text("longer", 15,184);
	fill(255,0,255);
	stroke(0,255,127);
	textFont(RonsFont);
//	text("ese", 164,184);
	fill(255,215,0);
	stroke(124,252,0);
//	text("of", 441,252);
	fill(0,191,255);
	stroke(128,0,128);
	textFont(Melissa);
//	text("much", 426,87);
	fill(255,215,0);
	stroke(0,0,255);
//	text("safe", 226,252);
	push();
	fill(250,128,114);
	stroke(0,139,139);
	textFont(RonsFont);
//	text("Perhaps", 380,184);
	pop();
	fill(128,0,128);
	stroke(255,255,0);
	textFont(Diggity);
//	text("not", 294,87);
	fill(0,100,0);
	stroke(25,25,112);
	textFont(RonsFont);
//	text("?", 221,87);
	fill(0,255,127);
	stroke(34,139,34);
	textFont(Diggity);
//	text("continual", 207,184);
	fill(222,184,135);
	stroke(255,215,0);
	textFont(Melissa);
//	text("no", 435,154);



}
