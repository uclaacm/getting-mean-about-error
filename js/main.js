var viewportWidth;
var graphWidth;

var graphs = [];

// Redraw graphs on viewport resize.

function graphAll() {
    viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if (viewportWidth > 721) {
        graphWidth = 460;
    }
    else if (viewportWidth > 500 && viewportWidth < 720) {
        graphWidth = 400;
    }
    else {
        graphWidth = 340;
    }

    for (let i = 0; i < graphs.length; i++) {
        graphs[i].width = graphWidth;
        functionPlot(graphs[i]);
    }
    notesGraphOne.width = .48 * graphWidth;
    notesGraphTwo.width = .48 * graphWidth;
    functionPlot(notesGraphOne);
    functionPlot(notesGraphTwo);
}

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

graphs.push({
    target: '#error-graph-one',
    width: graphWidth,
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
});

graphs.push({
    target: '#error-graph-two',
    width: graphWidth,
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
});

graphs.push({
    target: '#error-graph-three',
    width: graphWidth,
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
});

// functionPlot(graphs[0]);
// functionPlot(graphs[1]);
// functionPlot(graphs[2]);

let notesGraphOne = {
    target: '#notes-graph-one',
    width: .48 * graphWidth,
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
    width: .48 * graphWidth,
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
            points: [[0.5, 0.3], [1, 1.2], [1.5, 1.3], [2, 2.2], [2.5, 2.3]],
            fnType: 'points',
            graphType: 'scatter',
            color: 'blue',
            attr: { "stroke-width": 3 }
        }
    ]
}

// functionPlot(notesGraphOne);
// functionPlot(notesGraphTwo);


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
let pointNotif = document.getElementsByClassName("point-response");

for (let i = 0; i < point_btns.length; i++) {
    point_btns[i].addEventListener("click", function() {pointAns(i);});
}

function pointAns(i) {
    pointNotif[i].style.display = "block";
    pointNotif[i].style.width = "10rem";

    let msgTxt;
    let colorClass;
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
        msgTxt = "Great!";
        colorClass = " has-background-teachla-green-dark";
    }
    else {
        is_correct[i] = 0;
        document.getElementById("done-msg").className = "message is-dark is-hidden";
        msgTxt = "Not quite.";
        colorClass = " has-background-grey-light";
    }
    pointNotif[i].textContent = msgTxt;
    pointNotif[i].className = "notification point-response" + colorClass;

    let dismissBtn = document.createElement("button");
    dismissBtn.className = "delete";

    // Handle answer-notification click.
    dismissBtn.addEventListener("click", handleDismiss);

    function handleDismiss() {
        pointNotif[i].style.display = "none";
    }

    pointNotif[i].appendChild(dismissBtn);
}



// Check final MSE in the "Now you try calculating" section.
document.getElementById("mse-submit").addEventListener("click", checkMSE);

let answerNotif = document.getElementById("check-answer");

function checkMSE() {
    // MSE for demo is 1.5
    answerNotif.style.display = "block";
    let msgTxt;
    let colorClass;
    let mseInput = document.getElementById("mse-input").value;

    if (mseInput === String(meanSquaredError(genErrorPoints, idealPointsOne))) {
        msgTxt = "Correct! This is a larger error than our red line's, so the red line is the better line of fit.";
        colorClass = " has-background-teachla-green-dark";
    }
    else {
        msgTxt = "Try again!";
        colorClass = " has-background-grey-light";
    }
    answerNotif.textContent = msgTxt;
    answerNotif.className = "notification is-pulled-right" + colorClass;

    let dismissBtn = document.createElement("button");
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

    graphs.push({
        target: '#data-graph',
        width: graphWidth,
        disableZoom: true,
        xAxis: {
            label: 'Years Since 1971',
            domain: [0, 45]
        },
        yAxis: {
            label: 'Millions of Transistors Per Square Millimeter',
            domain: [0, 100]
        },
        annotations: [
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
            }
        ]
    });

    graphs.push({
        target: '#data-graph-fitted',
        width: graphWidth,
        disableZoom: true,
        xAxis: {
            label: 'Years Since 1971',
            domain: [0.00001, 45]
        },
        yAxis: {
            type: 'log',
            label: 'Millions of Transistors Per Square Millimeter',
            domain: [0.0001, 100]
        },
        annotations: [
            {x: 5},
            {x: 10},
            {x: 15},
            {x: 20},
            {x: 25},
            {x: 30},
            {x: 35},
            {x: 40},
            {y: 1e-4},
            {y: 1e-3},
            {y: 1e-2},
            {y: 1e-1},
            {y: 1},
            {y: 1e1}
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
                fn: '(1/100000) * exp(x/2.2)', color: 'green',
                attr: { "stroke-width": 2 }
            }
        ]
    });

    // functionPlot(graphs[3]);
    var instance = functionPlot(graphs[4]);

    //console.log(instance);
    instance.meta.yAxis.tickValues = [1e-4, 1e-3, 1e-2, 1e-1, 1, 1e1, 1e2];
});


// Handle scale conversion button.

let annotationsExp = [
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
];

let annotationsLin = [
    {x: 5},
    {x: 10},
    {x: 15},
    {x: 20},
    {x: 25},
    {x: 30},
    {x: 35},
    {x: 40},
    {y: 1e-4},
    {y: 1e-3},
    {y: 1e-2},
    {y: 1e-1},
    {y: 1},
    {y: 1e1}
];

document.getElementById("scale-convert").addEventListener("click", scaleConvert);

var isLinear = 1;

function scaleConvert() {
    if (isLinear) {
        graphs[4].yAxis.type = 'linear';
        graphs[4].annotations = annotationsExp;
        instance = functionPlot(graphs[4]);
        instance.meta.yAxis.tickValues = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
        isLinear = 0;
    }
    else {
        graphs[4].yAxis.type = 'log';
        graphs[4].annotations = annotationsLin;
        instance = functionPlot(graphs[4]);
        instance.meta.yAxis.tickValues = [1e-4, 1e-3, 1e-2, 1e-1, 1, 1e1, 1e2];
        isLinear = 1;
    }
}

// Handle submit button in the "real-world example" section.

document.getElementById("function-submit").addEventListener("click", plotInputFn);

let fnNotif = document.getElementById("check-function");

function plotInputFn() {
    let constant = document.getElementById("constant-input").value;
    let coefficient = document.getElementById("coefficient-input").value;
    let msgTxt;

    console.log(constant);

    // If empty fields were inputted.
    if (constant.length === 0 || coefficient.length === 0) {
        msgTxt = "A field is empty!";

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
        return;
    }

    // If non-numbers were inputted.
    let acceptableChars = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '/', '.', ' '];
    for (let i = 0; i < constant.length; i++) {
        if (!acceptableChars.includes(constant.charAt(i))) {
            msgTxt = "The only acceptable inputs are digits (0-9), spaces, slashes, and decimal points.";

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
            return;
        }
    }

    for (let i = 0; i < coefficient.length; i++) {
        if (!acceptableChars.includes(coefficient.charAt(i))) {
            msgTxt = "A field is empty!";

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
            return;
        }
    }

    // Parse function.

    inputFn = constant + "*exp(x/" + coefficient + ")";
    graphs[4].data[1].fn = inputFn;
    functionPlot(graphs[4]);

    // Calculate MSE.
    let compiledFn = math.compile(inputFn);
    let fnPoints = evaluateFn(compiledFn);
    msgTxt = "Your MSE is " + String(meanSquaredError(data_points, fnPoints)) + ".";

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

// Graph everything once on load and every time window is resized.

graphAll();
window.addEventListener("resize", graphAll);
