console.log("Linked successfully!");
//Initialize variable to track Computer's Choice
//Create function that generates a number
//Multiply said number by 3
//Floor said number
//Use if statements to dictate the choice
let computerChoice ="";
let playerChoice ="";
let randomNum = 0;
let playerScore = 0;
let computerScore = 0;
function getComputerChoice() {
    randomNum = Math.floor(Math.random() * 3) + 1;
    if(randomNum == 1){
        computerChoice = "rock";
    }
    else if(randomNum ==2) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
    return computerChoice;
}
//Prompt user to enter rock, paper, or scissors
function getPlayerChoice() {
    playerChoice = prompt("Rock, paper, or scissors?");
    return playerChoice;
}
function playGame(){
    for(var i =0; i<5; i++){
        playRound();
    }
    console.log("Player score: " + playerScore + "\nComputer Score " +computerScore);
    if(playerScore > computerScore) {
        console.log("You won!");
    }
    else {
        console.log("You lost");
    }
}

function playRound() {
    getComputerChoice();
    console.log("The computer chose: " + computerChoice);
    getPlayerChoice();
    playerChoice = playerChoice.toLowerCase();
    console.log("The player chose: " + playerChoice);
    chooseWinner();
}
//adds score depending on who won the round, adds 
function chooseWinner() {
    //determine if there is a tie
    if(playerChoice == computerChoice) {
    }
    else if(playerChoice == "rock" && computerChoice == "scissors") {
        playerScore +=1;
    }
    else if(playerChoice == "paper" && computerChoice == "rock") {
        playerScore +=1;
    }
    else if(playerChoice == "scissors" && computerChoice=="paper"){
        playerScore+=1;
    }
    else {
        computerScore +=1;
    }
}
playGame();