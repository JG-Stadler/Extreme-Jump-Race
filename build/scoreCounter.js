"use strict";
const score = document.getElementById("score-counter");
let currentScore = 0;
function IncreaseScore() {
    currentScore = currentScore + 1;
    score.innerText = String(currentScore);
}
// Pontuação final
const FinalScore = document.getElementById("final-score");
const Record = document.getElementById("record");
let FScore = 0;
let currentRecord = 0;
function SetFinalScore() {
    FScore = currentScore;
    if (FScore > currentRecord) {
        currentRecord = FScore;
    }
    FinalScore.innerText = String(FScore);
    Record.innerText = String(currentRecord);
}
