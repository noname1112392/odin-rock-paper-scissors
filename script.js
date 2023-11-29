const rock_btn = document.getElementById('rock');
const paper_btn = document.getElementById('paper');
const scissors_btn = document.getElementById('scissors');
//let playerChoice;
//let playerArray = [];
//let computerArray = [];
//const inputValue = prompt("Please enter in the amount of time you want to play against the computer!")

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

rock_btn.addEventListener('click', () => {
    let result = playRound('rock', getComputerChoice());
    console.log(result);
});

paper_btn.addEventListener('click', () => {
    let result = playRound('paper', getComputerChoice());
    console.log(result);
});

scissors_btn.addEventListener('click', () => {
    let result = playRound('scissors', getComputerChoice());
    console.log(result);
});

/*function game() {
    for (let i = 0; i < 5; i++) {
        const playerChoice = prompt ('input rock/paper/scissors');
        console.log(playRound(playerChoice, getComputerChoice()));
    }
}*/
/*function displayResults() {
    let i = 0;
    while (i < inputValue) {
        let result = playRound(playerArray[i], computerArray[i]);
        console.log(result);
    }

}

paper.addEventListener('click', function () {
    playerChoice = 'paper';
    playerArray.push(playerChoice);
    computerArray.push(getComputerChoice());
    displayResults();
})

scissors.addEventListener('click', function () {
    playerChoice = 'scissors';
    playerArray.push(playerChoice);
    computerArray.push(getComputerChoice());
    displayResults();
})

rock.addEventListener('click', function () {
    playerChoice = 'rock';
    playerArray.push(playerChoice);
    computerArray.push(getComputerChoice());
    displayResults();
})*/