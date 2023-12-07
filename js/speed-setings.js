const GameWindowWidth = gameWindow.clientWidth;

if(GameWindowWidth < 800){
    let widthDifference = 
    800 - GameWindowWidth;

    // console.log(widthDiference)
    let carSpeedDifference =
    widthDifference/100;

    console.log(carSpeedDifference)

    car.style.animationDuration =
    carSpeedDifference/1.5
}