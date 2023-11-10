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

function ColisionVerification() {
  setInterval(() => {
    const carDistance = car.offsetLeft;
    const playerBottom = +window
      .getComputedStyle(player)
      .bottom.replace("px", " ");
    const cloudsDistance = document.getElementById("clouds").offsetLeft;
    const cityDistance = document.getElementById("city").offsetLeft;

    if (
      playerBottom < minPlayerBottom &&
      carDistance <= LimitCarDistance &&
      carDistance > -200
    ) {
      GameOver(cloudsDistance, playerBottom, cityDistance, carDistance);
    }
  }, 5);
}

// Stop Game

function GameOver(
  cloudsLeftDistance,
  playerHeight,
  cityLeftDistance,
  carLeftDistance
) {
  const clouds = document.getElementById("clouds");
  const player = document.getElementById("player");
  const car = document.getElementById("car");
  const city = document.getElementById("city");
  const gameOverMensage = document.getElementById("gameOver");

  city.classList.remove("cityActive");
  car.classList.remove("carActive");
  clouds.classList.remove("cloudsActive");
  player.classList.remove("playerJump");

  player.style.bottom = `${playerHeight}px`;
  car.style.left = `${carLeftDistance}px`;
  city.style.left = `${cityLeftDistance}px`;
  clouds.style.left = `${cloudsLeftDistance}px`;
  gameOverMensage.style.display = "block";
}
