const GameElementsParentDiv = document.querySelector(".game-elements") as HTMLElement;
const GameOverWindow = document.querySelector(".game-over-window") as HTMLElement;

function GameOver(Pposition:number,CLposition:number,Cposition:number,CarPosition:number){
        // Script para parar as animações
    GameElementsParentDiv.classList.remove("active-animations");
    player.classList.remove("player-jumping");
        // Script para manter os  elementos na posição em que estavam
    player.style.bottom = `${String(Pposition)}px`;
    city.style.left = `${String(Cposition)}px`;
    car.style.left = `${String(CarPosition)}px`;
    clouds.style.left = `${String(CLposition)}px`;
        // Explosão do rôbo
    player.src = "./images/explosion.png";
    PlayExplosionSoundEffect();
        // Ligar tela de pontuação final 
    SetFinalScore();    
    GameOverWindow.style.display = "flex";
}