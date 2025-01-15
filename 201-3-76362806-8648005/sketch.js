/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 8648005
CaseNum: 201-3-76362806-8648005

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...

HINT: You should only need around 20 vertices to draw round the judge. Make sure you close your shape!

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  beginShape()
  endShape()
  vertex()

*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to draw around the Judge's body below
    beginShape();
    vertex(535,452);
    vertex(391,472);
    vertex(379,341);
    vertex(316,315);
    vertex(284,267);
    vertex(266,241);
    vertex(224,182);
    vertex(226,152);
    vertex(256,113);
    vertex(299,88);
    vertex(385,93);
    vertex(419,165);
    vertex(449,194);
    vertex(471,228);
    vertex(520,259);
    vertex(609,175);
    vertex(648,177);
    vertex(664,238);
    vertex(645,323);
    vertex(535,452);
    endShape();
    


    //A helpful mouse pointer
	push();
        fill(0);
        noStroke();
        text(mouseX + "," + mouseY, mouseX,mouseY);
    pop();

}
