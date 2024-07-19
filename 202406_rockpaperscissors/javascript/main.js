/* Paper beats rock
Scissors beat paper
Rock beats scissors */

const choices = ["rock", "paper", "scissors"];
const MAX_SCORE = 5;

let gameHistory = [];
let roundNumber = 0;
let humanScore = 0;
let computerScore = 0;

const humanScoreEl = document.querySelector("#human-score");
const computerScoreEl = document.querySelector("#computer-score");
const resultsTextEl = document.querySelector("#results-text");
const gameHistoryListEl = document.querySelector("#game-history-list");

const paperButtonEl = document.querySelector("#paper-button");
const rockButtonEl = document.querySelector("#rock-button");
const scissorsButtonEl = document.querySelector("#scissors-button");
const newGameButtonEl = document.querySelector("#new-game-button");

[rockButtonEl, paperButtonEl, scissorsButtonEl].forEach((button, index) => {
  button.addEventListener("click", () => playRound(choices[index]));
});

newGameButtonEl.addEventListener("click", () => initializeGame());

function initializeGame() {
  gameHistory = [];
  roundNumber = 0;
  humanScore = 0;
  computerScore = 0;
  updateScore("human-score", humanScore);
  updateScore("computer-score", computerScore);
  updateGameHistory();
  enableButtons();
  document.getElementById("make-choice-header").classList.remove("hidden");
  document.getElementById("new-game-button").classList.add("hidden");
  resultsTextEl.textContent = "A new game has started! Make your choice!";
}

initializeGame();

function updateGameHistory() {
  gameHistoryListEl.innerHTML = "";
  gameHistory.slice().reverse().forEach((entry) => {
    const listItem = document.createElement("li");
    listItem.textContent = entry;
    gameHistoryListEl.appendChild(listItem);
  });
}

function getComputerChoice() {
  // (Return random integer between 0 and 2 both included, matching choices array)
  let computerChoice = Math.floor(Math.random() * 3);
  return computerChoice;
}

function getHumanChoice(playerSelection) {
  let humanChoice = choices.indexOf(playerSelection);
  return humanChoice;
}

function playRound(playerSelection) {
  checkRoundWinner(getHumanChoice(playerSelection), getComputerChoice());
}

function finishGame() {
  if (humanScore === MAX_SCORE) {
    resultsTextEl.textContent = `🎉 CONGRATS, YOU WON THIS GAME! 🏆\r\nWell played! `;
  } else if (computerScore === MAX_SCORE) {
    resultsTextEl.textContent = `🤖 SORRY, COMPUTER WON THIS GAME! 🤖\r\nBetter luck next time, human.`;
  }
  disableButtons();
  document.getElementById("new-game-button").classList.remove("hidden");
  document.getElementById("make-choice-header").classList.add("hidden");
}

function checkRoundWinner(humanChoice, computerChoice) {
  if (humanScore === 5 || computerScore === 5) {
    finishGame();
    return;
  }
  resultsTextEl.textContent = "";
  let roundWinner;
  if (humanChoice === computerChoice) {
    roundWinner = "No one";
  } else if (
    (humanChoice === 0 && computerChoice === 2) ||
    (humanChoice === 1 && computerChoice === 0) ||
    (humanChoice === 2 && computerChoice === 1)
  ) {
    roundWinner = "Human";
    humanScore += 1;
  } else {
    roundWinner = "Computer";
    computerScore += 1;
  }
  updateScore("human-score", humanScore);
  updateScore("computer-score", computerScore);
  roundNumber++;
  gameHistory.push(
    `Round ${roundNumber}: Human played ${choices[humanChoice]} - Computer played ${choices[computerChoice]}`
  );
  updateGameHistory();
  
}

// New function to update scores with animation
function updateScore(elementId, newScore) {
  const element = document.getElementById(elementId);
  
  // Add the class to trigger the fade-out effect
  element.classList.add('updating');
  
  // Wait for the fade-out effect to complete
  setTimeout(() => {
    // Update the score
    element.textContent = newScore;
    
    // Remove the fade-out class and add the fade-in class
    element.classList.remove('updating');
    element.classList.add('new');
    
    // Remove the fade-in class after the animation completes
    setTimeout(() => {
      element.classList.remove('new');
    }, 500); // Match this duration to the fade-in animation duration
  }, 500); // Match this duration to the fade-out animation duration
}

function disableButtons() {
  [rockButtonEl, paperButtonEl, scissorsButtonEl].forEach(button => {
    button.disabled = true;
  });
}

function enableButtons() {
  [rockButtonEl, paperButtonEl, scissorsButtonEl].forEach(button => {
    button.disabled = false;
  });
}