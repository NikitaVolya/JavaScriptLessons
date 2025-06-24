
let price = 0;
let directions = [
    ['Odessa -> Lviv', 62],
    ['Lviv -> Odessa', 55],
    ['Kiev -> Lviv', 55],
    ['Lviv -> Kiev', 40],
    ['Poltava -> Lviv', 40]
]

function customeParceDate(date) {
    if (!/\d\d.\d\d.\d\d\d\d/.test(date))
        return 'NaN';
    const [day, month, year] = date.split('.').map(Number);
    if (month > 12)
        return 'NaN';
    let rep = new Date(year, month - 1, day);
    if (rep < new Date())
        return 'NaN';
    return rep;
}

function addTicket(direction, date, number) {
    const table = document.getElementById('ownTickets');
    table.innerHTML += `<tr><td>${direction}</td><td>${date}</td><td>${number}</td></tr>`;
}

function updatePrice() {
    price = 0;
    document.getElementsByName('place').forEach(p => {
        if (p.checked)
            price++;
    });
    const directionField = document.getElementById('direction');
    let directionPrice = directions[directionField.value][1];
    price *= directionPrice;

    document.getElementById('priceText').innerText = price + '$';
}

function loadPlaces() {
    const placesContainer = document.getElementById('places');

    placesContainer.innerHTML = '';

    for (let i = 1; i <= 24; i++)
    {
        placesContainer.innerHTML += `
        <div class="cell">
            <input type="checkbox" name="place" onclick="updatePrice()">
            <p>${i}</p>
        </div>
        `;
    }
}

function loadDirections() {
    const directionField = document.getElementById('direction');
    directionField.innerHTML = '';
    for (let i in directions) {
        directionField.innerHTML += `<option value="${i}">${directions[i][0]}</option>`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadPlaces();
    loadDirections();

    document.getElementById('searchTickets').addEventListener('click', e => {
        e.preventDefault();
        document.getElementById('priceText').innerText = '0$';

        const dateField = document.getElementById('date');
        let date = customeParceDate(dateField.value);
        
        if (isNaN(date))
            return;
        const options = document.getElementById('options');
        options.style.display = 'block';
    });

    const form = document.getElementById('bookingForm');

    form.addEventListener('submit', e => {
        e.preventDefault();
        let formData = new FormData(form);
        if (isNaN(customeParceDate(formData.get('date'))))
            return;

        document.getElementById('myTickets').style.display = 'block';
        form.style.display = 'none';

        let seats = document.getElementsByName('place');
        for (let i = 0; i < seats.length; i++)
        {
            if (seats[i].checked)
            {
                addTicket(directions[formData.get('direction')], formData.get('date'), i + 1);
            }
        }

        console.log(formData);
    });
});