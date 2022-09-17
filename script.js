let playerScore = 0;
let pcScore = 0;
let round = 1;
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let result = document.querySelector("#result");
let playerPoints = document.querySelector("#playerPoints");
let pcPoints = document.querySelector("#pcPoints");
let roundNum = document.querySelector("#roundNumber");

rock.addEventListener("click",rockFunction);
paper.addEventListener("click",paperFunction);
scissors.addEventListener("click",scissorsFunction);

function getComputerChoice(){
    pcChoice = Math.random()*10;
    if(pcChoice<10/3){
        pcWeapon = "rock";
    }
    else if(pcChoice<20/3){
        pcWeapon = "paper";
    }
    else{
        pcWeapon = "scissors";
    }
}

function updateRoundFunction(){
    roundNum.textContent = round;
}

function updateScoreFunction(){
    playerPoints.textContent = playerScore;
    pcPoints.textContent = pcScore;
}

function resultFunction(){
    if(pcScore>4){result.textContent = "You are dead";}
    else if(playerScore>4){result.textContent = "You are the champion!!!";}
}

function winFunction(){
        result.textContent = "You win";
        playerScore++;
        round++;
        updateScoreFunction();
        resultFunction();
        updateRoundFunction();
}

function loseFunction(){
        result.textContent = "You lose";
        pcScore++;
        round++;
        updateScoreFunction();
        resultFunction();
        updateRoundFunction();
}

function drawFunction(){
        result.textContent = "Draw game"
        round++;
        updateRoundFunction();
}

function rockFunction(){
   if(pcScore<5 && playerScore<5){
   playerWeapon = "rock";
   getComputerChoice();
   if(pcWeapon == "paper"){loseFunction();}
   else if(pcWeapon == "scissors"){winFunction();}
   else {drawFunction();}
 }   
}

function paperFunction(){
   if(pcScore<5 && playerScore<5){
   playerWeapon = "paper";
   getComputerChoice();
   if(pcWeapon == "rock"){winFunction();}
   else if(pcWeapon == "scissors"){loseFunction();}
   else {drawFunction();}
 }  
}

function scissorsFunction(){
   if(pcScore<5 && playerScore<5){
   playerWeapon = "scissors";
   getComputerChoice();
   if(pcWeapon == "paper"){winFunction();}
   else if(pcWeapon == "rock"){loseFunction();}
   else {drawFunction();}
 }   
}    