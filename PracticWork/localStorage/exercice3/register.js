



function valideRegisterForm() {
    const nameField = document.getElementById('nameField');
    const passwordField = document.getElementById('passwordField');
    const rPasswordField = document.getElementById('repeatPasswordField');

    return !(!valideNameFunction(nameField) || 
    !validePasswordFunction(passwordField) || 
    !valideRepeatPasswordFunction(rPasswordField));
}

function submitRegisterForm() {
    
    if (!valideRegisterForm())
        return;
    
    const nameField = document.getElementById('nameField');
    const passwordField = document.getElementById('passwordField');

    let saveDataCheck = addUser(nameField.value, passwordField.value);
    if (!saveDataCheck)
    {
        alert('Користувач з таким їмям вже існує!')
    }
    else {
        alert('Успішна реєстрація!');
        window.location = '/PracticWork/localStorage/exercice3/login.html';
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
});