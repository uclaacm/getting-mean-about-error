// Generate error points and error graphs using FunctionPlot.

let genErrorPoints = [];
let xCoords = [1,2,3,4,5,6];
let yCoords = [2,3,6,4,8,9];
let idealPointsOne = [];
let idealPointsTwo = [];

for (let i = 0; i < xCoords.length; i++) {
    genErrorPoints.push([xCoords[i], yCoords[i]]);
    idealPointsOne.push([xCoords[i], xCoords[i] + 2.0]);
    idealPointsTwo.push([xCoords[i], xCoords[i] * 1.5]);
}

let errorGraphOne = {
    target: '#error-graph-one',
    width: 500,
    disableZoom: true,
    xAxis: {
        label: 'x - axis',
        domain: [0, 7]
    },
    yAxis: {
        label: 'y - axis',
        domain: [0, 10]
    },
    annotations:[
        {x: 1},
        {x: 2},
        {x: 3},
        {x: 4},
        {x: 5},
        {x: 6},
        {y: 1},
        {y: 2},
        {y: 3},
        {y: 4},
        {y: 5},
        {y: 6},
        {y: 7},
        {y: 8},
        {y: 9}
      ],
    data: [
        {
            fn: 'x + 2', color: 'green',
            attr: { "stroke-width": 3 }
        },
        {
            fn: '3x/2', color: 'red',
            attr: { "stroke-width": 3 }
        },
        {
            points: genErrorPoints,
            fnType: 'points',
            graphType: 'scatter',
            color: 'blue',
            attr: { "stroke-width": 5 }
        }
    ]
}

let errorGraphTwo = {
    target: '#error-graph-two',
    width: 500,
    disableZoom: true,
    xAxis: {
        label: 'x - axis',
        domain: [0, 7]
    },
    yAxis: {
        label: 'y - axis',
        domain: [0, 10]
    },
    annotations:[
        {x: 1},
        {x: 2},
        {x: 3},
        {x: 4},
        {x: 5},
        {x: 6},
        {y: 1},
        {y: 2},
        {y: 3},
        {y: 4},
        {y: 5},
        {y: 6},
        {y: 7},
        {y: 8},
        {y: 9}
      ],
    data: [
        {
            fn: '3x/2', color: 'red',
            attr: { "stroke-width": 3 }
        },
        {
            points: idealPointsTwo,
            fnType: 'points',
            graphType: 'scatter',
            color: 'black',
            attr: { "stroke-width": 3 }
        },
        {
            points: genErrorPoints,
            fnType: 'points',
            graphType: 'scatter',
            color: 'blue',
            attr: { "stroke-width": 5 }
        }
    ]
}

let errorGraphThree = {
    target: '#error-graph-three',
    width: 500,
    disableZoom: true,
    //grid: true,
    xAxis: {
        label: 'x - axis',
        domain: [0, 7]
    },
    yAxis: {
        label: 'y - axis',
        domain: [0, 10]
    },
    annotations:[
      {x: 1},
      {x: 2},
      {x: 3},
      {x: 4},
      {x: 5},
      {x: 6},
      {y: 1},
      {y: 2},
      {y: 3},
      {y: 4},
      {y: 5},
      {y: 6},
      {y: 7},
      {y: 8},
      {y: 9}
    ],
    data: [
        {
            points: idealPointsOne,
            fnType: 'points',
            graphType: 'scatter',
            color: 'black',
            attr: { "stroke-width": 3 }
        },
        {
            points: genErrorPoints,
            fnType: 'points',
            graphType: 'scatter',
            color: 'blue',
            attr: { "stroke-width": 5 }
        },
        {
            fn: 'x + 2', color: 'green',
            attr: { "stroke-width": 3 }
        }
    ]
}

functionPlot(errorGraphOne);
functionPlot(errorGraphTwo);
functionPlot(errorGraphThree);


// Calculate mean-squared error; pass in 2D arrays for parameters.
// MSE = 1.5 for y = x+2; MSE = 1.125 for y = 3x/2

function meanSquaredError( pointsOne, pointsTwo ) {
  let sum = 0;
  for (let i = 0; i < pointsOne.length; i++) {
    // add squared distances.
    let y1 = pointsOne[i][1];
    let y2 = pointsTwo[i][1];
    sum += (y2 - y1)**2.;
  }
  return sum / pointsOne.length;
}


// Generate MSE table for demo.
let table=document.getElementById("msetable");

// Generate left-most column.
let col = document.createElement("tr");

let cellX = document.createElement("th");
let cellOurY = document.createElement("th");
let cellPrdY = document.createElement("th");

let dataX = document.createTextNode("x-Coordinate");
let dataOurY = document.createTextNode("y-Coordinate (expected/black)");
let dataPrdY = document.createTextNode("y-Coordinate (our/blue)");

cellX.appendChild(dataX);
cellOurY.appendChild(dataOurY);
cellPrdY.appendChild(dataPrdY);
col.appendChild(cellX);
col.appendChild(cellOurY);
col.appendChild(cellPrdY);
table.appendChild(col);

