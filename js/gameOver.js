const gameOverScreen = document.getElementById('gameOver');
const restartButton = document.getElementById('restart');

function GameOver(carActualDistance,cloudActualDistance,cityActualDistance,player_actual_height){
    RemoveClasses();
    SetDistance(carActualDistance,cloudActualDistance,cityActualDistance,player_actual_height);
    gameOverScreen.style.display = "grid";
}

function RemoveClasses(){
    city.classList.remove("cityActive");
    clouds.classList.remove("cloudsActive")
    car.classList.remove("carActive")
    player.classList.remove("playerJump");
}

function SetDistance(carDistance,cloudsDistance,cityDistance,playerHeight){
    city.style.left = `${cityDistance}px`;
    player.style.bottom = `${playerHeight}px`;
    car.style.left = `${carDistance}px`;
    clouds.style.left = `${cloudsDistance}px`;
}