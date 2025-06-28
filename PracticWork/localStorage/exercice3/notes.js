
function getCoockieUserId() {
    const cookies = document.cookie.split(';');
    for(let c of cookies) {
        const [key, value] = c.split('=');
        if (key == 'userId') return value;
    }
    return null;
}

function getNotesData() {
    const dataString = localStorage.getItem('nodepadnotes');
    if (!dataString)
        return [];
    return JSON.parse(dataString);
}

function saveNotesData(notes) {
    localStorage.setItem('nodepadnotes', JSON.stringify(notes));
}

function renderNote(note)
{
    const container = document.getElementById('notes');
    container.innerHTML += `<div class="note">${note.text}</div>`;
}

function addNote(text, userId) {
    let notes = getNotesData();
    let note = {userId: userId, text: text};
    notes.push(note);
    renderNote(note)
    saveNotesData(notes);
}

function loadNotes() {
    let userId = getCoockieUserId();
    if (!userId)
        return;
    let notes = getNotesData();
    
    for (let i in notes)
    {
        let note = notes[i];
        if (note.userId)
            renderNote(note);
    }
}

document.addEventListener('DOMContentLoaded', () => {

    let userId = getCoockieUserId();
    if (!userId){
        window.location = '/PracticWork/localStorage/exercice3/login.html';
    }
    loadNotes();
    
    const form = document.getElementById('noteSave');

    form.addEventListener('submit', e => {
        e.preventDefault();

        const formData = new FormData(form);
        addNote(formData.get('newNote'), userId);
        console.log(formData);
    });
});