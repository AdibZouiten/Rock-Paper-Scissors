// get computers choice

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


// get user choice

function getUserChoice() {
    var checkedValue = document.querySelector('.pick:checked').value;
    return checkedValue;
}


// get result

function getResult() {
    playerSelection = getUserChoice()
    computerSelection = getComputerChoice() 

    console.log(`the computer selection is ${computerSelection}`);
    console.log(`the user selection is ${playerSelection}`);

    if(playerSelection == computerSelection){
        console.log('draw');
    }
    else if(playerSelection == 'rock' && computerSelection == 'paper'){
        console.log('you lost');
    }
    else if(playerSelection == 'rock' && computerSelection == 'scissors'){
        console.log('you win');
    }
    else if(playerSelection == 'paper' && computerSelection == 'rock'){
        console.log('you win');
    }
    else if(playerSelection == 'paper' && computerSelection == 'scissors'){
        console.log('you lost');
    }
    else if(playerSelection == 'scissors' && computerSelection == 'rock'){
        console.log('you lost');
    }
    else if(playerSelection == 'scissors' && computerSelection == 'paper'){
        console.log('you win');
    }
}
