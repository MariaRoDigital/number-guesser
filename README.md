This is a Codecademy challenge project where I was tasked with programming specific functions for a number guessing game that is human vs computer. During the challenge, I wasn't sure what method to use to get a range of numbers and compare the closest in order to find the closest answer that the computer and the human gave. You will see my attempt commented out inside the compareguesses() block. As I proceeded to the next tasks though, I found that my solution at finding a range that would give me who was closest to the number, wouldn't work

Challenge Tasks:

1. Create a generateTarget() function that would give me a random number from 0 to 9, this number will be used as the secret number to be guessed by the computer and the human

2. Create a compareGuesses() function that has 3 parameters, two of them being the human and computer guesses, and the third, the random number that the generateTarget() function will output
   1. The function will find who is closest to the target random number
   2. The function will return 'true' if the human player wins, and 'false' if the computer wins
  
3. Create an updateScore() function with a single parameter that will use a string that may have the value of 'human' or 'computer' based on the evaluation of the compareGuesses() function. The string passed in will determine if the computer score increases or the human score increases

4. Create an advanceRound() function that increases the value of the variable 'currentRoundNumber' by 1

Extra tasks for this challenge:

1. Move the function that was used to compare the distance between the computerGuess and the humanGuess, into a new function called getAbsoluteDistance() and use it inside of the compareGuesses() function block

2. Add a conditional statement that check whether a user guess is between 0 and 9, if the number is out of range, and alert box should pop up and let the human know that the guess is out of range
