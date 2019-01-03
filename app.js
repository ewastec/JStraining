/** PIG game */
/** Variables */
// scores[0] is a score of player 1, scores[1] is a score of player 2
var scores, roundScore, activePlayer;
scores= [0, 0];
roundScore = 0;
activePlayer = 0;
var diceImg = document.querySelector('.diceImg');

//document.querySelector('.current-' + activePlayer).textContent = dices;
document.querySelector('.btn-new').addEventListener('click', function(){
    diceImg.style.display= 'none';
    document.querySelector('.score-0').textContent = '0';
    document.querySelector('.score-1').textContent = '0';
    document.querySelector('.current-0').textContent = '0';
    document.querySelector('.current-1').textContent = '0';
});
document.querySelector('.btn-roll').addEventListener('click', function(){
    console.log('roll');
    // dices random integer from 1 to 6 included
    var dices = Math.floor(Math.random() * 6 + 1);
    // display the random number
    diceImg.style.display= 'block';
    diceImg.src = 'dice-' + dices + '.png';    
    // update the score if the rolled number wasnt 1
    if(dices != 1){
        //document.querySelector('.score-' + activePlayer).textContent = '0';
        roundScore += dices;
        document.querySelector('.current-' + activePlayer).textContent = roundScore;
       
    }
});
document.querySelector('.btn-hold').addEventListener('click', function(){
    console.log('hold');
});