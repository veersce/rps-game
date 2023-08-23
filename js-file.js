playGame();

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
            return `You won!\nYou: ${playerSelection.toUpperCase()}\nComputer: ${computerSelection.toUpperCase()}`;
        }
        else
        {
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
    let playerSelection = "";
    let computerSelection = "";

    for (let i = 0; i < 5; i++)
    {
        playerSelection = prompt("What's your choice? Rock, paper or scissors?");
        computerSelection = getComputerChoice();

        console.log(`Result of round ${i + 1}: ${playRound(playerSelection, computerSelection)}`);
    }
}