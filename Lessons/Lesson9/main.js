
function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for(let c of cookies) {
        const [key, value] = c.split('=');
        if (key === name) return value;
    }
}

document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('testForm');

    form.addEventListener('submit', e => {
        e.preventDefault();

        const formData = new FormData(form);

        document.cookie = `username=${formData.get('username')}; path=/; max-age=3600`;
        console.log(document.cookie);
        console.log(getCookie('username'));

        document.cookie = `username=; path=/; max-age=0`;
        console.log(document.cookie);
        console.log(getCookie('username'));
    });
})