function getComputerChoice() {
    const ComputerChoiceNumber = Math.floor(Math.random() * 3)
    let ComputerChoice = "" ;
    switch (ComputerChoiceNumber) {
        case 1 : 
        ComputerChoice = "rock"
        break;
        case 2 : 
        ComputerChoice = "paper"
        break;
        default :
        ComputerChoice = "scissors"
    }
    return ComputerChoice ;
}

function getHumanChoice() {
    let Choice = prompt("What will you choice Rock , Paper , Scissors") ;
     return Choice.trim().toLowerCase();  
}

let humanScore = 0 ;
let computerScore = 0 ;


function playRound(humanSelection, computerSelection) {
    if (humanChoice ==="rock" && computerChoice ==="rock") {
        console.log("It is a draw! Both have choice ROCK") ;
        console.log(`Computer =${computerChoice}`);
        console.log(` Agent 47 =${humanChoice}`);
        console.log(`ComputerScore =${computerScore}`);
        console.log(`HumanScore = ${humanScore}`);
}   else if (humanChoice ==='paper' && computerChoice ==='paper') {
        console.log("It is a draw! Both have choice PAPER");
        console.log(`Computer =${computerChoice}`);
        console.log(` Agent 47 =${humanChoice}`);
        console.log(`ComputerScore =${computerScore}`);
        console.log(`HumanScore = ${humanScore}`);
}   else if (humanChoice ==='scissors' && computerChoice ==='scissors') {
        console.log("It is a draw! Both have choice SCISSORS");
        console.log(`Computer =${computerChoice}`);
        console.log(` Agent 47 =${humanChoice}`);
        console.log(`ComputerScore =${computerScore}`);
        console.log(`HumanScore = ${humanScore}`);
}   else if (humanChoice ==='rock' && computerChoice ==='paper'){
        computerScore = computerScore + 1 ;
        console.log("You lose! Paper beats Rock");
        console.log(`Computer =${computerChoice}`);
        console.log(` Agent 47 =${humanChoice}`);
        console.log(`ComputerScore =${computerScore}`);
        console.log(`HumanScore = ${humanScore}`);
}    else if (humanChoice ==='rock' && computerChoice ==='scissors'){
        humanScore = humanScore + 1 ;
        console.log("You won! Rock beats Scissors");
        console.log(`Computer =${computerChoice}`);
        console.log(` Agent 47 =${humanChoice}`);
        console.log(`ComputerScore =${computerScore}`);
        console.log(`HumanScore = ${humanScore}`);
}    else if (humanChoice ==='paper' && computerChoice ==='rock'){
        humanScore = humanScore + 1 ;
        console.log("You won! Paper beats Rock");
        console.log(`Computer =${computerChoice}`);
        console.log(` Agent 47 =${humanChoice}`);
        console.log(`ComputerScore =${computerScore}`);
        console.log(`HumanScore = ${humanScore}`);
}    else if (humanChoice ==='paper' && computerChoice ==='scissors'){
        computerScore = computerScore + 1 ;
        console.log("You lose! Scissors beats Paper");
        console.log(`Computer =${computerChoice}`);
        console.log(` Agent 47 =${humanChoice}`);
        console.log(`ComputerScore =${computerScore}`);
        console.log(`HumanScore = ${humanScore}`);
}    else if (humanChoice ==='scissors' && computerChoice ==='rock'){
        computerScore = computerScore + 1 ;
        console.log("You lose! Rock beats Scissors");
        console.log(`Computer =${computerChoice}`);
        console.log(` Agent 47 =${humanChoice}`);
        console.log(`ComputerScore =${computerScore}`);
        console.log(`HumanScore = ${humanScore}`);
}   else if (humanChoice ==='scissors' && computerChoice ==='paper') {
        humanScore = humanScore + 1 ;
        console.log("You won! Scissors beats Paper");
        console.log(`Computer =${computerChoice}`);
        console.log(` Agent 47 =${humanChoice}`);
        console.log(`ComputerScore =${computerScore}`);
        console.log(`HumanScore = ${humanScore}`);
}    else {
        console.log(" Try again! you have make a spelling mistake ;)")
}
return getComputerChoice ;
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

function playGame() {
    for (let i = 0; i < 5; i++) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound();
    }
    if (humanScore > computerScore) {
        alert(" Congratulations!!!! You have won the game")
    } else {
        alert(" Mission failed!! You lose the game, try again :]")
    }
    alert("Game Over! , Start new game by Refreshing the page.")
}

playGame() ;