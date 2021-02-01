'use strict';

const balls = document.querySelector('.main__balls');
const newBallBtn = document.querySelector('.header__btn-ball');
const game = document.querySelector('.main__game');
const playBtn = document.querySelector('.header__btn-play');
const stopBtn = document.querySelector('.header__btn-stop');

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

//SetInterval to show balls
let timer;
function autoBalls() {
  timer = setInterval(showBalls, 3000);

  console.log();

  // function stopBalls() {
  //   if (showArrayNumbers.length === 10) {
  //     console.log(number.length);

  //   }
  // }
}

//Stop setInterval
function stopBalls() {
  clearInterval(timer);
}

//Events
newBallBtn.addEventListener('click', showBalls);
playBtn.addEventListener('click', autoBalls);
stopBtn.addEventListener('click', stopBalls);
