function getComputerChoice() {

    let random = Math.floor(Math.random() * 100) + 1 ;
    let choice;

    if (random <= 33){
        choice = "rock";
    } else if(34 <= random && random <= 67){
        choice = "paper";
    } else {
        choice = "scissors";
    }
    return choice;
}

let computerScore = 0;
let humanScore = 0;

const humanRock = document.querySelector("#rock");
const humanScissors = document.querySelector("#scissors");
const humanPaper = document.querySelector("#paper");
const result = document.querySelector("#result");
let scoreboard = document.createElement("p");
let roundScore = document.createElement("p");
let reset = document.createElement("button");

result.appendChild(scoreboard);


humanRock.addEventListener("click", () => playRound("rock", getComputerChoice()));
humanScissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));
humanPaper.addEventListener("click", () => playRound("paper", getComputerChoice()));




function playRound(humanChoice, computerChoice){

    function humanWin() {
    scoreboard.textContent = `${humanChoice} beats ${computerChoice}!`;
    humanScore++;
    }
    function computerWin() {
    scoreboard.textContent = `${computerChoice} beats ${humanChoice}!`;
    computerScore++;
    }

    if (humanChoice === computerChoice){
    scoreboard.textContent = "Tie!";
    result.appendChild(scoreboard);
    }
    else if(humanChoice === "rock"){
        if (computerChoice === "paper"){
            computerWin();
        } else {
            humanWin();
        }
    }
    else if(humanChoice === "paper"){
        if(computerChoice === "scissors"){
            computerWin();
        } else {
            humanWin();
        }
    }
    else {
        if (computerChoice === "rock"){
            computerWin();
        } else {
            humanWin();

        }
    }
    if (humanScore < 5 && computerScore < 5){
        roundScore.textContent = `Your Score: ${humanScore}     Computer's Score: ${computerScore}`;
        result.appendChild(roundScore);
    } else {
        if (computerScore == 5){
            roundScore.textContent = "Computer wins!";
        } 
        if (humanScore == 5){
        roundScore.textContent = "You win!";
        }
        humanScore = 0;
        computerScore = 0;
    }
}
