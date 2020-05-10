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

let notesGraphOne = {
    target: '#notes-graph-one',
    width: 225,
    height: 180,
    disableZoom: true,
    xAxis: {
        label: 'x - axis',
        domain: [0, 3]
    },
    yAxis: {
        label: 'y - axis',
        domain: [0, 3]
    },
    annotations:[
        {x: 1},
        {x: 2},
        {y: 1},
        {y: 2}
      ],
    data: [
        {
            fn: 'x', color: 'green',
            attr: { "stroke-width": 2 }
        },
        {
            points: [[0.5,0.7],[1,1.2],[1.5,1.7],[2,2.2],[2.5,2.7]],
            fnType: 'points',
            graphType: 'scatter',
            color: 'blue',
            attr: { "stroke-width": 3 }
        }
    ]
}

let notesGraphTwo = {
    target: '#notes-graph-two',
    width: 225,
    height: 180,
    disableZoom: true,
    xAxis: {
        label: 'x - axis',
        domain: [0, 3]
    },
    yAxis: {
        label: 'y - axis',
        domain: [0, 3]
    },
    annotations:[
        {x: 1},
        {x: 2},
        {y: 1},
        {y: 2}
      ],
    data: [
        {
            fn: 'x', color: 'green',
            attr: { "stroke-width": 2 }
        },
        {
            points: [[0.5,0.3],[1,1.2],[1.5,1.3],[2,2.2],[2.5,2.3]],
            fnType: 'points',
            graphType: 'scatter',
            color: 'blue',
            attr: { "stroke-width": 3 }
        }
    ]
}

functionPlot(notesGraphOne);
functionPlot(notesGraphTwo);


// General function to calculate mean-squared error; pass in 2D arrays for parameters.
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



// Check submitted answers in "Now you try calculating" section.

var is_correct = [0, 0, 0, 0, 0, 0];
let point_btns = document.getElementsByClassName("point-submit");
let point_notif = document.getElementsByClassName("point-response");

for (let i = 0; i < point_btns.length; i++) {
    point_btns[i].addEventListener("click", function() {pointAns(i);});
}

function pointAns(i) {
  point_notif[i].style.display = "block";
  point_notif[i].style.width = "10rem";
  // point_notif[i].align = "right";

  let msgTxt1;
  let ansInput = document.getElementsByClassName("point-input")[i].value;

  if (ansInput === String((idealPointsOne[i][1]-yCoords[i])**2)) {
    is_correct[i] = 1;
    let is_done = 1;
    for (let j = 0; j < is_correct.length; j++) {
        if (is_correct[j] === 0) {
            is_done = 0;
        }
    }
    if (is_done) {
        document.getElementById("done-msg").className = "message is-dark";
    }
    msgTxt1 = "Great!";
  }
  else {
    is_correct[i] = 0;
    document.getElementById("done-msg").className = "message is-dark is-hidden";
    msgTxt1 = "Not quite.";
  }
  point_notif[i].textContent = msgTxt1;

  var dismissBtn1 = document.createElement("button");
  dismissBtn1.className = "delete";

  // Handle answer-notification click.
  dismissBtn1.addEventListener("click", handleDismiss);

  function handleDismiss() {
    point_notif[i].style.display = "none";
  }

  point_notif[i].appendChild(dismissBtn1);
}



// Check final MSE in the "Now you try calculating" section.
document.getElementById("mse-submit").addEventListener("click", checkMSE);

let answerNotif = document.getElementById("check-answer");

