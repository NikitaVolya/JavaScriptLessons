

document.addEventListener('DOMContentLoaded', () => {
    const decorationForm = document.getElementById('decorationForm');

    decorationForm.addEventListener('submit', e => {
        const resultField = document.getElementById('resultField');
        const textField = document.getElementById('textField');

        e.preventDefault();

        let formData = new FormData(decorationForm);
        let text = formData.get('text');

        if (formData.get('italic'))
            text = text.italics();
        if (formData.get('bold'))
            text = text.bold();
        if (formData.get('underline'))
            textField.style.textDecoration = 'underline';

        textField.style.justifyContent = formData.get('justify');
        
        console.log(formData);
        
        textField.innerHTML = text;
        resultField.style.display = 'block';
        decorationForm.style.display = 'none';
    });
});