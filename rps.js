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