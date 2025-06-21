
let email, password;

function showErrorValidationMessage(field, text) {
    const errorField = field.parentNode.lastElementChild;
    field.style.borderBlockColor = 'red';
    errorField.innerText = text;
}

function clearErrorValidationMessage(field) {
    const errorField = field.parentNode.lastElementChild;
    field.style.borderBlockColor  = '';
    errorField.innerText = '';
}

function valideNameFunction(field) {
    const value = field.value;

    if (value.length < 2) {
        showErrorValidationMessage(field, 'Ім`я має складатися мінімум з 2 символів')
        return false;
    }

    if (value.indexOf(' ') != -1)
    {
        showErrorValidationMessage(field, 'Ім`я не має мати пробілів');
        return false;
    }
    clearErrorValidationMessage(field);
    return true;
}

function indexOfFirst(text, elements) {
    for (i in elements)
    {
        let index = text.indexOf(elements[i]);
        if (index != -1)
            return { index: index, name: elements[i] };
    }
    return { index: -1, name: null };
}

function valideEmailFunction(field) {
    const value = field.value;

    let dogIndex = value.indexOf('@');
    let firstPoint = value.indexOf('.');
    let domen = indexOfFirst(value, ['.com', '.ua', '.fr']);
    if (dogIndex < 1 || 
        domen.index < dogIndex || 
        value.length != domen.index + domen.name.length || 
        firstPoint != domen.index)
    {
        showErrorValidationMessage(field, 'Не валідна пошта');
        return false;
    }
    clearErrorValidationMessage(field);
    return true;
}

function validePasswordFunction(field) {
    const value = field.value;

    if (value.length < 6) {
        showErrorValidationMessage(field, 'Пароль має складатися мінімум з 6 символів')
        return false;
    }
    if (value.indexOf(' ') != -1)
    {
        showErrorValidationMessage(field, 'Пароль не має мати пробілів');
        return false;
    }
    
    clearErrorValidationMessage(field);
    return true;
}

function valideRepeatPasswordFunction(field) {
    const passwordField = document.getElementById('passwordField');
    if (passwordField == null)
    {
        console.debug('Password field is not found');
    }

    if (passwordField.value != field.value)
    {
        showErrorValidationMessage(field, 'Паролі не збігаються');
        return false;
    }
    
    clearErrorValidationMessage(field);
    return true;
}

function checkFillFields(fields) {
    let allFill = true;
    for (i in fields)
    {
        if (!fields[i].value)
        { 
            showErrorValidationMessage(fields[i], 'Поле має бути заповнене')
            allFill = false;
        }
    }
    console.log(allFill);
    return allFill;
}


function valideRegisterForm() {
    const nameField = document.getElementById('nameField');
    const emailField = document.getElementById('emailField');
    const passwordField = document.getElementById('passwordField');
    const rPasswordField = document.getElementById('repeatPasswordField');

    return checkFillFields([nameField, emailField, passwordField, rPasswordField]) &&
    !(!valideNameFunction(nameField) || 
    !valideEmailFunction(emailField) || 
    !validePasswordFunction(passwordField) || 
    !valideRepeatPasswordFunction(rPasswordField));
}

function valideLoginForm() {
    const emailField = document.getElementById('loginEmailField');
    const passwordField = document.getElementById('loginPasswordField');

    return checkFillFields([emailField, passwordField]) &&
    !(!valideEmailFunction(emailField) || !validePasswordFunction(passwordField));
}

function submitRegisterForm() {
    
    if (!valideRegisterForm())
        return;

    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');

    const emailField = document.getElementById('emailField');
    const passwordField = document.getElementById('passwordField');

    email = emailField.value;
    password = passwordField.value;

    alert('Ви зареєстровані!');

    registerForm.style.display = 'none';
    loginForm.style.display = 'flex';

}

function submitLoginForm() {

    if (!valideLoginForm())
        return;
    
    const emailField = document.getElementById('loginEmailField');
    const passwordField = document.getElementById('loginPasswordField');

    if (email != emailField.value || password != passwordField.value)
    {
        alert('Помилкові данні!');
    } else {
        alert('Успішний вхід!');
    }

}


document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('nameField')?.addEventListener('change', e => valideNameFunction(e.target) );
    document.getElementById('emailField')?.addEventListener('change', e => valideEmailFunction(e.target) );
    document.getElementById('loginEmailField')?.addEventListener('change', e => valideEmailFunction(e.target) );
    document.getElementById('passwordField')?.addEventListener('change', e => validePasswordFunction(e.target) );
    document.getElementById('loginPasswordField')?.addEventListener('change', e => validePasswordFunction(e.target) );
    document.getElementById('repeatPasswordField')?.addEventListener('change', e => valideRepeatPasswordFunction(e.target) );

    document.getElementById('registerButton')?.addEventListener('click', submitRegisterForm);
    document.getElementById('loginButton')?.addEventListener('click', submitLoginForm);
});