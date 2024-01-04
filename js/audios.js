const GameMusic = document.getElementById("game-music");
const JumpSound = document.getElementById("jump-sound-effect");
const GameOverMusic = document.getElementById("game_over_music");
const ExplosionSound = document.getElementById("explosion_sound");

function PlayGameMusic(){
    GameMusic.play();
}
function PlayGameOverMusic(){
    GameOverMusic.play();
}
function PlayExplosionSound(){
    ExplosionSound.play();
}
function PlayJumpSound(){
    JumpSound.play();
}

function PauseGameMusic(){
    GameMusic.pause();
}