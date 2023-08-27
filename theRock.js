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
        return "tie";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        return "lose";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        return "win";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        return "win";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "paper") {
        return "tie";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        return "lose";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        return "lose";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        return "win";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "scissors") {
        return "tie";
    }
}

function findResult(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (playRound(playerSelection, computerSelection) === "win") {
            playerScore += 1;
            console.log("You win! Rock crushes scissors!");
        } else if (playRound(playerSelection, computerSelection) === "lose") {
            computerScore += 1;
            console.log("You lose! Paper smothers rock!");
        } else if (playRound(playerSelection, computerSelection) === "tie") {
            console.log("It's a tie with Dwayne the Rock Johnson!");
        }
    } else if (playerSelection === "paper") {
        if (playRound(playerSelection, computerSelection) === "win") {
            playerScore += 1;
            console.log("You win! Paper smothers rock!");
        } else if (playRound(playerSelection, computerSelection) === "lose") {
            computerScore += 1;
            console.log("You lose! Scissors slice through paper!");
        } else if (playRound(playerSelection, computerSelection) === "tie") {
            console.log("It's a tie with a million paper cuts!");
        }
    } else if (playerSelection === "scissors") {
        if (playRound(playerSelection, computerSelection) === "win") {
            playerScore += 1;
            console.log("You win! Scissors slice through paper!");
        } else if (playRound(playerSelection, computerSelection) === "lose") {
            computerScore += 1;
            console.log("You lose! Rock crushes scissors!");
        } else if (playRound(playerSelection, computerSelection) === "tie") {
            console.log("It's a tie with Edward Scissorhands!");
        }
    }
}


let playerSelection = "";
let computerSelection = getComputerChoice();
let computerScore = 0;
let playerScore = 0;

// console.log(playRound(playerSelection, computerSelection));

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Let's play 5 rounds of Rock, Paper, Scissors! What's your decision?").toLowerCase();
        computerSelection = getComputerChoice();

        findResult(playerSelection, computerSelection);
    }

    if (playerScore > computerScore) {
        console.log("Congratulations! You've won Rock, Paper, Scissors!")
    } else if (playerScore < computerScore) {
        console.log("Wow, you really suck at Rock, Paper, Scissors. You've lost!")
    } else {
        console.log("Well that was underwhelming. 'Tis a tie.")
    }
}   

game();