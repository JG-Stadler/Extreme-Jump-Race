"use strict";
const clouds = document.querySelector(".clouds");
const city = document.querySelector(".city");
let cloudsPosition;
let cityPosition;
let playerPosition;
let carDistanceLeftSide;
let carDistanceRightSide;
const GameWindow = document.querySelector(".game-window");
const maximumCollisionDistance = player.offsetLeft + player.clientWidth;
setInterval(() => {
    // Posição dos elementos em tela
    cloudsPosition = Number(getComputedStyle(clouds).left.replace("px", ""));
    cityPosition = Number(getComputedStyle(city).left.replace("px", ""));
    playerPosition = Number(getComputedStyle(player).bottom.replace("px", ""));
    carDistanceLeftSide = car.offsetLeft;
    carDistanceRightSide = Number(getComputedStyle(car).right.replace("px", ""));
    // Verificador de Colisão
    if (carDistanceLeftSide < maximumCollisionDistance &&
        carDistanceRightSide <= GameWindow.clientWidth && playerPosition < car.clientHeight) {
        GameOver(playerPosition, cloudsPosition, cityPosition, carDistanceLeftSide);
    }
}, 500);
