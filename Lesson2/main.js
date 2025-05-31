
const obj = new Object();

obj.name = 'Max';
obj.age = 25;

console.log(obj.name);

for(let temp in obj)
    console.log(temp + ': ' + obj[temp]);

delete obj.age;

console.log(obj);

const isExiste = (object) => {

    if ('age' in object) {
        console.log('Exists');
    }
    else {
        console.log('Not exists');
    }
}


// Exercice1
function Exercice1() {
    let name_input = prompt("Name: ");
    let age_input = Number(prompt("Age: "));
    let city_input = prompt("City");
    let street_input = prompt("street");

    const student = {
        user: {
            name: name_input,
            age: age_input
        },
        adress: {
            city: city_input,
            street: street_input
        },
        Present() {
            console.log(`Hi, i\`m ${this.user.name}.\nage: ${this.user.age}\nadress: ${this.adress.street}, ${this.adress.city}`);
        }
    }
    student.Present();
}

let arr_str = ['65', '32', '11'];
console.log(arr_str.join(', '));