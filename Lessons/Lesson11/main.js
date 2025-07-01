
let itemsList = [];

function clearItems() {
    const container = document.getElementById('itemsContainer');
    container.innerHTML = '';
}

function addItem(item) {
    
    const container = document.getElementById('itemsContainer');

    container.innerHTML += `
        <div class="item">
            <h1 class="title">${item.name}</h1>
            <img src="${item.image}" alt="${item.name}">
            <b>type: ${item.type}</b>
            <div class="dates">
                Release:	
                <p>au: ${item.release.au?? ' '}</p>
                <p>eu: ${item.release.eu?? ' '}</p>
                <p>jp: ${item.release.jp?? ' '}</p>
                <p>na: ${item.release.na?? ' '}</p>
            </div>
        </div>
    `
}

function sordLowerCase(a, b) {
    if (!a)
        return 1
    if (!b)
        return -1
    const nameA = a.toUpperCase();
    const nameB = b.toUpperCase(); 
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0;
}

function renderItems(items) {
    if (items.length != 0)
        itemsList = items;
    const sordField = document.getElementById('order');

    switch (sordField.value)
    {
        case 'none':
            break;
        case 'older_au':
            itemsList.sort((a, b) => sordLowerCase(a.release.au, b.release.au));
            break;
        case 'older_eu':
            itemsList.sort((a, b) => sordLowerCase(a.release.eu, b.release.eu));
            break;
        case 'older_jp':
            itemsList.sort((a, b) => sordLowerCase(a.release.jp, b.release.jp));
            break;
        case 'older_na':
            itemsList.sort((a, b) => sordLowerCase(a.release.na, b.release.na));
            break;
        case 'newest_au':
            itemsList.sort((b, a) => sordLowerCase(a.release.au, b.release.au));
            break;
        case 'newest_eu':
            itemsList.sort((b, a) => sordLowerCase(a.release.eu, b.release.eu));
            break;
        case 'newest_jp':
            itemsList.sort((b, a) => sordLowerCase(a.release.jp, b.release.jp));
            break;
        case 'newest_na':
            itemsList.sort((b, a) => sordLowerCase(a.release.na, b.release.na));
            break;
    }

    clearItems();
    itemsList.forEach(item => {
            addItem(item);
        });
}

function loadItemsByName(name) {
    clearItems();
    if (/^\s*$/.test(name))
        return;
    fetch(`https://www.amiiboapi.com/api/amiibo/?name=${name}`)
    .then(response => response.json())
    .then(data => {
        let items = data.amiibo;
        renderItems(items);
    });
}

function loadItemBySerie(serieKey) {
    
    clearItems();
    fetch(`https://www.amiiboapi.com/api/amiibo/?gameseries=${serieKey}`)
    .then(response => response.json())
    .then(data => {
        let items = data.amiibo;
        renderItems(items);
    });

}

function updateSeries() {

    const seriesField = document.getElementById('seriesList');
    let seriesSet = new Set();

    fetch('https://www.amiiboapi.com/api/gameseries/')
    .then(response => response.json())
    .then(data => {
        let series = data.amiibo;
        series.forEach(serie => {
            if (seriesSet.has(serie.name))
                return;
            seriesSet.add(serie.name);
            seriesField.innerHTML += `<li onclick="loadItemBySerie('${serie.key}');">${serie.name}</li>`
        });
    })
}

document.addEventListener('DOMContentLoaded', () => {

    updateSeries();

    const searchButton = document.getElementById('searchBtn');
    const searchText = document.getElementById('searchName');
    searchButton.addEventListener('click', () => loadItemsByName(searchText.value));
});