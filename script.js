const questions = [
  {
      question: "Os planetas do Sistema Solar podem ser classificados conforme a sua composição. Com base nessa classificação, pode-se afirmar que são planetas rochosos:",
      image:'marte.png',
      options: {
          a: "Terra, Marte, Urano e Netuno.",
          b: "Terra, Marte, Saturno e Plutão.",
          c: "Vênus, Marte, Saturno e Urano.",
          d: "Mercúrio, Vênus, Terra e Marte"
      },
      answer: "d",
  },
  {
      question: "Os planetas gasosos são compostos por gases, como hidrogênio e hélio. Qual o nome do maior planeta gasoso do Sistema Solar?",
  
      options: {
          a: "Marte",
          b: "Júpiter",
          c: "Saturno",
          d: "Urano"
      },
      answer: "d",
  },
  {question: "O planeta Terra realiza vários movimentos, sendo os dois principais o de rotação, realizado em torno de si mesmo, e o movimento realizado em torno do Sol, sendo corretamente chamado de:",
  options: {
      a: "rotação.",
      b: "mutação.",
      c: "movimentação.",
      d: "translação."
  },
  answer: "a",
},
{question: "O movimento de rotação realizado pelo planeta Terra tem como consequência principal a",

  options: {
      a: "sucessão dos dias e das noites.",
      b: "ocorrência das fases da Lua.",
      c: "definição das temperaturas.",
      d: "divisão das estações do ano."
  },
  answer: "a",
},

{question: "Como é corretamente denominada a teoria que justifica a formação do Sistema Solar?",

  options: {
      a: "Teoria celular.",
      b: "Teoria da nebulosa.",
      c: "Teoria da deriva.",
      d: "Teoria das cordas."
  },
  answer: "b",
},
];

const questionText = document.getElementById("question-text");
const optionsList = document.getElementById("options");
const submitButton = document.getElementById("submit-answer");
const message = document.getElementById("message");
const scoreDisplay = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;
let chances = 2;

function displayQuestion(index) {
  const currentQuestion = questions[index];
  questionText.textContent = currentQuestion.question;
  optionsList.innerHTML = "";

  Object.entries(currentQuestion.options).forEach(([key, value]) => {
      const li = document.createElement("li");
      li.className = "option";
      li.textContent = value;
      li.setAttribute("data-option", key);
      optionsList.appendChild(li);
  });
}

function checkAnswer(selectedOption) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedOption === currentQuestion.answer) {
      score += 10;
      message.textContent = "Resposta correta!";
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
          displayQuestion(currentQuestionIndex);
      } else {
          questionText.textContent = "Quiz concluído!";
          optionsList.innerHTML = "";
          submitButton.disabled = true;
          scoreDisplay.textContent = `Pontuação: ${score}`;
      }
  } else {
      chances--;
      if (chances === 0) {
          message.textContent = "Você perdeu suas chances! Voltando ao início...";
          currentQuestionIndex = 0;
          score = 0;
          chances = 2;
          displayQuestion(currentQuestionIndex);
      } else {
          message.textContent = "Resposta incorreta. Tente novamente.";
      }
  }
}

optionsList.addEventListener("click", (event) => {
  const selectedOption = event.target.getAttribute("data-option");
  if (selectedOption) {
      checkAnswer(selectedOption);
  }
});

displayQuestion(currentQuestionIndex);
