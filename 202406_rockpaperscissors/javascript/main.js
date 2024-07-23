const choices = ["rock", "paper", "scissors"];
const MAX_SCORE = 5;

let roundNumber = 0;
let humanScore = 0;
let computerScore = 0;

const roundNumberEl = document.querySelector("#round-number");
const humanScoreEl = document.querySelector("#human-score");
const computerScoreEl = document.querySelector("#computer-score");
const resultsTextEl = document.querySelector("#results-text");

const bannerImgEl = document.querySelector("#banner-image");
const bannerContainerEl = document.querySelector("#banner-container");
const gameWrapperEl = document.querySelector("#game-wrapper");
const resultsContainerEl = document.querySelector("#results-container");

const paperButtonEl = document.querySelector("#paper-button");
const rockButtonEl = document.querySelector("#rock-button");
const scissorsButtonEl = document.querySelector("#scissors-button");
const newGameButtonEl = document.querySelector("#new-game-button");
const newGameWrapperEl = document.querySelector("#new-game-wrapper");

const choiceWrapperEl = document.querySelector("#choice-wrapper");
const nextRoundWrapperEl = document.querySelector("#next-round-wrapper");
const nextRoundButtonEl = document.querySelector("#next-round-button");
const backButtonEl = document.querySelector("#back-button");
const backButtonWrapperEl = document.querySelector("#back-button-wrapper");

const footerEl = document.querySelector("#footer");

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
  gameWrapperEl.classList.remove("display-none");
  newGameWrapperEl.classList.toggle("display-none");
  resultsTextEl.textContent =
    "A new game has started!\nReach a score of 5 to win!\nMake your choice!";
  resultsContainerEl.classList.remove("display-none");
  backButtonWrapperEl.classList.remove("display-none");
  footerEl.classList.add("display-none");
}

backButtonEl.addEventListener("click", () => {
  backButtonWrapperEl.classList.add("display-none");
  location.reload();
});

newGameButtonEl.addEventListener("click", () => initializeGame());

// initializeGame();
  bannerImgEl.classList.remove("img-start");
  bannerImgEl.classList.add("img-play");
  gameWrapperEl.classList.remove("display-none");
  newGameWrapperEl.classList.toggle("display-none");
  resultsTextEl.textContent =
    "A new game has started!\nReach a score of 5 to win!\nMake your choice!";
  resultsContainerEl.classList.remove("display-none");
  backButtonWrapperEl.classList.remove("display-none");
  footerEl.classList.add("display-none");
}

backButtonEl.addEventListener("click", () => {
  backButtonWrapperEl.classList.add("display-none");
  location.reload();
});

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
    resultsTextEl.textContent = `🎉 CONGRATS,\nYOU WON THIS GAME! 🏆\n Well played! `;
  } else if (computerScore === MAX_SCORE) {
    resultsTextEl.textContent = `🤖 SORRY,\nCOMPUTER WON THIS GAME! 🤖\nBetter luck next time, human.`;
    resultsTextEl.textContent = `🤖 SORRY,\nCOMPUTER WON THIS GAME! 🤖\nBetter luck next time, human.`;
  }
  disableButtons();
  newGameWrapperEl.classList.toggle("display-none");
}

nextRoundButtonEl.addEventListener("click", () => {
  choiceWrapperEl.classList.toggle("display-none");
  nextRoundWrapperEl.classList.toggle("display-none");
  resultsTextEl.textContent = `Round ${roundNumber + 1}\nMake your choice!`;
});

function checkRoundWinner(humanChoice, computerChoice) {
  roundNumber++;
  resultsTextEl.textContent = `${roundNumber}\nMake your choice!`;
  resultsTextEl.textContent = `${roundNumber}\nMake your choice!`;
  let roundWinner;
  if (humanChoice === computerChoice) {
    roundWinner = "⚖️ No one";
    roundWinner = "⚖️ No one";
  } else if (
    (humanChoice === 0 && computerChoice === 2) ||
    (humanChoice === 1 && computerChoice === 0) ||
    (humanChoice === 2 && computerChoice === 1)
  ) {
    roundWinner = "😊 Human";
    roundWinner = "😊 Human";
    humanScore += 1;
  } else {
    roundWinner = "🤖 Computer";
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
  let roundResult = `😊 Human played ${choices[humanChoice]}\n🤖 Computer played ${choices[computerChoice]}\n${roundWinner} wins round ${roundNumber}!`;
  resultsTextEl.textContent = `${roundResult}`;
  choiceWrapperEl.classList.toggle("display-none");
  nextRoundWrapperEl.classList.toggle("display-none");
}

function updateScore(elementId, newScore) {
  const element = document.getElementById(elementId);
  element.classList.add("updating");
  element.classList.add("updating");
  setTimeout(() => {
    element.textContent = newScore;
    element.classList.remove("updating");
    element.classList.add("new");
    element.classList.remove("updating");
    element.classList.add("new");
    setTimeout(() => {
      element.classList.remove("new");
      element.classList.remove("new");
    }, 500);
  }, 500);
}

function disableButtons() {
  [rockButtonEl, paperButtonEl, scissorsButtonEl].forEach((button) => {
  [rockButtonEl, paperButtonEl, scissorsButtonEl].forEach((button) => {
    button.disabled = true;
  });
}

function enableButtons() {
  [rockButtonEl, paperButtonEl, scissorsButtonEl].forEach((button) => {
  [rockButtonEl, paperButtonEl, scissorsButtonEl].forEach((button) => {
    button.disabled = false;
  });
}

