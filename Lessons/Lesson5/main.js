
function checkName()
{
    const nameInput = document.getElementById('name');
    if (nameInput.value.length < 2)
    {
        nameInput.style.borderBlockColor = 'red';
        nameInput.parentElement.lastElementChild.textContent = 'Name must contain at least 2 letters!';
        return false;
    }

    nameInput.style.borderBlockColor = 'canvas';
    nameInput.parentElement.lastElementChild.textContent = '';
    return true;
}

function checkEmail() {
    const emailInput = document.getElementById('email');
    let email = emailInput.value;
    if (!(email.indexOf('@gmail.com') != -1 || email.indexOf('@yahoo.com') != -1) || email.includes(' '))
    {
        emailInput.style.borderBlockColor = 'red';
        emailInput.parentElement.lastElementChild.textContent = 'Email is not valide!';
        return false;
    } 
    
    emailInput.style.borderBlockColor = 'canvas';
    emailInput.parentElement.lastElementChild.textContent = '';
    return true;
}

function checkPassword() {
    const passwordInput = document.getElementById('password');
    if (passwordInput.value.length < 6)
    {
        passwordInput.style.borderBlockColor = 'red';
        passwordInput.parentElement.lastElementChild.textContent = 'Password must contain at least 6 letters!';
        return false;
    }

    passwordInput.style.borderBlockColor = 'canvas';
    passwordInput.parentElement.lastElementChild.textContent = '';
    return true;
}

function checkRepeatPassword() {
    const passwordInput = document.getElementById('password');
    const repeatPasswordInput = document.getElementById('passwordValidation');
    if (passwordInput.value != repeatPasswordInput.value)
    {
        repeatPasswordInput.style.borderBlockColor = 'red';
        repeatPasswordInput.parentElement.lastElementChild.textContent = 'Passwords are not the same!';
        return false;
    }
    
    repeatPasswordInput.style.borderBlockColor = 'canvas';
    repeatPasswordInput.parentElement.lastElementChild.textContent = '';
    return true;
}


function RegisterForm() {
    if (checkName() && checkEmail() && checkPassword() && checkRepeatPassword())
    {
        alert('Successful register!!!');
    }
}