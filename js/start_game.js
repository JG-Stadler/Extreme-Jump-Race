// Game Components

const player = document.getElementById("player");
const city = document.getElementById("city");
const car = document.getElementById("car");
const clouds = document.getElementById("clouds");

// Main menu

const menu = document.getElementById("main-menu");
const startGame_Button = document.getElementById("start-game");

startGame_Button.addEventListener("click",()=>{
    menu.style.display = "none";
    StartGame();
})

// start Animations

function StartGame(){
    car.classList = "carActive";
    city.classList = "cityActive";
    clouds.classList = "cloudsActive";
}