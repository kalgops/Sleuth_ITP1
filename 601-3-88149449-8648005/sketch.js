/*
Officer: 8648005
CaseNum: 601-3-88149449-8648005

Case 601 - Narrowing in - stage 4

Casey Fry is on a killing spree and we still haven’t caught her.
We need a more sophisticated approach.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, DarkGoldenrod stroke triangles centered over each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, Green stroke ellipses at each location.

This time we will catch Fry by comparing both distance from the crimes and dates of sightings. If she was within less than 64 pixels of any of the crimes within no more than 1 days of their occurrence then the details should be pushed to the list of possible matches with the following format.

{ suspect_x: 0, suspect_y: 0 ,crime_x: 0, crime_y: 0, victimName: "John_Doe" }

Note that the possible matches are already being drawn.
Your job is to fill the array with the correct data.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

For this mission you will need ONLY the following:

- for loop
- if()
- <
- &&
- .push()
- dist()
- abs()
- triangle() NB. Draw each triangle with the point roughly at its center.

- ellipse()

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var fugitiveData = {
	position_x: [518, 486, 475, 376, 316, 265, 253, 240, 220, 178, 199, 146, 115, 67, 39, 68],
	position_y: [471, 508, 566, 554, 559, 614, 609, 604, 597, 600, 604, 582, 551, 495, 493, 461],
	date: [12, 12, 13, 13, 13, 14, 14, 14, 15, 15, 17, 18, 20, 21, 22, 24],
};

//Recent crime records.

var murdersceneLog = {
	coord_x: [438, 408, 408, 642, 623, 95, 75, 269, 389, 484, 496, 546, 538, 702, 817],
	coord_y: [420, 451, 377, 289, 279, 488, 522, 597, 554, 549, 484, 463, 359, 412, 474],
	date: [11, 11, 13, 16, 16, 17, 18, 26, 28, 2, 9, 14, 12, 17, 18],
	murdered_name: ['TAMICA MAUBERT', 'JULIANA ADVERSANE', 'KITTY THAXTER', 'JENIFFER DEAUVILLE', 'BRAD SILVEIRA', 'LAKESHA SYMMES', 'NICOLE ASHELY', 'HANG NIEMELA', 'DEEDEE PHINNEY', 'GAYLA WILLMAR', 'DARBY MYRLE', 'JESUS FORSLIN', 'PIERRE DORCEY', 'MAJORIE JENI', 'JAUNITA JOYER'],
};

function preload()
{
	countyMap = loadImage("map.png")
}

function setup() {
  createCanvas(countyMap.width, countyMap.height);
  noFill();
  noStroke();
  image(countyMap, 0, 0);

  // Draw DarkGoldenrod stroke triangles at each sighting location
  stroke(184, 134, 11); // DarkGoldenrod color for stroke
  strokeWeight(5);
  for (let i = 0; i < fugitiveData.position_x.length; i++) {
    triangle(
      fugitiveData.position_x[i] - 5,
      fugitiveData.position_y[i] + 5,
      fugitiveData.position_x[i],
      fugitiveData.position_y[i] - 5,
      fugitiveData.position_x[i] + 5,
      fugitiveData.position_y[i] + 5
    );
  }

  for (let i = 0; i < murdersceneLog.coord_x.length; i++) {
    // Draw Green stroke ellipses at each crime location
    stroke(0, 128, 0); // Green color for stroke
    strokeWeight(2);
    ellipse(murdersceneLog.coord_x[i], murdersceneLog.coord_y[i], 10, 10);

    // Check if Casey Fry was near the crime scene within 1 day
    for (let j = 0; j < fugitiveData.position_x.length; j++) {
      let distance = dist(
        fugitiveData.position_x[j],
        fugitiveData.position_y[j],
        murdersceneLog.coord_x[i],
        murdersceneLog.coord_y[i]
      );
      let daysApart = abs(fugitiveData.date[j] - murdersceneLog.date[i]);
      if (distance < 64 && daysApart <= 1) {
        // Push the details to possibleMatches array
        possibleMatches.push({
          suspect_x: fugitiveData.position_x[j],
          suspect_y: fugitiveData.position_y[j],
          crime_x: murdersceneLog.coord_x[i],
          crime_y: murdersceneLog.coord_y[i],
          victimName: murdersceneLog.murdered_name[i],
        });
      }
    }
  }

  // Draw the matches (if any)
  for (let i = 0; i < possibleMatches.length; i++) {
    stroke(127);
    strokeWeight(3);
    line(possibleMatches[i].crime_x, possibleMatches[i].crime_y, possibleMatches[i].suspect_x, possibleMatches[i].suspect_y);

    noStroke();
    fill(127);
    text(possibleMatches[i].victimName, possibleMatches[i].crime_x + 15, possibleMatches[i].crime_y + 15);
  }
}
