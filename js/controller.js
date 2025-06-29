let data = [];
let question = null;
let isAnswerStage = true;

window.onload = async function () {
  const res = await fetch("data/example.json");
  data = await res.json();
  nextQuestion();
};

document.getElementById("answer").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); 
    if (isAnswerStage) {
      checkAnswer();
    } else {
      nextQuestion();
    }
  }
});

function nextQuestion() {
  const question = document.getElementById("question");
  const answer = document.getElementById("answer");
  const correct = document.getElementById("correct");
  question = data[Math.floor(Math.random() * data.length)];

  question.innerText = question.kr
  question.style.backgroundColor = "#484848"
  answer.value = "";
  answer.focus()
  correct.innerText = "";
  correct.style.display = "none";
  isAnswerStage = true;
}

function checkAnswer() {
  const question = document.getElementById("question");
  const answer = document.getElementById("answer");
  const correct = document.getElementById("correct");

  const userAnswer = answer.value.trim().toLowerCase();
  const correctAnswer = question.en.toLowerCase();
  if (userAnswer === correctAnswer) {
    question.style.backgroundColor = "#7fd23b"
  } else {
    question.style.backgroundColor = "#e23f3b"
    correct.style.display = "block";
    correct.innerText = correctAnswer;
  }
  isAnswerStage = false
}
