const activatedPlayer = document.getElementById("player");
const body = document.querySelector("body");
const mainMenu = document.getElementById("main-menu");

function startGame() {
  mainMenu.style.display = "none";
  const city = document.getElementById("city");
  const car = document.getElementById("car");
  const clouds = document.getElementById("clouds");

  city.classList.add("cityActive");
  car.classList.add("carActive");
  clouds.classList.add("cloudsActive");

  ColisionVerification();
  playerAnimation;
  PlayMusic();
}
// Jump

const jumpButton = document.getElementById("jumpButton");
jumpButton.addEventListener("click", () =>{
  PlayJumpSound();
  Jump();
} );
document.addEventListener("keydown", () => Jump());

function Jump() {
  activatedPlayer.classList.add("playerJump");
  activatedPlayer.src = "images/jetsprinter-frame-jump.png"
  setTimeout(() => {
    activatedPlayer.classList.remove("playerJump");
  }, 1000);
}
// Colision Verification

const gameWindow = document.getElementById("game-window");
const LimitCarDistance = activatedPlayer.offsetLeft + activatedPlayer.clientWidth;
const car = document.getElementById("car");
const minPlayerBottom = car.clientHeight - 20;

function ColisionVerification() {
  setInterval(() => {
    const carDistance = car.offsetLeft;
    const playerHeigthJump = +window
      .getComputedStyle(player)
      .bottom.replace("px", " ");

    const cloudsDistance = document.getElementById("clouds").offsetLeft;
    const cityDistance = document.getElementById("city").offsetLeft;

    if (
      playerHeigthJump < minPlayerBottom &&
      carDistance <= LimitCarDistance &&
      carDistance > -200
    ) {
      GameOver(cloudsDistance, playerHeigthJump, cityDistance, carDistance);
      PauseGameMusic();
    }
  }, 5);
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
  }, 500);
}

// Game Music / Sound effects

const GameMusic = document.getElementById("game-music");
GameMusic.volume = 0.2;
const JumpSoundEffect = document.getElementById("jump-sound-effect");
JumpSoundEffect.volume = 10;

function PlayMusic(){
  GameMusic.play()
}

function PlayJumpSound(){
  JumpSoundEffect.play()
}
function PauseGameMusic(){
  GameMusic.pause();
}