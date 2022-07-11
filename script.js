const gameOptions = ["Rock", "Paper", "Scissors"];
let computerChoice;
let roundCount = 1;
let playerChoice = 0;
let wins = 0;
let losses = 0;
let ties = 0;

const roundCountBox = document.getElementById("roundCount");
const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");
const playerChoiceBox = document.getElementById("pcb");
const computerChoiceBox = document.getElementById("ccb");
const entirePage = document.getElementById("page");
const winCount = document.getElementById("win");
const lossCount = document.getElementById("loss");
const tieCount = document.getElementById("tie");

function endScreen(text) {
    entirePage.remove()
    const finishScreen = document.createElement("div");
    const finishText = document.createTextNode(text);
    finishScreen.appendChild(finishText);
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(finishScreen, currentDiv);
    finishScreen.className = "end";
}

function resultChecker() {
    if (wins == 3) {
        endScreen("W");
    } else if (losses == 3) {
        // lose entire thing
        endScreen("L");
    } else if (ties == 5 || (wins == losses && roundCount == 5)) {
        endScreen("Tie.");
    } else if (roundCount == 5) {
        if (wins > losses) {
            endScreen("W");
        } else {
            endScreen("L");
        }
    }
};

function buttonIsClicked(button, text) {
    button.addEventListener(
        'click', function () {
            playerChoiceBox.textContent = text; 
            playerChoice = playerChoiceBox.textContent;
            computerChoice = gameOptions[Math.floor(Math.random() * gameOptions.length)]; 
            computerChoiceBox.textContent = computerChoice;
            if (playerChoice == "Rock" && computerChoice == "Scissors") {
                wins++;
            } else if (playerChoice == "Paper" && computerChoice == "Rock") {
                wins++;
            } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
                wins++;
            } else if (playerChoice == computerChoice) {
                ties++;
            } else {
                losses++;
            };
            roundCount++;
            roundCountBox.textContent = `Round ${roundCount}/5`;
            winCount.textContent = `Wins: ${wins}`;
            lossCount.textContent = `Losses: ${losses}`;
            tieCount.textContent = `Ties: ${ties}`;
            resultChecker();
        }
    );
};

buttonIsClicked(rockButton, "Rock");
buttonIsClicked(paperButton, "Paper");
buttonIsClicked(scissorsButton, "Scissors");