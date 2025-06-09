
function Exerice1() {
    let n = Number(prompt("Number: "));
    alert(`${n} ^ 2 = ${n * n}`);
}

function Exercice2() {
    let a = Number(prompt("Number A: "));
    let b = Number(prompt("NUmber B: "));
    alert(`AVG of ${a} and ${b} is ${(a + b) / 2}`);
}

function Exercice3() {
    let rectangle_side = Number(prompt("Size of square side: "));
    alert(`squarea area: ${rectangle_side * rectangle_side}`);
}

function Exercice4() {
    let input = Number(prompt("Km: "));
    alert(`kilometers to miles: ${input} -> ${input * 0.621371}`)
}

function Exercice5() {
    const operators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => {
            if (b == 0)
                return 0;
            return a / b;
        }
    }

    let a = Number(prompt("Number A: "));
    let b = Number(prompt("NUmber B: "));
    let rep = '';
    for(let tmp in operators)
    {
        let f = operators[tmp];
        rep += `${a} ${tmp} ${b} = ${f(a, b)}\n`;
    }
    alert(rep);
}

function Exercice6() {
    let a = prompt('a * x + b = 0\nType a: ');
    let b = prompt('a * x + b = 0\nType b: ');
    alert(`${a} * x + ${b} = 0\nx is ${-b/a}`);
}

function Exercice7() {
    const to_secords = (h, m, s) => (h * 60 + m) * 60 + s;
    const to_hms = (s) => {
        let arr = Array();
        arr[2] = s % 60;
        s -= arr[2];
        arr[1] = (s / 60) % 60;
        s -= arr[1] * 60;
        arr[0] = s / 3600;
        return arr;
    };

    let end_of_day = to_secords(24, 0, 0);
    
    let h = Number(prompt('Enter the current time\nHours: '));
    let m = Number(prompt('Enter the current time\nMinuts: '));
    let s = Number(prompt('Enter the current time\nSecords: '));

    if (h > 24 || h < 0 || m > 60 || m < 0 || s > 60 || s < 0)
    {
        alert('Invalide input!');
        return;
    }

    let current_time = to_secords(h, m, s);
    if (current_time > end_of_day)
    {
        alert('Invalide input!');
        return;
    }

    let rest_time = to_hms(end_of_day - current_time);
    alert(`${h}:${m}:${s}\nleft until the end of the day ${rest_time.join(':')}`);
}

function Exercice8() {
    let n = Number(prompt('Enter number with 3 digits: '))
    if (n < 100)
        alert('Number is to small');
    else if (n > 999)
        alert('Number is to big');
    else
        alert(`Second digit in number ${n} is ${Math.floor(n / 10 % 10)}`);
}

function Exercice9() {
    let n = Number(prompt('Enter number with 5 digits: '))
    if (n < 10000)
        alert('Number is to small');
    else if (n > 99999)
        alert('Number is to big');
    else {
        let end = n % 10;
        let start = Math.floor(n / 10000 % 10);
        n = n - start * 10000 - end;
        n = n + start + end * 10000;
        alert(n);
    }
}

function Exercice10() {
    let total_sales = Number(prompt('Enter total sales: '));
    let salary = 250 + total_sales / 10;
    alert(`The employee's salary is ${salary}`);
}

Exerice1();
Exercice2();
Exercice3();
Exercice4();
Exercice5();
Exercice6();
Exercice7();
Exercice8();
Exercice9();
Exercice10();