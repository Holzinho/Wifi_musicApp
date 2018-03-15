var questions;
var counter = 0;
var loadQuestions = function(_questions) {
    questions = _questions;
}

var getNextQuestion = function(){
    return questions[counter++];
}


var prepareBtns = function(){
    var currentAnswers = [];
    currentAnswers = Object.create(questions[counter].incorrectAnswers);
    
    currentAnswers.push(questions[counter].correctAnswer);

    for (var i = 0; i < 4; i++) {
        var random = Math.floor(Math.random() * currentAnswers.length);
        $($('.antworten')[i]).html(currentAnswers.splice(random, 1)[0]);
    }
    console.log(currentAnswers);
}