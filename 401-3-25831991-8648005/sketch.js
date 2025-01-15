/*

Officer: 8648005
CaseNum: 401-3-25831991-8648005

Case 401 - The Case of Norbert's Weiner Stand
Stage 4 - Mortal Cupcake

It seems that Norbert is getting desperate now. In what appears to be his final stand he has set up his own cupcake shop. The laced cupcakes look delicious but they are extremely dangerous. Just a brief whiff of one can induce a series of
deadly symptoms. This is Norbert’s most complex poison to date, so you’ll have to work hard to produce a viable antidote.

You must develop the antidote by using conditional statements in the draw loop to do the following.

	- If hemlock dips below 0.65 and snakeVenom dips below 0.39, whilst at the same time, cyanide goes above 0.67 or sarin goes above 0.5, decrement opioids by 0.02
	- When amanita_mushrooms dips below 0.7 or arsenic goes above 0.68, whilst at the same time, chlorine dips below 0.61, raise opioids by 0.03
	- When cyanide goes above 0.4, amanita_mushrooms dips below 0.6, and also arsenic goes above 0.3, decrement antivenom by 0.05
	- When insecticide goes above 0.71 or sarin dips below 0.62, whilst at the same time, chlorine goes above 0.38, increment antivenom by 0.03
	- If either insecticide goes above 0.56, chlorine goes above 0.66, or perhaps amanita_mushrooms dips below 0.39, decrease glucagon by 0.04
	- When snakeVenom dips below 0.47 and arsenic goes above 0.71, or on the other hand, cyanide goes above 0.68 or hemlock goes above 0.32, increase glucagon by 0.03
	- When either chlorine goes above 0.59, sarin goes above 0.61, arsenic goes above 0.41, or perhaps amanita_mushrooms goes above 0.28, decrement plasma by 0.05
	- If hemlock dips below 0.35 or snakeVenom goes above 0.73, or on the other hand, cyanide dips below 0.3 and insecticide goes above 0.39, increment plasma by 0.03
	- If either hemlock dips below 0.7, insecticide dips below 0.64, or perhaps arsenic goes above 0.35, decrement antitoxin by 0.04
	- When chlorine goes above 0.51 or snakeVenom dips below 0.41, or on the other hand, cyanide goes above 0.6 and amanita_mushrooms goes above 0.67, increase antitoxin by 0.01


Your conditional statements should consider the following poisons:

	- insecticide
	- sarin
	- snakeVenom
	- amanita_mushrooms
	- hemlock
	- chlorine
	- arsenic
	- cyanide


Your conditional statements should modify the following antidotes:

	- opioids
	- antivenom
	- glucagon
	- plasma
	- antitoxin


- There are many ways to complete this task but you should only use the following commands:

	if(){}
	>
	<
	&&
	||
	+=
	-=

*/

//Declare the poison variables
var insecticide;
var sarin;
var snakeVenom;
var amanita_mushrooms;
var hemlock;
var chlorine;
var arsenic;
var cyanide;


//Declare the antidote variables
var opioids;
var antivenom;
var glucagon;
var plasma;
var antitoxin;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	insecticide = 0.5;
	sarin = 0.5;
	snakeVenom = 0.5;
	amanita_mushrooms = 0.5;
	hemlock = 0.5;
	chlorine = 0.5;
	arsenic = 0.5;
	cyanide = 0.5;
	opioids = 0.5;
	antivenom = 0.5;
	glucagon = 0.5;
	plasma = 0.5;
	antitoxin = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 8; i++)
	{
		graphs.push([]);
		for(var j = 0; j < 512; j++)
		{
			graphs[i].push(0.5);
		}
	}

}

