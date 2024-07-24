// Cached DOM elements
// const elements = {
//   roundNumberEl: document.querySelector("#round-number"),
//   humanScoreEl: document.querySelector("#human-score"),
//   computerScoreEl: document.querySelector("#computer-score"),
//   resultsTextEl: document.querySelector("#results-text"),
//   bannerImgEl: document.querySelector("#banner-image"),
//   bannerContainerEl: document.querySelector("#banner-container"),
//   gameContainerEl: document.querySelector("#game-container"),
//   resultsContainerEl: document.querySelector("#results-container"),
//   paperButtonEl: document.querySelector("#paper-button"),
//   rockButtonEl: document.querySelector("#rock-button"),
//   scissorsButtonEl: document.querySelector("#scissors-button"),
//   newGameButtonEl: document.querySelector("#new-game-button"),
//   newGameContainerEl: document.querySelector("#new-game-container"),
//   choiceContainerEl: document.querySelector("#choice-container"),
//   nextRoundContainerEl: document.querySelector("#next-round-container"),
//   nextRoundButtonEl: document.querySelector("#next-round-button"),
//   backButtonEl: document.querySelector("#back-button"),
//   backButtonWrapperEl: document.querySelector("#back-button-wrapper"),
//   footerEl: document.querySelector("#footer"),
// };

// const buttons = [elements.rockButtonEl, elements.paperButtonEl, elements.scissorsButtonEl];

// Event Listeners
// buttons.forEach((button, index) => {
//   button.addEventListener("click", () => playRound(choices[index]));
// });

// elements.backButtonEl.addEventListener("click", () => {
//   elements.backButtonWrapperEl.classList.add("display-none");
//   location.reload();
// });

// elements.newGameButtonEl.addEventListener("click", initializeGame);

// elements.nextRoundButtonEl.addEventListener("click", () => {
//   elements.choiceContainerEl.classList.replace("choice-container-removed", "choice-container");
//   elements.nextRoundContainerEl.classList.replace("next-round-container", "next-round-container-removed");
//   elements.resultsTextEl.textContent = `Round ${roundNumber + 1}\nMake your choice!`;
// });

// function initializeGame() {
//   roundNumber = 0;
//   humanScore = 0;
//   computerScore = 0;
//   updateScore(elements.humanScoreEl, humanScore);
//   updateScore(elements.computerScoreEl, computerScore);
//   toggleButtons(false);
//   elements.bannerImgEl.classList.replace("img-start", "img-play");
//   elements.gameContainerEl.classList.replace("game-container-removed", "game-container");
//   elements.newGameContainerEl.classList.replace("new-game-container", "new-game-container-removed");
//   elements.resultsTextEl.textContent = "A new game has started!\nReach a score of 5 to win!\nMake your choice!";
//   elements.resultsContainerEl.classList.replace("results-container-removed", "results-container");
//   elements.backButtonWrapperEl.classList.remove("display-none");
//   elements.footerEl.classList.replace("footer", "footer-removed");
// }

// function getComputerChoice() {
//   return Math.floor(Math.random() * 3);
// }

// function playRound(playerSelection) {
//   const humanChoice = choices.indexOf(playerSelection);
//   const computerChoice = getComputerChoice();
//   checkRoundWinner(humanChoice, computerChoice);
// }

// function finishGame() {
//   if (humanScore === MAX_SCORE) {
//     elements.resultsTextEl.textContent = `🎉 CONGRATS,\nYOU WON THIS GAME! 🏆\n Well played! `;
//   } else if (computerScore === MAX_SCORE) {
//     elements.resultsTextEl.textContent = `🤖 SORRY,\nCOMPUTER WON THIS GAME! 🤖\nBetter luck next time, human.`;
//   }
//   toggleButtons(true);
//   elements.newGameContainerEl.classList.replace("new-game-container-removed", "new-game-container");
// }

// function checkRoundWinner(humanChoice, computerChoice) {
//   roundNumber++;
//   let roundWinner;
//   if (humanChoice === computerChoice) {
//     roundWinner = "⚖️ No one";
//   } else if (
//     (humanChoice === 0 && computerChoice === 2) ||
//     (humanChoice === 1 && computerChoice === 0) ||
//     (humanChoice === 2 && computerChoice === 1)
//   ) {
//     roundWinner = "😊 Human";
//     humanScore += 1;
//   } else {
//     roundWinner = "🤖 Computer";
//     computerScore += 1;
//   }
//   updateScore(elements.humanScoreEl, humanScore);
//   updateScore(elements.computerScoreEl, computerScore);
//   if (humanScore === MAX_SCORE || computerScore === MAX_SCORE) {
//     finishGame();
//     return;
//   }
//   elements.resultsTextEl.textContent = `😊 Human played ${choices[humanChoice]}\n🤖 Computer played ${choices[computerChoice]}\n${roundWinner} wins round ${roundNumber}!`;
//   elements.choiceContainerEl.classList.replace("choice-container", "choice-container-removed");
//   elements.nextRoundContainerEl.classList.replace("next-round-container-removed", "next-round-container");
// }

// function updateScore(element, newScore) {
//   element.classList.add("updating");
//   setTimeout(() => {
//     element.textContent = newScore;
//     element.classList.remove("updating");
//     element.classList.add("new");
//     setTimeout(() => {
//       element.classList.remove("new");
//     }, 500);
//   }, 500);
// }

// function toggleButtons(disabled) {
//   buttons.forEach(button => {
//     button.disabled = disabled;
//   });
// }