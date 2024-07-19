// HOME
let scores = 0;
let homeScore = document.getElementById("home-score");

function addOne() {
    scores += 1;
    homeScore.textContent = scores;
}

function addTwo() {
    scores += 2;
    homeScore.textContent = scores;
}

function addThree() {
    scores += 3;
    homeScore.textContent = scores;
}


// GUEST
let guestScores = 0;
let guestScore = document.getElementById("guest-score");

function guestsAddOne() {
    guestScores += 1;
    guestScore.textContent = guestScores;
}

function guestsAddTwo() {
    guestScores += 2;
    guestScore.textContent = guestScores;
}

function guestsAddThree() {
    guestScores += 3;
    guestScore.textContent = guestScores;
}


// RESET
let homeScoreCount = document.getElementById("home-score");
let guestsScoreCount = document.getElementById("guest-score")


function reset() {
    homeScoreCount = 0
    guestsScoreCount = 0
    homeScore.textContent = homeScoreCount;
    guestScore.textContent = guestsScoreCount;
}