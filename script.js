document.addEventListener('DOMContentLoaded', () => {
    let playerScore = 0;
    let computerScore = 0;

    const resultsDiv = document.getElementById('results');
    const playerScoreSpan = document.getElementById('player-score');
    const computerScoreSpan = document.getElementById('computer-score');
    const resetButton = document.getElementById('reset');

    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        return choices[Math.floor(Math.random() * choices.length)];
    }

    function playRound(playerSelection) {
        const computerSelection = getComputerChoice();
        let result = '';

        if (playerSelection === computerSelection) {
            result = "It's a tie!";
        } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
        ) {
            playerScore++;
            result = `You Win! ${playerSelection} beats ${computerSelection}.`;
        } else {
            computerScore++;
            result = `You lose! ${computerSelection} beats ${playerSelection}.`;
        }

        updateResults(result);
        checkWinner();
    }

    function updateResults(message) {
        resultsDiv.innerHTML = `<p>${message}</p>`;
        playerScoreSpan.textContent = playerScore;
        computerScoreSpan.textContent = computerScore;
    }

    function checkWinner() {
        if (playerScore === 5 || computerScore === 5) {
            const winner = playerScore === 5 ? 'You win the game!' : 'Computer wins the game!';
            resultsDiv.innerHTML += `<p><strong>${winner}</strong></p>`;
            disableButtons();
            resetButton.style.display = 'inline-block';
        }
    }

    function disableButtons() {
        document.getElementById('rock').disabled = true;
        document.getElementById('paper').disabled = true;
        document.getElementById('scissors').disabled = true;
    }

    function enableButtons() {
        document.getElementById('rock').disabled = false;
        document.getElementById('paper').disabled = false;
        document.getElementById('scissors').disabled = false;
    }

    function resetGame() {
        playerScore = 0;
        computerScore = 0;
        playerScoreSpan.textContent = '0';
        computerScoreSpan.textContent = '0';
        resultsDiv.innerHTML = '';
        enableButtons();
        resetButton.style.display = 'none';
    }

    document.getElementById('rock').addEventListener('click', () => playRound('rock'));
    document.getElementById('paper').addEventListener('click', () => playRound('paper'));
    document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));
    resetButton.addEventListener('click', resetGame);
});

