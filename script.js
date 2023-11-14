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
                    return "It's a tie!";
                    break;
                case 'paper':
                    return "Computer wins!";
                    break;
                case 'scissors':
                    return "Player wins!";
                    break;
            }
            break;
        case "paper":
            switch (computerSelection) {
                case "rock":
                    return "Player wins!";
                    break;
                case "paper":
                    return "It's a tie!";
                    break;
                case "scissors":
                    return "Computer wins!";
                    break;
            }
            break;

        case "scissors":
            switch (computerSelection) {
                case "rock":
                    return "Computer wins!";
                    break;
                case "paper":
                    return "Player wins!";
                    break;
                case "scissors":
                    return "It's a tie!";
                    break;
            }
            break;
    }
}