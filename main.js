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

function playGame() {
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

        console.log(
            `result: ${result}\nhuman choice: ${humanChoice}\ncomputer choice: ${computerChoice}`
        );
        console.log(`score:\nhuman: ${humanScore}\ncomputer: ${computerScore}`);
    }

    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
}
