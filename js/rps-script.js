// randomly selects computer's play 
function computerPlay() {
    let randomMove = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    if (randomMove == 1) {
        return "rock";
    } else if (randomMove == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

// starts round, declare who wins the round and add 1 point to winner 
function playRound(computerSelection, playerSelection) {   
    let tieRound = `We have a tie! ${computerSelection} to ${playerSelection}`;
    let playerWinRound = `You win this round! ${playerSelection} beats ${computerSelection}`;
    let computerWinRound = `You lose this round! ${computerSelection} beats ${playerSelection}`;

    if (computerSelection == playerSelection) {
        return tieRound;
    } else if (
            (computerSelection == "rock") && (playerSelection == "scissors") ||
            (computerSelection == "paper") && (playerSelection == "rock") || 
            (computerSelection == "scissors") && (playerSelection == "paper")
    ) {
        computerScore++;
        return computerWinRound;
    } else if (
            (playerSelection == "scissors") || 
            (playerSelection == "rock" ) || 
            (playerSelection == "paper")
    ) {
        playerScore++;
        return playerWinRound;
    } else {
        return "ERROR: You typed an incorrect value";
    }
}

// declare who wins the game depending on score 
let playerScore = parseInt(0);
let computerScore = parseInt(0);

function getWinner() {
    if (computerScore > playerScore) {
        return "HAHA GAME OVER! Loser!"
    } else if (playerScore > computerScore) {
        return "Congrats! You win the game!!"
    } else {
        return "We have a tie! Play again!"
    }
}

// starts game of 3 rounds 
function playGame() {
    for (let i = 0; i < 3; i++) {
        console.log("ROUND " + (i + 1));
        console.log("Computer score: " + (computerScore / 2));
        console.log("Player score: " + (playerScore / 2));

        let computerSelection = computerPlay();
        let playerSelection = prompt("What is your move? (rock, paper, scissors)").toLowerCase();
        playRound(computerSelection, playerSelection);
        
        console.log("");
        console.log("Computer: " + computerSelection);
        console.log("You: " + playerSelection);
        console.log(playRound(computerSelection, playerSelection));
        console.log("");
    }
    console.log("GAME")
    console.log("Computer score: " + (computerScore / 2));
    console.log("Player score: " + (playerScore / 2));
    console.log(getWinner());
}

playGame();