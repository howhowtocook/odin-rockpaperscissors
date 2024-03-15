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

function PlayGame(){
    total_score = 0;
    for (i=0;i<5;i++){
        const playerSelection = prompt("Enter your selection:");
        const computerSelection = getComputerChoice();
        let score = playRound(playerSelection, computerSelection);
        total_score += score;
    }
    return total_score;
}


console.log(PlayGame())
