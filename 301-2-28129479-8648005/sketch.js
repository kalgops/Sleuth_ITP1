/*
The case of the Python Syndicate
Stage 3


Officer: 8648005
CaseNum: 301-2-28129479-8648005

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Pawel Karpinski has been declared and initialised
- Position each mugshot relative to Pawel Karpinski
- Do this by modifying the x and y parameters of each image command to use the x and y properties from the Pawel Karpinski object.
- You will need to combine add and subtract operators with the relevant property for each parameter.
- If you've got it right, then all six images should appear in exactly the same positions as they do now.

REMEMBER:
- Do not create any new variables
- Do not change the values of the properties for Pawel Karpinski 
- Do not add any additional commands

*/

var photoBoard;
var robbieKrayImage;
var pawelKarpinskiImage;
var bonesKarpinskiImage;
var annaKarpinskiImage;
var adaLovelaceImage;
var countessHamiltonImage;

var pawelKarpinskiObj;




function preload()
{
	photoBoard = loadImage('photoBoard.png');
	robbieKrayImage = loadImage("krayBrothers2.png");
	pawelKarpinskiImage = loadImage("karpinskiBros2.png");
	bonesKarpinskiImage = loadImage("karpinskiDog.png");
	annaKarpinskiImage = loadImage("karpinskiWoman.png");
	adaLovelaceImage = loadImage("ada.png");
	countessHamiltonImage = loadImage("countessHamilton.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	pawelKarpinskiObj = {
		x: 408,
		y: 40,
		image: pawelKarpinskiImage
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(pawelKarpinskiObj.image, pawelKarpinskiObj.x, pawelKarpinskiObj.y);

	image(pawelKarpinskiObj.image, pawelKarpinskiObj.x, pawelKarpinskiObj.y);
    image(robbieKrayImage, pawelKarpinskiObj.x - 293, pawelKarpinskiObj.y);
    image(bonesKarpinskiImage, pawelKarpinskiObj.x + 293, pawelKarpinskiObj.y);
    image(annaKarpinskiImage, pawelKarpinskiObj.x - 293, pawelKarpinskiObj.y + 269);
    image(adaLovelaceImage, pawelKarpinskiObj.x, pawelKarpinskiObj.y + 269);
    image(countessHamiltonImage, pawelKarpinskiObj.x + 293, pawelKarpinskiObj.y + 269);

}