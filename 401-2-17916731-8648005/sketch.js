/*

Officer: 8648005
CaseNum: 401-2-17916731-8648005

Case 401 - The Case of Norbert's Weiner Stand
Stage 3 - Bilious bagel

As I suspected Norbert has struck again. Ever inventive he’s set up a bagel stand and has laced the cream cheese with an ingenious but vicious toxin. This one is quite deadly so get yourself down to the lab right away.

You must develop the antidote by using conditional statements in the draw loop to do the following.

	- When strychnine goes above 0.48 or chlorine dips below 0.47, decrease CalciumChloride by 0.04
	- If either arsenic goes above 0.64, methanol dips below 0.75, or perhaps Snake_Venom goes above 0.56, raise CalciumChloride by 0.03
	- When Snake_Venom goes above 0.74 or arsenic goes above 0.55, reduce antivenom by 0.03
	- When methanol dips below 0.42 and strychnine goes above 0.41, increment antivenom by 0.01
	- If either methanol goes above 0.72, chlorine goes above 0.49, or perhaps arsenic goes above 0.3, decrease SodiumBicarbonate by 0.05
	- When novichok goes above 0.48 or Snake_Venom dips below 0.36, try increasing SodiumBicarbonate by 0.01
	- When Snake_Venom dips below 0.28 and chlorine goes above 0.3, reduce calcium_gluconate by 0.02
	- If novichok dips below 0.34, or on the other hand, arsenic goes above 0.63 and methanol goes above 0.41, increment calcium_gluconate by 0.04


Your conditional statements should consider the following poisons:

	- Snake_Venom
	- arsenic
	- novichok
	- chlorine
	- strychnine
	- methanol


Your conditional statements should modify the following antidotes:

	- CalciumChloride
	- antivenom
	- SodiumBicarbonate
	- calcium_gluconate


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
var Snake_Venom;
var arsenic;
var novichok;
var chlorine;
var strychnine;
var methanol;


//Declare the antidote variables
var CalciumChloride;
var antivenom;
var SodiumBicarbonate;
var calcium_gluconate;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	Snake_Venom = 0.5;
	arsenic = 0.5;
	novichok = 0.5;
	chlorine = 0.5;
	strychnine = 0.5;
	methanol = 0.5;
	CalciumChloride = 0.5;
	antivenom = 0.5;
	SodiumBicarbonate = 0.5;
	calcium_gluconate = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 6; i++)
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


    // When strychnine goes above 0.48 or chlorine dips below 0.47, decrease CalciumChloride by 0.04
if (strychnine > 0.48 || chlorine < 0.47) {
  CalciumChloride -= 0.04;
}

// If either arsenic goes above 0.64, methanol dips below 0.75, or Snake_Venom goes above 0.56, raise CalciumChloride by 0.03
if (arsenic > 0.64 || methanol < 0.75 || Snake_Venom > 0.56) {
  CalciumChloride += 0.03;
}

// When Snake_Venom goes above 0.74 or arsenic goes above 0.55, reduce antivenom by 0.03
if (Snake_Venom > 0.74 || arsenic > 0.55) {
  antivenom -= 0.03;
}

// When methanol dips below 0.42 and strychnine goes above 0.41, increment antivenom by 0.01
if (methanol < 0.42 && strychnine > 0.41) {
  antivenom += 0.01;
}

// If either methanol goes above 0.72, chlorine goes above 0.49, or arsenic goes above 0.3, decrease SodiumBicarbonate by 0.05
if (methanol > 0.72 || chlorine > 0.49 || arsenic > 0.3) {
  SodiumBicarbonate -= 0.05;
}

// When novichok goes above 0.48 or Snake_Venom dips below 0.36, try increasing SodiumBicarbonate by 0.01
if (novichok > 0.48 || Snake_Venom < 0.36) {
  SodiumBicarbonate += 0.01;
}

// When Snake_Venom dips below 0.28 and chlorine goes above 0.3, reduce calcium_gluconate by 0.02
if (Snake_Venom < 0.28 && chlorine > 0.3) {
  calcium_gluconate -= 0.02;
}

// If novichok dips below 0.34, or on the other hand, arsenic goes above 0.63 and methanol goes above 0.41, increment calcium_gluconate by 0.04
if (novichok < 0.34 || (arsenic > 0.63 && methanol > 0.41)) {
  calcium_gluconate += 0.04;
}

	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	Snake_Venom = nextValue(graphs[0],Snake_Venom);
	arsenic = nextValue(graphs[1],arsenic);
	novichok = nextValue(graphs[2],novichok);
	chlorine = nextValue(graphs[3],chlorine);
	strychnine = nextValue(graphs[4],strychnine);
	methanol = nextValue(graphs[5],methanol);


	CalciumChloride = constrain(CalciumChloride, 0, 1);
	antivenom = constrain(antivenom, 0, 1);
	SodiumBicarbonate = constrain(SodiumBicarbonate, 0, 1);
	calcium_gluconate = constrain(calcium_gluconate, 0, 1);


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
	color(0, 255, 255)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('Snake_Venom: ' + nf(Snake_Venom,1,2), 20,20);
	fill(colors[1]);
	text('arsenic: ' + nf(arsenic,1,2), 20,40);
	fill(colors[2]);
	text('novichok: ' + nf(novichok,1,2), 20,60);
	fill(colors[3]);
	text('chlorine: ' + nf(chlorine,1,2), 20,80);
	fill(colors[4]);
	text('strychnine: ' + nf(strychnine,1,2), 20,100);
	fill(colors[5]);
	text('methanol: ' + nf(methanol,1,2), 20,120);


	//draw the antidotes bar chart
	drawBar(CalciumChloride,50,'CalciumChloride');
	drawBar(antivenom,200,'antivenom');
	drawBar(SodiumBicarbonate,350,'SodiumBicarbonate');
	drawBar(calcium_gluconate,500,'calcium_gluconate');


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
