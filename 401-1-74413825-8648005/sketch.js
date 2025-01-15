/*

Officer: 8648005
CaseNum: 401-1-74413825-8648005

Case 401 - The Case of Norbert's Weiner Stand
Stage 2 - Toxic Burrito

Norbert is at it again. This time he’s set up a burrito stall and is lacing burritos with his foul toxin. The chaos is spreading. People are dropping like flies and burrito sales have fallen through the floor. To make matters worse it seems Norbert has cottoned on to our methods and has upped the complexity of his poison. You’ll find the antidote harder to develop this time. So kid, head down to the lab and get working.

You must develop the antidote by using conditional statements in the draw loop to do the following:

	- If ricin goes above 0.34, reduce glucagon by 0.05
	- When botulinium goes above 0.37, raise glucagon by 0.05
	- When ricin goes above 0.42 or cyanide dips below 0.71, decrement plasma by 0.02
	- If lead goes above 0.31, increase plasma by 0.03
	- If lead dips below 0.54, try decreasing CalciumChloride by 0.01
	- When botulinium dips below 0.35, increase CalciumChloride by 0.02
	- If cyanide goes above 0.4 or botulinium goes above 0.57, reduce Beta_Blocker by 0.02
	- If ricin goes above 0.48 and lead goes above 0.44, increase Beta_Blocker by 0.04


Your conditional statements should consider the following poisons:

	- ricin
	- lead
	- cyanide
	- botulinium


Your conditional statements should modify the following antidotes:

	- glucagon
	- plasma
	- CalciumChloride
	- Beta_Blocker


- There are many ways to complete this task but you should only use the following commands and operators:

	if(){}
	>
	<
	&&
	||
	+=
	-=

*/

//Declare the poison variables
var ricin;
var lead;
var cyanide;
var botulinium;


//Declare the antidote variables
var glucagon;
var plasma;
var CalciumChloride;
var Beta_Blocker;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	ricin = 0.5;
	lead = 0.5;
	cyanide = 0.5;
	botulinium = 0.5;
	glucagon = 0.5;
	plasma = 0.5;
	CalciumChloride = 0.5;
	Beta_Blocker = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 4; i++)
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
      
      // If ricin goes above 0.34, reduce glucagon by 0.05
if (ricin > 0.34) {
  glucagon -= 0.05;
}

// When botulinium goes above 0.37, raise glucagon by 0.05
if (botulinium > 0.37) {
  glucagon += 0.05;
}

// When ricin goes above 0.42 or cyanide dips below 0.71, decrement plasma by 0.02
if (ricin > 0.42 || cyanide < 0.71) {
  plasma -= 0.02;
}

// If lead goes above 0.31, increase plasma by 0.03
if (lead > 0.31) {
  plasma += 0.03;
}

// If lead dips below 0.54, try decreasing CalciumChloride by 0.01
if (lead < 0.54) {
  CalciumChloride -= 0.01;
}

// When botulinium dips below 0.35, increase CalciumChloride by 0.02
if (botulinium < 0.35) {
  CalciumChloride += 0.02;
}

// If cyanide goes above 0.4 or botulinium goes above 0.57, reduce Beta_Blocker by 0.02
if (cyanide > 0.4 || botulinium > 0.57) {
  Beta_Blocker -= 0.02;
}

// If ricin goes above 0.48 and lead goes above 0.44, increase Beta_Blocker by 0.04
if (ricin > 0.48 && lead > 0.44) {
  Beta_Blocker += 0.04;
}



	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	ricin = nextValue(graphs[0],ricin);
	lead = nextValue(graphs[1],lead);
	cyanide = nextValue(graphs[2],cyanide);
	botulinium = nextValue(graphs[3],botulinium);


	glucagon = constrain(glucagon, 0, 1);
	plasma = constrain(plasma, 0, 1);
	CalciumChloride = constrain(CalciumChloride, 0, 1);
	Beta_Blocker = constrain(Beta_Blocker, 0, 1);


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
	text('ricin: ' + nf(ricin,1,2), 20,20);
	fill(colors[1]);
	text('lead: ' + nf(lead,1,2), 20,40);
	fill(colors[2]);
	text('cyanide: ' + nf(cyanide,1,2), 20,60);
	fill(colors[3]);
	text('botulinium: ' + nf(botulinium,1,2), 20,80);


	//draw the antidotes bar chart
	drawBar(glucagon,50,'glucagon');
	drawBar(plasma,200,'plasma');
	drawBar(CalciumChloride,350,'CalciumChloride');
	drawBar(Beta_Blocker,500,'Beta_Blocker');


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
