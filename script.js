const showBtn = document.getElementById('showAnswerbtn');

const hideBtn = document.getElementById('hideAnswerbtn');

const answerText = document.getElementById('answer');

const ansStatus = document.getElementById('answerStatus');

function showAnswer() {
	
  answerText.style.display = 'block';
  ansStatus.textContent = "Answer is currently showing!";	 

}
  
function hideAnswer() {
  
  answerText.style.display = 'none';
  ansStatus.textContent = "Answer is currently hidden!";  

}

showBtn.addEventListener('click', showAnswer);
hideBtn.addEventListener('click', hideAnswer);
  