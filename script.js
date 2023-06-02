//? get user pick

function getUserChoice(e){

    return e.target.value

}

//? get computer pick

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    if(random == 0){
        return 'rock';
    }
    else if(random == 1){
        return 'paper';
    }
    else if(random == 2){
        return 'scissors';
    }
}

//? compare picks
var user_score= 0;
var computer_score= 0;

function getResult(e) {
    playerSelection = getUserChoice(e)
    computerSelection = getComputerChoice() 

    let result="";

    user_score_display = document.querySelector(".player-scores-box");
    computer_score_display = document.querySelector(".computer-scores-box");

    result_msg = document.querySelector('.round-result');

    console.log(`the computer selection is ${computerSelection}`);
    console.log(`the user selection is ${playerSelection}`);

    if(playerSelection == computerSelection){
        result = 'draw';
    }
    else if(playerSelection == 'rock' && computerSelection == 'paper'){
        result = 'lost';
        computer_score+=1;
        
    }
    else if(playerSelection == 'rock' && computerSelection == 'scissors'){
        result = 'win'
        user_score+=1;
    }
    else if(playerSelection == 'paper' && computerSelection == 'rock'){
        result = 'win'
        user_score+=1;
    }
    else if(playerSelection == 'paper' && computerSelection == 'scissors'){
        result = 'lost';
        computer_score+=1;
    }
    else if(playerSelection == 'scissors' && computerSelection == 'rock'){
        result = 'lost';
        computer_score+=1;
    }
    else if(playerSelection == 'scissors' && computerSelection == 'paper'){
        result = 'win'
        user_score+=1;
    }

    result_msg.textContent = result;
    computer_score_display.textContent = computer_score;
    user_score_display.textContent = user_score;
}

//? display info and update scores




