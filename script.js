

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

 //   console.log(random);
    return choice;

}

function getHumanChoice() {
    let choice = prompt("Rock, paper or scissors?").toLowerCase();
    if (choice === "rock" || choice ==='paper' || choice === 'scissors'){
        return choice;
    }

    alert("Try again!");
    return getHumanChoice();
}





function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    for (i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
    console.log(`Your score after 5 rounds is ${humanScore}, computer's score is ${computerScore}!`);
    if (computerScore > humanScore){
        console.log("You lose!");
    } else {
        console.log("You win!");
    }

        function playRound(humanChoice, computerChoice){
            console.log(humanChoice);
            console.log(computerChoice);

            if (humanChoice === computerChoice){
              console.log("Tie!");
            }
            else if(humanChoice === "rock"){
                if (computerChoice === "paper"){
                    //computerWin();
                    computerScore++;
                    console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
                } else {
                    // humanWin();
                    humanScore++;
                    console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
                }
            }
            else if(humanChoice === "paper"){
                if(computerChoice === "scissors"){
                    //computerWin();
                    computerScore++;
                    console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
                } else {
                    //humanWin();
                    humanScore++;
                    console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
                }
            }
            else {
                if (computerChoice === "rock"){
                    //computerWin();
                    computerScore++;
                    console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
                } else {
                    //humanWin();
                    humanScore++;
                    console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
                }
            }
        }
}






/*
function humanWin(){
    humanScore++;
    console.log(`You win! ${humanChoice()} beats ${computerChoice()}!`);
}
*/
/*
function computerWin(){
    computerScore++;
    console.log(`You lose! ${computerChoice()} beats ${humanChoice()}!`);
}
*/