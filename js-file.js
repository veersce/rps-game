playGame();

playerScore = 0;
computerScore = 0;
gameWinner = "";

function getComputerChoice()
{
    const shapes = ["rock", "paper", "scissors"];
    let computerChoice = Math.floor(Math.random() * shapes.length);

    return shapes[computerChoice];
}

function playRound(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toLowerCase();

    if (["rock", "paper", "scissors"].includes(playerSelection))
    {
        if (playerSelection === computerSelection)
        {
            return `Tie!\nYou: ${playerSelection.toUpperCase()}\nComputer: ${computerSelection.toUpperCase()}`;
        }
        else if ((playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper"))
        {
            playerScore++;
            if (playerScore === 5)
            {
                gameWinner = "Player";
            }
            return `You won!\nYou: ${playerSelection.toUpperCase()}\nComputer: ${computerSelection.toUpperCase()}`;
        }
        else
        {
            computerScore++;
            if (computerScore === 5)
            {
                gameWinner = "Computer";
            }
            return `You lost!\nYou: ${playerSelection.toUpperCase()}\nComputer: ${computerSelection.toUpperCase()}`;
        }
    }
    else
    {
        return `Wrong input. You wrote "${playerSelection}"`;
    }
}


function playGame()
{
    const body = document.querySelector('body');
    const buttons = document.querySelectorAll('button');
    const resultsDiv = document.querySelector('.results');
    const lastestResult = document.createElement('p');
    const currentScore = document.createElement('p');
    const winner = document.createElement('h2');

    resultsDiv.appendChild(lastestResult);
    resultsDiv.appendChild(currentScore);
    body.appendChild(winner);

    buttons.forEach((button) =>
    {
        button.addEventListener('click', () =>
        {
            lastestResult.textContent = playRound(button.textContent, getComputerChoice())
            currentScore.textContent = `Player: ${playerScore} Computer ${computerScore}`;
            if (playerScore === 5 || computerScore === 5)
            {
                winner.textContent = `Winner: ${gameWinner}`;
                playerScore = 0;
                computerScore = 0;
            }
        });
    });
}