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

function playRound(playerChoice, computerChoice) {
    
  if (playerChoice == "rock" && computerChoice == "scissors") {
    console.log("You win! rock beats scissors");
    result = "player win";
  } else if (playerChoice == "paper" && computerChoice == "rock") {
    console.log("You win! paper beats rock");
    result = "player win";
  } else if (playerChoice == "scissors" && computerChoice == "paper") {
    console.log("You win! scissors beats paper");
    result = "player win";
  } else if (playerChoice == computerChoice) {
    console.log("It's a draw!, no one wins");
    result = "draw";
  } else {
    console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
    result = "player loss";
  }
  return result;
}

function playGame() {
  
  let playerWinsTotal = 0;
  let computerWinsTotal = 0;

  for (let i = 0; i < 5; i++) {
    let result = playRound();
    if (result == "player win") {
      playerWinsTotal++;
    } else if (result == "player loss") {
      computerWinsTotal++;
    } else continue;
  } 

  if (playerWinsTotal > computerWinsTotal) {
    console.log(`You win ${playerWinsTotal}-${computerWinsTotal}, Congrats!`);
  } else if (playerWinsTotal < computerWinsTotal) {
    console.log(`You lose ${playerWinsTotal}-${computerWinsTotal}, Try again next time!`);
  } else {
    console.log(`It's a draw! ${computerWinsTotal}-${playerWinsTotal}`);
  }
}

playGame()