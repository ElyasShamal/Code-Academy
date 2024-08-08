const { constants } = require("buffer");

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function compareGuesses(human, computer, target) {
  const humanDiff = Math.abs(human - target);
  const computerDiff = Math.abs(computer - target);

  if (humanDiff < computerDiff) {
    return true;
  } else if (humanDiff > computerDiff) {
    return false;
  } else {
    return true;
  }
}

function updateScore(winner) {
  if (winner === "human") {
    humanScore += 1;
  } else if (winner === "computer") {
    computerScore += 1;
  }
}

function advanceRound() {
  currentRoundNumber += 1;
}

const humanWins = compareGuesses(human, computer, target);

if (humanWins) {
  updateScore("human");
} else {
  updateScore("computer");
}

advanceRound();