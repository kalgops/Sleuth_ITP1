/*
The case of the Python Syndicate
Stage 2


Officer: 8648005
CaseNum: 301-1-35216533-8648005

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Anna Karpinski

- The variables for Anna Karpinski have been declared and initialised.
- This time you are NOT allowed to create any new variables.
- Instead you must position each mug shot relative to Anna Karpinski
- To do this you will need to control the positions of the mugshots by adding/subtracting hard-coded values to the appropriate Anna Karpinski variable for each parameter.
- If you've got it right all six images should appear in exactly the same positions as they do now.

REMEMBER:
- Do not create any new variables
- Do not change the values of the variables for Anna Karpinski 
- Do not add any additional commands

*/

var photoBoard;
var countess_hamilton_img;
var anna_karpinski_img;
var rocky_kray_img;
var pawel_karpinski_img;
var ada_lovelace_img;
var cecil_karpinski_img;


var anna_karpinski_x_coord = 408;
var anna_karpinski_y_coord = 40;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	countess_hamilton_img = loadImage("countessHamilton.png");
	anna_karpinski_img = loadImage("karpinskiWoman.png");
	rocky_kray_img = loadImage("krayBrothers1.png");
	pawel_karpinski_img = loadImage("karpinskiBros2.png");
	ada_lovelace_img = loadImage("ada.png");
	cecil_karpinski_img = loadImage("karpinskiBros1.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(anna_karpinski_img, anna_karpinski_x_coord, anna_karpinski_y_coord);

	image(anna_karpinski_img, anna_karpinski_x_coord, anna_karpinski_y_coord);
	image(countess_hamilton_img, anna_karpinski_x_coord - 293, anna_karpinski_y_coord);
	image(rocky_kray_img, anna_karpinski_x_coord + 293, anna_karpinski_y_coord);
	image(pawel_karpinski_img, anna_karpinski_x_coord - 293, anna_karpinski_y_coord + 269);
	image(ada_lovelace_img, anna_karpinski_x_coord, anna_karpinski_y_coord + 269);
	image(cecil_karpinski_img, anna_karpinski_x_coord + 293, anna_karpinski_y_coord + 269);
}