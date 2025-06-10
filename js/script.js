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
    document.getElementById("answer").innerText = "Enter!";
  }
});

// function nextQuestion() {
//   document.getElementById("result").innerText = "";
//   document.getElementById("answer").value = "";
//   current = data[Math.floor(Math.random() * data.length)];
//   document.getElementById("question").innerText = `"${current.kr}" 영어로?`;
// }

// function checkAnswer() {
//   const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
//   const correct = current.en.toLowerCase();
//   if (userAnswer === correct) {
//     document.getElementById("result").innerText = "✅ 정답입니다!";
//   } else {
//     document.getElementById("result").innerText = `❌ 오답입니다. 정답: ${current.en}`;
//   }
// }
