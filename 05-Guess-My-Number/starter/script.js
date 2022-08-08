'use strict';
/*
console.log(document.querySelector('.message').textContent);
console.log(document.querySelector('.score').textContent);
console.log(document.querySelector('.number').textContent);
console.log(document.querySelector('.guess').value);
console.log(document.querySelector('.highscore').textContent);

document
  .querySelector('.check')
  .addEventListener('click', () =>
    console.log(document.querySelector('.guess').value)
  );
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
let currentScore = 20;
let highScore = 0;
let guessedNumber;

document.querySelector('.check').addEventListener('click', () => {
  if (currentScore === 0) return;
  const guessedInputFieldValue = document.querySelector('.guess').value;
  //   console.log(guessedInputFieldValue, typeof guessedInputFieldValue);
  guessedNumber = guessedInputFieldValue
    ? Number(guessedInputFieldValue)
    : guessedInputFieldValue;
  console.log(guessedNumber, typeof guessedNumber);
  if (typeof guessedNumber !== 'number') {
    document.querySelector('.message').textContent = '⚠️ Not a number!';
    return;
  }

  if (guessedNumber === secretNumber) {
    // matched
    celebrate();
  } else if (guessedNumber > secretNumber) {
    // higher
    document.querySelector('.message').textContent = '⬆️ Too high!';
    currentScore = penaltyScore(currentScore);
  } else {
    // low
    document.querySelector('.message').textContent = '⬇️ Too low!';
    currentScore = penaltyScore(currentScore);
  }
});

document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  currentScore = 20;
  // highScore = 0;
  guessedNumber = '';
  document.querySelector('.guess').value = guessedNumber;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
});

const penaltyScore = score => {
  if (score > 0) score--;
  document.querySelector('.score').textContent = score;
  if (score === 0) {
    document.querySelector('.message').textContent = ':boom: You lost!';
    document.querySelector('.number').textContent = secretNumber;
  }
  return score;
};

const celebrate = () => {
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.message').textContent = '🎊 Correct Number!';
  document.querySelector('.number').textContent = secretNumber;
  highScore = Math.max(highScore, currentScore);
  document.querySelector('.highscore').textContent = highScore;
};
