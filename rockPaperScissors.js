console.log("Linked successfully!");
//Initialize variable to track Computer's Choice
//Create function that generates a number
//Multiply said number by 3
//Floor said number
//Use if statements to dictate the choice
let playerChoice ="";
let computerChoice ="";
let playerScore = 0;
let computerScore = 0;
let gameStatus ="";
function getComputerChoice() {
    randomNum = Math.floor(Math.random() * 3) + 1;
    if(randomNum == 1){
        return "rock";
    }
    else if(randomNum ==2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
const rockButton = document.querySelector("#rockButton");
rockButton.addEventListener("click", () => {
    playerChoice = "rock";
    playRound();
    console.log("YE");
})

const paperButton = document.querySelector("#paperButton");
paperButton.addEventListener("click", () => {
    playerChoice = "paper";
    playRound();
})

const scissorsButton = document.querySelector("#scissorsButton");
scissorsButton.addEventListener("click", () => {
    playerChoice = "scissors";
    playRound();
})
function playRound() {
    computerChoice = getComputerChoice();
    chooseWinner();
    updateScreen();
}
//adds score depending on who won the round, adds 
function chooseWinner() {
    //determine if there is a tie
    if(playerChoice == computerChoice) {
        gameStatus = "Tie!"
    }
    //player's winning conditions
    else if(playerChoice == "rock" && computerChoice == "scissors") {
        playerScore +=1;
        gameStatus = "YOU WON"
    }
    else if(playerChoice == "paper" && computerChoice == "rock") {
        playerScore +=1;
        gameStatus = "YOU WON"
    }
    else if(playerChoice == "scissors" && computerChoice=="paper"){
        playerScore+=1;
        gameStatus = "YOU WON"
    }
    //computer's winning conditions
    else {
        computerScore +=1;
        gameStatus = "You lost :("
    }
    const winnerText = document.querySelector("#winnerText");
    if(playerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        winnerText.textContent = "And the winner is... YOUUUU"
    }
    else if(computerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        winnerText.textContent = "And the winner is... The Computer :("
    }
}

function updateScreen() {
    const gameStatusText = document.querySelector("#gameStatusText");
    const playerScoreText = document.querySelector("#playerScoreText");
    const computerScoreText = document.querySelector("#computerScoreText");

    gameStatusText.textContent = "Round Status: " + gameStatus;
    playerScoreText.textContent = "Your score: " + playerScore;
    computerScoreText.textContent = "Computer Score: " + computerScore;
}