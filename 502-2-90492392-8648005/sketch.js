/*

Officer: 8648005
CaseNum: 502-2-90492392-8648005

Case 502 - Out of the picture - stage 3

Yet another document has come my way. This one is even more tricky to decipher.
The Governor must really have something to hide.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.

*/

var redactedText;

// arrays to be referenced in redactedText
var A_evidence = {
	detail_0: [ "charge", "meddle", "bake"], 
	detail_1: [ "Edsger", "protect", "rejoice"], 
	detail_2: [ "plug", "protect", "play"], 
	detail_3: [ "consider", "fence", "consider"], 
	detail_4: [ "start", "charge", "fence"], 
	detail_5: [ "stuff", "bake", "start"], 
	detail_6: [ "radiate", "fence", "fence"], 
	detail_7: [ "sneeze", "a donation", "sail"], 
	detail_8: [ "consider", "succeed", "smile"], 
	detail_9: [ "Governor Zuckerberg", "fence", "campaign"]
};

var B_evidence = {
	detail_0: [ "smile", "hit", "charge"], 
	detail_1: [ "smile", "plug", "plug"], 
	detail_2: [ "meddle", "hurry", "rejoice"], 
	detail_3: [ "protect", "charge", "tug"], 
	detail_4: [ "consider", "sail", "meddle"], 
	detail_5: [ "rejoice", "charge", "play"], 
	detail_6: [ "tug", "protect", "charge"], 
	detail_7: [ "play", "Hopper", "sail"], 
	detail_8: [ "syndicate", "charge", "ALGOL"], 
	detail_9: [ "hurry", "$200,000", "meddle"]
};

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280,800);

  // replace all redacted words with the correct values from the data structures above
  redactedText = "Dear "+A_evidence.detail_9[0]+", I am sure that something could be worked out in terms of "+A_evidence.detail_7[1]+" for your "+A_evidence.detail_9[2]+". How does "+B_evidence.detail_9[1]+" sound ? I am afraid I will need to be so crude as to spell out what ALGOL requires in return. "+B_evidence.detail_7[1]+" needs to be out of the picture. She’s caused enough trouble. Get the "+B_evidence.detail_8[0]+" to organise the "+B_evidence.detail_0[1]+" but I’d prefer it you don’t mention me or "+B_evidence.detail_8[2]+". I owe them enough favours already. Your old friend, "+A_evidence.detail_1[0]+"";

}

function draw()
{
  // you don't need to change this
  image(backgroundImg, 0, 0);
  stroke(0);
  strokeWeight(3);
  line(width/2, 10, width/2, height - 10);
  noStroke();
  textFont(myFont);
  textSize(14);
  text(redactedText, 30, 100, 580, 600);
  text("Governor Zuckerberg, a donation, campaign, $200,000, Hopper, syndicate, hit, ALGOL, Edsger", 670, 100, 580, 600);
}
