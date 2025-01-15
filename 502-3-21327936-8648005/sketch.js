/*

Officer: 8648005
CaseNum: 502-3-21327936-8648005

Case 502 - A donation - stage 4

This final document will seal the deal. C’mon kid, let’s send these crooks down.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.


*/


var redactedText;

// data structures to be referenced in redactedText
var record_A = [
{
	detail_0: ["sneeze", "succeed", "hurry", "smile"], 
	detail_1: ["sneeze", "succeed", "play", "$200,000"], 
	detail_2: ["smile", "radiate", "hurry", "charge"]
},
{
	detail_0: ["start", "meddle", "fence", "plug"], 
	detail_1: ["COBOL", "stuff", "radiate", "start"], 
	detail_2: ["mend", "fence", "succeed", "stuff"]
},
{
	detail_0: ["fence", "protect", "clip", "bake"], 
	detail_1: ["ALGOL", "clip", "sneeze", "charge"], 
	detail_2: ["start", "play", "tug", "protect"]
},
{
	detail_0: ["smile", "succeed", "rejoice", "consider"], 
	detail_1: ["start", "consider", "mend", "syndicate"], 
	detail_2: ["charge", "Governor Zuckerberg", "succeed", "plug"]
},
{
	detail_0: ["protect", "hurry", "clip", "clip"], 
	detail_1: ["plug", "mend", "hurry", "tug"], 
	detail_2: ["stuff", "succeed", "clip", "sail"]
}];

var record_B = [
{
	detail_0: ["ALGOL fish wholesalers", "charge", "development", "hurry"], 
	detail_1: ["bake", "mend", "plug", "radiate"], 
	detail_2: ["protect", "plug", "consider", "meddle"]
},
{
	detail_0: ["smile", "radiate", "clip", "sneeze"], 
	detail_1: ["protect", "sneeze", "rejoice", "Edsger"], 
	detail_2: ["charge", "hurry", "mend", "meddle"]
},
{
	detail_0: ["clip", "mend", "play", "protect"], 
	detail_1: ["clip", "succeed", "smile", "tug"], 
	detail_2: ["smile", "stuff", "mend", "protect"]
},
{
	detail_0: ["charge", "you", "fence", "smile"], 
	detail_1: ["rejoice", "tug", "plug", "mend"], 
	detail_2: ["radiate", "play", "charge", "sneeze"]
},
{
	detail_0: ["fence", "bake", "smile", "clip"], 
	detail_1: ["donation", "hurry", "hurry", "bake"], 
	detail_2: ["rejoice", "sail", "meddle", "radiate"]
}];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280, 800);

  // replace all redacted words with the correct values from the data structures above
  redactedText = "My dearest " + record_B[1].detail_1[3] + ", I have just received your very generous " + record_B[4].detail_1[0] + " of " + record_A[0].detail_1[3] + ". Thank you. This will be invaluable to our campaign. " + record_A[2].detail_1[0] + " is a stalwart part of the community, and I look forward to continuing our strong partnership in the future. Regard the other matter; I think you will find that all has been satisfactorily dealt with. Just read this morning’s front pages. You can rest assured that no mention was made of " + record_B[3].detail_0[1] + " or " + record_B[0].detail_0[0] + " to the " + record_A[3].detail_1[3] + ". Your new " + record_B[0].detail_0[2] + " at the " + record_A[1].detail_1[0] + " can now proceed without impediment. Yours sincerely, " + record_A[3].detail_2[1];

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
  text("Edsger, donation, $200,000, ALGOL, you, ALGOL fish wholesalers, syndicate, development, COBOL, Governor Zuckerberg", 670, 100, 580, 600);
}
