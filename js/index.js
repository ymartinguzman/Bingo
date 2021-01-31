'use strict';

const balls = document.querySelector('.main__balls');
const newBall = document.querySelector('.header__game-ball');
const game = document.querySelector('.main__game');

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function showBalls() {
  let htmlBalls = '';

  for (let i = 0; i < 1; i++) {
    htmlBalls += `<div class="main__balls--ball"> ${getRandomNumber(
      100
    )}</div>`;
  }
  balls.innerHTML += htmlBalls;
}

newBall.addEventListener('click', showBalls);

function bingoCard() {
  let htmlBingo = '';

  for (let i = 0; i < 20; i++) {
    htmlBingo += `<div class="main__game--ball"> ${getRandomNumber(100)}</div>`;
  }
  game.innerHTML += htmlBingo;
  console.log(htmlBingo);
}

bingoCard();
