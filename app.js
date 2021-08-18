var activePlayer=1;
var score =[0,0];
var roundScore=0;
var dice = Math.floor((Math.random()*6)+1);
// console.log('dicee ==' + dice);
// <div class="player-score" id="score-0">43</div>
//<img src="dice-3.png" alt="Dice" class="dice"></img>
window.document.querySelector('#score-0').textContent=0;
window.document.querySelector('#score-1').textContent=0;
window.document.querySelector('#current-0').textContent=0;
window.document.querySelector('#current-1').textContent=0;
document.querySelector('.dice').style.display='none';