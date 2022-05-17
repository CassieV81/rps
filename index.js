const rps = ['rock', 'paper', 'scissors'];
function computerPlay() {
    return rps[Math.floor(Math.random() * rps.length)];
}

let playerScore = 0;
let computerScore = 0;
let result = '';
let finalResult = '';

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        gamePlay(button.id), game();
    });
});

function stopCount() {
    buttons.forEach(element => {
        element.disabled = true;
    });
}


function game() {
    for (i = 0; i < gamePlay; i++);
     if (playerScore == 5) {
       finalResult = `Hurray! You win!! Score is ${playerScore} - ${computerScore}.
        Reload page to play again`;
       stopCount();
    } else if (computerScore == 5) {
       finalResult = `Game over, you lost. Score is ${playerScore} - ${computerScore}.
       Reload page to play again`;
       stopCount();
    } 
    document.getElementById('finalResult').innerHTML = finalResult;
    return
}



function gamePlay(playerSelection) { 
    
let computerSelection = computerPlay();

    if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++
        result = `${computerScore} points to the computer, paper covers rock`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        result = `${playerScore} points to you, paper covers rock`;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++
        result = `${computerScore} points to the computer, rock crushes scissors`;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        result = `${playerScore} points to you, rock crushes scissors`;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++
        result = `${computerScore} points to the computer, scissors cuts paper`;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++
        result = `${playerScore} points to you, scissors cuts paper`;
    } else  {
        result = 'It\'s a tie...'
    } 
    document.getElementById('result').innerHTML = result;
    return
}





// console.log(game());
// console.log(gamePlay());
// console.log(playerScore, computerScore)

