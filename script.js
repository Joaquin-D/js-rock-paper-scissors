console.log();

function computerPlay() {
    let x = "";
    do {    
        switch (Math.floor(Math.random() * 4)) {
            case 1:
                x = "Rock";
                break;
            case 2:
                x = "Paper";
                break;
            case 3:
                x = "Scissors";
                break;
            case 0:
        };
    } while (x == "");
    return x;
};

function gameResult(computerInput, playerInput) {
    if (computerInput == "Rock" && playerInput == "Paper") {
        return "Win";
    } else if (computerInput == "Paper" && playerInput == "Scissors") {
        return "Win";
    } else if (computerInput == "Scissors" && playerInput == "Rock") {
        return "Win";
    } else if (computerInput == playerInput) {
        return "Tie";
    } else {
        return "Loss";
    };
};

function game() {
    let playerInput = "int";
    let tie = 0;
    let win = 0;
    let loss = 0;
    do {
        playerInput = prompt('1 for Rock, 2 for Paper, and 3 for Scissors! (type "q" to quit)');
        if (playerInput == 1) {
            playerInput = "Rock";
        } else if (playerInput == 2) {
            playerInput = "Paper";
        } else if (playerInput == 3) {
            playerInput = "Scissors";
        } else {
            break;
        };
        let computerInput = computerPlay();
        console.log(`${playerInput} vs ${computerInput}`);
        let result = gameResult(computerInput, playerInput);
        console.log(result);
        if (result == "Loss") {
            loss++;
        } else if (result == "Tie") {
            tie++;
        } else if (result == "Win") {
            win++;
        };
    } while (playerInput != "q");
};

game();