const player = document.getElementById("player");
let i = 0;

const playerAnimation = window.setInterval(() => {
    changeFrame();
  }, 300);

function changeFrame(obj) {
  const frames = [obj.frameRun1, obj.frameRun2, obj.frameRun3, obj.frameRun2];
  player.src = frames[i];
  i = i + 1;
  if (i > 3) {
    i = 0;
  }
}
