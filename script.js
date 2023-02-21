'use strict';

// document.querySelector('.class').textContent=   //! change the text
//  let a = document.querySelector('.class').value  //! sets the value

// declaring the varialbles
let random = Math.trunc(Math.random(2) * 20 + 1);
let score = 20;
let highscore = 0 ;
console.log(random);


// check button click events 

document.querySelector('.check').addEventListener('click', function () {
  let inputValue = Number(document.querySelector('.guess').value);
  // console.log(typeof inputValue)
  if (!inputValue) {
    document.querySelector('.message').textContent = 'No number ❌';
  } else if (inputValue === random) {
    document.querySelector('body').style.backgroundColor = '#008000';
    // document.querySelector('.number').width = '25rem';
    document.querySelector('.message').textContent = 'You Guessed it right 🎉 .';
    document.querySelector('.number').textContent = `${random}`;

    
    // updating the highscore
    if(score>highscore){
      highscore=score
      document.querySelector('.Highscore').textContent = highscore;
    }
  } 
  else if (inputValue > random) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'TO High 📈';
      document.querySelector('body').style.backgroundColor = '#ff0000';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 😔';
    }
  } else if (inputValue < random) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'TO Low 📉';
      document.querySelector('body').style.backgroundColor = '#ff0000';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 😔';
    }
  }
});


// again button click events 
document.querySelector('.again').addEventListener('click', function() {
  score = 20;


  random = Math.trunc(Math.random(2) * 20 + 1);
  console.log(random);

  document.querySelector('.number').textContent = `?`;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing....';
  document.querySelector('body').style.backgroundColor = '#333333';
  document.querySelector('.guess').value = 0;

  // location.reload(); 
})
