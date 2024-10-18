

function getComputerChoice(){

    let computerChoice = Math.floor(Math.random()*3);
    if(computerChoice == 0){
        return "Rock";
    }else if(computerChoice == 1){
        return "Paper";
    }
    else{
        return "Scissor";
    }
}


function getHumanChoice(){
        let humanChoice = prompt("Enter choice:");
        while(true){
            if(humanChoice === null){
                console.log("ok we will play next time");
                return null;
            }
            humanChoice= humanChoice.toLowerCase();
            if(humanChoice === "rock"){
                return "Rock";
            }else if(humanChoice ==="paper"){
                return "Paper";
            }else if(humanChoice === "scissor"){
                return "Scissors";
            }
            else{
                humanChoice = prompt("invalid!");
            }
        }
}




function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        return "tie";
    }
    else if(humanChoice === "Rock" && computerChoice==="Scissor"||humanChoice=== "Paper" && computerChoice === "Rock" || humanChoice === "Scissor" && computerChoice === "Paper"){
        return "Human";
    }
    else{
        return "Computer";
    }
}

function playGame(){
    console.log("Time to play!");
    let humanPoints = 0;
    let computerPoints = 0;
    /*while(humanPoints < 3 && computerPoints < 3){
        let humanChoice = getHumanChoice();
        if(humanChoice === null){
            return;
        }
        let computerChoice = getComputerChoice();
        console.log("You chose"+humanChoice+" and computer chose "+computerChoice);
        let winner = playRound(humanChoice,computerChoice);
        if(winner === "Tie"){
            console.log("its a tie");
        }else if(winner === "Human"){
            console.log("you win");
            humanPoints++;
        }
        else if(winner === "Computer"){
            console.log("you lose!");
            computerPoints++;
        }
        console.log("Your points: "+ humanPoints);
        console.log("Computer points: "+ computerPoints);
    }
    if(humanPoints === 3){
        console.log("you won at last");
    }
    else{
        console.log("computer won at last");
    }*/
   
        
    
    
}
playGame();


