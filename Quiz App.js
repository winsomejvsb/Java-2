const questions =[
    {
        question: "When was Nnamdi Azikiwe Born?",
        answers: [
            { text: "16 November 1904", correct: true},
            { text: "20 November 1908", correct: false},
            { text: "16 April 1904", correct: false},
            { text: "16 december 1903", correct: false},
        ]
    },


    {
        question: "When was Yakubu Gowon Born?",
        answers: [
            { text: "16 October 1924", correct: false},
            { text: "19 October 1934", correct: true},
            { text: "22 March 1918", correct: false},
            { text: "18 december 1909", correct: false},
        ]
    },


    {
        question: "When was Goodluck Jonathan Born?",
        answers: [
            { text: "04 July 1933", correct: false},
            { text: "20 November 1908", correct: false},
            { text: "20 November 1957", correct: true},
            { text: "16 May 1923", correct: false},
        ]
    },


    {
        question: "When was Muhammadu Buhari Born?",
        answers: [
            { text: "16 June 1944", correct: false},
            { text: "20 May 1918", correct: false},
            { text: "16 April 1904", correct: false},
            { text: "17 December 1942", correct: true},
        ]
    }

    
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}


function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", subNextHandler)
// nextButton.addEventListener("click", ()=>{
    //     if(currentQuestionIndex < questions.lenght){
        //         handleNextButton();
        //     }else{
            //         startQuiz();
            //     }
            // });
            
function subNextHandler() {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
};


startQuiz();
