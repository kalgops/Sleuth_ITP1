/*

Officer: 8648005
CaseNum: 501-3-78101811-8648005

Case 501 - John Von Neuman - stage 4

This is our last chance to catch that killer kid.
Let's hope that John Von Neuman can identify the killer.
To speak to him follow Madame McCarthy’s advice below.

John was ever the keen chess player. Many an hour was spent considering his next move.
To speak to John beyond the grave you must place a chess piece in each of the dashed circles.
Use the image() and the chessPieceImg variable command to place the pieces in their positions.
Do this by using two for loops in a nested pattern.
You will need to use some conditional statements in order to position each row to match the pattern.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

 * for()
 * image()
 * if()

*/

var backgroundImg, chessPieceImg;

function preload() {
    backgroundImg = loadImage("background.jpg");
    chessPieceImg = loadImage("Piece.png");
}

function setup() {
    createCanvas(backgroundImg.width, backgroundImg.height);
    image(backgroundImg, 0, 0);
    imageMode(CENTER);
}

function draw() {
    // add your for loop below
    imageMode(CENTER);
    for (let i = 0; i < 11; i++) {
        for (let j = 0; j < 4; j++) {
            let x, y;
            if (j % 2 === 0) {
                x = 498 + i * 62 + j * 1;
                y = 380 + j * 75;
            } else {
                x = 560 + i * 62 + j * 1;
                y = 380 + j * 75;
            }
            image(chessPieceImg, x, y);
        }
    }
}
