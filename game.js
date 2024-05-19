
const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const humanScoreDisplay = document.getElementById("humanScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const roundResult = document.getElementById("roundResult");
let humanScore = 0;
let computerScore = 0;

function playRound(getPlayerChoice) {

    const getComputerChoice = choices[Math.floor(Math.random() * 3)]
    let result = "";

    if (getPlayerChoice === getComputerChoice) {
        result = "IT'S TIE!";
    }
    else {
        switch (getPlayerChoice) {
            case "rock":
                result = (getComputerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (getComputerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (getComputerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
        }
    }

    playerDisplay.textContent = `PLAYER: ${getPlayerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${getComputerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText")

    switch (result) {
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            humanScore++;
            humanScoreDisplay.textContent = humanScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;

    }

}

function checkWinner() {
    if (computerScore === 5 || humanScore === 5) {
        if (computerScore === humanScore) {
            updateWinner('tie')
        } else {
            let win = `${(compScore > playerScore) ? 'computer' : 'player'}`;
            updateWinner(win);
        }
    }
}

