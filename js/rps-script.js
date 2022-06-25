const tieRound = 'We have a tie!';
const playerWinRound = 'You win this round!';
const computerWinRound = 'You lose this round!';

const winStyle = `
        background-color: #2EE59D;
        box-shadow: 0px 8px 15px rgba(46, 229, 157, 0.4);
`;
const loseStyle = `
        background-color: #e54d2ed0;
        box-shadow: 0px 8px 15px rgba(229, 77, 46, 0.4);
`;
const tieStyle = `
        background-color: #f39d1dd3;
        box-shadow: 0px 8px 15px rgba(229, 162, 46, 0.4);
`;

let playerScore = Number(0);
let computerScore = Number(0);

const roundResultUI = document.querySelector('.round-result');
const gameResultUI = document.querySelector('.game-result');
const playerScoreUI = document.querySelector('.player-score');
const computerScoreUI = document.querySelector('.computer-score');
const playerSelectionUI = document.querySelector('.player-selection');
const computerSelectionUI = document.querySelector('.computer-selection');
const buttons = document.querySelectorAll('button');

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
function getWinner() {
    if (computerScore > playerScore) {
        return 'HAHA GAME OVER! Loser!';
    } else {
        return 'Congrats! You win the game!!';
    };
};

// analize which button was clicked, assign its value to playerSelection and play
function playGame() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const computerSelection = computerPlay();
            const playerSelection = button.id;
            const roundResult = playRound(computerSelection, playerSelection);
    
            playerSelectionUI.textContent = playerSelection;
            computerSelectionUI.textContent = computerSelection;
            roundResultUI.textContent = playRound(computerSelection, playerSelection);
        
            if (roundResult === playerWinRound) {
                playerSelectionUI.style.cssText = winStyle;
                computerSelectionUI.style.cssText = loseStyle;
            } else if (roundResult === computerWinRound) {
                playerSelectionUI.style.cssText = loseStyle;
                computerSelectionUI.style.cssText = winStyle;
            } else {
                playerSelectionUI.style.cssText = tieStyle;
                computerSelectionUI.style.cssText = tieStyle;
            };
            
            computerScoreUI.textContent = `CPU: ${ computerScore / 2 }`;
            playerScoreUI.textContent = `Player: ${ playerScore / 2 }`;
        });
    });
};

function checkWinner() {
    const gameBox = document.querySelector('.game-box');

    gameBox.addEventListener('mouseover', () => {
        let playerTextContent = playerScoreUI.textContent;
        let computerTextContent = computerScoreUI.textContent;
    
        if ((playerTextContent == 'Player: 5') || (computerTextContent == 'CPU: 5')) {
            gameResultUI.textContent = getWinner();
            roundResultUI.remove();
            playerSelectionUI.remove();
            computerSelectionUI.remove();
        } else {
            return;
        };
    });
};

playGame();
checkWinner();