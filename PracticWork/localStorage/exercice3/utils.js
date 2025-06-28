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

function getUsersData() {
    const dataString = localStorage.getItem('nodepadUsers');
    if (!dataString)
        return [];
    return JSON.parse(dataString);
}

function findUser(name) {
    const users = getUsersData();
    for (let i in users)
    {
        const user = users[i];
        if (user.name == name)
            return user;
    }
    return null;
}

function checkPassword(name, password) {
    const userData = findUser(name);
    return userData.password == password;
}

function addUser(name, password)
{
    if (findUser(name))
        return false;
    let users = getUsersData();
    users.push({
        id: users.length,
        name: name,
        password: password
    });
    localStorage.setItem('nodepadUsers', JSON.stringify(users));
    return true;
}

