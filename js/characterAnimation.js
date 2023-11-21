const player = document.getElementById("player");
let i = 0;

function playerAnimation() {
  setInterval(() => {
    changeFrame();
  }, 300);
}

function changeFrame() {
  // const frames = [obj.frameRun1, obj.frameRun2, obj.frameRun3, obj.frameRun2];
  const frames = ["images/jetsprinter-frame-0.png","images/jetsprinter-frame-1.png","images/jetsprinter-frame-2.png","images/jetsprinter-frame-1.png"];
  player.src = frames[i];
  i = i + 1;
  if (i > 3) {
    i = 0;
  }
}
