const rock_btn = document.getElementById('rock');
const paper_btn = document.getElementById('paper');
const scissors_btn = document.getElementById('scissors');
let text_display = document.getElementById('text-display');
let player_score_display = document.getElementById('player-score-display');
let computer_score_display = document.getElementById('computer-score-display');
let playerScore = 0;
let computerScore = 0;
let currentRound = 0;
let totalRounds = 5;

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);

    switch (randomIndex) {
        case 0:
            return 'paper';
        case 1:
            return 'rock';
        case 2:
            return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'rock':
            switch (computerSelection) {
                case 'rock':
                    return "Computer throws rock, It's a tie!";
                case 'paper':
                    computerScore++;
                    return "Computer wins! it shows paper";
                case 'scissors':
                    playerScore++;
                    return "Player wins! Computer shows scissors";
            }
            break;
        case "paper":
            switch (computerSelection) {
                case "rock":
                    playerScore++;
                    return "Player wins! Computer shows rock";
                case "paper":
                    return "Computer shows paper, It's a tie!";
                case "scissors":
                    computerScore++;
                    return "Computer wins! it shows scissors";
            }
            break;
        case "scissors":
            switch (computerSelection) {
                case "rock":
                    computerScore++;
                    return "Computer wins! it throws rock";
                case "paper":
                    playerScore++;
                    return "Player wins! Computer shows paper";
                case "scissors":
                    return "Computer shows scissors, It's a tie!";
            }
            break;
    }
}


function endGame() {
    if (currentRound === totalRounds) {
        // Display the final result
        if (playerScore > computerScore) {
            text_display.textContent = "You win the game!";
        } else if (playerScore < computerScore) {
            text_display.textContent = "Computer wins the game!";
        } else {
            text_display.textContent = "It's a tie!";
        }

        // Disable the buttons to prevent further clicks
        rock_btn.disabled = true;
        paper_btn.disabled = true;
        scissors_btn.disabled = true;      
    }
}


rock_btn.addEventListener('click', () => {
    let result = playRound('rock', getComputerChoice());
    text_display.textContent = result;
    player_score_display.textContent = playerScore;
    computer_score_display.textContent = computerScore;
    endGame();
    currentRound++;
});

paper_btn.addEventListener('click', () => {
    let result = playRound('paper', getComputerChoice());
    text_display.textContent = result;
    player_score_display.textContent = playerScore;
    computer_score_display.textContent = computerScore;
    endGame();
    currentRound++;
});

scissors_btn.addEventListener('click', () => {
    let result = playRound('scissors', getComputerChoice());
    text_display.textContent = result;
    player_score_display.textContent = playerScore;
    computer_score_display.textContent = computerScore;
    endGame();
    currentRound++;
});