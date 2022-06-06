//random number generator to randomize move of computer between 1 and 3

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min);
}

//function to declare move of computer

function computerPlay(randomNumber) {
    let move = randomNumber(1, 3);

    if (move == 1) {
        return "rock";
    } else if (move == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

//prompt and function for the player to pick a move and it's not case sensitive


function playerPlay() {
    let playerMove = prompt("What is your move? (rock, paper, scissors)");
    
    if (playerMove.toLowerCase() == "rock") {
        return "rock";
    } else if (playerMove.toLowerCase() == "paper") {
        return "paper";
    } else if (playerMove.toLowerCase() == "scissors") {
        return "scissors";
    } else {
        return "You made a mistake!";
    }
}


//fuction to select the winner of the round 

function playRound(computerPlay, playerPlay) {
    const computerSelection = computerPlay(randomNumber);
    const playerSelection = playerPlay();
    
    console.log(computerSelection);
    console.log(playerSelection);

    let loser = `You lose! ${computerSelection} beats ${playerSelection}`;
    const winner = "You win this round!";
    const tie = "We have a tie!";

    if (computerSelection == playerSelection) {
        return tie;
    } else if ((computerSelection == "rock") && (playerSelection == "scissors")) {
        return loser;
    } else if ((computerSelection == "paper") && (playerSelection == "rock")) {
        return loser;
    } else if ((computerSelection == "scissors") && (playerSelection == "paper")) {
        return loser;
    } else {
        return winner;
    }
}

//function to start a game of 5 rounds 

function game(playRound, playerPlay) {
    for (let i = 0; i < 5; i++) {


    }
}

console.log(playRound(computerPlay, playerPlay));

//console.log(game(playRound(playerSelection, computerSelection)));