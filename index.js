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

getComputerChoice() ;

function getHumanChoice() {
    const humanChoice = prompt("What will you choice Rock , Paper , Scissors") ;
    return humanChoice ; 
}

let humanScore = 0 ;
let computerScore = 0 ;


function playRound(humanSelection, computerSelection) {
    if (humanChoice ==="Rock" && computerChoice ==="rock") {
        console.log("It is a draw! Both have choice ROCK") ;
        console.log(`Computer =${computerChoice}`);
        console.log(` Agent 47 =${humanChoice}`);
        console.log(`ComputerScore =${computerScore}`);
        console.log(`HumanScore = ${humanScore}`);
}   else if (humanChoice ==='Paper' && computerChoice ==='paper') {
        console.log("It is a draw! Both have choice PAPER");
        console.log(`Computer =${computerChoice}`);
        console.log(` Agent 47 =${humanChoice}`);
        console.log(`ComputerScore =${computerScore}`);
        console.log(`HumanScore = ${humanScore}`);
}   else if (humanChoice ==='Scissors' && computerChoice ==='scissors') {
        console.log("It is a draw! Both have choice SCISSORS");
        console.log(`Computer =${computerChoice}`);
        console.log(` Agent 47 =${humanChoice}`);
        console.log(`ComputerScore =${computerScore}`);
        console.log(`HumanScore = ${humanScore}`);
}   else if (humanChoice ==='Rock' && computerChoice ==='paper'){
        computerScore = computerScore + 1 ;
        console.log("You lose! Paper beats Rock");
        console.log(`Computer =${computerChoice}`);
        console.log(` Agent 47 =${humanChoice}`);
        console.log(`ComputerScore =${computerScore}`);
        console.log(`HumanScore = ${humanScore}`);
}    else if (humanChoice ==='Rock' && computerChoice ==='scissors'){
        humanScore = humanScore + 1 ;
        console.log("You won! Rock beats Scissors");
        console.log(`Computer =${computerChoice}`);
        console.log(` Agent 47 =${humanChoice}`);
        console.log(`ComputerScore =${computerScore}`);
        console.log(`HumanScore = ${humanScore}`);
}    else if (humanChoice ==='Paper' && computerChoice ==='rock'){
        humanScore = humanScore + 1 ;
        console.log("You won! Paper beats Rock");
        console.log(`Computer =${computerChoice}`);
        console.log(` Agent 47 =${humanChoice}`);
        console.log(`ComputerScore =${computerScore}`);
        console.log(`HumanScore = ${humanScore}`);
}    else if (humanChoice ==='Paper' && computerChoice ==='scissors'){
        computerScore = computerScore + 1 ;
        console.log("You lose! Scissors beats Paper");
        console.log(`Computer =${computerChoice}`);
        console.log(` Agent 47 =${humanChoice}`);
        console.log(`ComputerScore =${computerScore}`);
        console.log(`HumanScore = ${humanScore}`);
}    else if (humanChoice ==='Scissors' && computerChoice ==='rock'){
        computerScore = computerScore + 1 ;
        console.log("You lose! Rock beats Scissors");
        console.log(`Computer =${computerChoice}`);
        console.log(` Agent 47 =${humanChoice}`);
        console.log(`ComputerScore =${computerScore}`);
        console.log(`HumanScore = ${humanScore}`);
}   else if (humanChoice ==='Scissors' && computerChoice ==='paper') {
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

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);

function playGame() {
        
}