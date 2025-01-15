/*

Officer: 8648005
CaseNum: 702-3-84752921-8648005

Case 702 - The case of Vanishing Vannevar
Stage 4 - High speed chase

“All units: Vannevar is on the run. They are driving a white car with a number_plate of 9S9870.  Pursue at speed.
I repeat pursue at speed.” Okay Vannevar’s game is nearly up. Go get him kid.
Complete the helper functions below to locate, chase and arrest Vannevar.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of investigator_vehicleObject and the cars in
trafficList to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function driveVehicle() 
{
  investigator_vehicleObject.dist_amnt += investigator_vehicleObject.gas_amount;
  investigator_vehicleObject.engineShudder_amount += random(-0.09, 0.09);
  investigator_vehicleObject.engineShudder_amount = constrain(investigator_vehicleObject.engineShudder_amount, 0.05, 1.06);
  turnoverCar_engine(investigator_vehicleObject);
}



function swapLanes(carObj) 
{
  carObj.x_pos = carObj.x_pos === LaneCoordA ? LaneCoordB : LaneCoordA;
  return carObj;
}



function searchAhead(target_car) 
{
  for (var i = 0; i < trafficList.length; i++) {
    if (trafficList[i].x_pos === target_car.x_pos && trafficList[i].number_plate !== target_car.number_plate) {
      var distance = trafficList[i].dist_amnt - target_car.dist_amnt;
      if (distance > 0 && distance <= 200) {
        return i;
      }
    }
  }
  return false;
}



function checkIsParallel() 
{
  for (var i = 0; i < trafficList.length; i++) {
    if (abs(trafficList[i].dist_amnt - investigator_vehicleObject.dist_amnt) < 25 && trafficList[i].x_pos !== investigator_vehicleObject.x_pos) {
      return i;
    }
  }
  return false;
}



function identifyCriminal() 
{
  var parallelCarIndex = checkIsParallel();
  if (parallelCarIndex !== false) {
    var parallelCar = trafficList[parallelCarIndex];
    if (parallelCar.number_plate === '9S9870') {
      criminal = parallelCar;
    }
  }
}



function tailCriminal() 
{
  if (criminal) {
    investigator_vehicleObject.gas_amount *= 1.001;
    investigator_vehicleObject.gas_amount = min(investigator_vehicleObject.gas_amount, 6);
    var carAheadIndex = searchAhead(investigator_vehicleObject);
    if (carAheadIndex !== false && trafficList[carAheadIndex].number_plate === criminal.number_plate) {
      pullOverCriminal();
    } else if (carAheadIndex !== false) {
      swapLanes(investigator_vehicleObject);
    }
  }
}



function pullOverCriminal() 
{
  criminal.apprehended = true;
  investigator_vehicleObject.arresting_criminal = true;
  criminal.gas_amount = 0;
  investigator_vehicleObject.gas_amount = 0;
}



//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var investigator_vehicleObject;

var roadWidth;
var roadLeftEdge;
var LaneCoordA;
var LaneCoordB;
var carImages = {};
var criminal;

var trafficList = [
{ x_pos: 300, y_pos: 0, dist_amnt: -200, car_type: 'redCar', number_plate: 'KSK718', gas_amount: 2, exhaust: [  ]} , { x_pos: 300, y_pos: 0, dist_amnt: 200, car_type: 'greenCar', number_plate: 'GQUOF5', gas_amount: 2, exhaust: [  ]} , { x_pos: 500, y_pos: 0, dist_amnt: 600, car_type: 'blueCar', number_plate: 'LN77AK', gas_amount: 2, exhaust: [  ]} , { x_pos: 500, y_pos: 0, dist_amnt: 1000, car_type: 'blueCar', number_plate: '7CCTJW', gas_amount: 2, exhaust: [  ]} , { x_pos: 500, y_pos: 0, dist_amnt: 1400, car_type: 'greenCar', number_plate: 'QZQG9K', gas_amount: 2, exhaust: [  ]} , { x_pos: 300, y_pos: 0, dist_amnt: 1800, car_type: 'blueCar', number_plate: '8QTU4M', gas_amount: 2, exhaust: [  ]} , { x_pos: 300, y_pos: 0, dist_amnt: 2200, car_type: 'whiteCar', number_plate: '9S9870', gas_amount: 2, exhaust: [  ]} , { x_pos: 500, y_pos: 0, dist_amnt: 2600, car_type: 'redCar', number_plate: 'NJSR9I', gas_amount: 2, exhaust: [  ]} , { x_pos: 300, y_pos: 0, dist_amnt: 3000, car_type: 'redCar', number_plate: 'BT8BS3', gas_amount: 2, exhaust: [  ]} , { x_pos: 300, y_pos: 0, dist_amnt: 3400, car_type: 'blueCar', number_plate: 'HYI3QG', gas_amount: 2, exhaust: [  ]} , { x_pos: 300, y_pos: 0, dist_amnt: 3800, car_type: 'blueCar', number_plate: 'ECPUK4', gas_amount: 2, exhaust: [  ]} , { x_pos: 300, y_pos: 0, dist_amnt: 4200, car_type: 'whiteCar', number_plate: 'EZGHND', gas_amount: 2, exhaust: [  ]} , { x_pos: 500, y_pos: 0, dist_amnt: 4600, car_type: 'blueCar', number_plate: '19BXU7', gas_amount: 2, exhaust: [  ]} , { x_pos: 300, y_pos: 0, dist_amnt: 5000, car_type: 'blueCar', number_plate: '03QOG2', gas_amount: 2, exhaust: [  ]} , { x_pos: 500, y_pos: 0, dist_amnt: 5400, car_type: 'redCar', number_plate: 'U6Q40U', gas_amount: 2, exhaust: [  ]} , { x_pos: 300, y_pos: 0, dist_amnt: 5800, car_type: 'whiteCar', number_plate: '7VEZD3', gas_amount: 2, exhaust: [  ]} , { x_pos: 500, y_pos: 0, dist_amnt: 6200, car_type: 'redCar', number_plate: 'HM0QJJ', gas_amount: 2, exhaust: [  ]} , { x_pos: 500, y_pos: 0, dist_amnt: 6600, car_type: 'blueCar', number_plate: 'P7H9KT', gas_amount: 2, exhaust: [  ]} , { x_pos: 500, y_pos: 0, dist_amnt: 7000, car_type: 'greenCar', number_plate: '68D98I', gas_amount: 2, exhaust: [  ]} , { x_pos: 500, y_pos: 0, dist_amnt: 7400, car_type: 'redCar', number_plate: 'KKACEW', gas_amount: 2, exhaust: [  ]} 
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
	LaneCoordA = 300;
	LaneCoordB = 500;

	investigator_vehicleObject = 
	{
		x_pos: roadLeftEdge + roadWidth/4,
		y_pos: 550,
		dist_amnt: 0,
		gas_amount: 3,
		engineShudder_amount: 0,
		car_type: 'detective',
		number_plate: '5L3UTH',
		arresting_criminal: false,
		chasing_criminal: false,
		exhaust: []
	}


}



function draw()
{
	background(0);

	drawRoad();
	drawCars();

	if(criminal)
	{
		if(criminal.apprehended)
		{
			fill(255);

			text("criminal apprehended!", width/2, height/2);
		}

	}


	////////////////////// HANDLE DETECTIVE /////////////////////////

	if(!investigator_vehicleObject.chasing_criminal&& !investigator_vehicleObject.arresting_criminal)
	{
		driveVehicle();
		var b2b = searchAhead( investigator_vehicleObject );
		if(b2b)swapLanes(investigator_vehicleObject);
		identifyCriminal();
		if(criminal)investigator_vehicleObject.chasing_criminal = true;
	}
	else if(!investigator_vehicleObject.arresting_criminal)
	{
		tailCriminal();
		driveVehicle();
	}


	////////////////////// HANDLE ASSAILANT /////////////////////////

	if(criminal)
	{
		if(!criminal.apprehended)
		{
			criminal.gas_amount = 5;
			var b2b = searchAhead( criminal );
			if(b2b)
			{
				if(b2b.number_plate != criminal.number_plate)
				{
					swapLanes(criminal);
				}
			}
		}
	}


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < trafficList.length; i++)
	{
		trafficList[i].dist_amnt += trafficList[i].gas_amount;
		trafficList[i].y_pos = investigator_vehicleObject.y_pos - trafficList[i].dist_amnt + investigator_vehicleObject.dist_amnt;

		if(criminal)
		{
			if(criminal.apprehended)
			{
				if(trafficList[i].x_pos==investigator_vehicleObject.x_pos)
				{
					if(trafficList[i].dist_amnt<investigator_vehicleObject.dist_amnt)
					{
						if(trafficList[i].dist_amnt-investigator_vehicleObject.dist_amnt < 200)
						{
							swapLanes(trafficList[i]);
						}
					}
				}
			}
		}

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
		roadLeftEdge + roadWidth/2 , i * 100 + (investigator_vehicleObject.dist_amnt%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (investigator_vehicleObject.dist_amnt%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	drawExhaust(investigator_vehicleObject);
	image
	(
		carImages["detective"],
		investigator_vehicleObject.x_pos - carImages["detective"].width/2 + random(-investigator_vehicleObject.engineShudder_amount, investigator_vehicleObject.engineShudder_amount),
		investigator_vehicleObject.y_pos + random(-investigator_vehicleObject.engineShudder_amount, investigator_vehicleObject.engineShudder_amount)
	);

	//draw all other cars

	for(var i = 0; i < trafficList.length; i ++)
	{
		if(trafficList[i].y_pos < height && trafficList[i].y_pos > -height/2)
		{
			image(
			carImages[trafficList[i].car_type],
			trafficList[i].x_pos - carImages[trafficList[i].car_type].width/2,
			trafficList[i].y_pos
			);
			turnoverCar_engine(trafficList[i]);

			drawExhaust(trafficList[i]);
		}
	}

}

function turnoverCar_engine(car)
{

	car.exhaust.push({size: 2, x: car.x_pos, y: car.y_pos + carImages[car.car_type].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.gas_amount/3);
		if(car.car_type != "detective")car.exhaust[i].y += (investigator_vehicleObject.gas_amount - car.gas_amount);
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
