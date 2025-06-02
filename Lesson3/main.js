
function isNumber(n) {
    return Number(n) == n;
}

function isLeapYear(year) {
    return (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0);
}

function getDays(month, year) {
    switch (month) {
        case 4: case 6: case 9: case 11:
            return 30;
        case 1: case 3: case 5: case 7: 
        case 8: case 10: case 12:
            return 31;
        case 2:
            return isLeapYear(year) ? 29 : 28;
    }
}

function checkDate(day, month, year) {
    if (year < 0 || month < 1 || month > 12)
        return false;
    if (day < 1 || day > getDays(month, year))
        return false;
    return true;
}

function main() {
    let day = prompt('Day: ');
    let month = prompt('Month: ');
    let year = prompt('Year: ');
    if (!isNumber(day) || !isNumber(month) || !isNumber(year))
    {
        alert('Invalide input!');
        return;
    }

    day = Number(day);
    month = Number(month);
    year = Number(year);

    if (!checkDate(day, month, year))
    {
        alert('Invalide date!');
        return;
    }

    let date = new Date(year, month - 1, day);
    alert(date);
}

main();