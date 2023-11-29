# odin-rock-paper-scissors
In this assignment, i am asked to create a rock, paper, and scissors game with just html/css/javascript
PART 1 --
For PART 1, i set up the html in a way that would be able to help with PART 2.
The main focus in PART 1 is to create the function where player can play five games in one role.
In order to do that, i've created a function getComputerChoice() where it will get random object such as paper, rock or scissors.

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

I also have to create a function, playRound, to compare the input between the user and computer.

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

It will generate an output telling the user if she/he wins or loses the match against computer.

Another function is game(), where you type game() into the console, there will be a popup asking for user's input. 

function game() {
    for (let i = 0; i < 5; i++) {
        const playerChoice = prompt ('input rock/paper/scissors');
        console.log(playRound(playerChoice, getComputerChoice()));
    }
}

In PART 1, there are three functions to get the game going using the console of the web. We will use the game() to start the game. In the game(), it will loop 5 times and each time it will ask the player's input. Then it will run by using the playRound().