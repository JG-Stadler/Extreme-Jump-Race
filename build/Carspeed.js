"use strict";
const carElement = document.getElementById("car");
carElement.addEventListener("animationiteration", () => {
    const computedStyle = window.getComputedStyle(carElement);
    const carSpeed = Number(computedStyle.animationDuration.replace("s", ""));
    let speed = carSpeed;
    speed = speed - 0.05;
    carElement.style.animationDuration = `${speed}s`;
    console.log(speed);
});
