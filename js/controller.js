let data = [];
let current = null;
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
  current = data[Math.floor(Math.random() * data.length)];

  question.innerText = current.kr
  question.style.backgroundColor = "#484848"
  answer.value = "";
  answer.focus()
  isAnswerStage = true;
}

function checkAnswer() {
  const question = document.getElementById("question");
  const answer = document.getElementById("answer");

  const userAnswer = answer.value.trim().toLowerCase();
  const correct = current.en.toLowerCase();
  if (userAnswer === correct) {
    question.style.backgroundColor = "#7fd23b"
  } else {
    question.style.backgroundColor = "#e23f3b"
  }
  isAnswerStage = false
}
