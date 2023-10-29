
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
        roundWinner = 'You Win! ' + playerSelection + ' beats ' + computerSelection
    }
    if (
        (computerSelection === 'Rock' && playerSelection === 'Scissors') ||
        (computerSelection === 'Scissors' && playerSelection === 'Paper') ||
        (computerSelection === 'Paper' && playerSelection === 'Rock')
    ) {

        roundWinner = 'You Lose! ' + computerSelection + ' beats ' + playerSelection
    }
    return roundWinner;
}




let playerSelection = 'Rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
