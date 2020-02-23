// // Generate error graph.

// let genErrorPoints = [];

// for (let i = 0; i < 20; i += 0.5){
//     genErrorPoints.push(
//         [
//             i + Math.random()*0.2,
//             11*i/8 - 0.5 * Math.random()
//         ],
//         [
//             i + Math.random()*0.2,
//             11*i/8 + Math.random()
//         ],
//         [
//             i + Math.random()*0.2,
//             11*i/8 + 0.5 * Math.random()
//         ]
//     )  
// }

let genErrorPoints = [];
let xCoords = [1,2,3,4,5,6];
let yCoords = [2,3,6,4,8,9];
let yIdealOne = [];
let yIdealTwo = [];

for (let i = 0; i < xCoords.length; i++) {
    genErrorPoints.push([xCoords[i], yCoords[i]]);
    yIdealOne.push(xCoords[i] + 2.0);
    yIdealTwo.push(xCoords[i] * 1.5);
}
console.log(genErrorPoints);

let errorGraphOne = {
    target: '#error-graph-one',
    xAxis: {
        label: 'x - axis',
        domain: [0, 7]
    },
    yAxis: {
        label: 'y - axis',
        domain: [0, 14]
    },
    data: [
        {
            points: genErrorPoints,
            fnType: 'points',
            graphType: 'scatter',
            color: 'blue'
        }
    ]
}

let errorGraphTwo = {
    target: '#error-graph-two',
    xAxis: {
        label: 'x - axis',
        domain: [0, 7]
    },
    yAxis: {
        label: 'y - axis',
        domain: [0, 14]
    },
    data: [
        {
            points: genErrorPoints,
            fnType: 'points',
            graphType: 'scatter',
            color: 'blue'
        },
        {
            fn: 'x + 2', color: 'red'
        },
        {
            fn: '3x/2', color: 'green'
        }
    ]
}

let errorGraphThree = {
    target: '#error-graph-three',
    xAxis: {
        label: 'x - axis',
        domain: [0, 7]
    },
    yAxis: {
        label: 'y - axis',
        domain: [0, 14]
    },
    data: [
        {
            points: genErrorPoints,
            fnType: 'points',
            graphType: 'scatter',
            color: 'blue'
        },
        {
            fn: 'x + 2', color: 'red'
        }
    ]
}

let errorGraphFour = {
    target: '#error-graph-four',
    xAxis: {
        label: 'x - axis',
        domain: [0, 7]
    },
    yAxis: {
        label: 'y - axis',
        domain: [0, 14]
    },
    data: [
        {
            points: genErrorPoints,
            fnType: 'points',
            graphType: 'scatter',
            color: 'blue'
        },
        {
            fn: '3x/2', color: 'green'
        }
    ]
}

functionPlot(errorGraphOne);
functionPlot(errorGraphTwo);
functionPlot(errorGraphThree);
functionPlot(errorGraphFour);

// // Refresh the data on the graph.

// function refreshPoints() {
//   console.log("hi");
//   genErrorPoints = [];
//   for (let i = 1; i < 20; i += 0.3) {
//     genErrorPoints.push(
//         [
//             i + Math.random()*0.2,
//             11*i/8 - 0.5* Math.random()
//         ],
//         [
//             i + Math.random()*0.2,
//             11*i/8 + Math.random()
//         ],
//         [
//             i + Math.random()*0.2,
//             11*i/8 + 0.5 * Math.random()
//         ]
//     )  
//   }
//   errorGraphOne.data.points = genErrorPoints;
//   functionPlot(errorGraphOne);
//   return;
// }

// document.getElementById("refresh-data").addEventListener("click", refreshPoints);

// Calculate mean-squared error.

function meanSquaredError() {
  let sum = 0;
  for (let i = 0; i < genErrorPoints.length; i++) {
    // add squared distances.
    let y1 = genErrorPoints[i][1];
    //let y2 = function(genErrorPoints[i][0]);
    sum += (y1 - y2)**2.;
  }
  return sum / getErrorPoints.length;
}

