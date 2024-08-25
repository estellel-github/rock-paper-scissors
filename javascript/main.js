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
const gameContainerEl = document.querySelector("#game-container");
const resultsContainerEl = document.querySelector("#results-container");

const paperButtonEl = document.querySelector("#paper-button");
const rockButtonEl = document.querySelector("#rock-button");
const scissorsButtonEl = document.querySelector("#scissors-button");
const newGameButtonEl = document.querySelector("#new-game-button");
const newGameContainerEl = document.querySelector("#new-game-container");

const choiceContainerEl = document.querySelector("#choice-container");
const nextRoundContainerEl = document.querySelector("#next-round-container");
const nextRoundButtonEl = document.querySelector("#next-round-button");
const backButtonEl = document.querySelector("#back-button");
const backButtonWrapperEl = document.querySelector("#back-button-wrapper");

const footerEl = document.querySelector("#footer");

const buttons = [rockButtonEl, paperButtonEl, scissorsButtonEl];

buttons.forEach((button, index) => {
  button.addEventListener("click", () => playRound(choices[index]));
});

function initializeGame() {
  roundNumber = 0;
  humanScore = 0;
  computerScore = 0;
  updateScore("human-score", humanScore);
  updateScore("computer-score", computerScore);
  disableButtons(false);
  bannerImgEl.classList.replace("img-start", "img-play");
  gameContainerEl.classList.replace("game-container-removed", "game-container");
  newGameContainerEl.classList.replace("new-game-container", "new-game-container-removed");
  resultsTextEl.textContent =
    "A new game has started!\nReach a score of 5 to win!\nMake your choice!";
  resultsContainerEl.classList.replace("results-container-removed", "results-container");
  backButtonWrapperEl.classList.remove("display-none");
  footerEl.classList.replace("footer", "footer-removed");
}

backButtonEl.addEventListener("click", () => {
  backButtonWrapperEl.classList.add("display-none");
  location.reload();
});

newGameButtonEl.addEventListener("click", () => initializeGame());

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
  disableButtons(true);
  newGameContainerEl.classList.replace("new-game-container-removed", "new-game-container");
}

nextRoundButtonEl.addEventListener("click", () => {
  choiceContainerEl.classList.replace("choice-container-removed", "choice-container");
  nextRoundContainerEl.classList.replace("next-round-container", "next-round-container-removed");
  resultsTextEl.textContent = `Round ${roundNumber + 1}\nMake your choice!`;
});

function checkRoundWinner(humanChoice, computerChoice) {
  roundNumber++;
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
  choiceContainerEl.classList.replace("choice-container", "choice-container-removed");
  nextRoundContainerEl.classList.replace("next-round-container-removed", "next-round-container");
}

function updateScore(elementId, newScore) {
  const element = document.getElementById(elementId);
  element.classList.add("updating");
  setTimeout(() => {
    element.textContent = newScore;
    element.classList.remove("updating");
    element.classList.add("new");
    setTimeout(() => {
      element.classList.remove("new");
    }, 500);
  }, 500);
}

function disableButtons(position) {
  buttons.forEach(button => {
    button.disabled = position;
  });
}