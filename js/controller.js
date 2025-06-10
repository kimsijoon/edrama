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
  question = document.getElementById("question");
  answer = document.getElementById("answer");
  current = data[Math.floor(Math.random() * data.length)];

  question.innerText = current.kr
  answer.value = "";
  answer.focus()
}

function checkAnswer() {
  question = document.getElementById("question");
  answer = document.getElementById("answer");

  const userAnswer = answer.value.trim().toLowerCase();
  const correct = current.en.toLowerCase();
  if (userAnswer === correct) {
    question.background_color = #22ad22
  } else {
    question.background_color = #ad2222
  }
}
