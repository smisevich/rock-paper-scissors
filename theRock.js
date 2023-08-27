function getComputerChoice() {
    let i = Math.floor(Math.random() * 3);
    if (i === 0) {
        return "rock";
    } else if (i === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "rock") {
        return "It's a tie with Dwayne the Rock Johnson!";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats rock!";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock!";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "paper") {
        return "It's a tie with a bunch of paper cuts!";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors cut up paper!";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        return "You lose! Rock crushes scissors!";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beat paper!";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "scissors") {
        return "It's a tie with Edward Scissorhands!";
    }
}


let playerSelection = prompt("What's your choice?");
let computerSelection = getComputerChoice();

// console.log(playRound(playerSelection, computerSelection));

