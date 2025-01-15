/*

Officer: 8648005
CaseNum: 501-2-23746308-8648005

Case 501 - Marrieta Von Neuman - stage 3

For Marrieta a different approach is needed again.
Follow Madame McCarthy’s advice below.

Marrieta was a doting mother but she was also a mean player of dice.
To speak to Marrieta beyond the grave, you must place a dice in each of the dashed circles.
Use the image() and the diceImage variable command to place each dice in its position.
You will need to use two for loops in a nested pattern to create the grid.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

 * for()
 * image()

*/

var backgroundImg, diceImage;

function preload() {
    backgroundImg = loadImage("background.jpg");
    diceImage = loadImage("Dice.png");
}

function setup() {
    createCanvas(backgroundImg.width, backgroundImg.height);
    image(backgroundImg, 0, 0);

    imageMode(CENTER);
}

function draw() {
    // add your for loop below

     imageMode(CENTER);
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 5; j++) {
            image(diceImage, 546 + i * 74, 310 + j * 63);
        }
    }
}
