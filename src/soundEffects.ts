const jumpSound = document.getElementById("jump-sound-effect") as HTMLAudioElement;
const explosionSound = document.getElementById("explosion-sound-effect") as HTMLAudioElement;

function PlayJumpSoundEffect(){
    jumpSound.play();
}
function PlayExplosionSoundEffect(){
    explosionSound.play();
}