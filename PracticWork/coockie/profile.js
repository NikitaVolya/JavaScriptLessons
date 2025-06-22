
let firstNameField;
let lastNameField;
let yearOfBirthField;
let genderField;
let phoneNumberField;
let skypeField;
let isLogin = false;

function countNumbers(value) {
    let rep = 0;
    for (let i in value)
    {
        if (!isNaN(Number(value[i])))
            rep++;
    }
    return rep;
}

function profileFormSubmit(form) {

    if (!isLogin)
    {
        alert('You are not logged in!');
        return;
    }

    let formData = new FormData(form);
    let isValide = true;
    
    if (!/^[a-zA-z]+$/.test(formData.get('firstname')))
    {
        setErrorMessage(firstNameField, 'Wrong first name');
        isValide = false;
    } else 
        clearErrorMessage(firstNameField);

    if (!/^[a-zA-z]+$/.test(formData.get('lastname')))
    {
        setErrorMessage(lastNameField, 'Wrong first name');
        isValide = false;
    } else 
        clearErrorMessage(lastNameField);

    let birthyear = Number(formData.get('birthyear'));
    const currentYear = new Date().getFullYear();
    if (isNaN(birthyear) || birthyear <= 1900 || birthyear > currentYear ) {
        setErrorMessage(yearOfBirthField, 'Wrong year of birth');
        isValide = false;
    } else 
        clearErrorMessage(yearOfBirthField);

    let numbers = countNumbers(formData.get('phonenumber'));
    if (!/[\d\s\(\)-]+/.test(formData.get('phonenumber')) 
        || numbers < 10
        || numbers > 12) {
        setErrorMessage(phoneNumberField, 'Wrong phone number');
        isValide = false;
    }
    else 
        clearErrorMessage(phoneNumberField);

    if (isValide)
    {
        saveProfileToCookie(formData);
        alert('Data saved!');
    }
}

function loadProfileForm() {
    let firstname = getCookie('firstname');
    let lastname = getCookie('lastname');
    let birthyear = getCookie('birthyear');
    let gender = getCookie('gender');
    let phonenumber = getCookie('phonenumber');
    let skype = getCookie('skype');
    let email = getCookie('email');

    if (email)
    {
        document.getElementById('emailText').innerHTML = `Hello, ${email}!`;
        isLogin = true;
    } else
        return;

    if (firstname)
        firstNameField.value = firstname;
    if (lastname)
        lastNameField.value = lastname;
    if (birthyear)
        yearOfBirthField.value = birthyear;
    if (gender)
        genderField.value = gender;
    if (phonenumber)
        phoneNumberField.value = phonenumber;
    if (skype)
        skypeField.value = skype;
}

function exit(e) {
    clearCookie();
    window.location.href = '/PracticWork/coockie/register_form.html';
}


document.addEventListener('DOMContentLoaded', () => {

    const profileForm = document.getElementById('profileForm');
    
    firstNameField = document.getElementsByName('firstname')[0];
    lastNameField = document.getElementsByName('lastname')[0];
    yearOfBirthField = document.getElementsByName('birthyear')[0];
    genderField = document.getElementsByName('gender')[0];
    phoneNumberField = document.getElementsByName('phonenumber')[0];
    skypeField = document.getElementsByName('skype')[0];

    loadProfileForm();

    profileForm.addEventListener('submit', e => {
        e.preventDefault();
        profileFormSubmit(e.target);
    });

    document.getElementById('exitText').addEventListener('click', exit);
});