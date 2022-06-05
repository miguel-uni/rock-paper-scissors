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

let computerSelection = computerPlay(move);

//prompt and function for the player to pick a move
let playerMove = prompt("What is your move? (rock, paper or scissors)");

function playerPlay(playerMove) {
    if (playerMove.toLowerCase() == "rock") {
        return 1;
    } else if (playerMove.toLowerCase() == "paper") {
        return 2;
    } else if (playerMove.toLowerCase() == "scissors") {
        return 3;
    } else {
        return "You made a mistake!";
    }
}

let playerSelection = playerPlay(playerMove);

