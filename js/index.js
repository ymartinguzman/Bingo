'use strict';

const balls = document.querySelector('.main__balls');
const newBallBtn = document.querySelector('.header__btn-ball');
const game = document.querySelector('.main__game');
const playBtn = document.querySelector('.header__btn-play');
const stopBtn = document.querySelector('.header__btn-stop');

//Get random number
function getRandomNumber(max) {
  return Math.ceil(Math.random() * 98 + 1);
}

const showArrayNumbers = [];
const cardArrayNumbers = [];

//Random numbers in game
function showBalls(ev) {
  let htmlBalls = '';

  for (let i = 0; i < 1; i++) {
    const number = getRandomNumber(99);
    htmlBalls += `<div class="main__balls--ball"> ${number}</div>`;
    showArrayNumbers.push(number);
    console.log(showArrayNumbers);
  }

  balls.innerHTML += htmlBalls;
}

//Random card

function bingoCard() {
  let htmlBingo = '';
  for (let i = 0; i < 20; i++) {
    const number = getRandomNumber(99);
    htmlBingo += `<div class="main__game--ball"> ${number}</div>`;
    cardArrayNumbers.push(number);
    console.log(cardArrayNumbers);
  }
  game.innerHTML += htmlBingo;
}

bingoCard();

//SetInterval to show balls
let timer;
function autoBalls() {
  timer = setInterval(showBalls, 1000);
  // if (showBalls.length <= 10) {
  //   console.log('Hola');
  // } else {
  //   timer;
  // }
}

//Stop setInterval
function stopBalls() {
  clearInterval(timer);
}

//Compare arrays to make bingo
// function bingo() {}

//Events
newBallBtn.addEventListener('click', showBalls);
playBtn.addEventListener('click', autoBalls);
stopBtn.addEventListener('click', stopBalls);
