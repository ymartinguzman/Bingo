'use strict';

const game = document.querySelector('.main__game');

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
function showBalls() {
  let html = '';
  for (let i = 0; i < 20; i++) {
    html += `<div class="main__game--ball"> ${getRandomNumber(100)}</div>`;
  }
  game.innerHTML += html;
}
showBalls();
