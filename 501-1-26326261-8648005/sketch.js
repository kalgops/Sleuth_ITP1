/*

Officer: 8648005
CaseNum: 501-1-26326261-8648005

Case 501 - Max Von Neuman - stage 2

Madame McCarthy says that to summon Max Von Neuman a different approach is needed.
Follow her advice below.

How young Max loved to march with his toy soldiers.
To speak to Max beyond the grave you must place a toy soldier in each of the dashed circles.
Use the image() and the itemImage variable command to place each soldier in its position.
You will need to use a separate for loop for each of the diagonal lines.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

 * for()
 * image()

*/

var backgroundImg, itemImage;

function preload() {
    backgroundImg = loadImage("background.jpg");
    itemImage = loadImage("Soldier.png");
}

function setup() {
    createCanvas(backgroundImg.width, backgroundImg.height);
    image(backgroundImg, 0, 0);

    imageMode(CENTER);
}

function draw() {
    // add your for loop below

    // First diagonal line
    for (let i = 0; i < 14; i++) {
        image(itemImage, 720 + i * 43, 680 + i * -15);
    }

    // Second diagonal line
    for (let i = 0; i < 8; i++) {
        image(itemImage, 745 + i * 34, 450 + i * 26);
    }
}

