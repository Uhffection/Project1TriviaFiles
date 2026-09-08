const showBtn = document.getElementById('showAnswerbtn');
const hideBtn = document.getElementById('hideAnswerbtn');
const answerText = document.getElementById('answer');
const questionText = document.getElementById('question');
const ansStatus = document.getElementById('answerStatus');
let categoryID = null;
let questionBank = [
  {
    question: 'State whose license plate reads "Land of 10,000 Lakes".',
    answer: "Minnesota"
  }
];
let questionIndex = 0;



function showAnswer() {
	
  answerText.style.display = 'block';
  ansStatus.textContent = "Answer is currently showing!";	 

}
  
function hideAnswer() {
  
  answerText.style.display = 'none';
  ansStatus.textContent = "Answer is currently hidden!";  

}

function populateQuestion(question,answer) {
  questionText.textContent = question;
  answerText.textContent = "The answer is " + answer + "!";
}

populateQuestion(questionBank[0].question,questionBank[0].answer);

showBtn.addEventListener('click', showAnswer);
hideBtn.addEventListener('click', hideAnswer);