function getCookie(name) {
    const cookies = document.cookie.split(';');
    for(let c of cookies) {
        const [key, value] = c.split('=');
        if (key.replace(' ', '') === name) return value;
    }
}

function saveToCookie(email, password)
{
    document.cookie = `email=${email};path=/;max-age=3600`;
    document.cookie = `password=${password};path=/;max-age=3600`;
}

function saveProfileToCookie(formData) 
{
    formData.forEach((value, key) => {
        document.cookie = `${key}=${value};path=/;max-age=3600;`;
    });
}

function clearCookie() {
    const cookies = document.cookie.split(";");

    for (let cookie of cookies) {
        const [name] = cookie.split("=");
        document.cookie = `${name.trim()}=; path=/; max-age=0;`;
    }
}

function setErrorMessage(element, text) {
    element.parentNode.lastElementChild.innerText = text;
}

function clearErrorMessage(element)
{
    setErrorMessage(element, '');
}

function isNumber(value) {
    Number(value) === value;
}