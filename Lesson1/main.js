
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

// Exercice 1
function calc()
{
    let a = prompt("A: ");
    let f_symbl = prompt("Operation: ")
    let b = prompt("B: ");

    let f = get_operation(f_symbl);
    

    console.log('a + b =', f(Number(a), Number(b)));
}

calc();