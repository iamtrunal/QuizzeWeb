const quizeDB = [{
        question: "Q1: What is the full form of HTMl ?",
        a: "Hello To My Land",
        b: "Heyper Tool Markup Language",
        c: "Hyper Text Markup Language",
        d: "Hyper Text Mark Language",
        ans: "ans3"
    },
    {
        question: "Q2: What is the full form of CSS ?",
        a: "Cascading Style Sheets",
        b: "Cascading Sheets Style",
        c: "Canva Style Sheets",
        d: "Cascading Super Sheet",
        ans: "ans1"
    },
    {
        question: "Q3: Computer Moniter is also known as ?",
        a: "DVU",
        b: "UVD",
        c: "VDU",
        d: "CCTV",
        ans: "ans3"
    },
    {
        question: "Q4: Which one of these stores more data than a DVD ?",
        a: "CD Rom",
        b: "Floppy",
        c: "Red Ray Disk",
        d: "Blue Ray Disk",
        ans: "ans4"
    },
    {
        question: "Q5: Eight Bits make up a ?",
        a: "megabyte",
        b: "byte",
        c: "kilobyte",
        d: "None",
        ans: "ans2"
    },
    {
        question: "Q6: Which one of these also known as read/write memory ?",
        a: "ROM",
        b: "RAM",
        c: "DVD",
        d: "Hard Disk",
        ans: "ans2"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

// Load Questions

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizeDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    })
    return answer;
}

const deselect = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    const rightAnswer = quizeDB[questionCount].ans;

    if (checkedAnswer === rightAnswer) {
        score++;
    }

    questionCount++;

    deselect();

    if (questionCount < quizeDB.length) {
        loadQuestion();
    } else {
        showScore.innerHTML = `
            <h3> Your Score ${score}/${quizeDB.length} </h3>
            <button class="btn" onclick="location.reload()"> Play Again! </button>
            `;

        showScore.classList.remove('scoreArea');
    }
})