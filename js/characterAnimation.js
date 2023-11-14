const player = document.getElementById("player");
let i = 0;

function playerAnimation(Character) {
  setInterval(() => {
    changeFrame(Character);
  }, 300);
}

function changeFrame(obj) {
  const frames = [obj.frameRun1, obj.frameRun2, obj.frameRun3, obj.frameRun2];
  player.src = frames[i];
  i = i + 1;
  if (i > 3) {
    i = 0;
  }
}
