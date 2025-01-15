/*

Officer: 8648005
CaseNum: 701-2-37062201-8648005

Case 701 - Recognisable robber - stage 3

Kid you’re becoming a victim of your own success.
I just had a call from DI Max down at the precinct. He specifically requested your services.
They finally have a reliable witness for a robber who has been causing mayhem for some months.
Luckily they have a witness statement from ermelinda phinney. You know what to do kid.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function checkSuspect(suspectObj){}
 - if()

Witness statement:

It was last Thursday, I heard noises outside so I looked out and saw a person in the steet. It was very dark and I could barely see, They were carrying a black duffle bag. I distinctly remember that they were wearing a pink scarf, I remember thinking that was quite unusual. They were wearing a green jacket. It's hard to say. They brobably weigh between 64 and 77 kg. I'll never forget their grey eyes. They had thin blond hair. They seemed to be between the age of 28 and 52 years old. They were fairly tall, I think between a height of 152 and 184 cm. Can I go home now Sir? 

*/

var suspectList = [
	{ 
		"name": "LAKESHA WARMAN",
		"coat": "green jacket",
		"hair": "thin blond",
		"eyes": "grey",
		"item": "pink scarf",
		"weight": 76,
		"age": 29,
		"height": 175
	},
	{ 
		"name": "BRIDGET MONKSFORD",
		"coat": "blue overcoat",
		"hair": "white",
		"eyes": "black",
		"item": "dotted necktie",
		"weight": 56,
		"age": 43,
		"height": 189
	},
	{ 
		"name": "LOUISE PORTOS",
		"coat": "red parka",
		"hair": "shaved",
		"eyes": "pale",
		"item": "pair of leather trousers",
		"weight": 84,
		"age": 43,
		"height": 173
	},
	{ 
		"name": "RANDEE THAXTER",
		"coat": "white fur coat",
		"hair": "red",
		"eyes": "green",
		"item": "orange socks",
		"weight": 73,
		"age": 50,
		"height": 159
	},
	{ 
		"name": "NICOLE TINTLE",
		"coat": "black overcoat",
		"hair": "no",
		"eyes": "black",
		"item": "purple hat",
		"weight": 75,
		"age": 31,
		"height": 181
	},
	{ 
		"name": "JULIANA COURTWOOD",
		"coat": "green army coat",
		"hair": "dark brown",
		"eyes": "green",
		"item": "net weave shirt",
		"weight": 79,
		"age": 27,
		"height": 182
	},
	{ 
		"name": "JESUS JACQUELIN",
		"coat": "black hoodie",
		"hair": "thick black",
		"eyes": "brown",
		"item": "fur vest",
		"weight": 80,
		"age": 47,
		"height": 173
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
    coat: "green jacket",
    hair: "thin blond",
    eyes: "grey",
    item: "pink scarf",
    weight: { min: 64, max: 77 },
    age: { min: 28, max: 52 },
    height: { min: 152, max: 184 }
  };

  // Count of matching properties
  let matchingProperties = 0;

  // Compare suspect's properties to the witness statement
  if (suspectObj.coat === witnessStatement.coat) matchingProperties++;
  if (suspectObj.hair === witnessStatement.hair) matchingProperties++;
  if (suspectObj.eyes === witnessStatement.eyes) matchingProperties++;
  if (suspectObj.item === witnessStatement.item) matchingProperties++;
  if (
    suspectObj.weight >= witnessStatement.weight.min &&
    suspectObj.weight <= witnessStatement.weight.max
  ) matchingProperties++;
  if (
    suspectObj.age >= witnessStatement.age.min &&
    suspectObj.age <= witnessStatement.age.max
  ) matchingProperties++;
  if (
    suspectObj.height >= witnessStatement.height.min &&
    suspectObj.height <= witnessStatement.height.max
  ) matchingProperties++;

  // Return the count of matching properties
  return matchingProperties;
}




function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < suspectList.length; i++){
    let matchingProperties = checkSuspect(suspectList[i]);
    fill(50 * matchingProperties,250 - (50 * matchingProperties),0);
    text("found " + matchingProperties + " matching properties for " + suspectList[i].name, 60, 60 + i * 20);
  }
}
