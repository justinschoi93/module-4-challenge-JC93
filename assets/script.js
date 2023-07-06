var timer = 60;
var startButton = document.getElementById("start");
var highScoresButton = document.getElementById("high-score-button");
var nextQuestion = document.getElementById("next");
var questionWindow = document.querySelector(".question-window");
var optionA = document.querySelector(".option-1");
var optionB = document.querySelector(".option-2");
var optionC = document.querySelector(".option-3");
var optionD = document.querySelector(".option-4");
var displayWindow = document.querySelector(".display-window");
var i = 0;


optionA.addEventListener("click", checkAnswer);
optionB.addEventListener("click", checkAnswer);
optionC.addEventListener("click", checkAnswer);
optionD.addEventListener("click", checkAnswer);

var questions = [{
    number: 1,
    question: "Question Number 1",
    a: "option A",
    b: "option B",
    c: "option C",
    d: "option D",
    ans: "option D"}, 

    {number: 2,
        question: "Question Number 2",
        a: "option A",
        b: "option B",
        c: "option C",
        d: "option D",
        ans: "option D"},
    {number: 3,
        question: "Question Number 3",
        a: "option A",
        b: "option B",
        c: "option C",
        d: "option D",
        ans: ""},
    {number: 4,
        question: "Question Number 4",
        a: "option A",
        b: "option B",
        c: "option C",
        d: "option D",
        ans: "option D"},
    {number: 5,
        question: "Question Number 5",
        a: "option A",
        b: "option B",
        c: "option C",
        d: "option D",
        ans: "option D"}
];

startButton.addEventListener("click", function(){
    startTimer();
    startQuiz();
})
highScoresButton.addEventListener("click", function(){});
nextQuestion.addEventListener("click", function(){
    i++;
    askQuestion(questions[i]);
    displayWindow.textContent = "";
});
//set interval so every second, the timer goes down by 1
//when timer reaches 0, clear interval and save high score. 
//define askQuestions function
//when correct answer is selected, a point is rewarded. 
//when an incorrect answer is selected, 10 seconds are deducted from the timer. 
//when we are out of questions, clearInterval and save high score. 

function startTimer(){
    //define function
};

function startQuiz(){
    i = 0;
    console.log(questions[i]);
    askQuestion(questions[i]);
};

function askQuestion(q){
    questionWindow.textContent = (q.question);
    optionA.textContent = (q.a);
    optionB.textContent = (q.b);
    optionC.textContent = (q.c);
    optionD.textContent = (q.d);
}

function checkAnswer(e){
    console.log(e.target.textContent);
    console.log(questions[i].ans);
     
    if (e.target.textContent === questions[i].ans){
        displayWindow.textContent = "Correct!";
    } else {
        displayWindow.textContent = "incorrect... -5 seconds";
    }

    //deactivate answer buttons
};