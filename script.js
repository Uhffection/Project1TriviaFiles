const showBtn = document.getElementById('showAnswerbtn');

const hideBtn = document.getElementById('hideAnswerbtn');

const answerText = document.getElementById('answer');

const questionText = document.getElementById('question');

const ansStatus = document.getElementById('answerStatus');



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

populateQuestion("What is 2 + 2?", "4");

showBtn.addEventListener('click', showAnswer);
hideBtn.addEventListener('click', hideAnswer);