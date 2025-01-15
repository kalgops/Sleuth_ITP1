/*

Officer: 8648005
CaseNum: 701-3-24356336-8648005

Case 701 - Believable burglar - stage 4

Those guys down at the precinct need to take your brain for one final spin.
This burglar has been a particularly slippery character and now they believe that they have them.
Luckily they have a have a witness statement from lakesha thaxter.
All they need is for you to do the detective work.

This time you must implement two functions:

- A checkSuspectTraits function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

- A findGuilty function which traverses the array of suspects and returns the object representing the guilty suspect,
otherwise - return an empty object.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function checkSuspectTraits(suspectObj){}
 - function findGuilty(){}
 - if()

Witness statement:

I remember walking down the street and then I saw them. I'll never forget their black eyes. Their expression seemed sad. I distinctly remember that they were wearing a orange socks, I remember thinking that was quite unusual. It's so hard to remember right now. They were fairly tall, I think between a height of 155 and 210 cm. They wore dark brown glasses. The person I saw was male. It was very dark and I could barely see, They brobably weigh between 71 and 85 kg. They were wearing a green army coat. They seemed to be between the age of 34 and 72 years old. It's so hard to remember right now. Can I go home now Sir? 

*/

var usualSuspects = [
	{ 
		"name": "HANG THAXTER",
		"gender": "female",
		"expression": "blank",
		"item": "dotted necktie",
		"glasses": "red",
		"age": 39,
		"weight": 87,
		"height": 187
	},
	{ 
		"name": "JENIFFER ADVERSANE",
		"gender": "female",
		"expression": "menacing",
		"item": "pink scarf",
		"glasses": "black",
		"age": 40,
		"weight": 67,
		"height": 179
	},
	{ 
		"name": "BRIDGET WILLMAR",
		"gender": "female",
		"expression": "nerveous",
		"item": "pair of leather trousers",
		"glasses": "very thick",
		"age": 41,
		"weight": 69,
		"height": 183
	},
	{ 
		"name": "JULIANA JACQUELIN",
		"gender": "male",
		"expression": "empty",
		"item": "net weave shirt",
		"glasses": "cheap plastic",
		"age": 32,
		"weight": 79,
		"height": 186
	},
	{ 
		"name": "BRAD DAVISWOOD",
		"gender": "male",
		"expression": "confused",
		"item": "purple hat",
		"glasses": "light tan",
		"age": 59,
		"weight": 59,
		"height": 169
	},
	{ 
		"name": "LAKESHA WARMAN",
		"gender": "male",
		"expression": "sad",
		"item": "orange socks",
		"glasses": "dark brown",
		"age": 59,
		"weight": 81,
		"height": 163
	},
	{ 
		"name": "LESLEY DEAUVILLE",
		"gender": "female",
		"expression": "nerveous",
		"item": "fur vest",
		"glasses": "thin metallic",
		"age": 34,
		"weight": 83,
		"height": 172
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

// Declare both your functions here

function checkSuspectTraits(suspectObj) {
  // Witness statement details
  const witnessStatement = {
    expression: "sad",
    item: "orange socks",
    glasses: "dark brown",
    gender: "male",
    weight: { min: 71, max: 85 },
    height: { min: 155, max: 210 },
    age: { min: 34, max: 72 },
  };

  // Count of matching properties
  let matchingProperties = 0;

  // Compare suspect's properties to the witness statement
  if (suspectObj.expression === witnessStatement.expression) matchingProperties++;
  if (suspectObj.item === witnessStatement.item) matchingProperties++;
  if (suspectObj.glasses === witnessStatement.glasses) matchingProperties++;
  if (suspectObj.gender === witnessStatement.gender) matchingProperties++;
  if (
    suspectObj.weight >= witnessStatement.weight.min &&
    suspectObj.weight <= witnessStatement.weight.max
  ) matchingProperties++;
  if (
    suspectObj.height >= witnessStatement.height.min &&
    suspectObj.height <= witnessStatement.height.max
  ) matchingProperties++;
  if (
    suspectObj.age >= witnessStatement.age.min &&
    suspectObj.age <= witnessStatement.age.max
  ) matchingProperties++;

  // Return the count of matching properties
  return matchingProperties;
}

function findGuilty() {
  // Iterate through the array of suspects
  for (let i = 0; i < usualSuspects.length; i++) {
    // Check if the current suspect matches the witness statement
    if (checkSuspectTraits(usualSuspects[i]) === 7) {
      // Return the guilty suspect
      return usualSuspects[i];
    }
  }
  // Return an empty object if no guilty suspect is found
  return {};
}




function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  fill(255,0,0);
  text(findGuilty().name + " is guilty!", 60, 80);
}
