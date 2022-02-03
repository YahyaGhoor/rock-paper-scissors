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
  if (playerChoice == null) { 
    return alert("You cancelled the game :(  Reload the page to play again.")
  } 
  return playerChoice.toLowerCase();
}

function checkInput () {
  let result;
  let playerChoice = getPlayerChoice();
  let computerChoice = computerPlay();

  if (
    playerChoice.toLowerCase() == "rock"
    || playerChoice.toLowerCase() == "paper"
    || playerChoice.toLowerCase() == "scissors"
  ) {
    result = playRound(playerChoice, computerChoice);
    return result;
  } else {
    return alert("Please select either rock, paper or scissors");
  }
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
    console.log(`It's a draw!, you both chose ${playerChoice}`);
    result = "draw";
  } else {
    console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
    result = "player loss";
  }
  return result;
}

function playGame() {
  alert("You will now play 5 rounds of Rock Paper Scissors against the computer(draws don't count). Press F12 to view the console and see your score. Please select \"OK\", then press F5, select \"OK\", ignore the instructions message that pops up, then select \"OK\" and type out a hand. Select cancel to stop.") 

  let playerWinsTotal = 0;
  let computerWinsTotal = 0;

  for (let i = 0; i < 5; i++) {
    let result = checkInput();
    if (result == "player win") {
      playerWinsTotal++;
    } else if (result == "player loss") {
      computerWinsTotal++;
    } else i--;
  }

  if (playerWinsTotal > computerWinsTotal) {
    console.log(`You win ${playerWinsTotal}-${computerWinsTotal}, Congrats!`);
  } else if (playerWinsTotal < computerWinsTotal) {
    console.log(`You lose ${playerWinsTotal}-${computerWinsTotal}, Try again next time!`);
  } else {
    console.log(`It's a draw! ${computerWinsTotal}-${playerWinsTotal}`);
  }
  
  console.log("Reload the page to play again! Ignore the instructions popup");
}

playGame()