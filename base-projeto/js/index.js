const submitButton = document.getElementById('submit-button');
const returnQuestionButton = document.getElementById('return-button');
const tryAgainButton = document.getElementById('tryAgain-button');
const quiz = document.getElementById('quiz');

submitButton.addEventListener('click', () => {

  const answer = getSelected();

  if(answer != undefined){
    if(answer === quizRockList[currentQuiz].correct_answer){
      quizRockList[currentQuiz].hit = true;
    }else{
      quizRockList[currentQuiz].hit = false;
    }

    currentQuiz ++;

    if (currentQuiz < quizRockList.length) {
      loadQuiz()
    } else {
      hitCounter();
      quiz.innerHTML = 
      `
        <h2>Você conseguiu acertar ${counterAnswersCorrect}/${quizRockList.length} questões</h2>
        <button onclick="location.reload()" id="try-again-button">Tentar novamente</button>
      `
    }
  }else{ //caso nenhuma alternativa seja escolhida
    alert('É necessário preencher ao menos uma alternativa');
  }

  console.log('currentQuiz', currentQuiz)
  console.log('counterAnswersCorrect', counterAnswersCorrect)


});

returnQuestionButton.addEventListener('click', () =>{

  returnQuestion();
  console.log('currentQuiz', currentQuiz)
  console.log('counterAnswersCorrect', counterAnswersCorrect)

})