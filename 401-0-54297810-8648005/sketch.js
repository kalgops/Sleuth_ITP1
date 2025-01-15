/*

Officer: 8648005
CaseNum: 401-0-54297810-8648005

Case 401 - The Case of Norbert's Weiner Stand
Stage 1 - Noxious Weiner

Console city has been plunged into chaos. The notorious poisoner Norbert has struck the population down with a potent poison. Word has it that he is smuggling his venomous filth via a streetside weiner stand. Hundreds of people have been affected, and the municipal water company tells me that their sewers are at full capacity. This is no laughing matter. I need you to head down to our lab and work on an antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following:

	- If mercury dips below 0.52, decrease antivenom by 0.04
	- If arsenic goes above 0.67, increase antivenom by 0.01
	- If sarin goes above 0.61, reduce Sodium_Bicarbonate by 0.04
	- If mercury goes above 0.63, increment Sodium_Bicarbonate by 0.04
	- When arsenic dips below 0.5, decrease ethanol by 0.04
	- If sarin dips below 0.53, raise ethanol by 0.03


Your conditional statements should consider the following poisons:

	- arsenic
	- mercury
	- sarin


Your conditional statements should modify the following antidotes:

	- antivenom
	- Sodium_Bicarbonate
	- ethanol


- There are many ways to complete this task but you should only use the following commands and operators:

	if(){}
	>
	<
	+=
	-=

*/

//Declare the poison variables
var arsenic;
var mercury;
var sarin;


//Declare the antidote variables
var antivenom;
var Sodium_Bicarbonate;
var ethanol;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	arsenic = 0.5;
	mercury = 0.5;
	sarin = 0.5;
	antivenom = 0.5;
	Sodium_Bicarbonate = 0.5;
	ethanol = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 3; i++)
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
    
     // If arsenic goes above 0.67, increase antivenom by 0.01
  if (arsenic > 0.67) {
    antivenom += 0.01;
  }

  // If mercury dips below 0.52, decrease antivenom by 0.04
  if (mercury < 0.52) {
    antivenom -= 0.04;
  }

  // If sarin goes above 0.61, reduce Sodium_Bicarbonate by 0.04
  if (sarin > 0.61) {
    Sodium_Bicarbonate -= 0.04;
  }

  // If mercury goes above 0.63, increment Sodium_Bicarbonate by 0.04
  if (mercury > 0.63) {
    Sodium_Bicarbonate += 0.04;
  }

  // When arsenic dips below 0.5, decrease ethanol by 0.04
  if (arsenic < 0.5) {
    ethanol -= 0.04;
  }

  // If sarin dips below 0.53, raise ethanol by 0.03
  if (sarin < 0.53) {
    ethanol += 0.03;
  }


	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	arsenic = nextValue(graphs[0],arsenic);
	mercury = nextValue(graphs[1],mercury);
	sarin = nextValue(graphs[2],sarin);


	antivenom = constrain(antivenom, 0, 1);
	Sodium_Bicarbonate = constrain(Sodium_Bicarbonate, 0, 1);
	ethanol = constrain(ethanol, 0, 1);


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
	text('arsenic: ' + nf(arsenic,1,2), 20,20);
	fill(colors[1]);
	text('mercury: ' + nf(mercury,1,2), 20,40);
	fill(colors[2]);
	text('sarin: ' + nf(sarin,1,2), 20,60);


	//draw the antidotes bar chart
	drawBar(antivenom,50,'antivenom');
	drawBar(Sodium_Bicarbonate,200,'Sodium_Bicarbonate');
	drawBar(ethanol,350,'ethanol');


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
