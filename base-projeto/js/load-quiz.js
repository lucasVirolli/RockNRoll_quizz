const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const answersEls = document.querySelectorAll('.answer');

const questionEl = document.getElementById('question');

var currentQuiz = 0;

loadQuiz();

function loadQuiz(){

  deselectAnswer();
  
  const currentQuizList = quizRockList[currentQuiz];

  questionEl.innerText = currentQuizList.question;
  a_text.innerText = currentQuizList.a;
  b_text.innerText = currentQuizList.b;
  c_text.innerText = currentQuizList.c;
  d_text.innerText = currentQuizList.d;

}

function deselectAnswer(){

  answersEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}
