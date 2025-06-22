
let emailField;
let passwordField;
let repeatPasswodField;

function checkPassword(password) 
{
    let uppercase = false;
    let lowercase = false;
    let digit = false;

    for (let i in password)
    {
        if ('a' <= password[i] && password[i] <= 'z')
            lowercase = true;
        if ('A' <= password[i] && password[i] <= 'Z')  
            uppercase = true;
        if ('0' <= password[i] && password[i] <= '9')
            digit = true;
    }
    return uppercase && lowercase && digit;
}

function registerFormSubmit(form) {

    let formData = new FormData(form);
    let isValide = true;
    
    let email = formData.get('email');
    let password = formData.get('password');
    let repeatPassword = formData.get('repeatPassword');

    if (!/[a-zA-Z._\-]{3,}@\w+.\w+/.test(email)){
        setErrorMessage(emailField, 'Wrong email adress');
        isValide = false;
    }
    else 
        clearErrorMessage(emailField);

    if (!checkPassword(password)) {
        setErrorMessage(passwordField, "Wrong password");
        isValide = false;
    }
    else 
        clearErrorMessage(passwordField);

    if (password != repeatPassword) {
        setErrorMessage(repeatPasswodField, 'Passwords must math');
        isValide = false;
    }
    else 
        clearErrorMessage(repeatPasswodField);

    if (isValide)
    {
        saveToCookie(emailField.value, passwordField.value);
        window.location.href = "/PracticWork/coockie/profile_form.html";
    }
}

function loadRegisterForm() {
    let email = getCookie('email');
    let password = getCookie('password');

    if (email)
        emailField.value = email;

    if (password)
    {
        passwordField.value = password;
        repeatPasswodField.value = password;
    }
}

document.addEventListener('DOMContentLoaded', () => {

    const registerForm = document.getElementById('RegisterForm');

    emailField = document.getElementsByName('email')[0];
    passwordField = document.getElementsByName('password')[0];
    repeatPasswodField = document.getElementsByName('repeatPassword')[0];

    loadRegisterForm();
    registerForm.addEventListener('submit', e => {
        e.preventDefault();
        registerFormSubmit(e.target);
    });
});