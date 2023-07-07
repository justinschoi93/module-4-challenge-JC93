var scoreEl = document.querySelector('.score');
var score = localStorage.getItem('currentScore');
var highScoresList = document.querySelector('.high-scores-list');
scoreEl.textContent = score;
var highScores = JSON.parse(localStorage.getItem('highScores'));
var currentIndex = localStorage.getItem('currentIndex');
var resetButton = document.querySelector('.reset');
var returnKey = document.addEventListener('keydown', function(event){
    if (event.key === 'Enter') {
        var nameInput = document.querySelector(".name-input").value;
        // console.log(nameInput);
        highScores[currentIndex].name = nameInput;
        localStorage.setItem('highScores', JSON.stringify(highScores));
        refreshList();

    }
})

resetButton.addEventListener('click', function(){
    highScores = [
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
    localStorage.setItem('highScores', JSON.stringify(highScores));
    refreshList();
})
// console.log(nameInput);
// console.log(currentIndex);

function refreshList(){
    highScores = JSON.parse(localStorage.getItem('highScores'));
    for (let i = 0; i < highScores.length; i++){
        console.log(highScoresList.children[i]);
        highScoresList.children[i].textContent = (i+1) + ": " + highScores[i].name + ": " +  highScores[i].score;
    }
}

refreshList();