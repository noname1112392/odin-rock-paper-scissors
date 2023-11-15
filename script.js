const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');



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
                    break;
                case 'paper':
                    return "Computer wins! it shows paper";
                    break;
                case 'scissors':
                    return "Player wins! Computer shows scissors";
                    break;
            }
            break;
        case "paper":
            switch (computerSelection) {
                case "rock":
                    return "Player wins! Computer shows rock";
                    break;
                case "paper":
                    return "Computer shows paper, It's a tie!";
                    break;
                case "scissors":
                    return "Computer wins! it shows scissors";
                    break;
            }
            break;
        case "scissors":
            switch (computerSelection) {
                case "rock":
                    return "Computer wins! it throws rock";
                    break;
                case "paper":
                    return "Player wins! Computer shows paper";
                    break;
                case "scissors":
                    return "Computer shows scissors, It's a tie!";
                    break;
            }
            break;
    }
}

rock.addEventListener('click', function () {
    console.log(playRound('rock', getComputerChoice()));
});

paper.addEventListener('click', function () {
    console.log(playRound('paper', getComputerChoice()));
});

scissors.addEventListener('click', function () {
    console.log(playRound('scissors', getComputerChoice()));
});