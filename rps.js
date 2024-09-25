
function getComputerChoice(){

    const choice=["Rock","Paper","Scissor"];
    const randomElement=choice[Math.floor(Math.random()*choice.length)];
    return randomElement;
}
