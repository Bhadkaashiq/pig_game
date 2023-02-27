'use strict';

//selecting elements 
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player-1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');


// Starting Conditions 

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//Roling dice functionality 

btnRoll.addEventListener('click', function(){
    // 1. Generating a random dice roll 
    const dice = Math.trunc(Math.random()*6 ) + 1;
    console.log(dice);

    //2. Display dice 
    diceEl.classlist.remove('hidden')
    diceEl.src = `dice-${dice}.png`;

    //Check for rolled 1: if true, switch to next player 
if (dice !==1){
    // Add dice to current score 
    currentscore += dice;
    current0El.textcontent = currentScore; // CHANGE LATER 

} else {
    //Switch to next player 
document.getElementById(`current--${activePlayer}`).textcontent=0;
currentScore= 0;
activePlayer =  activePlayer === 0 ? 1 : 0;
player0El.classlist.toggle('player--active');
player1El.classlist.toggle('player--active');


}

} );