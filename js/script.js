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
const defaultStyle = `
        background-color: #fefefe;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.123);
`

let playerScore = Number(0);
let computerScore = Number(0);


const playerScoreUI = document.querySelector('.player-score');
const computerScoreUI = document.querySelector('.computer-score');
const buttonContainer = document.getElementById('button-container');
const resultContainer = document.getElementById('result-container');
const selectionContainer = document.getElementById('selection-container');
const playAgainBtn = document.createElement('button');

const hiddenSelection = document.createElement('div');
hiddenSelection.textContent = 'hidden';
hiddenSelection.classList.add('hidden');

function getComputerPlay() {
    let randomMove = Math.floor(Math.random() * (3 - 1 + 1) + 1);

    if (randomMove === 1) {
        return 'rock';
    } else if (randomMove === 2) {
        return 'paper';
    } else {
        return 'scissors';
    };
};

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

function playGame() {
    createButtons();
    displayResult();
    displaySelection();

    const interval = setInterval(checkWinner, 500);
    const buttons = document.querySelectorAll('button');
    const roundResultUI = document.querySelector('.round-result');
    const playerSelectionUI = document.querySelector('.player-selection');
    const computerSelectionUI = document.querySelector('.computer-selection');
    const gameResultUI = document.querySelector('.game-result');

    if (gameResultUI.textContent) {
        resultContainer.style.cssText = defaultStyle;
        gameResultUI.remove();
        hiddenSelection.remove();
    };

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const computerSelection = getComputerPlay();
            const playerSelection = button.id;
            const roundResult = playRound(computerSelection, playerSelection);
    
            playerSelectionUI.textContent = playerSelection;
            computerSelectionUI.textContent = computerSelection;
            roundResultUI.textContent = playRound(computerSelection, playerSelection);
        
            checkResult(roundResult);
            checkScores(playerScore, computerScore);
            displayScores(playerScore, computerScore);
        });
    });
};

function styleSelectionDisplay(winner, loser) {
    const playerSelectionUI = document.querySelector('.player-selection');
    const computerSelectionUI = document.querySelector('.computer-selection');

    if ((winner === 'player') && (loser === 'cpu')) {
        playerSelectionUI.style.cssText = winStyle;
        computerSelectionUI.style.cssText = loseStyle;
    } else if ((winner === 'cpu') && (loser === 'player')) {
        playerSelectionUI.style.cssText = loseStyle;
        computerSelectionUI.style.cssText = winStyle;
    } else {
        playerSelectionUI.style.cssText = tieStyle;
        computerSelectionUI.style.cssText = tieStyle;
    };
};

function checkResult(roundResult) {
    if (roundResult === playerWinRound) {
        styleSelectionDisplay('player', 'cpu');
    } else if (roundResult === computerWinRound) {
        styleSelectionDisplay('cpu', 'player');
    } else {
        styleSelectionDisplay();
    };
};

function displayScores(playerScore, computerScore) {
    playerScoreUI.textContent = `Player: ${ playerScore / 2 }`;
    computerScoreUI.textContent = `CPU: ${ computerScore / 2 }`;
};

function getWinner() {
    if (computerScore > playerScore) {
        return 'HAHA GAME OVER! Loser!';
    } else {
        return 'Congrats! You win the game!!';
    };
};

function checkWinner() {
    const playerSelectionUI = document.querySelector('.player-selection');
    const computerSelectionUI = document.querySelector('.computer-selection');
    const roundResultUI = document.querySelector('.round-result');
    const gameResultUI = document.querySelector('.game-result');
    const result = checkScores(playerScore, computerScore);

    if (result === 'player') {
        gameResultUI.textContent = getWinner();
        resultContainer.style.cssText = winStyle;
        roundResultUI.remove();
        playerSelectionUI.remove();
        computerSelectionUI.remove();

        selectionContainer.appendChild(hiddenSelection);
        
        createPlayAgainBtn();
        clearInterval(interval);
    } else if (result === 'cpu') {
        gameResultUI.textContent = getWinner();
        resultContainer.style.cssText = loseStyle;
        roundResultUI.remove();
        playerSelectionUI.remove();
        computerSelectionUI.remove();

        selectionContainer.appendChild(hiddenSelection);
        
        createPlayAgainBtn();
        clearInterval(interval);
    };
};

function checkScores(playerScore, computerScore) {
    if ((playerScore / 2) === 5) {
        return 'player';
    } else if ((computerScore / 2) === 5) {
        return 'cpu';
    };
};

function createButtons() {
    const rockBtn = document.createElement('button');
    const paperBtn = document.createElement('button');
    const scissorsBtn = document.createElement('button');

    rockBtn.textContent = '👊';
    rockBtn.setAttribute('id', 'rock');
    buttonContainer.appendChild(rockBtn);

    paperBtn.textContent = '✋';
    paperBtn.setAttribute('id', 'paper');
    buttonContainer.appendChild(paperBtn);

    scissorsBtn.textContent = '✌️';
    scissorsBtn.setAttribute('id', 'scissors');
    buttonContainer.appendChild(scissorsBtn);

    if (playAgainBtn) {
        playAgainBtn.remove();
    };
};

function displayResult() {
    const roundResult = document.createElement('div');
    const gameResult = document.createElement('div');

    roundResult.textContent = 'Pick your first move, first to 5.';
    roundResult.classList.add('round-result');
    resultContainer.appendChild(roundResult);

    gameResult.classList.add('game-result');
    resultContainer.appendChild(gameResult);
};

function displaySelection() {
    const playerSlct = document.createElement('div');
    const computerSlct = document.createElement('div');

    playerSlct.textContent = 'Player selection';
    playerSlct.classList.add('player-selection');
    selectionContainer.appendChild(playerSlct);

    computerSlct.textContent = 'CPU selection';
    computerSlct.classList.add('computer-selection');
    selectionContainer.appendChild(computerSlct);
};

function createPlayAgainBtn() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.remove();
    });
    
    playAgainBtn.textContent = 'PlayAgain';
    playAgainBtn.classList.add('play-again');
    buttonContainer.appendChild(playAgainBtn);
};

function playAgain() {
    playAgainBtn.addEventListener('click', () => {
        playGame();
        resetScores();
    });
};

function resetScores() {
    playerScore = 0;
    computerScore = 0;
    displayScores(playerScore, computerScore);
};

playGame();
playAgain();