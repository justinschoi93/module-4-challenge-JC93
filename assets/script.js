var timer = 60;
var startButton = document.getElementById("start");
var highScoresButton = document.getElementById("high-score-button");
var submitButton = document.getElementById("submit");
var questionWindow = document.querySelector(".question-window");
var optionA = document.querySelector(".option-1");
var optionB = document.querySelector(".option-2");
var optionC = document.querySelector(".option-3");
var optionD = document.querySelector(".option-4");

var questions = [{
    number: 1,
    question: "Question Number 1",
    a: "option A",
    b: "option B",
    c: "option C",
    d: "option D"}, 

    {number: 2,
        question: "Question Number 2",
        a: "option A",
        b: "option B",
        c: "option C",
        d: "option D"},
    {number: 3,
        question: "Question Number 3",
        a: "option A",
        b: "option B",
        c: "option C",
        d: "option D"},
    {number: 4,
        question: "Question Number 4",
        a: "option A",
        b: "option B",
        c: "option C",
        d: "option D"},
    {number: 5,
        question: "Question Number 5",
        a: "option A",
        b: "option B",
        c: "option C",
        d: "option D"}
];

startButton.addEventListener("click", function(){
    startTimer();
    startQuiz();
})
highScoresButton.addEventListener("click", function(){});
submitButton.addEventListener("click", function(){});
//set interval so every second, the timer goes down by 1
//when timer reaches 0, clear interval and save high score. 
//define askQuestions function
//when correct answer is selected, a point is rewarded. 
//when an incorrect answer is selected, 10 seconds are deducted from the timer. 
//when we are out of questions, clearInterval and save high score. 

function startTimer(){
    //definte function
};

function startQuiz(){
    //define function;
    for (var i = 0; i < questions.length; i++) {
        console.log(questions[i])
        askQuestion(questions[i])
    }
};

function askQuestion(q){
    questionWindow.textContent = (q.question);
    optionA.textContent = (q.a);
    optionB.textContent = (q.b);
    optionC.textContent = (q.c);
    optionD.textContent = (q.d);

}