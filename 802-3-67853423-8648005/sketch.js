/*
802 - The case of Monte Carlo
Stage 4 - Club criminal


Officer: 8648005
CaseNum: 802-3-67853423-8648005

The card sharks from Rossling Polling are not pleased with your stellar performance and suspect foul play. They are challenging you to find a single card in the deck in just one cut.

- First write a shuffleSeed() function. Same as before, it needs to return an array of 52 random integers between 5 and 98.
- Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
- Call shuffleSeed in setup and use the return value as the argument for shuffleDeck().

Now, the card you are looking for is stored in the cut_here object. You need to cut the deck at this exact location and the card sharks will be forced to give up their secrets.

- Write a function called deckCut and call it from setup.
- This should search for card matching cut_here inside deck.
- Once you've found a match use the JavaScript splice() function to store the cut card and all the elements after from the deck array in the topOfDeck array. 
- You'll need to break the loop once you've done as you don't want to keep searching.
- Finally reverse the elements in topOfDeck so that the card we cut the deck at is the last element and not the first. 
	- Unfortunately, if we use JavaScript's inbuilt reverse() function we’ll be spotted. You’ll have to write this yourself kid. 


*/

var deck = [ { type: 'Spades', n: 'A'} , { type: 'Spades', n: '2'} , { type: 'Spades', n: '3'} , { type: 'Spades', n: '4'} , { type: 'Spades', n: '5'} , { type: 'Spades', n: '6'} , { type: 'Spades', n: '7'} , { type: 'Spades', n: '8'} , { type: 'Spades', n: '9'} , { type: 'Spades', n: '10'} , { type: 'Spades', n: 'J'} , { type: 'Spades', n: 'Q'} , { type: 'Spades', n: 'K'} , { type: 'Clubs', n: 'A'} , { type: 'Clubs', n: '2'} , { type: 'Clubs', n: '3'} , { type: 'Clubs', n: '4'} , { type: 'Clubs', n: '5'} , { type: 'Clubs', n: '6'} , { type: 'Clubs', n: '7'} , { type: 'Clubs', n: '8'} , { type: 'Clubs', n: '9'} , { type: 'Clubs', n: '10'} , { type: 'Clubs', n: 'J'} , { type: 'Clubs', n: 'Q'} , { type: 'Clubs', n: 'K'} , { type: 'Hearts', n: 'A'} , { type: 'Hearts', n: '2'} , { type: 'Hearts', n: '3'} , { type: 'Hearts', n: '4'} , { type: 'Hearts', n: '5'} , { type: 'Hearts', n: '6'} , { type: 'Hearts', n: '7'} , { type: 'Hearts', n: '8'} , { type: 'Hearts', n: '9'} , { type: 'Hearts', n: '10'} , { type: 'Hearts', n: 'J'} , { type: 'Hearts', n: 'Q'} , { type: 'Hearts', n: 'K'} , { type: 'Diamonds', n: 'A'} , { type: 'Diamonds', n: '2'} , { type: 'Diamonds', n: '3'} , { type: 'Diamonds', n: '4'} , { type: 'Diamonds', n: '5'} , { type: 'Diamonds', n: '6'} , { type: 'Diamonds', n: '7'} , { type: 'Diamonds', n: '8'} , { type: 'Diamonds', n: '9'} , { type: 'Diamonds', n: '10'} , { type: 'Diamonds', n: 'J'} , { type: 'Diamonds', n: 'Q'} , { type: 'Diamonds', n: 'K'}  ];
var deck_img;
var table_img;
var drawCounter = 0;

var cut_here = { suit: 'Hearts', number: '5'} ;
var topOfDeck = [];

function preload() {
  deck_img = loadImage("deck.png");
  table_img = loadImage("table.png");
}

function setup() {
  createCanvas(table_img.width, table_img.height);
  frameRate(30);

  // Call your shuffleSeed() function here. Followed by a call to shuffleDeck with the return value of shuffleSeed() as an argument.
  var seed = shuffleSeed();
  shuffleDeck(seed);

  // Call your deckCut function here
  deckCut();
}

// Write your deckCut function here
function deckCut() {
  // Iterate through the deck to find a match for cut_here
  for (var i = 0; i < deck.length; i++) {
    if (
      cut_here.suit === deck[i].type &&
      cut_here.number === deck[i].n
    ) {
      // Use splice() to store the cut card and elements after it in topOfDeck
      topOfDeck = deck.splice(i);

      // Reverse the elements in topOfDeck
      for (var j = 0; j < Math.floor(topOfDeck.length / 2); j++) {
        var temp = topOfDeck[j];
        topOfDeck[j] = topOfDeck[topOfDeck.length - 1 - j];
        topOfDeck[topOfDeck.length - 1 - j] = temp;
      }

      // Break the loop
      break;
    }
  }
}

// Write your shuffleSeed() function here
function shuffleSeed() {
  var seed = [];

  for (var i = 0; i < 52; i++) {
    // Fill the array with 52 random integers between 5 and 98
    seed.push(round(random(5, 98)));
  }

  // Return the array
  return seed;
}
/////////////////////DON'T CHANGE ANYTHING BELOW HERE/////////////////////////
function shuffleDeck(shuffleSeed)
{
		//shuffle the deck by rotating the cards location with the values in
		//shuffleSeed. Repeat this a random number of times between 20 and 50
    var shuffleIterations = parseInt(random(20, 50));
    for(var i = 0; i < shuffleIterations; i++)
    {
	   for (var j = 0; j < deck.length; j++)
	   {
		  var tempCard = deck.splice(j, 1);
          var newLoc = (j + shuffleSeed[j])%52;
          deck.splice(newLoc, 0, tempCard[0]);
	   }
    }
}

function draw()
{
	image(table_img, 0, 0);

	if (frameCount % 7 == 0)
	{
		drawCounter++;
		if (drawCounter == 5)
		{
			noLoop();
		}
	}
	for (var i = 0; i < drawCounter; i++)
	{
		if(i < topOfDeck.length)
		{
			drawCard(topOfDeck[i], 880 + i * 18, 750);
		}
	}


}


function drawCard(card, x, y)
{

	var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
	var suits = ["Spades", "Clubs", "Hearts", "Diamonds"];

	for (var i = 0; i < suits.length; i++)
	{
		for (var j = 0; j < values.length; j++)
		{
			if (card.n == values[j] && card.type == suits[i])
			{
			//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
