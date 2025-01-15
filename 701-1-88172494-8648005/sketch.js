/*

Officer: 8648005
CaseNum: 701-1-88172494-8648005

Case 701 - Credible cat thief - stage 2

Kid they need you down at the precinct again.
This time it's a sneaky cat thief who has been absconding with the neighbourhoods felines for some time.
Luckily old Mrs Olivetti caught a glimpse of them as they disappeared over her back fence.
We’ve a bunch of likely characters lined-up but we need your brains to solve the mystery.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function checkSuspect(suspectObj){}
 - if()

Witness statement:

It all started when I was exiting the store. That's when I noticed them. They had thick black hair. It was so scary! Their expression seemed confused. They were carrying a orange tote bag. They definately weigh less than 70 Kg. By the look of them they were younger than 50. They wore dark brown glasses. It's so hard to remember right now. That's all I can remember about them. 

*/

var allSuspects = [
	{ 
		"name": "SUMMER MONKSFORD",
		"accessory": "black duffle bag",
		"glasses": "very thick",
		"expression": "sad",
		"weight": 78,
		"age": 58
	},
	{ 
		"name": "LAKESHA OORIN",
		"accessory": "orange tote bag",
		"glasses": "dark brown",
		"expression": "confused",
		"weight": 68,
		"age": 43
	},
	{ 
		"name": "DRUSILLA ADVERSANE",
		"accessory": "orange plastic bag",
		"glasses": "white",
		"expression": "blank",
		"weight": 69,
		"age": 45
	},
	{ 
		"name": "LESLEY JACQUELIN",
		"accessory": "big black envelope",
		"glasses": "cheap plastic",
		"expression": "nerveous",
		"weight": 64,
		"age": 42
	},
	{ 
		"name": "JENIFFER MAUBERT",
		"accessory": "plastic box",
		"glasses": "blue",
		"expression": "angry",
		"weight": 100,
		"age": 62
	}
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
	createCanvas(640,480);
	textFont(myFont);
}

// Declare your function here

function checkSuspect(suspectObj) {
  // Witness statement details
  const witnessStatement = {
    accessory: "orange tote bag",
    glasses: "dark brown",
    expression: "confused",
    weight: 70,
    age: 50
  };

  // Compare suspect's properties to the witness statement
  if (
    suspectObj.accessory === witnessStatement.accessory &&
    suspectObj.glasses === witnessStatement.glasses &&
    suspectObj.expression === witnessStatement.expression &&
    suspectObj.weight < witnessStatement.weight &&
    suspectObj.age < witnessStatement.age
  ) {
    // Return true if the suspect matches the description in full
    return true;
  } else {
    // Return false otherwise
    return false;
  }
}


function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < allSuspects.length; i++){
    if(checkSuspect(allSuspects[i]) == true){
      fill(255,0,0);
      text(allSuspects[i].name + " is guilty!", 60, 60 + i * 20);
    }else{
      fill(0,155,0);
      text(allSuspects[i].name + " is not guilty", 60, 60 + i * 20 );
    }
  }
}
