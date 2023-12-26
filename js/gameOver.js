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
    const gameOverMessage = document.getElementById("gameOver");
  
    city.classList.remove("cityActive");
    car.classList.remove("carActive");
    clouds.classList.remove("cloudsActive");
    player.classList.remove("playerJump");
  
    player.style.bottom = `${playerHeight}px`;
    car.style.left = `${carLeftDistance}px`;
    city.style.left = `${cityLeftDistance}px`;
    clouds.style.left = `${cloudsLeftDistance}px`;
    gameOverMessage.style.display = "flex";
  
    Restart(gameOverMessage);

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