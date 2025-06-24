

let questions = []
let count = 0;
let points = 0;

function addQuestion(text, a1, a2, correct)
{
    if (correct < 0 || correct > 1)
        return;
    questions.push({
        text: text,
        answer1: a1,
        answer2: a2,
        correct_answer: correct
    });
}

function loadQuestions() {
    addQuestion('How many letters are there in the word "Hello"?', 5, 2, 0);
    addQuestion('How many letters are there in the word "Word"?', 5, 4, 1);
}

function renderQuestion(question) {

    if (count >= questions.length)
    {
        const outputField = document.getElementById('outputField');
        const questionForm = document.getElementById('questionForm');

        outputField.innerText = `Result: ${points} correct to ${questions.length} questions`;

        questionForm.style.display = 'none';
        outputField.style.display = 'block';
        return;
    }

    const questionNumberField = document.getElementById('questionNumber');
    const questionField = document.getElementById('questionField');
    const answerText1 = document.getElementById('answerText1');
    const answerText2 = document.getElementById('answerText2');
    const submitButton = document.getElementById('submitButton');

    questionNumberField.innerText = `${count + 1})`
    questionField.innerText = question.text;
    answerText1.innerText = question.answer1;
    answerText2.innerText = question.answer2;

    if (count < questions.length - 1)
        submitButton.innerText = 'Next';
    else 
        submitButton.innerText = 'Finish';
}

document.addEventListener('DOMContentLoaded', () => {

    loadQuestions();
    renderQuestion(questions[count]);

    const questionForm = document.getElementById('questionForm');
    questionForm.addEventListener('submit', e => {
        e.preventDefault();
        let formData = new FormData(questionForm);

        let question = questions[count];
        if (formData.get('answer') == question.correct_answer)
            points++;
        
        count++;
        renderQuestion(questions[count]);

    });
});