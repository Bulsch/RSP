


function getComputerChoice() {
    let random = Math.floor(Math.random() * 100) + 1 ;
    let choice;
    if (random <= 33){
        choice = "Rock";
    } else if(34 <= random && random <= 67){
        choice = "Paper";
    } else {
        choice = "Scissors";
    }
    console.log(random);
    return choice;

}

