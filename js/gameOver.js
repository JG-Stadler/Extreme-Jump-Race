const gameOverScreen = document.getElementById('gameOver');
const restartButton = document.getElementById('restart');

function GameOver(playerJumpHeight,CarDistance){
    RemoveClasses();
    gameOverScreen.style.display = "grid";

    car.style.left = `${carDistance}px`
    player.style.bottom = `${playerJumpHeight}px`
}

function RemoveClasses(){
    city.classList.remove("cityActive");
    clouds.classList.remove("cloudsActive")
    car.classList.remove("carActive")
    player.classList.remove("playerJump");
}