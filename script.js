var startingContent = document.querySelector(".challenge-main");
var startBtn = document.querySelector("#start-btn");
var timer = document.querySelector("#timer");
var questionOne = document.querySelector(".question-1");
var questionTwo = document.querySelector(".question-2");
var questionThree = document.querySelector(".question-3");
var questionFour = document.querySelector(".question-4");
var questionFive = document.querySelector(".question-5");
var secondsLeft = 75;

function startGame () {
    
    var startBtn = document.querySelector("#start-btn");
    startBtn.style.display = 'none';
    var startingContent = document.querySelector(".challenge-main");
    startingContent.style.display = 'none';



};

function startTimer () {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft;
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        };
    },1000);
};





