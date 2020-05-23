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
