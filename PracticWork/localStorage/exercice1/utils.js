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