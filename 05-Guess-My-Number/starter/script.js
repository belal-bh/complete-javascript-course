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
    displayMessage('⚠️ Not a number!');
    return;
  }
  guessedNumber === secretNumber ? celebrate() : penaltyScore();
});

document.querySelector('.again').addEventListener('click', () => resetState());

const displayMessage = message =>
  (document.querySelector('.message').textContent = message);

const penaltyScore = () => {
  if (currentScore > 0) currentScore--;
  document.querySelector('.score').textContent = currentScore;
  if (currentScore === 0) {
    displayMessage(':boom: You lost!');
    document.querySelector('.number').textContent = secretNumber;
  } else {
    displayMessage(
      guessedNumber > secretNumber ? '⬆️ Too high!' : '⬇️ Too low!'
    );
  }
};

const celebrate = () => {
  document.querySelector('body').style.backgroundColor = '#60b347';
  displayMessage('🎊 Correct Number!');
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
  displayMessage('Start guessing...');
};
