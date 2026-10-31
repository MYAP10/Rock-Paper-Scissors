
function getComputerChoice() {
    const computerChoiceNumber = Math.floor(Math.random() * 3);

    switch (computerChoiceNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        default:
            return "scissors";
    }
}

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const outputbox = document.getElementById("outputbox");

let humanScore = 0;
let computerScore = 0;
let gameOver = false;

function playRound(humanSelection, computerSelection) {
    if (gameOver) return;

    let result = "";

    if (humanSelection === computerSelection) {
        result = "It's a draw!";
    } else if (
        (humanSelection === "rock" && computerSelection === "scissors") ||
        (humanSelection === "paper" && computerSelection === "rock") ||
        (humanSelection === "scissors" && computerSelection === "paper")
    ) {
        humanScore++;
        result = "You won this round!";
    } else {
        computerScore++;
        result = "You lost this round!";
    }

    outputbox.innerHTML = `
        <p>${result}</p>
        <p>You chose: ${humanSelection}</p>
        <p>Computer chose: ${computerSelection}</p>
        <p>Human Score: ${humanScore}</p>
        <p>Computer Score: ${computerScore}</p>
    `;

    if (humanScore === 5) {
        outputbox.innerHTML += "<h2>Congratulations! You won the game! 🏆</h2>";
        gameOver = true;
    } else if (computerScore === 5) {
        outputbox.innerHTML += "<h2>Mission failed! Computer wins! 🤖</h2>";
        gameOver = true;
    }

    if (gameOver) {
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
}

rock.addEventListener("click", function () {
    playRound("rock", getComputerChoice());
});

paper.addEventListener("click", function () {
    playRound("paper", getComputerChoice());
});

scissors.addEventListener("click", function () {
    playRound("scissors", getComputerChoice());
});
