/*
Officer: 8648005
CaseNum: 601-0-50980030-8648005

Case 601 - Escaped - stage 1

We've got an emergency here. The notorious killer Casey Fry has escaped from the Federal Correctional Institution.
She is on the loose and we have been asked to track her movements.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, Crimson stroke triangles centered over each location.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

For this mission you will need ONLY the following:

- for loop
- triangle() NB. Draw each triangle with the point roughly at its center.

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

//Sightings of Casey Fry.

var CriminalRecord_CoordX = [127, 156, 179, 200, 220, 228, 249, 269, 292, 321, 354, 390, 396, 429, 456, 467, 483, 531, 547, 571, 589, 637];
var CriminalRecord_CoordY = [175, 158, 192, 154, 133, 168, 149, 139, 168, 133, 159, 144, 225, 228, 230, 277, 267, 291, 278, 274, 318, 280];


function preload()
{
	countyMap = loadImage("map.png")
}

function setup() {
  createCanvas(countyMap.width, countyMap.height);
  noFill();
  stroke(220, 20, 60); // Crimson color

  image(countyMap, 0, 0);

  // Traverse the sightings and draw Crimson stroke triangles at each location
  for (let i = 0; i < CriminalRecord_CoordX.length; i++) {
    // Triangle dimensions and coordinates
    let triangleSize = 10;
    let x = CriminalRecord_CoordX[i];
    let y = CriminalRecord_CoordY[i];

    // Draw a triangle centered at each location
    triangle(x - triangleSize / 2, y + triangleSize / 2, x, y - triangleSize / 2, x + triangleSize / 2, y + triangleSize / 2);
  }
}



//We are not using the draw function this time
