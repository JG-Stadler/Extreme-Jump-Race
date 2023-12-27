const JumpButton = document.getElementById("jumpButton");

JumpButton.addEventListener("click",()=>{
    player.classList.add("playerJump");
    player.src = "images/jetsprinter-frame-jump.png"
    setTimeout(()=>{
    player.classList.remove("playerJump");
    player.src = "images/player-runing.gif";
    },1000);
});