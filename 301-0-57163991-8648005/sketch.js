/*
The case of the Python Syndicate
Stage 1

Officer: 8648005
CaseNum: 301-0-57163991-8648005

I gotta give it to you kid, you’ve made an excellent start, but now it’s time
to take things up a level. For some time I’ve suspected that there’s something
big going down in Console City.

These cases that we’ve been working are all connected somehow. I need to use
that considerable brain of yours to work it all out. Let’s start by laying out
who we know.

Place each mugshot in its designated position by doing the following:

- Create a new variable for the X and Y coordinates of each mugshot.
    - One has already been done for you.
    - Make sure you use the same style and format for the variable name.
- Initialise the variables with the correct values. HINT: you should be able to derive these from the image commands below.
- Finally modify the each image command replacing the hard-coded values with your variables. 
- If you've got it right all six images should appear in exactly the same positions as they do now.

*/

var photoBoard;
var cecilKarpinskiImg;
var bonesKarpinskiImg;
var annaKarpinskiImg;
var robbieKrayImg;
var countessHamiltonImg;
var adaLovelaceImg;



//declare your new variables below
var robbieKrayCoordinateX = 115;
var robbieKrayCoordinateY = 309;

var cecilKarpinskiCoordinateX = 115;
var cecilKarpinskiCoordinateY = 40;

var bonesKarpinskiCoordinateX = 408;
var bonesKarpinskiCoordinateY = 40;

var annaKarpinskiCoordinateX = 701;
var annaKarpinskiCoordinateY = 40;

var countessHamiltonCoordinateX = 408;
var countessHamiltonCoordinateY = 309;

var adaLovelaceCoordinateX = 701;
var adaLovelaceCoordinateY = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	cecilKarpinskiImg = loadImage("karpinskiBros1.png");
	bonesKarpinskiImg = loadImage("karpinskiDog.png");
	annaKarpinskiImg = loadImage("karpinskiWoman.png");
	robbieKrayImg = loadImage("krayBrothers2.png");
	countessHamiltonImg = loadImage("countessHamilton.png");
	adaLovelaceImg = loadImage("ada.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);



	//And update these image commands with your x and y coordinates.
	image(robbieKrayImg, robbieKrayCoordinateX, robbieKrayCoordinateY);

	image(cecilKarpinskiImg, cecilKarpinskiCoordinateX, cecilKarpinskiCoordinateY);
    
	image(bonesKarpinskiImg, bonesKarpinskiCoordinateX, bonesKarpinskiCoordinateY);
	
    image(annaKarpinskiImg, annaKarpinskiCoordinateX, annaKarpinskiCoordinateY);
	
    image(countessHamiltonImg, countessHamiltonCoordinateX, countessHamiltonCoordinateY);
	
    image(adaLovelaceImg, adaLovelaceCoordinateX, adaLovelaceCoordinateY);

}