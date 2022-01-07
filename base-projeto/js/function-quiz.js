const answersElements = document.querySelectorAll('.answer');

var counterAnswersCorrect = 0;

function hitCounter(){

  quizRockList.forEach((answerEl) => {

    var answersCorrect = answerEl.hit

    if(answersCorrect){
      counterAnswersCorrect ++;
    }

  })
}

function getSelected(){

  let answer = undefined;

  answersEls.forEach((answerEl) => {
    if(answerEl.checked){
      answer = answerEl.id;
    }
  });

  return answer;
}

function returnQuestion(){

  if(currentQuiz > 0){
    currentQuiz --;
  }

  loadQuiz();
}