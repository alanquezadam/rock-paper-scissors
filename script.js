//--------------------------INITIAL SCORE-----------------------------------//

let pcScore=0;
let playerScore=0;

do{

//--------------------------PLAYER WEAPON SELECT---------------- -----------//

let playerWeapon=prompt("select your weapon").toLowerCase(); 

//--------------------------PC WEAPON SELECT--------------------------------//

getComputerChoice=function(){
    return Math.random()*10;
};

let pcWeapon;

if(getComputerChoice()<=(10/3)){
    pcWeapon="rock";
}
else if(getComputerChoice()<=(20/3)){
    pcWeapon="paper";
}
else if(getComputerChoice()<=(30/3)){
    pcWeapon="scissors";
}

//--------------------------ROUND------------------------------------------//

if (playerWeapon=="rock"&&pcWeapon=="paper"){
    console.log("You loose");
    ++pcScore;
}
else if(playerWeapon=="rock"&&pcWeapon=="scissors"){
    console.log("You win");
    ++playerScore;
}
else if(playerWeapon=="paper"&&pcWeapon=="scissors"){
    console.log("You loose");
    ++pcScore;
}
else if(playerWeapon=="paper"&&pcWeapon=="rock"){
    console.log("You win");
    ++playerScore;
}
else if(playerWeapon=="scissors"&&pcWeapon=="rock"){
    console.log("You loose");
    ++pcScore;
}
else if(playerWeapon=="scissors"&&pcWeapon=="paper"){
    console.log("You win");
    ++playerScore;
}
else if(playerWeapon==pcWeapon){
    console.log("Draw game");
}
else{
    console.log("Only rock, paper or scissors allowed")
} }


while(playerScore<5&&pcScore<5)


//--------------------------SCORE UPDATE------------------------------------//

console.log("PC points" + ":" + pcScore);
console.log("Player points" + ":" + playerScore);
if(pcScore<playerScore){
	console.log("YOU ARE THE CHAMPION");
}
else{
	console.log("YOU ARE DEAD");
}