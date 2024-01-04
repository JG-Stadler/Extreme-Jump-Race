const GameWindow = document.getElementById("game-window")


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

let car_limit_distance = player.offsetLeft + player.clientWidth;
let carDistance;
let player_jump_height;
let car_right_distance;
let car_outside_the_player_line = GameWindow.clientWidth - player.offsetLeft;

const ColisionVerivication = window.setInterval(()=>{
    carDistance = car.offsetLeft;
    car_right_distance = window.getComputedStyle(car).right.replace("px","");
    player_jump_height = window.getComputedStyle(player).bottom.replace("px","");

    if(carDistance <= car_limit_distance
        && car_right_distance >= car_outside_the_player_line
        && player_jump_height <= car.clientHeight){
        console.log("perdeu")
    }
},100);