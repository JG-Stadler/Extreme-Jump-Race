const player = document.getElementById("player") as HTMLImageElement;
const JumpButton = document.getElementById("jump-button") as HTMLElement;

JumpButton.addEventListener("click",()=>{
    player.classList.add("player-jumping");
    player.src = "images/jetsprinter-frame-jump.png";
    PlayJumpSoundEffect();
});

player.addEventListener("animationend",()=>{
    player.classList.remove("player-jumping");
    player.src ="images/player-runing.gif";
});