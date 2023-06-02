let userAnswers;

//? button events 
rock = document.querySelector('#rock');

rock.addEventListener('click', function (e) {
    userAnswers = 'rock';
});

paper=document.querySelector('#paper');

paper.addEventListener('click', function (e) {
    userAnswers = 'paper';
});

scissors=document.querySelector('#scissors');

scissors.addEventListener('click', function (e) {
    userAnswers = 'scissors';
});