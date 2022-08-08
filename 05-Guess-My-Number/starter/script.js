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
    celebrate();
  } else if (guessedNumber > secretNumber) {
    document.querySelector('.message').textContent = '⬆️ Too high!';
    currentScore = penaltyScore(currentScore);
  } else {
    document.querySelector('.message').textContent = '⬇️ Too low!';
    currentScore = penaltyScore(currentScore);
  }
});

document.querySelector('.again').addEventListener('click', () => resetState());

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
  document.querySelector('.number').style.width = '25rem';
  highScore = Math.max(highScore, currentScore);
  document.querySelector('.highscore').textContent = highScore;
};

const resetState = () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  currentScore = 20;
  guessedNumber = '';
  document.querySelector('.guess').value = guessedNumber;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
};
