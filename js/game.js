const jumpButton = document.getElementById("jumpButton");
const activatedPlayer = document.getElementById("player");

function startGame() {
  const city = document.getElementById("city");
  const car = document.getElementById("car");
  const clouds = document.getElementById("clouds");

  city.classList.add("cityActive");
  car.classList.add("carActive");
  clouds.classList.add("cloudsActive");
}

jumpButton.addEventListener("click", () => {
    activatedPlayer.classList.add("playerJump");
  setTimeout(()=>{
  activatedPlayer.classList.remove("playerJump");
},1500);
});
