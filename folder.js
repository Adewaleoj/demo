 'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent='Correct number';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent=10;
// console.log(document.querySelector('.guess').value= 23);
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

var audio = new Audio('2baabaa.mp3');

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message ;
}

const displayNumber = function(number) {
    document.querySelector('.number').textContext = number;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
console.log(guess, typeof guess);

// document.querySelector('.message').textContent = guess > secretNumber ? 'Too high' : 'Too low'


if (!guess) {
    // document.querySelector('.message').textContent = 'No Number!'; 
    displayMessage('No number!!');
} else if (guess === secretNumber) {
    displayMessage ('Correct number!');

     audio.play();

    document.querySelector('body').style.backgroundColor = 'yellow';

    displayNumber('secretNumber');

    document.querySelector('.number').style.width = '35rem';

if (score > highScore) {
    highScore = score;
    document.querySelector('.highvalue').textContent = highScore;
}

} else if(guess > secretNumber) {
    if (score > 1) {
    displayMessage('Too high 😲');
    score--;
document.querySelector('.score').textContent = score;
    }
        else
    {
        displayMessage('you lost the game!!!');
        document.querySelector('.score').textContent = 0;
    }
}  else if (guess < secretNumber) {
    displayMessage('Too low 😠');
    score--;
    document.querySelector('.score').textContent = score;
}
    
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    displayMessage('Start guessing ⏬');
    document.querySelector('body').style.backgroundColor = 'purple';
    document.querySelector('.number').style.width = '15rem';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.guess').value = '';
audio.pause();

});

