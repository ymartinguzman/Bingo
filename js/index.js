'use strict';

const balls = document.querySelector('.main__balls');
const newBall = document.querySelector('.header__game-ball');
const game = document.querySelector('.main__game');
const play = document.querySelector('.header__game-play');

//Get random number
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const showArrayNumbers = [];
const cardArrayNumbers = [];
//Random numbers in game
function showBalls(ev) {
  let htmlBalls = '';

  for (let i = 0; i < 1; i++) {
    const number = getRandomNumber(100);
    htmlBalls += `<div class="main__balls--ball"> ${number}</div>`;
    showArrayNumbers.push(number);
  }

  balls.innerHTML += htmlBalls;
}

//Random card
function bingoCard() {
  let htmlBingo = '';
  for (let i = 0; i < 20; i++) {
    const number = getRandomNumber(100);
    htmlBingo += `<div class="main__game--ball"> ${number}</div>`;
    cardArrayNumbers.push(number);
  }
  game.innerHTML += htmlBingo;
}

bingoCard();

//SetInterval

function autoBalls() {
  setInterval(showBalls, 2000);
  // if (showArrayNumbers.length === 10) {
  //   clearInterval(setInterval);
  // }
  // console.log(clearInterval(setInterval));
}

//Events
newBall.addEventListener('click', showBalls);
play.addEventListener('click', autoBalls);
