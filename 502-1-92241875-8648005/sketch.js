/*

Officer: 8648005
CaseNum: 502-1-92241875-8648005

Case 502 - A delicate matter - stage 2

We’re hot on the trail kid, and another document has come my way. This message is a little more tricky to decipher, but I know you can do it.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.

*/

var redactedText;

// data structures to be referenced in redactedText
var Excerpt_A = [
	{Redacted_0: "smile", Redacted_1: "succeed", Redacted_2: "play"}, 
	{Redacted_0: "sneeze", Redacted_1: "capital", Redacted_2: "COBOL"}, 
	{Redacted_0: "consider", Redacted_1: "rejoice", Redacted_2: "plug"}, 
	{Redacted_0: "a donation", Redacted_1: "meddle", Redacted_2: "protect"}, 
	{Redacted_0: "Edsger", Redacted_1: "protect", Redacted_2: "succeed"}, 
	{Redacted_0: "hurry", Redacted_1: "consider", Redacted_2: "bake"}, 
	{Redacted_0: "mend", Redacted_1: "smile", Redacted_2: "rejoice"}, 
	{Redacted_0: "Governor Zuckerberg", Redacted_1: "radiate", Redacted_2: "fence"}, 
	{Redacted_0: "she has", Redacted_1: "clip", Redacted_2: "play"}, 
	{Redacted_0: "succeed", Redacted_1: "succeed", Redacted_2: "syndicate"}
];

var Excerpt_B = [
	{Redacted_0: "sail", Redacted_1: "bake", Redacted_2: "hurry"}, 
	{Redacted_0: "Hopper’s", Redacted_1: "sail", Redacted_2: "mend"}, 
	{Redacted_0: "succeed", Redacted_1: "succeed", Redacted_2: "sneeze"}, 
	{Redacted_0: "clip", Redacted_1: "romantic", Redacted_2: "clip"}, 
	{Redacted_0: "consider", Redacted_1: "mend", Redacted_2: "play"}, 
	{Redacted_0: "fence", Redacted_1: "stuff", Redacted_2: "delicate"}, 
	{Redacted_0: "mend", Redacted_1: "play", Redacted_2: "meddle"}, 
	{Redacted_0: "sail", Redacted_1: "fence", Redacted_2: "succeed"}, 
	{Redacted_0: "plug", Redacted_1: "fence", Redacted_2: "succeed"}, 
	{Redacted_0: "meddle", Redacted_1: "charge", Redacted_2: "sneeze"}
];

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
  redactedText = "My dearest "+Excerpt_A[4].Redacted_0+", Please don’t doubt my sincerity when I say that I hadn’t the faintest idea about "+Excerpt_B[1].Redacted_0+" intervention. I suspect that "+Excerpt_A[8].Redacted_0+" a "+Excerpt_B[3].Redacted_1+" interest at the "+Excerpt_A[1].Redacted_2+". I and the "+Excerpt_A[9].Redacted_2+" appreciate your many contributions over the years. However, this is a most "+Excerpt_B[5].Redacted_2+" matter which would require significant "+Excerpt_A[1].Redacted_1+" for me to deal with it satisfactorily. I would not be so crude as to suggest a sum but perhaps "+Excerpt_A[3].Redacted_0+" to my forthcoming campaign would help. Yours sincerely, "+Excerpt_A[7].Redacted_0+"";

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
  text("Edsger, Hopper’s, she has, romantic, COBOL, syndicate, delicate, capital, a donation, Governor Zuckerberg", 670, 100, 580, 600);
}
