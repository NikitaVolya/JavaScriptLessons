
function exercice1() {
    let name = prompt("Ваше ім'я: ");
    alert(`Привіт, ${name}!`);
}

function exercice2() {
    const CURRENT_YEAR = 2025;

    let year = Number(prompt('Рік народження: '));
    alert(`Вам ${CURRENT_YEAR - year} років`);
}

function exercice3() {
    let side = Number(prompt('Введіть довжину сторону квадрата: '));
    let p = side * 4;
    alert(`Периметр квадрата: ${p}`);
}

function exercice4() {
    const pi = 3.1415926;

    let radius = Number(prompt('Радіус кола: '));
    let s = pi * radius * radius;
    alert(`Площа кола: ${s}`);
}

function exercice5() {
    let distance_k = Number(prompt('Відстань між містами (в кілометрах): '));
    let time_h = Number(prompt('Напишіть час поїздки (в годинах): '));
    let speed_kh = distance_k / time_h;

    alert(`Ви маєте мати швидкість ${speed_kh} кілометри на години`);
}

function exercice6() {
    const USD_EURO = 0.88;

    let usd_value = Number(prompt('Введіть кількість долларів для ковертації в євро: '));
    let euro_value = usd_value * USD_EURO;
    
    alert(`Євро: ${euro_value}`);
}

function exercice7() {
    const FILE_SIZE = 820;
    let usb_size = Number(prompt('Введіть обсяг флешки: '));

    let n = Math.floor(usb_size / FILE_SIZE);
    alert(`Ваша флешка може вмістити ${n} файлів по ${FILE_SIZE} МБ`);
}

function exercice8() {
    let money_sume = Number(prompt('Введіть суму грошей: '));
    let choc_price = Number(prompt('Введіть вартість шоколадки: '));

    let choc_number = Math.floor(money_sume / choc_price);
    let money_rest = money_sume % choc_price;
    alert(`Ви можете купити ${choc_number} шоколадок\nВаша решта буде сягати ${money_rest}`);
}

function exercice9() {
    let number = Number(prompt('Введіть число(з 3 цифр): '));

    if (number < 100 || number > 999)
    {
        alert('Ваше число складається не з 3 цифр');
    }
    else {
        let palindrom = number;
        let tmp = number;
        for (let i = 0; i < 3; i++)
        {
            palindrom = palindrom * 10 + tmp % 10;
            tmp = Math.floor(tmp / 10);
        }
        alert(`Паліндром ваого числа: ${palindrom}`);
    }
}

function exercice10() {
    let user_number = Number(prompt('Введіть ваше число: '));
    let text = user_number % 2 == 0 ? 'парне' : 'не парне';
    alert(`Ваше число є ${text}`);
}

function main() {
    exercice1();
    exercice2();
    exercice3();
    exercice4();
    exercice5();
    exercice6();
    exercice7();
    exercice8();
    exercice9();
    exercice10();
}

main();