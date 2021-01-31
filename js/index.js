'use strict';

const balls = document.querySelector('.main__balls');
const newBall = document.querySelector('.header__game-ball');
const game = document.querySelector('.main__game');
const play = document.querySelector('header__game-play');
console.log(play);

//Get random number
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

//Random numbers in game
function showBalls() {
  let htmlBalls = '';

  for (let i = 0; i < 1; i++) {
    htmlBalls += `<div class="main__balls--ball"> ${getRandomNumber(
      100
    )}</div>`;
  }
  balls.innerHTML += htmlBalls;
}

//Random card
function bingoCard() {
  let htmlBingo = '';

  for (let i = 0; i < 20; i++) {
    htmlBingo += `<div class="main__game--ball"> ${getRandomNumber(100)}</div>`;
  }
  game.innerHTML += htmlBingo;
  console.log(htmlBingo);
}

bingoCard();

//SetInterval

// setInterval(showBalls, 2000);

//Events
newBall.addEventListener('click', showBalls);
play.addEventListener('click', setInterval);
