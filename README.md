# Rock'n Roll Quizz 🤘

Test your knowledge about rock'n roll with this Quizz.

## 🚀 Technologies
- HTML
- CSS
- JavaScript

## ℹ Description/Important notes

It was inspired by a project made by Florin Pop. Below there is his original project:
- https://github.com/florinpop17/10-projects-10-hours/tree/master/quiz-app

I did some basic modifications on HTML and CSS as you can compare below:
### Original by Florin Pop:

<h1>
  <img alt="FlorinPopQuizz" src="./assets/quizz-florin-pop.gif" />
</h1>

### Now, it's mine Quizz:

<h1>
  <img alt="FlorinPopQuizz" src="./assets/quizz-lucas-virolli.gif" />
</h1>

Basically there are two modifications:
- The color, that doesn't matter so much.
- The button to return the questions, it's important here. With this application you can return the question if you thought some answer wasn't right.
So, to return the question and verify if the answer was right or wrong, and count it to score, was necessary to put a new logic. This is the biggest difference between mine and his project. You can see better below:

```javascript
var counterAnswersCorrect = 0;

function hitCounter(){

  quizRockList.forEach((answerEl) => {

    var answersCorrect = answerEl.hit

    if(answersCorrect){
      counterAnswersCorrect ++;
    }

  })
  
  function returnQuestion(){

  if(currentQuiz > 0){
    currentQuiz --;
  }

  loadQuiz();
  }
}
```
This counts how many questions were hit at the end of quizz, it's just possible because in the list of objects (questions), there is the 'hit', a boolean that tells us if the answer was hit or it was wrong.
```javascript
const quizRockList = [
  
  {
    question: 'Qual banda foi a pioneira para o Heavy Metal?',
      a: 'Iron Maiden',
      b: 'Black Sabbath',
      c: 'Slayer',
      d: 'Led Zeppelin',
      correct_answer: 'b',
      hit: false
  }, 
```
And here you can see how to verify if was right or wrong:
```javascript
  if(answer != undefined){
    if(answer === quizRockList[currentQuiz].correct_answer){
      quizRockList[currentQuiz].hit = true;
    }else{
      quizRockList[currentQuiz].hit = false;
    }
```
Well, it's not everything about the project but I just want to bring here what I did differently to practice what I have been learning!

## 📝License
This project is under the MIT license. See the [LICENSE](https://choosealicense.com/licenses/mit/) for more information.

##

If you want to collaborate, to give some opinion, if you know a different way to do, or just want to make a new friend, than send me a e-mail or message on my LinkedIn:
 <a href = "mailto:lucas.virolli2@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
 <a href="https://www.linkedin.com/in/lucasvirollidalbello/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 

##

Made with much 💜 by Lucas Virolli 🙋‍♂️
