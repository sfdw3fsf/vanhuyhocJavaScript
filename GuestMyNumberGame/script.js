'use strict';

//DOM: Document Object Model: allow js to access html
//DOM is a part of web API
//API: Apllication Programming Interface

let secretNumber = Math.trunc(Math.random() * 20) + 1; //*(max-min)+min
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
}
const changeBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
}
const changeNumberWidth = function (width) {
  document.querySelector('.number').style.width = width;
}
document.querySelector('.check').addEventListener('click',
  function () {
    const guess = Number(document.querySelector('.guess').value);
    if (score > 1) {
      //When the user do not fill in number
      if (!guess) {
        displayMessage('🤷‍♂️ Fill number');
      }
      //When the user fill correct number
      else if (guess === secretNumber) {
        displayMessage('😘 Congratulations')
        document.querySelector('.number').textContent = secretNumber;
        changeBackgroundColor('#60b437');
        changeNumberWidth('30rem');
        //Highest score
        if (score > highScore) {
          highScore = score;
          document.querySelector('.highscore').textContent = highScore;
        }
      }
      //when the user fill lower or higher number
      else if (guess !== secretNumber) {
        score -= 1;
        displayScore(score);
        displayMessage(guess > secretNumber ? '🖼️ Higher' : '🖼️ Lower');
      }

    }
    //when the user loose the game
    else {
      score--;
      displayMessage('🤣 You loose the game');
      displayScore(score);;
    }
  })

document.querySelector('.again').addEventListener('click',
  function () {
    document.querySelector('.guess').value = '';
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    secretNumber = Math.trunc(Math.random() * 20) + 1; //*(max-min)+min
    score = 20;
    displayScore(score);
    changeBackgroundColor('#222');
    changeNumberWidth('15rem');
  })

