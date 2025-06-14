
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const repeatPasswordInput = document.getElementById('passwordValidation');
const fields = [nameInput, emailInput, passwordInput, repeatPasswordInput];

function validationErrorMessage(filed, text) {
    filed.style.borderBlockColor = 'red';
    filed.parentElement.lastElementChild.textContent = text;
}

function validationErrorMessageClear(field) {
    field.style.borderBlockColor = 'canvas';
    field.parentElement.lastElementChild.textContent = '';
}

function checkName()
{
    if (nameInput.value.length < 2)
    {
        validationErrorMessage(nameInput, 'Name must contain at least 2 letters!');
        return false;
    }

    validationErrorMessageClear(nameInput);
    return true;
}

function checkEmail() {
    let email = emailInput.value;
    if (!(email.indexOf('@gmail.com') != -1 || email.indexOf('@yahoo.com') != -1) || email.includes(' ') || email.indexOf('@') == 0)
    {
        validationErrorMessage(emailInput, 'Email is not valide!');
        return false;
    } 
    validationErrorMessageClear(emailInput);
    return true;
}

function checkPassword() {
    if (passwordInput.value.length < 6)
    {
        validationErrorMessage(passwordInput, 'Password must contain at least 6 letters!');
        return false;
    }

    validationErrorMessageClear(passwordInput);
    return true;
}

function checkRepeatPassword() {
    if (passwordInput.value != repeatPasswordInput.value)
    {
        validationErrorMessage(repeatPasswordInput, 'Passwords are not the same!');
        return false;
    }
    
    validationErrorMessageClear(repeatPasswordInput);
    return true;
}

function checkFillFields() {
    let allFill = true;
    for (i in fields)
    {
        if (!fields[i].value)
            validationErrorMessage(fields[i], 'Required field to fill in')
        allFill = false;
    }
    return allFill;
}

function checkAllValide() {
    return !(!checkName() || !checkEmail() || !checkPassword() || !checkRepeatPassword());
}

nameInput.addEventListener('change', () => { checkName();} );
emailInput.addEventListener('change', () => { checkEmail();} );
passwordInput.addEventListener('change', () => { checkPassword(); });
repeatPasswordInput.addEventListener('change', () => { checkRepeatPassword(); });

function RegisterForm() {
    if (!checkFillFields())
        return;
    if (!checkAllValide())
        return;
    
    alert('Successful register!!!');
}