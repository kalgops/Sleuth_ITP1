/*
Officer: 8648005
CaseNum: 601-1-84593244-8648005

Case 601 - Cross Reference - stage 2

Fry is still on the loose. We think she’s resorted to stealing to get by.
Hopefully we can track her down by cross-referencing sightings and recent thefts in the area.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, Turquoise stroke rectangles centered over each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, Olive fill triangles centered over each location.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

For this mission you will need ONLY the following:

- for loop
- rect() NB. Draw each rectangle with the point at its center.rectMode(CENTER) is not accepted

- triangle() NB. Draw each triangle with the point roughly at its center.

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

//Sightings of Casey Fry.

var casey_data = {
	pos_x: [639, 681, 712, 756, 715, 701, 753, 815, 795, 788, 781, 768, 750, 732, 714, 695, 693, 654, 624, 594, 555],
	pos_y: [288, 286, 293, 310, 368, 425, 436, 468, 506, 497, 486, 489, 500, 506, 514, 531, 552, 523, 500, 484, 474],
};

//Recent crime records.

var incident_logbook = [ 
  { point_x : 403, point_y : 401},
  { point_x : 402, point_y : 360},
  { point_x : 427, point_y : 403},
  { point_x : 646, point_y : 284},
  { point_x : 639, point_y : 264},
  { point_x : 830, point_y : 434},
  { point_x : 809, point_y : 443},
  { point_x : 844, point_y : 496},
  { point_x : 802, point_y : 350},
  { point_x : 683, point_y : 413},
  { point_x : 552, point_y : 464},
  { point_x : 629, point_y : 498},
  { point_x : 712, point_y : 562},
  { point_x : 783, point_y : 603},
  { point_x : 415, point_y : 225},
  { point_x : 561, point_y : 282},
  { point_x : 562, point_y : 392},
  { point_x : 751, point_y : 283},
  { point_x : 680, point_y : 359},
  { point_x : 626, point_y : 436},
  { point_x : 701, point_y : 455},
  { point_x : 838, point_y : 565},
  { point_x : 322, point_y : 508},
  { point_x : 468, point_y : 556},
  { point_x : 625, point_y : 737} 
];


function preload()
{
	countyMap = loadImage("map.png")
}

function setup() {
  createCanvas(countyMap.width, countyMap.height);
  noFill();
  noStroke();

  image(countyMap, 0, 0);

  // Traverse the sightings and draw small Turquoise stroke rectangles at each location
  stroke(64, 224, 208); // Turquoise color for stroke
  for (let i = 0; i < casey_data.pos_x.length; i++) {
    // Rectangle dimensions and coordinates
    let rectSize = 5;
    let x = casey_data.pos_x[i];
    let y = casey_data.pos_y[i];

    // Draw a rectangle centered at each location
    rect(x, y, rectSize, rectSize);
  }

  // Traverse the recent crime records and draw small Olive fill triangles at each location
  fill(128, 128, 0); // Olive color for fill
  for (let i = 0; i < incident_logbook.length; i++) {
    // Triangle dimensions and coordinates
    let triangleSize = 8;
    let x = incident_logbook[i].point_x;
    let y = incident_logbook[i].point_y;

    // Draw a triangle centered at each location
    noStroke(); // Ensure no stroke for the triangles
    triangle(x - triangleSize / 2, y + triangleSize / 2, x, y - triangleSize / 2, x + triangleSize / 2, y + triangleSize / 2);
  }
}
