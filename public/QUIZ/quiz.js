const question = [
    {
        question: "Em que ano o Corinthians foi fundado?",
        answer: [
            { text: "1905", correct: false },
            { text: "1910", correct: true },
            { text: "1912", correct: false },
            { text: "1908", correct: false },
        ]
    },
    {

        question: "Quem fez o gol no final do Mundial de 2012?",
        answer: [
            { text: "Paulinho", correct: false },
            { text: "Emerson Sheik", correct: false },
            { text: "Danilo", correct: false },
            { text: "Paolo Guerrero", correct: true },
        ]
    },
    {
        question: "Qual jogador estrangeiro possui mais gols pelo Corinthians?",
        answer: [
            { text: "Romero", correct: true },
            { text: "Paolo Guerrero", correct: false },
            { text: "Carlos Tévez", correct: false },
            { text: "Herrera", correct: false },
        ]
    },
    {

        question: "Quantos títulos estaduais o Corinthians ganhou?",
        answer: [
            { text: "30", correct: true },
            { text: "29", correct: false },
            { text: "33", correct: false },
            { text: "25", correct: false },
        ]
    },
    {
        question: "Quem é o maior artilheiro do Corinthians?",
        answer: [
            { text: "Marcelinho Carioca", correct: false },
            { text: "Sócrates", correct: false },
            { text: "Cláudio Christóvam", correct: true },
            { text: "Ronaldo Fenômeno", correct: false },
        ],
    },
    {
        question: "Qual era o técnico do Corinthians no titúlo de Mundial de 2012?",
        answer: [
            { text: "Mano Menezes", correct: false },
            { text: "Vitor Pereira", correct: false },
            { text: "Tite", correct: true },
            { text: "António Oliveira", correct: false },
        ],
    },
    {
        question: "Qual é o mascote do Corinthians?",
        answer: [
            { text: "Gavião", correct: false },
            { text: "Gambá", correct: false },
            { text: "Seu Jorge", correct: false },
            { text: "Mosqueteiro", correct: true },
        ],
    },
    {
        question: "Qual o jogador do Corinthians que fez os dois gols para o titúlo da copa Libertadores?",
        answer: [
            { text: "Romarinho", correct: false },
            { text: "Emerson Sheik", correct: true },
            { text: "Paulinho", correct: false },
            { text: "Liédson", correct: false },
        ],
    },
    {
        question: "Quantos titúlos o Corinthians ganhou da Copa do Brasil?",
        answer: [
            { text: "4", correct: false },
            { text: "3", correct: true },
            { text: "2", correct: false },
            { text: "7", correct: false },
        ],
    },
    {
        question: "Quais anos o Corinthians ganhou o Mundial de Clubes?",
        answer: [
            { text: "2012, 1998", correct: false },
            { text: "2012, 2003", correct: false },
            { text: "2012, 2000", correct: true },
            { text: "2012, 2001", correct: false },
        ],
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();

}

function showQuestion() {
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNO = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNO + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++
    } else {
        selectedBtn.classList.add("Incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `<span style="display: flex; align-items: center; flex-direction: column; margin-top:100px; font-size:40px">Você pontuou ${score} de ${question.length}!</span>`;
    nextButton.innerHTML = "Jogue novamente";
    nextButton.style.display = "block";
    guardarBanco()
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < question.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < question.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();

function guardarBanco() {
    var idUsuario = sessionStorage.ID_USUARIO
    fetch("../quiz/registrar", {
        method: "POST",
        headers: {
            "Content-Type": "appLication/json"
        },
        body: JSON.stringify({
            scoreServer: score, 
            idUsuarioServer: idUsuario
        })
    }).then(function (resposta) {
        console.log("Resposta do score", resposta)
    }).catch(function (erro) {
        console.log("Erro", erro)
    })
    
}