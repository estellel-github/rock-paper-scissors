/* Paper beats rock
Scissors beat paper
Rock beats scissors */

const choices = ["rock", "paper", "scissors"];

function getHumanChoice() {
  let humanInput;
  let humanChoice;

  while (true) {
    humanInput = prompt("Please type: rock, paper, or scissors");
    // No input (empty or canceled), offer prompt again
    if (humanInput === "" || humanInput === null) {
      alert(`Please type something!`);
      continue;
    }
    // Valid input: switch to lower case and convert to integer matching "choices" array
    else if (humanInput !== "" && humanInput !== undefined) {
      if (humanInput.toLowerCase() === "rock") {
        humanChoice = 0;
        break;
      } else if (humanInput.toLowerCase() === "paper") {
        humanChoice = 1;
        break;
      } else if (humanInput.toLowerCase() === "scissors") {
        humanChoice = 2;
        break;
        // Invalid input, alert and go back to prompt
      } else {
        alert(`Please type a valid choice!`);
      }
    }
  }
  // Return user choice as integer
  return humanChoice;
}

function getComputerChoice() {
  // Return random integer between 0 and 2 both included
  let computerChoice = Math.floor(Math.random() * 3);
  // Return integer matching "choices" array
  return computerChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
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
  return `Human chose ${choices[humanChoice]} and computer chose ${choices[computerChoice]}.\n
  ${roundWinner} wins this round!\n
  .・゜゜・ SCORES ・゜゜・．\n
  | Human | ${humanScore} | Computer | ${computerScore}`;
}

function endWinner(humanScore, computerScore) {
  if (humanScore > computerScore) {
    return "🎉 CONGRATS, YOU WON! You're the rock-paper-scissors champion! 🏆";
  }
  else if (computerScore > humanScore) {
    return "🤖 SORRY, COMPUTER WON! Better luck next time, human."
  }
  else {
    return "🤝 IT WAS A DRAW! Great minds think alike, huh?";
  }
}

function playGame() {
  for (let i = 1; i < 6; i++) {
    alert(`Round ${i}! Let's play!`);
    alert(playRound(getHumanChoice(), getComputerChoice()));
    if (i === 5) {
      alert(`That was the last round!\n
      .・゜゜・ END SCORES ・゜゜・．\n
      | Human | ${humanScore} | Computer | ${computerScore}`);
      alert(`.・゜゜・ END RESULT ・゜゜・．\n
      ${endWinner(humanScore, computerScore)}\n
      Refresh the page to start another game!`);
    }
  }
}

playGame();