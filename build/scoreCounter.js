"use strict";
const score = document.getElementById("score-counter");
let currentScore = 0;
function IncreaseScore() {
    currentScore = currentScore + 1;
    score.innerText = String(currentScore);
}
