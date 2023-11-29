const player = document.getElementById("player");

let i = 0;

const playerAnimation = window.setInterval(() => {
    changeFrame();
  }, 300);

function changeFrame() {
  const frames = ["images/jetsprinter-frame-0.png","images/jetsprinter-frame-1.png","images/jetsprinter-frame-2.png","images/jetsprinter-frame-1.png"];
  player.src = frames[i];
  i = i + 1;
  if (i > 3) {
    i = 0;
  }
}
