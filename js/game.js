const jumpButton = document.getElementById("jumpButton");
const activatedPlayer = document.getElementById("player");

function startGame() {
  const city = document.getElementById("city");
  const car = document.getElementById("car");
  const clouds = document.getElementById("clouds");

  city.classList.add("cityActive");
  car.classList.add("carActive");
  clouds.classList.add("cloudsActive");

  ColisionVerification();
}

jumpButton.addEventListener("click", () => {
  activatedPlayer.classList.add("playerJump");
  setTimeout(() => {
    activatedPlayer.classList.remove("playerJump");
  }, 1500);
});

// Colision Verification

const gameWindow = document.getElementById("game-window");
var LimitCarDistance = gameWindow.offsetHeight * 0.17;
const minPlayerBottom = 100;
const car = document.getElementById("car");

function ColisionVerification(){
  setInterval(() =>{
  const carDistance = car.offsetLeft;
  const playerBottom = window.getComputedStyle(player).bottom.replace("px", " ");

  if(playerBottom < minPlayerBottom && carDistance <= LimitCarDistance && carDistance > -200){
      console.log("perdeu")
      GameOver();
  }
},5);
}

// Stop Game

// function GameOver(){

// }