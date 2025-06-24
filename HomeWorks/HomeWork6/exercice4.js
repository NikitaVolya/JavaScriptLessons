

function setBook(name) {
    const bookField = document.getElementById('book');
    if (bookField.value)
        return;

    bookField.value = name;

    let buttons = document.getElementsByName('selectBook');
    for (let i in buttons)
        buttons[i].disabled = true;
}

function parseEuropeanDate(str) {
    const [day, month, year] = str.split('.').map(Number);
    return new Date(year, month - 1, day);
}


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('buyBookForm');


    form.addEventListener('submit', e => {
        e.preventDefault();
        const bookField = document.getElementById('book');

        if (!bookField.value)
        {
            alert('You have to chose a book');
            return;
        }

        let formData = new FormData(form);
        let date = parseEuropeanDate(formData.get('date'));
        console.log(date);
        if (isNaN(date))
        {
            alert('Invalide date!');
            return;
        }
        
        const resultField = document.getElementById('resultField');
        const textField = document.getElementById('textField');

        textField.innerHTML = `${formData.get('name')}, thanks for the order!<br><br>Book \"${bookField.value}\" will be delivered on ${formData.get('date')} to ${formData.get('address')}`;
        
        resultField.style.display = 'block';
        form.style.display = 'none';

    });
});