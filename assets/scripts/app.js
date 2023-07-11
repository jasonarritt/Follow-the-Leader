const startGameBtnEl = document.getElementById("start-game-btn");
const topLeftSquareEl = document.getElementById("top-left");
const topRightSquareEl = document.getElementById("top-right");
const bottomLeftSquareEl = document.getElementById("bottom-left");
const bottomRightSquareEl = document.getElementById("bottom-right");

let GeneratedPatternArray = [];
let userPatternArray = [];

function startGame() {
  console.log("Game is starting...");
}

// TODO: Write function to create pattern while looping
function createPattern() {
  for (let i = 0; i < 11; ) {}
}

// TODO: Write function to accept user input and check against current pattern
function checkUserPattern() {}

startGameBtnEl.addEventListener("click", startGame);
// topLeftSquareEl.addEventListener("click", ?);
// topRightSquareEl.addEventListener("click", ?);
// bottomLeftSquareEl.addEventListener("click", ?);
// bottomRightSquareEl.addEventListener("click", ?);
