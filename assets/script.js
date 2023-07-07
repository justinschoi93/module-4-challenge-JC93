var timeLeft = 60;
var points = 0;
var scoreEl = document.querySelector(".score");
var startButton = document.getElementById("start");
// var highScoresButton = document.getElementById("high-score-button");
var nextQuestion = document.getElementById("next");
var questionWindow = document.querySelector(".question-window");
var nameInput = document.querySelector(".name-input");
var optionA = document.querySelector(".option-1");
var optionB = document.querySelector(".option-2");
var optionC = document.querySelector(".option-3");
var optionD = document.querySelector(".option-4");
var displayWindow = document.querySelector(".display-window");
var timeLeftWindow = document.querySelector(".seconds");
var i = 0;
var highScores = [
    {name: '',
    score: 0},

    {name: '',
    score: 0},

    {name: '',
    score: 0},

    {name: '',
    score: 0},

    {name: '',
    score: 0}
];
// localStorage.setItem('highScores', JSON.stringify(highScores));
highScores = JSON.parse(localStorage.getItem('highScores'));




var questions = [{
    number: 1,
    question: "What shape is the Earth?",
    a: "Flat and rectangular. Like a map.",
    b: "Flat, but round. Like the photos.",
    c: "Spherical.",
    d: "There's no way to be certain...",
    ans: "Spherical."}, 

    {number: 2,
        question: "How old is the Earth?",
        a: "2023 years old.",
        b: "10,000 years old.",
        c: "7.5 million years old.",
        d: "4.5 billion years old.",
        ans: "4.5 billion years old."},
    {number: 3,
        question: "How long has it been since the dinosaurs went extinct?",
        a: "10 thousand years.",
        b: "65 million years.",
        c: "7 billion years.",
        d: "2023 years.",
        ans: "65 million years."},
    {number: 4,
        question: "How long have humans (homo-sapiens) been around?",
        a: "300 thousand years.",
        b: "2023 years.",
        c: "2 million years.",
        d: "10 thousand years.",
        ans: "300 thousand years."},
    {number: 5,
        question: "We are most closely related to...",
        a: "chimpanzees",
        b: "dolphins",
        c: "mermaids",
        d: "martians",
        ans: "chimpanzees"}
];

startButton.addEventListener("click", function(){
    startTimer();
    startQuiz();
})


nextQuestion.addEventListener("click", function(){
    i++;
    displayWindow.textContent = "";
    askQuestion(questions[i]);
});
//set interval so every second, the timer goes down by 1
//when timer reaches 0, clear interval and save high score. 
//define askQuestions function
//when correct answer is selected, a point is rewarded. 
//when an incorrect answer is selected, 10 seconds are deducted from the timer. 
//when we are out of questions, clearInterval and save high score. 

function startTimer(){
    var timeInterval = setInterval(function(){
        if (i == questions.length){
            clearInterval(timeInterval);
        }
        if (timeLeft > 0) {
            timeLeft--;
        } else {
            timeLeft = 0;
            clearInterval(timeInterval);
            endGame();
        }
        timeLeftWindow.textContent = timeLeft;
    }, 1000)


};

function startQuiz(){
    i = 0;
    timeLeft = 60;
    points = 0;
    scoreEl.textContent = points;
    displayWindow.textContent = '';
    askQuestion(questions[i]);
    
};

function askQuestion(q){
    if (i < questions.length){
        questionWindow.textContent = (q.question);
        optionA.textContent = (q.a);
        optionB.textContent = (q.b);
        optionC.textContent = (q.c);
        optionD.textContent = (q.d);
        activateButtons();
    } else {
        endGame();
    }
    
}

function checkAnswer(e){
    console.log(e.target.textContent);
    console.log(questions[i].ans);
     
    if (e.target.textContent === questions[i].ans){
        displayWindow.textContent = "Correct!";
        points+=10;
        scoreEl.textContent = points;
    } else {
        displayWindow.textContent = "incorrect... -5 seconds";
        timeLeft-=5;
    }

    deactivateButtons();
};

function activateButtons(){
    optionA.addEventListener("click", checkAnswer);
    optionB.addEventListener("click", checkAnswer);
    optionC.addEventListener("click", checkAnswer);
    optionD.addEventListener("click", checkAnswer);
}

function deactivateButtons(){
    console.log('deactivated');
    optionA.removeEventListener("click", checkAnswer);
    optionB.removeEventListener("click", checkAnswer);
    optionC.removeEventListener("click", checkAnswer);
    optionD.removeEventListener("click", checkAnswer);
}

function endGame(){
    deactivateButtons();
    displayWindow.textContent = "You have answered all of the questions! The quiz is over!";
    checkHighScores();
    localStorage.setItem("currentScore", points);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    
}

function checkHighScores () {
    for (let i = 0; i < highScores.length; i++) {
        if (points > highScores[i].score){
            highScores.pop();
            highScores.splice(i,0,{name: '', score: points});
            localStorage.setItem('currentIndex', i);
            break;
            
        }
        
    }
    console.log(highScores);
}