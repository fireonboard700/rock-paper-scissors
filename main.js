function getComputerChoice() {
    choice = Math.random();
    if (0 <= choice && choice < 0.33) {
        return "rock";
    } else if (0.33 <= choice && choice < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    choice = prompt("choose from rock, paper, or scissors, puny human.");
    return choice;
}

const div = document.querySelector("#results");

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    result = "";
    // this logic check sucks - but I do not immediately see a better way to do this.
    if (humanChoice === computerChoice) {
        result = "draw";
    } else if (
        (humanChoice === "rock" && computerChoice == "scissors") ||
        (humanChoice === "paper" && computerChoice == "rock") ||
        (humanChoice === "scissors" && computerChoice == "paper")
    ) {
        result = "win";
        humanScore += 1;
    } else {
        result = "lose";
        computerScore += 1;
    }

    // this is unreadable.
    div.textContent = `result: ${result} human choice: ${humanChoice} computer choice: ${computerChoice}human: ${humanScore} computer: ${computerScore}`;
}

let humanScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];

choices.forEach((choice) => {
    const btn = document.querySelector(`#${choice}`);
    btn.addEventListener("click", () => {
        playRound(choice, getComputerChoice());
    });
});
