const choices = ["rock", "paper", "scissors"];
const MAX_SCORE = 5;

let roundNumber = 0;
let humanScore = 0;
let computerScore = 0;

const roundNumberEl = document.querySelector("#round-number");
const humanScoreEl = document.querySelector("#human-score");
const computerScoreEl = document.querySelector("#computer-score");
const resultsTextEl = document.querySelector("#results-text");

const bannerImgEl = document.querySelector("#banner-img");
const bannerContainerEl = document.querySelector("#banner-container");
const gameContainerEl = document.querySelector("#game-container");
const resultsContainerEl = document.querySelector("#results-container");

const paperButtonEl = document.querySelector("#paper-button");
const rockButtonEl = document.querySelector("#rock-button");
const scissorsButtonEl = document.querySelector("#scissors-button");
const newGameButtonEl = document.querySelector("#new-game-button");
const newGameWrapperEl = document.querySelector("#new-game-wrapper");

const choiceButtonsWrapperEl = document.querySelector("#choice-buttons-wrapper");
const nextRoundWrapperEl = document.querySelector("#next-round-wrapper");
const nextRoundButtonEl = document.querySelector("#next-round-button");

[rockButtonEl, paperButtonEl, scissorsButtonEl].forEach((button, index) => {
  button.addEventListener("click", () => playRound(choices[index]));
});

function initializeGame() {
  roundNumber = 0;
  humanScore = 0;
  computerScore = 0;
  updateScore("human-score", humanScore);
  updateScore("computer-score", computerScore);
  enableButtons();
  bannerImgEl.classList.remove("img-start");
  bannerImgEl.classList.add("img-play");
  gameContainerEl.classList.remove("display-none");
  newGameWrapperEl.classList.toggle("display-none");
  resultsTextEl.textContent = "A new game has started!\nReach a score of 5 to win!\nMake your choice!";
  resultsContainerEl.classList.remove("display-none");
}

newGameButtonEl.addEventListener("click", () => initializeGame());

// initializeGame();

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function getHumanChoice(playerSelection) {
  return choices.indexOf(playerSelection);
}

function playRound(playerSelection) {
  checkRoundWinner(getHumanChoice(playerSelection), getComputerChoice());
}

function finishGame() {
  if (humanScore === MAX_SCORE) {
    resultsTextEl.textContent = `🎉 CONGRATS,\nYOU WON THIS GAME! 🏆\n Well played! `;
  } else if (computerScore === MAX_SCORE) {
    resultsTextEl.textContent = `🤖 SORRY,\nCOMPUTER WON THIS GAME! 🤖\nBetter luck next time, human.`;
  }
  disableButtons();
  newGameWrapperEl.classList.toggle("display-none");
}

nextRoundButtonEl.addEventListener("click", () => {
  choiceButtonsWrapperEl.classList.toggle("display-none");
  nextRoundWrapperEl.classList.toggle("display-none");
  resultsTextEl.textContent = `Round ${roundNumber + 1}\nMake your choice!`;
});

function checkRoundWinner(humanChoice, computerChoice) {
  roundNumber++;
  resultsTextEl.textContent = `${roundNumber}\nMake your choice!`;
  let roundWinner;
  if (humanChoice === computerChoice) {
    roundWinner = "⚖️ No one";
  } else if (
    (humanChoice === 0 && computerChoice === 2) ||
    (humanChoice === 1 && computerChoice === 0) ||
    (humanChoice === 2 && computerChoice === 1)
  ) {
    roundWinner = "😊 Human";
    humanScore += 1;
  } else {
    roundWinner = "🤖 Computer";
    computerScore += 1;
  }
  updateScore("human-score", humanScore);
  updateScore("computer-score", computerScore);
  if (humanScore === 5 || computerScore === 5) {
    finishGame();
    return;
  }
  let roundResult = `😊 Human played ${choices[humanChoice]}\n🤖 Computer played ${choices[computerChoice]}\n${roundWinner} wins round ${roundNumber}!`;
  resultsTextEl.textContent = `${roundResult}`;
  choiceButtonsWrapperEl.classList.toggle("display-none");
  nextRoundWrapperEl.classList.toggle("display-none");
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