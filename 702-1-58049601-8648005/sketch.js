/*

Officer: 8648005
CaseNum: 702-1-58049601-8648005

Case 702 - The case of Vanishing Vannevar
Stage 2 - Downtown traffic

“All units: Vannevar is heading into the downtown area. Heavy traffic ahead. Drive safely.”
Complete the helper functions below to drive the car and avoid other vehicles. Keep on it kid.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of investigator_vehicle and the cars in
vehicle_list to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function Drive_Vehicle() {
  investigator_vehicle.kms_driven += investigator_vehicle.speed_value;
  investigator_vehicle.rumble_val += random(-0.04, 0.04);
  investigator_vehicle.rumble_val = constrain(investigator_vehicle.rumble_val, 0.01, 0.98);
  Drive_Motor(investigator_vehicle);
}

function Swap_Lanes(vehicle) {
  if (vehicle.x === LaneCoordinate_a) {
    vehicle.x = LaneCoordinate_b;
  } else if (vehicle.x === LaneCoordinate_b) {
    vehicle.x = LaneCoordinate_a;
  }
}

function Car_IsInfront(targetVehicle) {
  for (var i = 0; i < vehicle_list.length; i++) {
    if (vehicle_list[i].x === targetVehicle.x) {
      // Calculate the distance between the target vehicle and other vehicles
      var distance = vehicle_list[i].kms_driven - targetVehicle.kms_driven;
      
      // Check if the other vehicle is in front (strictly ahead within 200px)
      if (distance > 0 && distance <= 200) {
        return i; // Returns the index of the car in front
      }
    }
  }
  return false; // No car is found in the same lane and strictly in front within the distance
}



//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var investigator_vehicle;

var roadWidth;
var roadLeftEdge;
var LaneCoordinate_a;
var LaneCoordinate_b;
var carImages = {};

var vehicle_list = [
{ x: 500, y: 0, kms_driven: -200, vehicle_model: 'greenCar', number_plate: 'XAKB35', speed_value: 2, exhaust: [  ]} , { x: 300, y: 0, kms_driven: 200, vehicle_model: 'redCar', number_plate: 'N15BXN', speed_value: 2, exhaust: [  ]} , { x: 500, y: 0, kms_driven: 600, vehicle_model: 'greenCar', number_plate: 'WMFNXU', speed_value: 2, exhaust: [  ]} , { x: 500, y: 0, kms_driven: 1000, vehicle_model: 'redCar', number_plate: 'VW9AJ3', speed_value: 2, exhaust: [  ]} , { x: 300, y: 0, kms_driven: 1400, vehicle_model: 'redCar', number_plate: 'L923HJ', speed_value: 2, exhaust: [  ]} , { x: 300, y: 0, kms_driven: 1800, vehicle_model: 'greenCar', number_plate: 'H9P79P', speed_value: 2, exhaust: [  ]} , { x: 300, y: 0, kms_driven: 2200, vehicle_model: 'redCar', number_plate: '0XNNTL', speed_value: 2, exhaust: [  ]} , { x: 500, y: 0, kms_driven: 2600, vehicle_model: 'blueCar', number_plate: '40WPHD', speed_value: 2, exhaust: [  ]} , { x: 300, y: 0, kms_driven: 3000, vehicle_model: 'redCar', number_plate: '1463QS', speed_value: 2, exhaust: [  ]} , { x: 500, y: 0, kms_driven: 3400, vehicle_model: 'greenCar', number_plate: 'D9FN6O', speed_value: 2, exhaust: [  ]} , { x: 500, y: 0, kms_driven: 3800, vehicle_model: 'greenCar', number_plate: 'UOHTO1', speed_value: 2, exhaust: [  ]} , { x: 300, y: 0, kms_driven: 4200, vehicle_model: 'greenCar', number_plate: 'H3ZFC2', speed_value: 2, exhaust: [  ]} , { x: 300, y: 0, kms_driven: 4600, vehicle_model: 'blueCar', number_plate: 'PV4SG7', speed_value: 2, exhaust: [  ]} , { x: 500, y: 0, kms_driven: 5000, vehicle_model: 'greenCar', number_plate: 'ED1V61', speed_value: 2, exhaust: [  ]} , { x: 300, y: 0, kms_driven: 5400, vehicle_model: 'redCar', number_plate: '2AGCR6', speed_value: 2, exhaust: [  ]} , { x: 300, y: 0, kms_driven: 5800, vehicle_model: 'greenCar', number_plate: '0XZUKB', speed_value: 2, exhaust: [  ]} , { x: 500, y: 0, kms_driven: 6200, vehicle_model: 'redCar', number_plate: 'QXO74F', speed_value: 2, exhaust: [  ]} , { x: 500, y: 0, kms_driven: 6600, vehicle_model: 'blueCar', number_plate: 'H74QCY', speed_value: 2, exhaust: [  ]} , { x: 300, y: 0, kms_driven: 7000, vehicle_model: 'blueCar', number_plate: '1A89XU', speed_value: 2, exhaust: [  ]} , { x: 500, y: 0, kms_driven: 7400, vehicle_model: 'redCar', number_plate: 'YD2Z8A', speed_value: 2, exhaust: [  ]} 
];



function preload()
{
	var carTypes = [
		"detective",
		"redCar",
		"greenCar",
		"blueCar",
		"whiteCar",
	];

	for(var i = 0; i < carTypes.length; i++)
	{
		carImages[carTypes[i]] = loadImage("cars/" + carTypes[i] + ".png");
	}
}

function setup()
{
	createCanvas(800,800);

	roadWidth = 400;
	roadLeftEdge = 200;
	LaneCoordinate_a = 300;
	LaneCoordinate_b = 500;

	investigator_vehicle = 
	{
		x: roadLeftEdge + roadWidth/4,
		y: 550,
		kms_driven: 0,
		speed_value: 3,
		rumble_val: 0,
		vehicle_model: 'detective',
		number_plate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);



	drawRoad();
	drawCars();

	////////////////////// HANDLE DETECTIVE /////////////////////////


	Drive_Vehicle();
	var b2b = Car_IsInfront( investigator_vehicle );
	if(b2b)Swap_Lanes(investigator_vehicle);


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < vehicle_list.length; i++)
	{
		vehicle_list[i].kms_driven += vehicle_list[i].speed_value;
		vehicle_list[i].y = investigator_vehicle.y - vehicle_list[i].kms_driven + investigator_vehicle.kms_driven;
	}

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
		roadLeftEdge + roadWidth/2 , i * 100 + (investigator_vehicle.kms_driven%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (investigator_vehicle.kms_driven%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(investigator_vehicle);
	image
	(
		carImages["detective"],
		investigator_vehicle.x - carImages["detective"].width/2 + random(-investigator_vehicle.rumble_val, investigator_vehicle.rumble_val),
		investigator_vehicle.y + random(-investigator_vehicle.rumble_val, investigator_vehicle.rumble_val)
	);

	//draw all other cars

	for(var i = 0; i < vehicle_list.length; i ++)
	{
		if(vehicle_list[i].y < height && vehicle_list[i].y > -height/2)
		{
			image(
			carImages[vehicle_list[i].vehicle_model],
			vehicle_list[i].x - carImages[vehicle_list[i].vehicle_model].width/2,
			vehicle_list[i].y
			);
			Drive_Motor(vehicle_list[i]);

			drawExhaust(vehicle_list[i]);
		}
	}

}

function Drive_Motor(car)
{

	car.exhaust.push({size: 2, x: car.x, y: car.y + carImages[car.vehicle_model].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.speed_value/3);
		if(car.vehicle_model != "detective")car.exhaust[i].y += (investigator_vehicle.speed_value - car.speed_value);
		car.exhaust[i].x += random(-1,1);
		car.exhaust[i].size += 0.5;

		if(car.exhaust[i].y  > height || car.exhaust[i].y < 0)
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
