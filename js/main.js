// generic error graph

let genErrorPoints = [];

for (let i = 1; i < 20; i += 0.3){
    genErrorPoints.push(
        [
            i + Math.random()*0.2,
            11*i/8 - 0.5* Math.random()
        ],
        [
            i + Math.random()*0.2,
            11*i/8 + Math.random()
        ],
        [
            i + Math.random()*0.2,
            11*i/8 + 0.5 * Math.random()
        ]
    )
    
}

let errorGraphOne = {
    target: '#error-graph-one',
    xAxis: {
        label: 'x - axis',
        domain: [0, 10]
    },
    yAxis: {
        label: 'y - axis',
        domain: [0, 20]
    },
    data: [
        {
            points: genErrorPoints,
            fnType: 'points',
            graphType: 'scatter'
        },
        {
            fn: '3x/2'
        },
        {
          fn: '5x/4 + 1'
        },
        {
          fn: '23x/16 + sin(x)'
        }
    ]
}

let errorGraphTwo = {
  target: '#error-graph-two',
  xAxis: {
      label: 'x - axis',
      domain: [0, 10]
  },
  yAxis: {
      label: 'y - axis',
      domain: [0, 20]
  },
  data: [
      {
          points: genErrorPoints,
          fnType: 'points',
          graphType: 'scatter'
      },
      {
          fn: '5x/4 + 1'
      }
  ]
}

let errorGraphThree = {
  target: '#error-graph-three',
  xAxis: {
      label: 'x - axis',
      domain: [0, 10]
  },
  yAxis: {
      label: 'y - axis',
      domain: [0, 20]
  },
  data: [
      {
          points: genErrorPoints,
          fnType: 'points',
          graphType: 'scatter'
      },
      {
          fn: '23x/16 + sin(x)'
      }
  ]
}

functionPlot(errorGraphOne);
functionPlot(errorGraphTwo);
functionPlot(errorGraphThree);

function calculateDistance(x1, y1, x2, y2) {
  return ((x1 - x2)**2. + (y1 - y2)**2.)**0.5;
}

function meanSquaredError() {
  let sum = 0;
  for (let i = 0; i < genErrorPoints.length; i++) {
    // add the squared distances.
  }
}