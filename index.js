const rps = ['rock', 'paper', 'scissors'];
function computerPlay() {
    return rps[Math.floor(Math.random() * rps.length)];
}

let playerScore = 0;
let computerScore = 0;




function gamePlay() { 
    
let playerSelection = prompt('rock, paper, scissors?');
let computerSelection = computerPlay();

    if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++
        return `${computerScore} points to the computer, rock covers paper`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        return `${playerScore} points to you, rock covers paper`;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++
        return `${computerScore} points to the computer, rock crushes scissors`;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        return `${playerScore} points to you, rock crushes scissors`;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++
        return `${computerScore} points to the computer, scissors cuts paper`;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++
        return `${playerScore} points to you, scissors cuts paper`;
    } 
    else {
        return 'It\'s a tie...'
    }
}

function game() {
    for (i = 0; i < 5; i++) {
        console.log(gamePlay());
    } if (playerScore > computerScore) {
        alert('Hurray! You win!!');
    } else if (playerScore == computerScore) {
        alert('It\'s a tie between you and the computer');
    } else {
        alert('Game over, you lost');
    }
}

console.log(game());
// console.log(gamePlay());
// console.log(playerScore, computerScore)

