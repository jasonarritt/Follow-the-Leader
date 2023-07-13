const startGameBtnEl = document.getElementById("start-game-btn");
const topLeftSquareEl = document.getElementById("top-left");
const topRightSquareEl = document.getElementById("top-right");
const bottomLeftSquareEl = document.getElementById("bottom-left");
const bottomRightSquareEl = document.getElementById("bottom-right");

let generatedPatternArray = [];
let userPatternArray = [];

function startGame() {
  let generatedPatternArray = [];
  let userPatternArray = [];
  console.log(generatedPatternArray);
  console.log(userPatternArray);
  console.log("Game is starting...");

  createPattern();
}

// TODO: Write function to create pattern while looping
function createPattern() {
  for (let i = 0; i < 7; i++) {
    let newSquareChooser = Math.floor(Math.random() * 4);
    generatedPatternArray.push(newSquareChooser);

    generatedPatternArray.forEach((square) =>
      setTimeout(console.log(square), 1000)
    );
    console.log("Next Round!");
  }
}

function addToPattern() {}

// TODO: Write function to accept user input and check against current pattern
function checkUserPattern() {}

startGameBtnEl.addEventListener("click", startGame);
// topLeftSquareEl.addEventListener("click", ?);
// topRightSquareEl.addEventListener("click", ?);
// bottomLeftSquareEl.addEventListener("click", ?);
// bottomRightSquareEl.addEventListener("click", ?);
