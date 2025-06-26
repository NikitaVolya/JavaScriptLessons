
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
        sessionStorage.setItem('user', JSON.stringify({email: emailField.value, password: passwordField.value}));
        window.location.href = "/PracticWork/localStorage/exercice1/profile_form.html";
    }
}

function loadRegisterForm() {
    const userString = sessionStorage.getItem('user');
    console.log(userString);
    if (userString)
    {
        const user = JSON.parse(userString);
        console.log(user);
        emailField.value = user.email;
        passwordField.value = user.password;
        repeatPasswodField.value = user.password;
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