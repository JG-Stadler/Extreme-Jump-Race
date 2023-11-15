const activatedPlayer = document.getElementById("player");
const body = document.querySelector("body");

function startGame() {
  const city = document.getElementById("city");
  const car = document.getElementById("car");
  const clouds = document.getElementById("clouds");

  city.classList.add("cityActive");
  car.classList.add("carActive");
  clouds.classList.add("cloudsActive");

  ColisionVerification();
}
// Jump

const jumpButton = document.getElementById("jumpButton");
jumpButton.addEventListener("click", () => Jump());
document.addEventListener("keydown", () => Jump());

function Jump() {
  activatedPlayer.classList.add("playerJump");
  // player.src = Character;
  setTimeout(() => {
    activatedPlayer.classList.remove("playerJump");
  }, 1000);
}
// Colision Verification

const gameWindow = document.getElementById("game-window");
const LimitCarDistance =
  activatedPlayer.offsetLeft + activatedPlayer.clientHeight;
const car = document.getElementById("car");
const minPlayerBottom = car.clientHeight;

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
  gameOverMensage.style.display = "flex";

  Restart(gameOverMensage);
}

// Restart

function Restart(gameOverDiv) {
  const restartButton = document.getElementById("restart");

  restartButton.addEventListener("click", () => {
    player.style.bottom = 0;
    car.style.left = "100%";
    city.style.left = "100%";
    clouds.style.left = "100%";

    city.classList = "cityActive";
    car.classList = "carActive";
    clouds.classList = "cloudsActive";

    gameOverDiv.style.display = "none";
  });
}

// Loader

const orientationMensage = document.getElementById("change-orientation");
if (body.clientWidth > 800) {
  orientationMensage.style.display = "none";
}

function HideLoader() {
  const loader = document.getElementById("loader-container");

  setTimeout(() => {
    loader.style.display = "none";
  }, 3000);
}
