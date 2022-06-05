//function computerPlay() {
//    let rock = 0;
//    let paper = 1;
//    let scissors = 2;
//    return Math.floor(Math.random(3))
//}
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min);
}

let move = randomNumber(1, 3);

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

let playerSelection = prompt("What is your move? (rock, paper, scissors)");

function firstRound(computerSelection, playerSelection) {

}