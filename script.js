var startingContent = document.querySelector(".challenge-main");
var startBtn = document.querySelector("#start-btn");
var timer = document.querySelector("#timer");
var secondsLeft = 60;
var score = 0;
var selected = document.querySelector("button");

var q1Incorrect1 = document.getElementById("#question-1-option-1");
var q1Incorrect2 = document.getElementById("#question-1-option-2");
var q1Correct3 = document.getElementById("#question-1-option-3");
var q1Incorrect4 = document.getElementById("#question-1-option-4");

var twoOption1 = document.getElementById("#question-2-option-1");
var twoOption2 = document.getElementById("#question-2-option-2");
var twoOption3 = document.getElementById("#question-2-option-3");
var twoOption4 = document.getElementById("#question-2-option-4");

var threeOption1 = document.getElementById("#question-3-option-1");
var threeOption2 = document.getElementById("#question-3-option-2");
var threeOption3 = document.getElementById("#question-3-option-3");
var threeOption4 = document.getElementById("#question-3-option-4");

var fourOption1 = document.getElementById("#question-4-option-1");
var fourOption2 = document.getElementById("#question-4-option-2");
var fourOption3 = document.getElementById("#question-4-option-3");
var fourOption4 = document.getElementById("#question-4-option-4");

var fiveOption1 = document.getElementById("#question-5-option-1");
var fiveOption2 = document.getElementById("#question-5-option-2");
var fiveOption3 = document.getElementById("#question-5-option-3");
var fiveOption4 = document.getElementById("#question-5-option-4");


    var questionOne = document.querySelector(".question-1");
    questionOne.style.display = 'none';
    var questionTwo = document.querySelector(".question-2");
    questionTwo.style.display = 'none';
    var questionThree = document.querySelector(".question-3");
    questionThree.style.display = 'none';
    var questionFour = document.querySelector(".question-4");
    questionFour.style.display = 'none';
    var questionFive = document.querySelector(".question-5");
    questionFive.style.display = 'none';
    var endingContent = document.querySelector(".challenge-end");
    endingContent.style.display = 'none';



function startGame () {
    
    var startBtn = document.querySelector("#start-btn");
    startBtn.style.display = 'none';
    var startingContent = document.querySelector(".challenge-main");
    startingContent.style.display = 'none';
    console.log("Coding quiz initiated");
    var questionOne = document.querySelector(".question-1");
    questionOne.style.display = 'block';
    var questionTwo = document.querySelector(".question-2");
    questionTwo.style.display = 'none';
    var questionThree = document.querySelector(".question-3");
    questionThree.style.display = 'none';
    var questionFour = document.querySelector(".question-4");
    questionFour.style.display = 'none';
    var questionFive = document.querySelector(".question-5");
    questionFive.style.display = 'none';


};

function startTimer () {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = "Time: " + secondsLeft;
        console.log("Timer started | 60 seconds to complete");
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            timer.textContent = "Times Up!";
            console.log("Timer has ended");
        };
    },1000);
};






