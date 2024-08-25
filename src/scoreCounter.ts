const score = document.getElementById("score-counter") as HTMLElement;
let currentScore = 0;

function IncreaseScore(){
    currentScore = currentScore+1;
    score.innerText = String(currentScore);
}