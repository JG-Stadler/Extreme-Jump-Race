function startGame() {
  const city = document.getElementById("city");
  const car = document.getElementById("car");
  const clouds = document.getElementById("clouds");

  city.classList.add("cityActive");
  car.classList.add("carActive");
  clouds.classList.add("cloudsActive");
}

const jumpButton = document.getElementById("jumpButton");

jumpButton.addEventListener("click", () => {
  player.classList.add("playerJump");
});
