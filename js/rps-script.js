// randomly selects computer's play 
function computerPlay() {
    const move = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    if (move == 1) {
        return "rock";
    } else if (move == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

// starts round, declare who wins the round and add 1 point to winner 
function round(computerSelection, playerSelection) {   
    const tie = `We have a tie! ${computerSelection} to ${playerSelection}`;
    let playerWin = `You win this round! ${playerSelection} beats ${computerSelection}`;
    let computerWin = `You lose this round! ${computerSelection} beats ${playerSelection}`;

    if (computerSelection == playerSelection) {
        return tie;
    } else if (
        (computerSelection == "rock") && (playerSelection == "scissors") ||
        (computerSelection == "paper") && (playerSelection == "rock") || 
        (computerSelection == "scissors") && (playerSelection == "paper")
    ) {
        computerScore += 1;
        return computerWin;
    } else if (playerSelection == "scissors") {
        playerScore += 1;
        return playerWin;
    } else if (playerSelection == "rock" ) {
        playerScore += 1;
        return playerWin;
    } else if (playerSelection == "paper") {
        playerScore += 1;
        return playerWin;
    } else {
        return "ERROR: You typed an incorrect value";
    }
}

// declare who wins the game depending on score 
let playerScore = parseInt(0);
let computerScore = parseInt(0);

function gameWinner() {
    if (computerScore > playerScore) {
        return "HAHA GAME OVER! Loser!"
    } else if (playerScore > computerScore) {
        return "Congrats! You win the game!!"
    } else {
        return "We have a tie! Play again!"
    }
}

// starts game of 3 rounds 
function game() {
    for (let i = 0; i < 3; i++) {
        console.log("ROUND " + (i + 1));
        console.log("Computer score: " + (computerScore / 2));
        console.log("Player score: " + (playerScore / 2));

        let computerSelection = computerPlay();
        let playerSelection = prompt("What is your move? (rock, paper, scissors)").toLowerCase();
        round(computerSelection, playerSelection);
        
        console.log("");
        console.log("Computer: " + computerSelection);
        console.log("You: " + playerSelection);
        console.log(round(computerSelection, playerSelection));
        console.log("");
    }
    console.log("GAME")
    console.log("Computer score: " + (computerScore / 2));
    console.log("Player score: " + (playerScore / 2));
    console.log(gameWinner());
}

game();