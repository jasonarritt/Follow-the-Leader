const startGameBtnEl = document.getElementById("start-game-btn");
const topLeftSquareEl = document.getElementById("top-left");
const topRightSquareEl = document.getElementById("top-right");
const bottomLeftSquareEl = document.getElementById("bottom-left");
const bottomRightSquareEl = document.getElementById("bottom-right");

let generatedPatternArray = [];
let userPatternArray = [];

function startGame() {
  generatedPatternArray = [];
  userPatternArray = [];
  console.log(generatedPatternArray);
  console.log(userPatternArray);
  console.log("Game is starting...");

  console.log(generatedPatternArray);
  console.log(userPatternArray);
  createPattern();
}

// TODO: Write function to create pattern while looping
function createPattern() {
  for (let i = 0; i < 10; i++) {
    let newSquareChooser = Math.floor(Math.random() * 4);
    generatedPatternArray.push(newSquareChooser);
    console.log(generatedPatternArray);
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
