const player = document.getElementById("player");
let i = 0;

function playerAnimation(Character) {
  setInterval(() => {
    changeFrame(Character);
  }, 500);
}
function changeFrame(obj) {
  const frames = [obj.frameRun1, obj.frameRun2, obj.frameRun3, obj.frameRun2];
  console.log(frames);
  player.src = frames[i];
  i = i + 1;
  if (i > 3) {
    i = 0;
  }
}
