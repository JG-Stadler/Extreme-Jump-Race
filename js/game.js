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
let player_jump_height;
let car_distance;

    const fiviPCCarHeight = car.clientHeight*0.5;
    const car_height = car.clientHeight - fiviPCCarHeight;


setInterval(() => {
    car_distance = +window.getComputedStyle(car).right.replace("px","");
    player_jump_height = +window.getComputedStyle(player).bottom.replace("px","");

    if(car_distance >= limit_car_distance
        && car_distance <car_out_player_line
        && player_jump_height < car_height){
            console.log("perdeu")
        }
}, 50);