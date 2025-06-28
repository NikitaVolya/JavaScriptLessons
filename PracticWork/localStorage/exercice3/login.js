
function valideLoginForm() {
    const nameField = document.getElementById('nameField');
    const passwordField = document.getElementById('passwordField');

    return !(!valideNameFunction(nameField) || 
    !validePasswordFunction(passwordField));
}

function submitLoginForm() {
    
    if (!valideLoginForm())
        return;
    
    const nameField = document.getElementById('nameField');
    const passwordField = document.getElementById('passwordField');

    let saveDataCheck = checkPassword(nameField.value, passwordField.value);
    if (!saveDataCheck)
    {
        alert('Неправильно введені данні!')
    }
    else {
        alert('Успішний вхід!');
        let userData = findUser(nameField.value);
        document.cookie = `userId=${userData.id};path=/; max-age=3600;`;
        window.location = '/PracticWork/localStorage/exercice3/notes.html';
    }

}

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('nameField')?.addEventListener('change', e => valideNameFunction(e.target) );
    document.getElementById('passwordField')?.addEventListener('change', e => validePasswordFunction(e.target) );
    
    document.getElementById('loginButton')?.addEventListener('click', submitLoginForm);
});