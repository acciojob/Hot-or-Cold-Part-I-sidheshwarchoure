//your code here
const secretNumber = Math.floor(Math.random() * 100) + 1;
let previousGuess = null;

const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const response = document.getElementById('respond');

guessButton.addEventListener('click', () => {
  const guessedNumber = parseInt(guessInput.value);

  if (isNaN(guessedNumber)) {
    response.textContent = "Please enter a valid number.";
    return;
  }

  if (previousGuess === null) {
    previousGuess = guessedNumber;
    response.textContent = `Guess higher or lower than ${guessedNumber}.`;
  } else {
    const prevDifference = Math.abs(secretNumber - previousGuess);
    const currentDifference = Math.abs(secretNumber - guessedNumber);

    if (currentDifference < prevDifference) {
      response.textContent = "Getting hotter!";
    } else {
      response.textContent = "Getting colder!";
    }

    if (guessedNumber < secretNumber) {
      response.textContent += " Guess higher.";
    } else if (guessedNumber > secretNumber) {
      response.textContent += " Guess lower.";
    } else {
      response.textContent = "Congratulations! You guessed the secret number.";
      guessInput.disabled = true;
      guessButton.disabled = true;
    }

    previousGuess = guessedNumber;
  }

  guessInput.value = "";
});

