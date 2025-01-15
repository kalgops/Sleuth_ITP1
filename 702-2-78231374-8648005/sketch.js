/*

Officer: 8648005
CaseNum: 702-2-78231374-8648005

Case 702 - The case of Vanishing Vannevar
Stage 3 - Where's Vannevar

“All units: Vannevar’s car has been sighted. It is a white car with a number_plate of Y1ONJ7. Approach with
caution.” This is your big chance kid. Don’t blow it. Complete the helper functions below to
drive through the traffic and locate Vannevar.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of investigator_vehicle and the cars in
Cars_Array to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function Drive_Vehicle() {
  investigator_vehicle.dist_amount += investigator_vehicle.gas_value;
  investigator_vehicle.engineRumble_value += random(-0.06, 0.06);
  investigator_vehicle.engineRumble_value = constrain(investigator_vehicle.engineRumble_value, 0.02, 0.81);
  Turn_Car_engine(investigator_vehicle);
}



function Cross_Lanes(targetCar) {
  if (targetCar.coord_x === Lane_Position_A) {
    targetCar.coord_x = Lane_Position_B;
  } else if (targetCar.coord_x === Lane_Position_B) {
    targetCar.coord_x = Lane_Position_A;
  }
}



function CheckVehicle_IsInfront(targetCar) {
  for (var i = 0; i < Cars_Array.length; i++) {
    if (Cars_Array[i].coord_x === targetCar.coord_x && Cars_Array[i].number_plate !== targetCar.number_plate) {
      var distance = Cars_Array[i].dist_amount - targetCar.dist_amount;
      if (distance > 0 && distance <= 200) {
        return i;
      }
    }
  }
  return false;
}



function Car_IsParallel() {
  for (var i = 0; i < Cars_Array.length; i++) {
    if (abs(Cars_Array[i].dist_amount - investigator_vehicle.dist_amount) < 25 && Cars_Array[i].coord_x !== investigator_vehicle.coord_x) {
      return i;
    }
  }
  return false;
}



function Identify_Suspect() {
  var parallelCarIndex = Car_IsParallel();
  if (parallelCarIndex !== false) {
    var parallelCar = Cars_Array[parallelCarIndex];
    if (parallelCar.number_plate === 'Y1ONJ7') {
      suspect = parallelCar;
    }
  }
}



//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var investigator_vehicle;

var roadWidth;
var roadLeftEdge;
var Lane_Position_A;
var Lane_Position_B;
var carImages = {};
var suspect;

var Cars_Array = [
{ coord_x: 300, coord_y: 0, dist_amount: -200, car_variety: 'whiteCar', number_plate: 'V18JHC', gas_value: 2, exhaust: [  ]} , { coord_x: 500, coord_y: 0, dist_amount: 200, car_variety: 'whiteCar', number_plate: 'SLL3G7', gas_value: 2, exhaust: [  ]} , { coord_x: 300, coord_y: 0, dist_amount: 600, car_variety: 'blueCar', number_plate: 'T0KVCC', gas_value: 2, exhaust: [  ]} , { coord_x: 300, coord_y: 0, dist_amount: 1000, car_variety: 'greenCar', number_plate: 'H01NWM', gas_value: 2, exhaust: [  ]} , { coord_x: 300, coord_y: 0, dist_amount: 1400, car_variety: 'blueCar', number_plate: 'YFMYQ0', gas_value: 2, exhaust: [  ]} , { coord_x: 500, coord_y: 0, dist_amount: 1800, car_variety: 'redCar', number_plate: 'GL0V2K', gas_value: 2, exhaust: [  ]} , { coord_x: 500, coord_y: 0, dist_amount: 2200, car_variety: 'whiteCar', number_plate: 'SBSFJ4', gas_value: 2, exhaust: [  ]} , { coord_x: 500, coord_y: 0, dist_amount: 2600, car_variety: 'whiteCar', number_plate: 'Y1ONJ7', gas_value: 2, exhaust: [  ]} , { coord_x: 300, coord_y: 0, dist_amount: 3000, car_variety: 'redCar', number_plate: 'IOAQB1', gas_value: 2, exhaust: [  ]} , { coord_x: 300, coord_y: 0, dist_amount: 3400, car_variety: 'whiteCar', number_plate: 'B5FCWZ', gas_value: 2, exhaust: [  ]} , { coord_x: 500, coord_y: 0, dist_amount: 3800, car_variety: 'blueCar', number_plate: '1BV7MU', gas_value: 2, exhaust: [  ]} , { coord_x: 500, coord_y: 0, dist_amount: 4200, car_variety: 'greenCar', number_plate: 'BLDYIL', gas_value: 2, exhaust: [  ]} , { coord_x: 500, coord_y: 0, dist_amount: 4600, car_variety: 'redCar', number_plate: '5PJBCD', gas_value: 2, exhaust: [  ]} , { coord_x: 300, coord_y: 0, dist_amount: 5000, car_variety: 'greenCar', number_plate: 'JOUSGR', gas_value: 2, exhaust: [  ]} , { coord_x: 500, coord_y: 0, dist_amount: 5400, car_variety: 'greenCar', number_plate: 'M97T68', gas_value: 2, exhaust: [  ]} , { coord_x: 500, coord_y: 0, dist_amount: 5800, car_variety: 'greenCar', number_plate: 'SLTOYS', gas_value: 2, exhaust: [  ]} , { coord_x: 300, coord_y: 0, dist_amount: 6200, car_variety: 'blueCar', number_plate: 'YOZROM', gas_value: 2, exhaust: [  ]} , { coord_x: 300, coord_y: 0, dist_amount: 6600, car_variety: 'redCar', number_plate: 'OLP3GA', gas_value: 2, exhaust: [  ]} , { coord_x: 500, coord_y: 0, dist_amount: 7000, car_variety: 'greenCar', number_plate: 'HJQXP6', gas_value: 2, exhaust: [  ]} , { coord_x: 500, coord_y: 0, dist_amount: 7400, car_variety: 'whiteCar', number_plate: 'KR7Z1A', gas_value: 2, exhaust: [  ]} 
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
	textSize(30);
	textAlign(CENTER);

	roadWidth = 400;
	roadLeftEdge = 200;
	Lane_Position_A = 300;
	Lane_Position_B = 500;

	investigator_vehicle = 
	{
		coord_x: roadLeftEdge + roadWidth/4,
		coord_y: 550,
		dist_amount: 0,
		gas_value: 3,
		engineRumble_value: 0,
		car_variety: 'detective',
		number_plate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);



	drawRoad();
	drawCars();

	if(suspect)
	{
		fill(255);

		text("suspect found !", width/2, height/2);
		return;
	}

	////////////////////// HANDLE DETECTIVE /////////////////////////

	Drive_Vehicle();
	var b2b = CheckVehicle_IsInfront( investigator_vehicle );
	if(b2b)Cross_Lanes(investigator_vehicle);
	Identify_Suspect();


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < Cars_Array.length; i++)
	{
		Cars_Array[i].dist_amount += Cars_Array[i].gas_value;
		Cars_Array[i].coord_y = investigator_vehicle.coord_y - Cars_Array[i].dist_amount + investigator_vehicle.dist_amount;
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
		roadLeftEdge + roadWidth/2 , i * 100 + (investigator_vehicle.dist_amount%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (investigator_vehicle.dist_amount%100)
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
		investigator_vehicle.coord_x - carImages["detective"].width/2 + random(-investigator_vehicle.engineRumble_value, investigator_vehicle.engineRumble_value),
		investigator_vehicle.coord_y + random(-investigator_vehicle.engineRumble_value, investigator_vehicle.engineRumble_value)
	);

	//draw all other cars

	for(var i = 0; i < Cars_Array.length; i ++)
	{
		if(Cars_Array[i].coord_y < height && Cars_Array[i].coord_y > -height/2)
		{
			image(
			carImages[Cars_Array[i].car_variety],
			Cars_Array[i].coord_x - carImages[Cars_Array[i].car_variety].width/2,
			Cars_Array[i].coord_y
			);
			Turn_Car_engine(Cars_Array[i]);

			drawExhaust(Cars_Array[i]);
		}
	}

}

function Turn_Car_engine(car)
{

	car.exhaust.push({size: 2, x: car.coord_x, y: car.coord_y + carImages[car.car_variety].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.gas_value/3);
		if(car.car_variety != "detective")car.exhaust[i].y += (investigator_vehicle.gas_value - car.gas_value);
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
