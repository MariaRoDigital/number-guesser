let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
let generateTarget = () => {
  randomNumber = Math.floor(Math.random() * 10);
  return randomNumber;
}

let getAbsoluteDistance = (a, b) => {
  return Math.abs(a - b);
}

let compareGuesses = (userGuess, computerGuess, targetNum) => {
  // let humanDifference = Math.abs(targetNum - userGuess);
  // let computerDifference = Math.abs(targetNum - computerGuess);

  let userDifference = getAbsoluteDistance(targetNum, userGuess);
  let computerDifference = getAbsoluteDistance(targetNum, computerGuess);

  if (userGuess < 0 || userGuess > 9) {
    return alert('Your guess is out of range');
  } else {
    return userDifference <= computerDifference;
  }
}

let updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

const advanceRound = () => {
  if (humanScore + 1 || computerScore + 1) {
    currentRoundNumber++;
  }
}
