let wins = 0;
let losses = 0;

let computerPlay = () => {
    let randNum = Math.ceil(Math.random() *3);
    let choice;
    switch(randNum) {
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissors";
            break;
    }
    return choice;
}

let playGame = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    switch(playerSelection) {
        case 'rock':
            if (computerSelection === 'paper') {
                return 'You Lose! Paper beats Rock.';
            } else if (computerSelection === 'scissors') {
                return 'You Win! Rock beats Scissors.';
            } else {
                return 'It\'s a Tie! You both picked Rock.'
            }
        case 'paper':
            if (computerSelection === 'scissors') {
                return 'You Lose! Scissors beats Paper.';
            } else if (computerSelection === 'rock') {
                return 'You Win! Paper beats Rock.';
            } else {
                return 'It\'s a Tie! You both picked Paper.'
            }
        case 'scissors':
            if (computerSelection === 'rock') {
                return 'You Lose! Rock beats Scissors.';
            } else if (computerSelection === 'paper') {
                return 'You Win! Scissors beats Paper.';
            } else {
                return 'It\'s a Tie! You both picked Scissors.'
            }
    }
}

function changeScore(newWin, newLose) {
    document.getElementById("win").innerHTML = `Wins: ${newWin}`;
    document.getElementById("lose").innerHTML = `Losses: ${newLose}`;
}

let game = (playerChoice) => {
        let winMessage = playGame(playerChoice, computerPlay());
        if(winMessage[4] === 'L') {
            losses++;
            changeScore(wins, losses);
        } else if (winMessage[4] === 'W') {
            wins++;
            changeScore(wins, losses);
        }
        document.getElementById("win-message").innerHTML = winMessage;
        document.getElementById("win-message").style.visibility = "visible";
};

function resetScore() {
    wins = 0;
    losses = 0;
    changeScore(wins, losses);
    document.getElementById("win-message").style.visibility = "hidden";
};