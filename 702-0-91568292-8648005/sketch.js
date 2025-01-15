/*

Officer: 8648005
CaseNum: 702-0-91568292-8648005

Case 702 - The case of Vanishing Vannevar
Stage 1 - Mobilise

“Calling all units: the notorious criminal and speedster known as Vanishing Vannevar is on the run.
All cars to mobilise.” Word has it that you’re pretty nifty behind the wheel. I want you in on
this action kid. Get your car on the road by completing the </DRIVE_NAME/> function below.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- increment variables
	- random
	- constrain
	- calling functions

HINT: make sure you take a look at the initialisation of Sleuth_VehicleObject to understand it's properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function moveCar() {
  // Increment Miles_Amount by Accel_Amount
  Sleuth_VehicleObject.Miles_Amount += Sleuth_VehicleObject.Accel_Amount;
  
  // Add a random amount between -0.03 and 0.03 to Vibrate_Value
  Sleuth_VehicleObject.Vibrate_Value += random(-0.03, 0.03);
  
  // Constrain Vibrate_Value to values between 0.05 and 0.76
  Sleuth_VehicleObject.Vibrate_Value = constrain(Sleuth_VehicleObject.Vibrate_Value, 0.05, 0.76);
  
  // Call the driveCarMotor function passing Sleuth_VehicleObject as an argument
  driveCarMotor(Sleuth_VehicleObject);
}



//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var Sleuth_VehicleObject;

var roadWidth = 400;
var roadLeftEdge = 200;
var carImages = {};


function preload()
{
	carImages.detective = loadImage("cars/detective.png");
}

function setup()
{
	createCanvas(800,800);

	Sleuth_VehicleObject = 
	{
		X_Coord: roadLeftEdge + roadWidth/4,
		Y_Coord: 300,
		Miles_Amount: 0,
		Accel_Amount: 3,
		Vibrate_Value: 0,
		Vehicle_Type: 'detective',
		Licence_Plate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);


	moveCar();


	drawRoad();
	drawCars();
}

/////////////////////////DRAWING FUNCTIONS////////////////////////

function drawRoad()
{
	stroke(100);
	fill(50);
	rect(roadLeftEdge,0,roadWidth,800);
	stroke(255);

	for(var i = -1; i < 20; i++)
	{
		line(
		roadLeftEdge + roadWidth/2 , i * 100 + (Sleuth_VehicleObject.Miles_Amount%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (Sleuth_VehicleObject.Miles_Amount%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(Sleuth_VehicleObject);
	image
	(
		carImages["detective"],
		Sleuth_VehicleObject.X_Coord - carImages["detective"].width/2 + random(-Sleuth_VehicleObject.Vibrate_Value, Sleuth_VehicleObject.Vibrate_Value),
		Sleuth_VehicleObject.Y_Coord + random(-Sleuth_VehicleObject.Vibrate_Value, Sleuth_VehicleObject.Vibrate_Value)
	);

}

function driveCarMotor(car)
{

	car.exhaust.push({size: 2, x: car.X_Coord, y: car.Y_Coord + carImages[car.Vehicle_Type].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.Accel_Amount/3);
		car.exhaust[i].x += random(-1,1);
		car.exhaust[i].size += 0.5;

		if(car.exhaust[i].y  > height)
		{
			car.exhaust.splice(i,1);
		}
	}
}


function drawExhaust(car)
{
		noStroke();
		for(var i = 0; i < car.exhaust.length; i++)
		{
				var alpha = map(car.exhaust[i].size, 0, 40, 50,0);
				fill(125,alpha);
				ellipse(car.exhaust[i].x + 20, car.exhaust[i].y , car.exhaust[i].size);

		}
}
