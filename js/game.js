const JumpButton = document.getElementById("jumpButton");

JumpButton.addEventListener("click",()=>{
    player.classList.add("playerJump");
    player.src = "images/jetsprinter-frame-jump.png"
    setTimeout(()=>{
    player.classList.remove("playerJump");
    player.src = "images/player-runing.gif";
    },1000);
});

// Colision verification / Verificação de colisão
const gamewindow = document.getElementById("game-window");

let limit_car_distance = player.offsetLeft + player.clientWidth;
let min_player_height = car.clientHeight;
let car_out_player_line = gamewindow.clientWidth - player.offsetLeft;

// setInterval(() => {
//     if(car.right >= limit_car_distance
//         && car.right <car_out_player_line){
//             console.log("perdeu")
//         }
// }, 50);