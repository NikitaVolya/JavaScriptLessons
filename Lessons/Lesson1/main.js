
let num = '1';
const AGE = 23;

//alert('Name: ' + num);

num = 5;

//console.log(num + AGE);

const user = {
    name: 'Oleh',
    age: 30,
    sayHi() {
        console.log(`Hi, i\`m ${this.name}`);
    }
};

//user.sayHi();

function test(userName) {
    console.log(`Hello, ${userName}`)
}

//test("Oleh");

//const sum = (a, b) => a + b;

function get_operation(symbl)
{
    switch (symbl)
    {
        case '+':
            return (a, b) => a + b;
        case '-':
            return (a, b) => a - b;
        case '*':
            return (a, b) => a * b;
        case '/':
            return (a, b) => {
                if (b == 0)
                    return 'Nan';
                return a / b;
            }
        default:
            f = (a, b) => 'Nan';
    }
}

function MyIsNumber(n) {
    // LOL function
    return Number(n) + 0 == Number(n);
}

//Exercice1
function calc()
{
    let a = prompt("A: ");
    let b = prompt("B: ");

    if (!MyIsNumber(a) || !MyIsNumber(b))
    {
        console.log("invalide input");
    }
    else
    {
        let f_symbl = prompt("Operation: ");

        let f = get_operation(f_symbl);
        console.log(`a ${f_symbl} b = ${f(Number(a), Number(b))}`);
    }
}

function try_input_number(text)
{
    let rep;
    do {
        rep = prompt(text);
        if (MyIsNumber(rep))
            break;
        alert("Is not a number!");
    } while (true);
    return Number(rep);
}

//Exercice2
function calc2()
{
    let execuation = '';
    let rep = try_input_number("number: ");
    execuation += rep;
    do {
        let operation_symbl = prompt(`${execuation}\nOperation or exit to end program`);
        if (operation_symbl == "exit")
            break;
        let f = get_operation(operation_symbl);
        execuation = '(' + execuation + ')' + operation_symbl;
        let tmp_number = try_input_number(`${execuation}\nnumber:`);
        rep = f(rep, tmp_number);
        if (!MyIsNumber(rep))
        {
            alert("Invalide input!")
            break;
        }
        execuation += tmp_number;
    } while(true);
    alert(`${execuation}\nResult is ${rep}`)
}

calc2();