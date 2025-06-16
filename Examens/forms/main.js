
function repordFunction(text, color = 'black') 
{
    const output = document.getElementById('output');
    output.style.color = color;
    output.innerText = text;
}

function loginFunction(e) {

    const formData = new FormData(e.target);
    
    const login = formData.get('login');
    const rememberMessage = formData.get('rememberMe') ? '' : 'не ';

    alert(`Привіт, ${login}! Я тебе ${rememberMessage}запам\`ятав`);
    e.preventDefault();
};

function registerFunction(e) {
    
    e.preventDefault();

    const formData = new FormData(e.target);

    const email = formData.get('email');
    const password = formData.get('password');
    const rpassword = formData.get('repeatPassword')

    if (password != rpassword)
    {
        repordFunction('Passwords are not the same!', 'red');
        return;
    }

    repordFunction(`На пошту "${email}" надіслано лист із підтверлденням`, 'green');
}

function userInfoFunction(e) {

    const form = e.target;
    form.style.display = 'none';
    const formData = new FormData(e.target);
    const userInfoTalbe = document.getElementById('userInfoTable');
    
    formData.forEach((value, key) => {
        console.log(key + 'Cell');
        const field = document.getElementById(key + 'Cell');
        field.innerText = formData.getAll(key).join(", ");
    });
    userInfoTalbe.style.display = 'flex';

    e.preventDefault();
}

function addColor(r, g, b) {
    const colorContainer = document.getElementById('colorContainer');

    colorContainer.innerHTML += `<div class="colorCell w33">
    <div class="colorRectangle" style="background-color: rgb(${r}, ${g}, ${b})"></div>
    RGB(${r}, ${g}, ${b})</div>`
}

function colorFormFunction(e) {
    const formData = new FormData(e.target);

    addColor(formData.get('red'), formData.get('green'), formData.get('blue'));

    e.preventDefault();
}

function addQuestion(text, correct, wrong) {
    const container = document.getElementById('questionsContainer');

    container.innerHTML += 
    `<div class="question">
        <b>${text}</b>
        <p>Correct answer: ${correct}</p>
        <p>Wrong answer: ${wrong}</p>
    </div>
    `;
}

function questionFormFunction(e) {

    const formData = new FormData(e.target);

    addQuestion(formData.get('question'), formData.get('correct'), formData.get('wrong'));

    e.preventDefault();
}

document.addEventListener('DOMContentLoaded', () => {

    const loginForm = document.forms['LoginForm'];
    const registerForm = document.forms['registerForm'];
    const userInfoForm = document.forms['userInfo'];
    const colorForm = document.forms['colorForm'];
    const qustionForm = document.forms['questionForm'];

    if (loginForm != null)
        loginForm.addEventListener('submit', loginFunction);

    if (registerForm != null)
        registerForm.addEventListener('submit', registerFunction);

    if (userInfoForm != null)
        userInfoForm.addEventListener('submit', userInfoFunction);

    if (colorForm != null) {
        addColor(255, 0, 0);
        addColor(0, 255, 0);
        addColor(0, 0, 255);
        colorForm.addEventListener('submit', colorFormFunction);
    }

    if (qustionForm != null) {
        qustionForm.addEventListener('submit', questionFormFunction);
    }
});