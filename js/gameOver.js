const gameOverScreen = document.getElementById('gameOver');
const restartButton = document.getElementById('restart');

function GameOver(playerJumpHeight,carDistance,cityDistance,cloudsDistance){
    clearInterval(ColisionVerivication);
    PauseGameMusic();
    PlayGameOverMusic();
    RemoveClasses();
    PlayExplosionSound();
    player.src = "images/explosion.png";
    gameOverScreen.style.display = "flex";

    player.style.bottom = `${playerJumpHeight}px`;
    car.style.left = `${carDistance}px`;
    city.style.left = `${cityDistance}px`;
    clouds.style.left = `${cloudsDistance}px`;
}

function RemoveClasses(){
    city.classList.remove("cityActive");
    clouds.classList.remove("cloudsActive")
    car.classList.remove("carActive")
    player.classList.remove("playerJump");
}

// Restart game

restartButton.addEventListener("click",()=>{
    location.reload();
});
