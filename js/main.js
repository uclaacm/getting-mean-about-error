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
    data: [
        {
            fn: 'x + 2', color: 'red',
            attr: { "stroke-width": 3 }
        },
        {
            fn: '3x/2', color: 'green',
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
    ],
    data: [
        {
            fn: 'x + 2', color: 'red',
            attr: { "stroke-width": 3 }
        },
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
        }
    ]
}

let errorGraphThree = {
    target: '#error-graph-three',
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
    ],
    data: [
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
        },
        {
            fn: '3x/2', color: 'green',
            attr: { "stroke-width": 3 }
        }
    ]
}

functionPlot(errorGraphOne);
functionPlot(errorGraphTwo);
functionPlot(errorGraphThree);
//functionPlot(errorGraphFour);


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

let dataX = document.createTextNode("x-coordinate");
let dataOurY = document.createTextNode("expected y-coordinate");
let dataPrdY = document.createTextNode("original y-coordinate");

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
  dataOurY = document.createTextNode(idealPointsOne[i][1]);
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
document.getElementById("submit").addEventListener("click", checkMSE);

let answerNotif = document.getElementById("check-answer");

function checkMSE() {
  // MSE for demo is 1.125
  answerNotif.style.display = "block";
  let msgTxt;
  let mseInput = document.getElementById("mse-input").value;

  if (mseInput === String(meanSquaredError(genErrorPoints, idealPointsTwo))) {
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
