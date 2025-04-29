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

    // also dumb.
    div.textContent = `result: ${result}\nhuman choice: ${humanChoice}\ncomputer choice: ${computerChoice}\nscore:\nhuman: ${humanScore}\ncomputer: ${computerScore}`;
}

let humanScore = 0;
let computerScore = 0;

// dumb way of doing this, but do you have a better idea?

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
    let humanChoice = "rock";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});

paper.addEventListener("click", () => {
    let humanChoice = "paper";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});

scissors.addEventListener("click", () => {
    let humanChoice = "scissors";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});
