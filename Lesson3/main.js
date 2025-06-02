
let checkDateResult = {
    Ok: 0,
    InvalideDay: 1,
    InvalideMonth: 2,
    InvalideDayMonth: 3,
    InvalideYear: 4,
    InvalideDayYear: 5,
    InvalideMonthYear: 6,
    InvalideDayMonthYear: 7,
    ToString(result) {
        rep = [];
        switch (result) {
            case 1: case 3: case 5: case 7:
                rep.push('day');
        }
        switch (result) {
            case 2: case 3: case 6: case 7:
                rep.push('month');
        }
        switch (result) {
            case 4: case 5: case 6: case 7:
                rep.push('year');
        }
        return `Invalide ${rep.join(', ')}`;
    }
}


function isNumber(n) {
    return Number(n) == n;
}

function isLeapYear(year) {
    return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

function getDays(month, year) {
    if (!isNumber(month) || !isNumber(year))
        return 28;
    console.log(month);
    switch (Number(month)) {
        case 4: case 6: case 9: case 11:
            return 30;
        case 1: case 3: case 5: case 7: 
        case 8: case 10: case 12:
            return 31;
        case 2:
            return isLeapYear(Number(year)) ? 29 : 28;
        default:
            return 28;
    }
}

function checkDate(day, month, year) {
    rep = checkDateResult.Ok;
    if (!isNumber(year) || year < 0)
        rep += checkDateResult.InvalideYear;
    if (!isNumber(month) || month < 1 || month > 12)
        rep += checkDateResult.InvalideMonth;
    if (!isNumber(day) || day < 1 || day > getDays(month, year))
        rep += checkDateResult.InvalideDay;
    return rep;
}

function splitDate(text) {
    let symbls = ['.', '/', '-'];
    for (let i in symbls)
    {
        if (text.indexOf(symbls[i]) != -1)
            return text.split(symbls[i]);
    }
    return null;
}

function main() {
    let date;

    let cycle = true;
    while (cycle) {
        let data = splitDate(prompt('Enter your date (like 13/03/2006): ').replace(' ', ''));
        
        if (data == null || data.length != 3)
        {
            alert('Incorrect input format');
            return;
        }

        let date_rep = checkDate(data[0], data[1], data[2]);

        switch (date_rep)
        {
            case checkDateResult.Ok:
                date = new Date(data[2], data[1] - 1, data[0]);
                cycle = false;
                break;
            default:
                alert(checkDateResult.ToString(date_rep));
                break;
        }
    }
    
    alert(date.toDateString());
}

main();