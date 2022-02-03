function computerPlay() {
  let computerChoice = Math.floor(Math.random() * 3) + 1 ; 
  
  if (computerChoice == 1) {
    computerChoice = "rock";  
  } else if (computerChoice == 2) {
    computerChoice = "paper";  
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
}

function getPlayerChoice() {
  let playerChoice = prompt("Please pick a hand", "Paper");

  return playerChoice.toLowerCase();
}

function playRound() {
  let result;
  playerChoice = getPlayerChoice();
  computerChoice = computerPlay();

  if (playerChoice == "rock" && computerChoice == "scissors") {
    console.log("You win! rock beats scissors") 
    result = "player win";  
  } else if (playerChoice == "paper" && computerChoice == "rock") {
    console.log("You win! paper beats rock")   
    result = "player win"; 
  } else if (playerChoice == "scissors" && computerChoice == "paper") {
    console.log("You win! scissors beats paper")
    result = "player win";    
  } else if (playerChoice == computerChoice) {
    console.log("It's a draw!, no one wins")   
    result = "draw"; 
  } else {
    console.log(`You lose! ${computerChoice} beats ${playerChoice}`)
    result = "player loss";    
  }
}