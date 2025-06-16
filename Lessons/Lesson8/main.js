
window.addEventListener('DOMContentLoaded', () => {
    const fm = document.forms.myForm;

    fm.addEventListener('submit', e => {
        const form = e.targer;
        const formData = new FormData(form);

        if (form.username.value.trim() === '') {
            alert('Username is require');
            return;
        }

        console.log(formData, formData.get('username'));
        alert(formData);
    });

});