// Generate data columns.
for (let i = 0; i < xCoords.length; i++) {
  col = document.createElement("tr");

  cellX = document.createElement("td");
  cellOurY = document.createElement("td");
  cellPrdY = document.createElement("td");

  if (i % 2 == 1) {
    cellX.style.backgroundColor = "rgb(233, 247, 218)";
    cellOurY.style.backgroundColor = "rgb(233, 247, 218)";
    cellPrdY.style.backgroundColor = "rgb(233, 247, 218)";
  }

  dataX = document.createTextNode(xCoords[i]);
  dataOurY = document.createTextNode(idealPointsTwo[i][1]);
  dataPrdY = document.createTextNode(yCoords[i]);

  cellX.appendChild(dataX);
  cellOurY.appendChild(dataOurY);
  cellPrdY.appendChild(dataPrdY);
  col.appendChild(cellX);
  col.appendChild(cellOurY);
  col.appendChild(cellPrdY);
  table.appendChild(col);
}


// Handle submit button in the "Now you try calculating" section.
document.getElementById("mse-submit").addEventListener("click", checkMSE);

let answerNotif = document.getElementById("check-answer");

function checkMSE() {
  // MSE for demo is 1.5
  answerNotif.style.display = "block";
  let msgTxt;
  let mseInput = document.getElementById("mse-input").value;

  if (mseInput === String(meanSquaredError(genErrorPoints, idealPointsOne))) {
    msgTxt = "Correct!";
  }
  else {
    msgTxt = "Incorrect!";
  }
  answerNotif.textContent = msgTxt;
  // setTimeout(function() {document.getElementById("check-answer").style.display = "none"}, 1000);

  var dismissBtn = document.createElement("button");
  dismissBtn.className = "delete";

  // Handle answer-notification click.
  dismissBtn.addEventListener("click", handleDismiss);

  function handleDismiss() {
    answerNotif.style.display = "none";
  }

  answerNotif.appendChild(dismissBtn);
}

// Calculation steps.
// Navigate back and forth between steps using prev and next buttons or with the dots.
let stepIndex = 0;
let numSteps = 5;

setStep(0);

function setStep (n) {
    stepIndex += n;
    if (stepIndex === 0) {
        document.getElementById("prev").style.display = "none";
        document.getElementById("next").style.display = "block";
    }
    else if (stepIndex === numSteps - 1) {
        document.getElementById("prev").style.display = "block";
        document.getElementById("next").style.display = "none";
    }
    else {
        document.getElementById("prev").style.display = "block";
        document.getElementById("next").style.display = "block";
    }
    showStep(stepIndex);
}

function jumpStep (n) {
    stepIndex = 0;
    setStep(n);
}
    
function showStep (n) {
    let dots = document.getElementsByClassName("dot");
    let steps = document.getElementsByClassName("step-content");
    for (let i = 0; i < numSteps; i++) {
        if (i !== n) {
            steps[i].style.display = "none";
            dots[i].className = "title is-5 dot";
        }
        else {
            steps[i].style.display = "block";
            dots[i].className = "title is-5 dot dot-active";
        }
    }
}


// Last section (real-world example).

var coronaCases = [];
var CoronaGraph = {};
d3.csv("corona_cases.csv", function(data) {
    for (var i = 0; i < data.length / 2; i++) {
        coronaCases.push([2 * i, data[2 * i].World]);
    }

    coronaGraph = {
        target: '#corona-graph',
        width: 500,
        disableZoom: true,
        xAxis: {
            label: 'Days Since 1/1',
            domain: [0, 90]
        },
        yAxis: {
            label: 'Total Cases',
            domain: [0, 500000]
        },
        annotations:[
            {x: 10},
            {x: 20},
            {x: 30},
            {x: 40},
            {x: 50},
            {x: 60},
            {x: 70},
            {x: 80},
            {y: 100000},
            {y: 200000},
            {y: 300000},
            {y: 400000}
        ],
        data: [
            {
                points: coronaCases,
                fnType: 'points',
                graphType: 'scatter',
                color: 'red',
                attr: { "stroke-width": 3 }
            },
            {
                fn: '30x^2', color: 'green',
                attr: { "stroke-width": 2 }
            }
        ]
    }
    
    functionPlot(coronaGraph);
});


// Handle submit button in the "real-world example" section.
document.getElementById("function-submit").addEventListener("click", plotInputFn);

let fnNotif = document.getElementById("check-function");

function plotInputFn() {
    let inputFn = document.getElementById("function-input").value;
    coronaGraph.data[1].fn = inputFn;
    functionPlot(coronaGraph);

    // Calculate MSE.
    let compiledFn = math.compile(inputFn);
    let fnPoints = evaluateFn(compiledFn);
    let msgTxt = "Your MSE is " + String(meanSquaredError(coronaCases, fnPoints)) + ".";

    fnNotif.style.display = "block";
    fnNotif.textContent = msgTxt;

    var dismissBtn = document.createElement("button");
    dismissBtn.className = "delete";

    // Handle notification click.
    dismissBtn.addEventListener("click", handleDismiss);

    function handleDismiss() {
        fnNotif.style.display = "none";
    }

    fnNotif.appendChild(dismissBtn);
}

function evaluateFn(fn) {
    let points = [];
    for (var i = 0; i < coronaCases.length; i++) {
        let x = {x: coronaCases[i][0]};
        points.push([x.x, fn.evaluate(x)]);
    }
    return points;
}