
function addMessage(name, message) {
    let messageList = document.getElementById('message-list');
    let date = new Date();
    
    let date_string = date.toLocaleTimeString('uk-UA', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour12: false
    });
    date_string = date_string.split(', ').reverse().join(' ');

    messageList.innerHTML += 
    `<div id="message-list" class="flexcolumn">
            <div class="message">
                <div class="row flex-sb border-btm">
                    <p>${name}</p>
                    <p class="fright">${date_string}</p>
                </div>
                <p>${message}</p>
            </div>
        </div>`;
}

document.addEventListener('DOMContentLoaded', () => {


    const form = document.getElementById('chatForm');

    form.addEventListener('submit', e => {
        e.preventDefault();
        const formData = new FormData(form);

        addMessage(formData.get('name'), formData.get('message'));
    });
});