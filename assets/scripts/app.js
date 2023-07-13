const startGameBtnEl = document.getElementById("start-game-btn");
const topLeftSquareEl = document.getElementById("top-left");
const topRightSquareEl = document.getElementById("top-right");
const bottomLeftSquareEl = document.getElementById("bottom-left");
const bottomRightSquareEl = document.getElementById("bottom-right");

const scoreSpanEl = document.getElementById("score-span");
const display = (s) => (scoreSpanEl.innerText = s);

let generatedPatternArray = [];
let userPatternArray = [];

function startGame() {
  console.clear();
  let generatedPatternArray = [];
  let userPatternArray = [];

  console.log(generatedPatternArray);
  console.log(userPatternArray);
  console.log("Game is starting...");

  createPattern(generatedPatternArray);
}

// TODO: Write function to create pattern while looping
function createPattern(array1) {
  for (let i = 0; i < 5; i++) {
    let newSquareChooser = Math.floor(Math.random() * 4);
    array1.push(newSquareChooser);

    array1.forEach((item, k) => {
      setTimeout(() => display(item), k * 1000);
    });
    k = 0;
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