function draw()
{

	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...
    
    // If hemlock dips below 0.65 and snakeVenom dips below 0.39, whilst at the same time, cyanide goes above 0.67 or sarin goes above 0.5, decrement opioids by 0.02
if (hemlock < 0.65 && snakeVenom < 0.39 && (cyanide > 0.67 || sarin > 0.5)) {
  opioids -= 0.02;
}

// When amanita_mushrooms dips below 0.7 or arsenic goes above 0.68, whilst at the same time, chlorine dips below 0.61, raise opioids by 0.03
if ((amanita_mushrooms < 0.7 || arsenic > 0.68) && chlorine < 0.61) {
  opioids += 0.03;
}

// When cyanide goes above 0.4, amanita_mushrooms dips below 0.6, and also arsenic goes above 0.3, decrement antivenom by 0.05
if (cyanide > 0.4 && amanita_mushrooms < 0.6 && arsenic > 0.3) {
  antivenom -= 0.05;
}

// When insecticide goes above 0.71 or sarin dips below 0.62, whilst at the same time, chlorine goes above 0.38, increment antivenom by 0.03
if ((insecticide > 0.71 || sarin < 0.62) && chlorine > 0.38) {
  antivenom += 0.03;
}

// If either insecticide goes above 0.56, chlorine goes above 0.66, or perhaps amanita_mushrooms dips below 0.39, decrease glucagon by 0.04
if (insecticide > 0.56 || chlorine > 0.66 || amanita_mushrooms < 0.39) {
  glucagon -= 0.04;
}

// When snakeVenom dips below 0.47 and arsenic goes above 0.71, or on the other hand, cyanide goes above 0.68 or hemlock goes above 0.32, increase glucagon by 0.03
if ((snakeVenom < 0.47 && arsenic > 0.71) || (cyanide > 0.68 || hemlock > 0.32)) {
  glucagon += 0.03;
}

// When either chlorine goes above 0.59, sarin goes above 0.61, arsenic goes above 0.41, or perhaps amanita_mushrooms goes above 0.28, decrement plasma by 0.05
if (chlorine > 0.59 || sarin > 0.61 || arsenic > 0.41 || amanita_mushrooms > 0.28) {
  plasma -= 0.05;
}

// If hemlock dips below 0.35 or snakeVenom goes above 0.73, or on the other hand, cyanide dips below 0.3 and insecticide goes above 0.39, increment plasma by 0.03
if ((hemlock < 0.35 || snakeVenom > 0.73) || (cyanide < 0.3 && insecticide > 0.39)) {
  plasma += 0.03;
}

// If either hemlock dips below 0.7, insecticide dips below 0.64, or perhaps arsenic goes above 0.35, decrement antitoxin by 0.04
if (hemlock < 0.7 || insecticide < 0.64 || arsenic > 0.35) {
  antitoxin -= 0.04;
}

// When chlorine goes above 0.51 or snakeVenom dips below 0.41, or on the other hand, cyanide goes above 0.6 and amanita_mushrooms goes above 0.67, increase antitoxin by 0.01
if ((chlorine > 0.51 || snakeVenom < 0.41) || (cyanide > 0.6 && amanita_mushrooms > 0.67)) {
  antitoxin += 0.01;
}
    




	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	insecticide = nextValue(graphs[0],insecticide);
	sarin = nextValue(graphs[1],sarin);
	snakeVenom = nextValue(graphs[2],snakeVenom);
	amanita_mushrooms = nextValue(graphs[3],amanita_mushrooms);
	hemlock = nextValue(graphs[4],hemlock);
	chlorine = nextValue(graphs[5],chlorine);
	arsenic = nextValue(graphs[6],arsenic);
	cyanide = nextValue(graphs[7],cyanide);


	opioids = constrain(opioids, 0, 1);
	antivenom = constrain(antivenom, 0, 1);
	glucagon = constrain(glucagon, 0, 1);
	plasma = constrain(plasma, 0, 1);
	antitoxin = constrain(antitoxin, 0, 1);


	///////// DO NOT CHANGE THE CODE BELOW ///////////

	//drawing code

	// set background
	background(0);
	noFill();

	//draw the graphs for the vitals

	var colors = [
		color(255, 0, 0),
		color(0, 255, 0),
		color(0, 0, 255),
		color(255, 0, 255),
		color(255, 255, 0),
		color(0, 255, 255),
		color(255, 100, 100),
		color(255, 100, 0)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('insecticide: ' + nf(insecticide,1,2), 20,20);
	fill(colors[1]);
	text('sarin: ' + nf(sarin,1,2), 20,40);
	fill(colors[2]);
	text('snakeVenom: ' + nf(snakeVenom,1,2), 20,60);
	fill(colors[3]);
	text('amanita_mushrooms: ' + nf(amanita_mushrooms,1,2), 20,80);
	fill(colors[4]);
	text('hemlock: ' + nf(hemlock,1,2), 20,100);
	fill(colors[5]);
	text('chlorine: ' + nf(chlorine,1,2), 20,120);
	fill(colors[6]);
	text('arsenic: ' + nf(arsenic,1,2), 20,140);
	fill(colors[7]);
	text('cyanide: ' + nf(cyanide,1,2), 20,160);


	//draw the antidotes bar chart
	drawBar(opioids,50,'opioids');
	drawBar(antivenom,200,'antivenom');
	drawBar(glucagon,350,'glucagon');
	drawBar(plasma,500,'plasma');
	drawBar(antitoxin,650,'antitoxin');


}

function nextValue(graph, val)
{
	//gets the next value for a vital and puts it in an array for drawing
	var delta = random(-0.03,0.03);

	val += delta;
	if(val > 1 || val < 0)
	{
		delta *= -1;
		val += delta * 2;
	}

	graph.push(val)
	graph.shift();
	return val;
}

function drawGraph(graph)
{
	//draws an array as a graph
	beginShape();
	for(var i = 0; i < graph.length; i++)
	{
			vertex(width * i/512, height * 0.5 - graph[i]* height/3)
	}
	endShape();
}


function drawBar(val, x, name)
{
	//draws the bars for bar chart
    noStroke();
    fill(0,100,100);
	var mh = height * 0.4 - 50;
	rect(x,(height - 50) - val*mh, 100, val*mh);
    fill(255);
	text(name + ": " + val, x, height - 20);
}
