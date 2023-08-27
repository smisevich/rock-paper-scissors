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
    if (toLowerCase(playerSelection)) {
        if (computerSelection === "rock") {
            return "It's a tie with Dwayne the Rock Johnson!";
        } else if (computerSelection === "paper") {
            return "You lose! Paper beats rock!";
        } else {
            return "You win! Rock beats paper!";
        }
    } else if (toLowerCase(playerSelection === "scissors")) {
        if (computerSelection === "rock") {
            return "You lose! Rock beats scissors!";
        } else if (computerSelection === "paper") {
            return "You win! Scissors beat paper!";
        } else {
            return "It's a tie with Edward Scissorhands!";
        }
    } else if (toLowerCase(playerSelection === "paper")) {
        if (computerSelection === "rock") {
            return "You win! Paper beats rock!";
        } else if (computerSelection === "paper") {
            return "It's a tie with a bunch of paper cuts!";
        } else {
            return "You lose! Scissors slice up paper!";
        }
    }
}