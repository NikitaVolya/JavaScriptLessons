

document.addEventListener('DOMContentLoaded', () => {

    // LocalStorage
    const user = {
        id: 123,
        username: 'username',
        name: 'Nikita'
    };

    localStorage.setItem('user', JSON.stringify(user));

    const savedUser = localStorage.getItem('user');    

    if (savedUser) {
        console.log(savedUser);
        const parsedUser = JSON.parse(savedUser);
        console.log(parsedUser);
    }
    else 
        console.log('User not found');


    // Session Storage

    sessionStorage.setItem('token', 'abc123');

    const token = sessionStorage.getItem('token');
    console.log(token);

});