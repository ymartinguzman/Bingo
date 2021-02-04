'use strict';

const balls = document.querySelector('.main__balls');
const newBallBtn = document.querySelector('.header__btn-ball');
const game = document.querySelector('.main__game');
const playBtn = document.querySelector('.header__btn-play');
const stopBtn = document.querySelector('.header__btn-stop');
const bingo = document.querySelector('.main__congratulations');

//Get random number
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const showArrayNumbers = [];
const cardArrayNumbers = [];
const bingoArray = [];

//Handler
function compareBalls() {
  let bingoHtml = '';
  if (
    cardArrayNumbers.indexOf(showArrayNumbers[showArrayNumbers.length - 1]) !==
    -1
  ) {
    console.log('HE entrado y lo he petado');

    const htmlBall = document.querySelector(
      `#ball-${showArrayNumbers[showArrayNumbers.length - 1]}`
    );
    const htmlCard = document.querySelector(
      `#card-${showArrayNumbers[showArrayNumbers.length - 1]}`
    );
    htmlBall.classList.add('inside-balls');
    htmlCard.classList.add('inside-balls');
    // if (htmlBall.length === 10 && htmlCard.length === 10) {
    //   console.log('BINGOOOOOO');
    // }
    bingoArray.push(showArrayNumbers[showArrayNumbers.length - 1]);
    if (bingoArray.length === 10) {
      stopBalls();
      bingoHtml += `<p class="js-main__bingo">¡¡¡¡¡BINGO!!!!!</p>`;
    }
    bingo.innerHTML = bingoHtml;
  }
}

//Sing bingo
// function congratulationsBingo() {
//   if (showArrayNumbers.classList.contains('inside-balls') === 10) {
//     console.log('BINGOOOOOO');
//   }
// }
//Random numbers in game
function showBalls(ev) {
  let htmlBalls = '';
  for (let i = 0; i < 1; i++) {
    const number = getRandomNumber(30);
    if (!showArrayNumbers.includes(number)) {
      htmlBalls += `<div class="main__balls--ball" id="ball-${number}"> ${number}</div>`;
      showArrayNumbers.push(number);
    } else {
      i--;
    }
    // localStorage.setItem('balls', showArrayNumbers);
  }
  console.log(showArrayNumbers);

  balls.innerHTML += htmlBalls;
  compareBalls();
  // congratulationsBingo();
}

//Handler
// function bingoHandler() {
//   const getItemLocalBalls = localStorage.getItem('balls');
//   const getItemLocalCard = localStorage.getItem('card');
//   const arrayBallsLocal = getItemLocalBalls.split(',');
//   const arrayCardLocal = getItemLocalCard.split(',');
//   console.log(arrayBallsLocal);
//   console.log(arrayCardLocal);
//   console.log(typeof arrayCardLocal);
//   console.log(showArrayNumbers);
//   console.log(cardArrayNumbers);
// }
// bingoHandler();

//Random card
function bingoCard() {
  let htmlBingo = '';
  for (let i = 0; i < 10; i++) {
    const number = getRandomNumber(30);
    if (!cardArrayNumbers.includes(number)) {
      htmlBingo += `<div class="main__game--ball" id="card-${number}"> ${number}</div>`;
      cardArrayNumbers.push(number);
    } else {
      i--;
    }

    // localStorage.setItem('card', cardArrayNumbers);
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

//Events
newBallBtn.addEventListener('click', showBalls);
playBtn.addEventListener('click', autoBalls);
stopBtn.addEventListener('click', stopBalls);
