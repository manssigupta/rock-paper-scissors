

function getComputerChoice(){

    const choice=["Rock","Paper","Scissor"];
    const randomElement=choice[Math.floor(Math.random()*choice.length)];
    return randomElement;
}
console.log(getComputerChoice());

function getHumanChoice(){
        let input = prompt("Enter choice:");
        return input;
}
console.log(getHumanChoice());