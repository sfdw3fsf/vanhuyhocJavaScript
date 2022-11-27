'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const currentScoreEl0 = document.querySelector('#current--0');
const currentScoreEl1 = document.querySelector('#current--1');
const playerEl0 = document.querySelector('.player--0');
const playerEl1 = document.querySelector('.player--1');

const switchPlayer = function () {
  currentScore = 0;
  // document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  // document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
  playerEl0.classList.toggle('player--active');
  playerEl1.classList.toggle('player--active');
}
let currentScore, activePlayer, scores, playing;
const initialScore = function () {
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  playing = true;
  if (activePlayer === 1) {
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
  }
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
  score0El.textContent = '0';
  score1El.textContent = '0';
}
//Starting initial
initialScore();

//Roll the dice
//Random Dice
btnRoll.addEventListener('click', function () {
  if (playing) {
    diceEl.classList.remove('hidden');
    const dice = Math.trunc(Math.random() * (6)) + 1;
    if (dice !== 1) {
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    }
    else {
      switchPlayer();
    }
    diceEl.src = `dice-${dice}.png`;
  }
})

//Show the dice
diceEl.classList.add('hidden');

//Add current score to score
btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
    //Finish the game
    if (scores[activePlayer] >= 20) {
      playing = false;
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      diceEl.classList.add('hidden');
    } else { switchPlayer(); }
  }
});

btnNew.addEventListener('click', initialScore)

