
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
        const dataString = JSON.stringify({
            firstname: formData.get('firstname'),
            lastname: formData.get('lastname'),
            birthyear: formData.get('birthyear'),
            gender: formData.get('gender'),
            phonenumber: formData.get('phonenumber'),
            skype: formData.get('skype')
        });
        sessionStorage.setItem('profile', dataString);
        alert('Data saved!');
    }
}

function loadProfileForm() {
    const profileString = sessionStorage.getItem('profile');
    const userString = sessionStorage.getItem('user');

    if (userString)
    {
        const user = JSON.parse(userString);
        document.getElementById('emailText').innerHTML = `Hello, ${user.email}!`;
        isLogin = true;
    } else
        return;

    if (profileString)
    {
        const profile = JSON.parse(profileString);
        firstNameField.value = profile.firstname;
        lastNameField.value = profile.lastname;
        yearOfBirthField.value = profile.birthyear;
        genderField.value = profile.gender;
        phoneNumberField.value = profile.phonenumber;
        skypeField.value = profile.skype;
    }
        
}

function exit(e) {
    window.location.href = '/PracticWork/localStorage/exercice1/register_form.html';
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