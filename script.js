


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

    alert("Stick to rock, paper or scissors!");
}
