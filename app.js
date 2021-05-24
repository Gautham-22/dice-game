

var scores,roundScore,activePlayer,gamePlay;
init();

function init(){
    scores=[0,0];
    roundScore=0;
    activePlayer=0;
    gamePlay=true;

    document.querySelector(".dice").style.display="none";

    document.getElementById("current-0").textContent=0;
    document.getElementById("score-0").textContent=0;

    document.getElementById("current-1").textContent=0;
    document.getElementById("score-1").textContent=0;

    document.getElementById("name-0").textContent="Player 1";
    document.getElementById("name-1").textContent="Player 2";

    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");

    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");

    document.querySelector(".player-0-panel").classList.add("active");
}    

function nextPlayer(){
    roundScore=0;
    activePlayer= activePlayer===0 ? 1 : 0;

    document.getElementById("current-0").textContent=0;        
    document.getElementById("current-1").textContent=0;

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");  

    document.querySelector(".dice").style.display="none";
}

document.querySelector(".btn-roll").addEventListener("click",function(){
    if(gamePlay){
        var dice=Math.floor(Math.random()*6)+1;
        var diceDOM=document.querySelector(".dice");
        
        diceDOM.style.display="block";
        diceDOM.src="images/dice-"+dice+".png";

        if(dice!==1){
            roundScore+=dice;
            document.getElementById("current-"+activePlayer).textContent=roundScore;
        }else{
            nextPlayer();
        }

    }
});

document.querySelector(".btn-hold").addEventListener("click",function(){
    if(gamePlay){
        scores[activePlayer]+=roundScore;
        document.getElementById("score-"+activePlayer).textContent=scores[activePlayer];

        if(scores[activePlayer] >= 20){
            gamePlay=false;

            document.getElementById("name-"+activePlayer).textContent="Winner!";

            document.querySelector(".player-"+activePlayer+"-panel").classList.add("winner");
            document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active");

            document.getElementById("current-0").textContent=0;
            document.getElementById("current-1").textContent=0;
            
            document.querySelector(".dice").style.display="none";
        }else{
            nextPlayer();
        }
    }
});

document.querySelector(".btn-new").addEventListener("click",init);


