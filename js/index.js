'use strict';

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
function showBalls() {
  for (let i = 0; i < 20; i++) {
    console.log(getRandomNumber(100));
  }
}
showBalls();
