'use strict';

const balls = document.querySelector('.main__balls');
const newBallBtn = document.querySelector('.main__btn-ball');
const game = document.querySelector('.main__game');
const playBtn = document.querySelector('.main__btn-play');
const stopBtn = document.querySelector('.main__btn-stop');
const bingo = document.querySelector('.main__congratulations');
const newGame = document.querySelector('.main__btn-newPlay');

//Get random number
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

let showArrayNumbers = [];
let cardArrayNumbers = [];
const bingoArray = [];

//Handler
function compareBalls() {
  let bingoHtml = '';
  if (
    cardArrayNumbers.indexOf(showArrayNumbers[showArrayNumbers.length - 1]) !==
    -1
  ) {
    const htmlBall = document.querySelector(
      `#ball-${showArrayNumbers[showArrayNumbers.length - 1]}`
    );
    const htmlCard = document.querySelector(
      `#card-${showArrayNumbers[showArrayNumbers.length - 1]}`
    );
    htmlCard.classList.add('inside-balls');
    bingoArray.push(showArrayNumbers[showArrayNumbers.length - 1]);
    if (bingoArray.length === 12) {
      stopBalls();

      bingoHtml += `<p class="js-main__bingo">¡¡¡¡¡BINGO!!!!!</p>`;
    }
    bingo.innerHTML = bingoHtml;
  }
}

//Random numbers in game
function showBalls(ev) {
  let htmlBalls = '';
  for (let i = 0; i < 1; i++) {
    const number = getRandomNumber(20);
    if (!showArrayNumbers.includes(number)) {
      htmlBalls += `<div class="main__balls--ball" id="ball-${number}"> ${number}</div>`;
      showArrayNumbers.push(number);
    } else {
      i--;
    }
  }
  console.log(showArrayNumbers);

  balls.innerHTML += htmlBalls;
  compareBalls();
}

//Random card
function bingoCard() {
  let htmlBingo = '';
  for (let i = 0; i < 12; i++) {
    const number = getRandomNumber(20);
    if (!cardArrayNumbers.includes(number)) {
      htmlBingo += `<div class="main__game--ball" id="card-${number}"> ${number}</div>`;
      cardArrayNumbers.push(number);
    } else {
      i--;
    }
  }
  game.innerHTML += htmlBingo;
}
bingoCard();

function newBingoGame() {
  cardArrayNumbers = [];
  game.innerHTML = '';
  showArrayNumbers = [];
  balls.innerHTML = '';
  bingo.innerHTML = '';
  bingoCard();
}

//SetInterval to show balls
let timer;
function autoBalls() {
  timer = setInterval(showBalls, 1000);
}

//Stop setInterval
function stopBalls() {
  clearInterval(timer);
}

//Events
// newBallBtn.addEventListener('click', showBalls);
playBtn.addEventListener('click', autoBalls);
stopBtn.addEventListener('click', stopBalls);
newGame.addEventListener('click', newBingoGame);
