"use strict";
const restartButton = document.getElementById("restart");
restartButton.addEventListener("click", () => {
    GameOverWindow.style.display = "none";
    Restart();
});
function Restart() {
    // Script para resetar a posição dos elementos
    car.style.left = "100%";
    city.style.left = "100%";
    clouds.style.left = "100%";
    player.style.bottom = "0%";
    //Reset de pontuação
    currentScore = 0;
    score.innerText = "0";
    //Mudar imagem de explosão para imagem do player
    player.src = "./images/player-runing.gif";
    //Reiniciar animações
    GameElementsParentDiv.classList.add("active-animations");
}
