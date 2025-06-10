let data = [];
let current = null;

window.onload = async function () {
  const res = await fetch("data/example.json");
  data = await res.json();
  nextQuestion();
};

document.getElementById("answer").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); 
    checkAnswer();
  }
});

function nextQuestion() {
  const question = document.getElementById("question");
  const answer = document.getElementById("answer");
  current = data[Math.floor(Math.random() * data.length)];

  question.innerText = current.kr
  answer.value = "";
  answer.focus()
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
}
