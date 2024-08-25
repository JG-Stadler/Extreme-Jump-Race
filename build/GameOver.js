"use strict";
const GameElementsParentDiv = document.querySelector(".game-elements");
const GameOverWindow = document.querySelector(".game-over-window");
function GameOver(Pposition, CLposition, Cposition, CarPosition) {
    // Script para parar as animações
    GameElementsParentDiv.classList.remove("active-animations");
    player.classList.remove("player-jumping");
    // Script para manter os  elementos na posição em que estavam
    player.style.bottom = `${String(Pposition)}px`;
    city.style.left = `${String(Cposition)}px`;
    car.style.left = `${String(CarPosition)}px`;
    clouds.style.left = `${String(CLposition)}px`;
    // Explosão do rôbo
    player.src = "./images/explosion.png";
    PlayExplosionSoundEffect();
    GameOverWindow.style.display = "flex";
}
