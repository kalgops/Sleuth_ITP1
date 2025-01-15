/*
Officer: 8648005
CaseNum: 601-2-71338414-8648005

Case 601 - Murdering Again - stage 3

Now murders are beginning to occur - we're pretty sure that this is the work of Fry.
If we can place her near any of the recent crime scenes in the area we should be able narrow down her location.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing LawnGreen stroke vertexes at each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, DeepSkyBlue fill ellipses at each location.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

Let's try to catch Fry by looking patterns between sightings and crimes. If she was within less than 55 pixels of any of the crimes then the details should be pushed to possible matches with the following format.

{ suspect_x: 0, suspect_y: 0 ,crime_x: 0, crime_y: 0, victimName: "John_Doe" }

Note that the possible matches are already being drawn. Your job is simply to fill the array with the correct data.

For this mission you will need ONLY the following:

- for loop
- dist()
- if()
- <
- .push()
- beginShape(), endShape(), vertex()

- ellipse()

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var Criminal_Sightings_PosX = [639, 681, 712, 756, 715, 701, 753, 815, 795, 788, 781, 768, 750, 732, 714, 695, 693, 654, 624, 594, 555];
var Criminal_Sightings_PosY = [288, 286, 293, 310, 368, 425, 436, 468, 506, 497, 486, 489, 500, 506, 514, 531, 552, 523, 500, 484, 474];


//Recent crime records.

var Attack_Data = {
	coordX: [409, 443, 465, 709, 695, 652, 641, 119, 114, 90, 76, 615, 349, 456],
	coordY: [446, 419, 548, 552, 421, 268, 306, 344, 359, 490, 516, 741, 796, 770],
	victimDetails: ['GAYLA WILLMAR', 'LAKESHA SYMMES', 'NELSON TINTLE', 'LIANNE COURTWOOD', 'SUMMER CASIMERE', 'MALINDA GOODBURY', 'NICOLE ASHELY', 'JULIANA ADVERSANE', 'BRAD SILVEIRA', 'KITTY THAXTER', 'TAMICA MAUBERT', 'DARBY MYRLE', 'JESSIA PORTOS', 'RANDEE CROME'],
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

  // Draw LawnGreen stroke vertexes at each sighting location
  stroke(124, 252, 0); // LawnGreen color for stroke
  strokeWeight(5);
  beginShape();
  for (let i = 0; i < Criminal_Sightings_PosX.length; i++) {
    vertex(Criminal_Sightings_PosX[i], Criminal_Sightings_PosY[i]);
  }
  endShape();

  for (let i = 0; i < Attack_Data.coordX.length; i++) {
    // Draw DeepSkyBlue fill ellipses at each crime location
    fill(0, 191, 255); // DeepSkyBlue color for fill
    noStroke();
    ellipse(Attack_Data.coordX[i], Attack_Data.coordY[i], 10, 10);

    // Check if Casey Fry was near the crime scene
    for (let j = 0; j < Criminal_Sightings_PosX.length; j++) {
      let distance = dist(Criminal_Sightings_PosX[j], Criminal_Sightings_PosY[j], Attack_Data.coordX[i], Attack_Data.coordY[i]);
      if (distance < 55) {
        // Push the details to possibleMatches array
        possibleMatches.push({
          suspect_x: Criminal_Sightings_PosX[j],
          suspect_y: Criminal_Sightings_PosY[j],
          crime_x: Attack_Data.coordX[i],
          crime_y: Attack_Data.coordY[i],
          victimName: Attack_Data.victimDetails[i],
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


