let playerScore = 0
let computerScore = 0

function getComputerChoice() {
    var things = ['Rock', 'Paper', 'Scissors'];
    var choice = things[Math.floor(Math.random() * things.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    let roundWinner;
    if (playerSelection === computerSelection) {
        roundWinner = 'Tie'
    }
    if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock')
    ) {
        playerScore++

        roundWinner = 'You Win! ' + playerSelection + ' beats ' + computerSelection;



    }
    if (
        (computerSelection === 'Rock' && playerSelection === 'Scissors') ||
        (computerSelection === 'Scissors' && playerSelection === 'Paper') ||
        (computerSelection === 'Paper' && playerSelection === 'Rock')
    ) {
        computerScore++

        roundWinner = 'You Lose! ' + computerSelection + ' beats ' + playerSelection;



    }

    return roundWinner;
}


function game() {
    let message;
    for (let i = 0; i < 5; i++) {
        let playerSelection = window.prompt();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore > computerScore) {
        message = 'YOU ARE THE WINNER';
    }
    else {
        message = 'YOU ARE THE LOOSER';
    }
    return message;

}


const computerSelection = getComputerChoice();
console.log(game());