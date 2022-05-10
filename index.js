const rps = ['rock', 'paper', 'scissors'];
function computerPlay() {
    return rps[Math.floor(Math.random() * rps.length)];
}

let playerScore = 0;
let computerScore = 0;




function gamePlay() { 
    
let playerSelection = prompt('rock, paper, scissors?');
    playerSelection = playerSelection.toLowerCase();
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
    else if (playerSelection === computerSelection) {
        return 'It\'s a tie...'
    } else {
        return alert('Please type rock, paper or scissors');
    }
}

function game() {
    for (i = 0; i < 5; i++) {
        console.log(gamePlay());
    } if (playerScore > computerScore) {
        alert(`Hurray! You win!! Score is ${playerScore} - ${computerScore}`);
    } else if (playerScore == computerScore) {
        alert(`It\'s a tie between you and the computer. Score is ${playerScore} - ${computerScore}`);
    } else {
        alert(`Game over, you lost. Score is ${playerScore} - ${computerScore}`);
    }
}

console.log(game());
// console.log(gamePlay());
// console.log(playerScore, computerScore)

