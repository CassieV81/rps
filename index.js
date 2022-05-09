const game = ['rock', 'paper', 'scissors'];
function computerPlay() {
    return game[Math.floor(Math.random() * game.length)];
}





function gamePlay(playerSelection, computerSelection) { 
    

    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You loose! Paper beats Rock';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win! Paper beats Rock';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You loose! Rock crushes Scissors';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win! Rock crushes Scissors'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You loose! Scissors cuts Paper'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win! Scissors cuts Paper'
    } 
    else {
        return `${playerSelection} beats ${computerSelection}`
    }
}


const playerSelection = 'paper';
const computerSelection = computerPlay();
console.log(gamePlay(playerSelection, computerSelection));

