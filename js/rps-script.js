// randomly selects computer's play 
function computerPlay() {
    let randomMove = Math.floor(Math.random() * (3 - 1 + 1) + 1);

    if (randomMove === 1) {
        return 'rock';
    } else if (randomMove === 2) {
        return 'paper';
    } else {
        return 'scissors';
    };
};

// starts round, declare who wins the round and add 1 point to winner 
function playRound(computerSelection, playerSelection) {
    let tieRound = `We have a tie! ${ computerSelection } to ${ playerSelection }`;
    let playerWinRound = `You win this round! ${ playerSelection } beats ${ computerSelection }`;
    let computerWinRound = `You lose this round! ${ computerSelection } beats ${ playerSelection }`;
    
    if (computerSelection === playerSelection) {
        return tieRound;
    } else if (
            (computerSelection === 'rock') && (playerSelection === 'scissors') ||
            (computerSelection === 'paper') && (playerSelection === 'rock') ||
            (computerSelection === 'scissors') && (playerSelection === 'paper')
    ) {
        computerScore++;
        return computerWinRound;
    } else {
        playerScore++;
        return playerWinRound;
    };
};

// declare who wins the game depending on score 
let playerScore = Number(0);
let computerScore = Number(0);

function getWinner() {
    if (computerScore > playerScore) {
        return 'HAHA GAME OVER! Loser!';
    } else {
        return 'Congrats! You win the game!!';
    };
};


const roundResult = document.querySelector('div.round-result');
const gameResult = document.querySelector('div.game-result');
const playerScoreUI = document.querySelector('div.player-score');
const computerScoreUI = document.querySelector('div.computer-score');
const buttons = document.querySelectorAll('button');

// analize which button was clicked, assign its value to playerSelection 
// and play rounds until one player reaches 5 points
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const computerSelection = computerPlay();

        if (((playerScore / 2) === 5) || ((computerScore / 2 === 5))) {
            gameResult.textContent = getWinner();
            roundResult.remove();
        } else {
            const playerSelection = button.id;
            playRound(computerSelection, playerSelection);
            roundResult.textContent = playRound(computerSelection, playerSelection);
        };
        
        computerScoreUI.textContent = `CPU: ${ computerScore / 2 }`;
        playerScoreUI.textContent = `Player: ${ playerScore / 2 }`;
    });
});
