const lists = ['rock','paper','scissors']
    // Your JavaScript code goes here
function getComputerChoice(){
    var randomNumber = Math.floor(Math.random() * 3) ;
    return lists[randomNumber];
};

function playRound(playerSelection, computerSelection) {
    var key = playerSelection.toLowerCase() + "-" + computerSelection;
    let result;
    switch (key) {
        case "rock-scissors":
        case "scissors-paper":
        case "paper-rock":
            result = 1;
            break;
        case "rock-rock":
        case "scissors-scissors": 
        case "paper-paper":
            result = 0;
            break;
        case "scissors-rock":  
        case "paper-scissors":
        case "rock-paper":
            result = -1;
            break;
        }
    return result;   
}

const body = document.querySelector("body");
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");
total_score = 0;
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    const result = document.createElement('div');
    score = playRound(button.id,getComputerChoice());
    result.textContent = score;
    body.appendChild(result)
    total_score += score;
    console.log(total_score);

    const total_result = document.createElement('div');
    if (total_score >= 5){
    total_result.textContent = "you win";
    }
    if (total_score <= -5){
    total_result.textContent = "you lose";
    
    }
    body.appendChild(total_result)
  });
});