const choices = ["rock", "paper", "scissors"];
const MAX_SCORE = 5;

let gameHistory = [];
let roundNumber = 0;
let humanScore = 0;
let computerScore = 0;

const roundNumberEl = document.querySelector("#round-number");
const humanScoreEl = document.querySelector("#human-score");
const computerScoreEl = document.querySelector("#computer-score");
const resultsTextEl = document.querySelector("#results-text");
const gameHistoryListEl = document.querySelector("#game-history-list");
const resultsContainerEl = document.querySelector("#results-container");
const gameHistoryEl = document.querySelector("#game-history");

const reachScoreHeaderEl = document.querySelector("#reach-score-header");
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
  newGameButtonEl.classList.toggle("display-none");
  reachScoreHeaderEl.classList.toggle("display-none");
  roundNumberEl.textContent = "Round 1";
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
  return Math.floor(Math.random() * 3);
}

function getHumanChoice(playerSelection) {
  return choices.indexOf(playerSelection);
}

function playRound(playerSelection) {
  if (roundNumber === 0) {
    gameHistoryEl.classList.toggle("display-none");
  }
  checkRoundWinner(getHumanChoice(playerSelection), getComputerChoice());
}

function finishGame() {
  if (humanScore === MAX_SCORE) {
    resultsTextEl.textContent = `🎉 CONGRATS, YOU WON THIS GAME! 🏆 Well played! `;
  } else if (computerScore === MAX_SCORE) {
    resultsTextEl.textContent = `🤖 SORRY, COMPUTER WON THIS GAME! 🤖 Better luck next time, human.`;
  }
  disableButtons();
  newGameButtonEl.classList.toggle("display-none");
  reachScoreHeaderEl.classList.toggle("display-none");
  gameHistoryEl.classList.toggle("display-none");

}

function checkRoundWinner(humanChoice, computerChoice) {
  roundNumber++;
  roundNumberEl.textContent = `Round ${roundNumber}`;
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
  if (humanScore === 5 || computerScore === 5) {
    finishGame();
    return;
  }
  let roundResult = `${roundWinner} wins round ${roundNumber}!`;
  resultsTextEl.textContent = `${roundResult}`;
  gameHistory.push(
    `Round ${roundNumber}: Human played ${choices[humanChoice]} - Computer played ${choices[computerChoice]}`
  );
  updateGameHistory();
}

function updateScore(elementId, newScore) {
  const element = document.getElementById(elementId);
  element.classList.add('updating');
  setTimeout(() => {
    element.textContent = newScore;
    element.classList.remove('updating');
    element.classList.add('new');
    setTimeout(() => {
      element.classList.remove('new');
    }, 500);
  }, 500);
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