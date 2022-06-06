//random number generator to randomize move of computer between 1 and 3
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min);
}

let move = randomNumber(1, 3);

//function to declare move of computer
function computerPlay(move) {
    if (move == 1) {
        return "rock";
    } else if (move == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

const computerSelection = computerPlay(move);

//prompt and function for the player to pick a move
let playerMove = prompt("What is your move? (rock, paper, scissors)");

function playerPlay(playerMove) {
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

const playerSelection = playerPlay(playerMove);

//fuction to select the winner of the round 
function playRound(playerSelection, computerSelection) {
    if (computerSelection == playerSelection) {
        return "We have a tie!";
    } else if ((computerSelection == "rock") && (playerSelection == "scissors")) {
        return "You lose! Rock beats Scissors";
    } else if ((computerSelection == "paper") && (playerSelection == "rock")) {
        return "You lose! Paper beats Rock";
    } else if ((computerSelection == "scissors") && (playerSelection == "paper")) {
        return "You lose! Scissors beats Paper";
    } else {
        return "You win this round!";
    }
  }


console.log(computerSelection);
console.log(playerSelection);
console.log(playRound(playerSelection, computerSelection));