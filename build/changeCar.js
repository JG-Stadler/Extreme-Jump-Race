"use strict";
const cars = ["./images/ai-car1.png", "./images/ai-car2.png", "./images/spr_turbo_0.png", "./images/spr_rally_0.png", "./images/spr_classiccar_0.png"];
const car = document.getElementById("car");
car.addEventListener("animationiteration", () => {
    // Muda o SRC do carro sempre que o ciclo da animação acaba
    car.src = cars[Math.floor(Math.random() * cars.length)];
    //  Script para acrescentar pontos sempre que o carro passar do player
    IncreaseScore();
});