function checkMSE() {
  // MSE for demo is 1.5
  answerNotif.style.display = "block";
  let msgTxt;
  let mseInput = document.getElementById("mse-input").value;

  if (mseInput === String(meanSquaredError(genErrorPoints, idealPointsOne))) {
    msgTxt = "Correct! This is a larger error than our red line's, so the red line is the better line of fit.";
  }
  else {
    msgTxt = "Try again!";
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


// Last section (real-world example).

var data_points = [];
d3.csv("moores_law.csv", function(data) {
    for (var i = 0; i < data.length; i++) {
        data_points.push([i, (+data[i].transistors) / 1000000]);
    }

    data_graph = {
        target: '#data-graph',
        width: 475,
        disableZoom: true,
        xAxis: {
            label: 'Years Since 1971',
            domain: [0, 45]
        },
        yAxis: {
            label: 'Millions of Transistors Per Square Millimeter',
            domain: [0, 100]
        },
        annotations:[
            {x: 5},
            {x: 10},
            {x: 15},
            {x: 20},
            {x: 25},
            {x: 30},
            {x: 35},
            {x: 40},
            {y: 10},
            {y: 20},
            {y: 30},
            {y: 40},
            {y: 50},
            {y: 60},
            {y: 70},
            {y: 80},
            {y: 90}
        ],
        data: [
            {
                points: data_points,
                fnType: 'points',
                graphType: 'scatter',
                color: 'red',
                attr: { "stroke-width": 3 }
            },
            {
                fn: '(1/20000)x^4', color: 'green',
                attr: { "stroke-width": 2 }
            }
        ]
    }

    functionPlot(data_graph);
});


// Handle submit button in the "real-world example" section.
document.getElementById("function-submit").addEventListener("click", plotInputFn);

let fnNotif = document.getElementById("check-function");

function plotInputFn() {
    let inputFn = document.getElementById("function-input").value;
    data_graph.data[1].fn = inputFn;
    functionPlot(data_graph);

    // Calculate MSE.
    let compiledFn = math.compile(inputFn);
    let fnPoints = evaluateFn(compiledFn);
    let msgTxt = "Your MSE is " + String(meanSquaredError(data_points, fnPoints)) + ".";

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
    for (var i = 0; i < data_points.length; i++) {
        let x = {x: data_points[i][0]};
        points.push([x.x, fn.evaluate(x)]);
    }
    return points;
}


// CALCULATION ANIMATION.
// Navigate back and forth between steps using prev and next buttons or with the dots.
var stepIndex = 0;
var numSteps = 7;

function setStep (n, rev) {
    stepIndex += n;
    if (stepIndex < 0) { stepIndex = 0 }
    if (stepIndex >= numSteps) { stepIndex = numSteps - 1 }

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
    animate(stepIndex, rev);
}

var stepText = document.getElementById("step-text");

function animate (n, rev) {
    switch (n) {
        case 0:
            stepText.textContent = "Take the first blue point.";
            if (rev) {
                anime_one.direction = 'reverse';
                anime_one.restart();
                anime_two.direction = 'normal';
                anime_two.restart();
            }
            break;
        case 1:
            stepText.textContent = "Since we are dealing with vertical distance, we can take just the y-value.";
            if (rev) {
                anime_thr.direction = 'normal';
                anime_thr.restart();
            }
            else {
                anime_one.direction = 'normal';
                anime_one.restart();
                anime_two.direction = 'reverse';
                anime_two.restart();
            }
            break;
        case 2:
            stepText.textContent = "Likewise, we can take the y-value of the first black point.";
            if (rev) {
                stepText.style.opacity = 1;
                anime_four.direction = 'normal';
                anime_four.restart();
                anime_up.direction = 'reverse';
                anime_up.restart();
            }
            else {
                anime_thr.direction = 'reverse';
                anime_thr.restart();
            }
            break;
        case 3:
            stepText.style.opacity = 0;
            if (rev) {
                anime_away.direction = 'reverse';
                anime_away.restart();
                anime_five.direction = 'reverse';
                anime_five.restart();
            }
            else {
                anime_four.direction = 'reverse';
                anime_four.restart();
                anime_up.direction = 'normal';
                anime_up.restart();
            }
            break;
        case 4:
            if (rev) {
                anime_six.direction = 'reverse';
                anime_six.restart();
                anime_up_two.direction = 'reverse';
                anime_up_two.restart();
                anime_away_two.direction = 'reverse';
                anime_away_two.restart();
            }
            else {
                anime_five.direction = 'normal';
                anime_five.restart();
                anime_away.direction = 'normal';
                anime_away.restart();
            }
            break;
        case 5:
            if (rev) {
                anime_sev.direction = 'reverse';
                anime_sev.restart();
                anime_away_thr.direction = 'reverse';
                anime_away_thr.restart();
                anime_away_four.direction = 'reverse';
            anime_away_four.restart();
            }
            else {
                anime_six.direction = 'normal';
                anime_six.restart();
                anime_up_two.direction = 'normal';
                anime_up_two.restart();
                anime_away_two.direction = 'normal';
                anime_away_two.restart();
            }
            break;
        case 6:
            anime_sev.direction = 'normal';
            anime_sev.restart();
            anime_away_thr.direction = 'normal';
            anime_away_thr.restart();
            anime_away_four.direction = 'normal';
            anime_away_four.restart();
            break;
    }
}

setStep(0, false);


// ANIMATIONS.

var anime_away = anime ({
    autoplay: false,
    targets: '.go-up',
    opacity: [1,0],
    duration: 1000,
    easing: 'easeInOutSine'
});

var anime_away_two = anime ({
    autoplay: false,
    targets: '.fade',
    opacity: [1,0],
    duration: 1000,
    easing: 'easeInOutSine'
});

var anime_away_thr = anime ({
    autoplay: false,
    targets: '.anime-6',
    opacity: [1,0],
    duration: 1000,
    easing: 'easeInOutSine'
});

var anime_away_four = anime ({
    autoplay: false,
    targets: '.stay',
    opacity: [1,0],
    duration: 1000,
    easing: 'easeInOutSine',
    delay: anime.stagger(200)
});

var anime_one = anime ({
    autoplay: false,
    targets: '.anime-1',
    opacity: [1,0],
    translateX: 80,
    duration: 1000,
    easing: 'linear'
});

var anime_two = anime ({
    autoplay: false,
    targets: '.anime-2',
    opacity: [1,0],
    translateX: -80,
    duration: 1000,
    easing: 'linear',
    direction: 'reverse'
});

var anime_thr = anime ({
    autoplay: false,
    targets: '.anime-3',
    opacity: [1,0],
    translateX: -80,
    duration: 1000,
    easing: 'linear',
    direction: 'reverse'
});

var anime_four = anime ({
    autoplay: false,
    targets: '.anime-4',
    opacity: [1,0],
    duration: 1000,
    easing: 'easeInOutSine',
    direction: 'reverse'
});

var anime_up = anime ({
    autoplay: false,
    targets: '.go-up',
    translateY: -100,
    translateX: [0,0],
    duration: 1000,
    easing: 'easeInOutSine',
    delay: anime.stagger(200)
});

var anime_five = anime ({
    autoplay: false,
    targets: '.anime-5',
    translateY: [-170,-285],
    opacity: [0,1],
    duration: 1000,
    easing: 'easeInOutSine',
    delay: anime.stagger(200)
});

var anime_up_two = anime ({
    autoplay: false,
    targets: '.stay',
    translateY: [-285,-405],
    duration: 1000,
    easing: 'easeInOutSine',
    delay: anime.stagger(200)
});

var anime_six = anime ({
    autoplay: false,
    targets: '.anime-6',
    translateY: [-290,-415],
    opacity: [0,1],
    duration: 1000,
    easing: 'easeInOutSine',
    delay: anime.stagger(200)
});

var anime_sev = anime ({
    autoplay: false,
    targets: '.anime-7',
    translateY: [-520,-625],
    opacity: [0,1],
    duration: 1000,
    easing: 'easeInOutSine',
    delay: anime.stagger(200)
});
