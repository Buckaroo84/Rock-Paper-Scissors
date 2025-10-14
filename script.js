alert('Rock, Paper, Scissors!')

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getPlayerChoice() {
    let choice = prompt("Choose Rock, Paper, or Scissors:").toLowerCase();
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

    function game() {
        for (let i = 0; i < 5; i++) {
            const playerSelection = getPlayerChoice();
            const computerSelection = getComputerChoice();
            console.log(`Round ${i + 1}:`);
            console.log(playRound(playerSelection, computerSelection));
        }
    }

    game();