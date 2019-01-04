/** PIG game */
/** Variables */
// scores[0] is a score of player 1, scores[1] is a score of player 2
var scores, roundScore, activePlayer;
scores= [0, 0];
roundScore = 0;
activePlayer = 0;
var diceImg = document.querySelector('.diceImg');


document.querySelector('.btn-new').addEventListener('click', function(){
    document.querySelector('.playerMessage-' + activePlayer).textContent = '';
    diceImg.style.display= 'none';
    document.querySelector('.score-0').textContent = '0';
    document.querySelector('.score-1').textContent = '0';
    document.querySelector('.current-0').textContent = '0';
    document.querySelector('.current-1').textContent = '0';
});
document.querySelector('.btn-roll').addEventListener('click', function(){
    // dices random integer from 1 to 6 included
    var dices = Math.floor(Math.random() * 6 + 1);
    // display the random number
    diceImg.style.display= 'block';
    diceImg.src = 'dice-' + dices + '.png';    
    // update the score if the rolled number wasnt 1
    if(dices !== 1){
        // add score
        roundScore += dices;
        document.querySelector('.current-' + activePlayer).textContent = roundScore;      
    }else{
        roundScore = 0;
        document.querySelector('.current-' + activePlayer).textContent = roundScore; 
        // next player
        document.querySelector('.playerMessage-' + activePlayer).textContent = '';
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        document.querySelector('.playerMessage-' + activePlayer).textContent = 'Now You Play';
    }
});
document.querySelector('.btn-hold').addEventListener('click', function(){
    scores[activePlayer] += roundScore; 
    document.querySelector('.score-' + activePlayer).textContent = scores[activePlayer];    
    document.querySelector('.playerMessage-' + activePlayer).textContent = '';
    // check if winer
    if(scores[activePlayer] >= 50){
        document.querySelector('.playerMessage-' + activePlayer).textContent = "You're a winer. You have 50 or more points";
        roundScore = 0;
    }else{
        // next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        diceImg.style.display= 'none';
        document.querySelector('.playerMessage-' + activePlayer).textContent = 'Now You Play';
        roundScore = 0;
    }   
});