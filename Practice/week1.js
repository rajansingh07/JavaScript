// Function

function sum(a, b) {
    return a + b;
}

console.log(sum(9, 10));


let abc = (n) => {
    return n * n;
}

console.log(abc(7));

let student = {
    name: 'Rajan Kumar',
    age: 22,
    marks: 255
}

console.log(student.name);
console.log(student.marks);


let add = 0;
for (let i = 0; i <= 10; i++) {
    add = add + i;
}

console.log(`Sum of number: ${add}`);

let myArr = [12, 24, 36, 48]
let addition = 0
for (let i = 0; i < myArr.length; i++) {
    addition = addition + myArr[i]
}

console.log(addition);


let data = {
    name: 'Ravi',
    age: 21,
    city: 'Bhopal'
}
let ke = Object.keys(data);
let val = Object.values(data);

console.log('Student data');

for (let i = 0; i < ke.length; i++) {
    console.log(`${ke[i]}: ${val[i]}`);
}

let map = new Map([
    ['India', 'Delhi'],
    ['Japan', 'Tokyo'],
    ['Thailand', 'Bangkok']
]);

for (const [key, val] of map) {
    console.log(`${key} : ${val}`);
}

let employee = {
    HR: [
        { name: 'Rajan', salary: 10000 },
        { name: 'Priya', salary: 15000 }
    ],

    Marketing: [
        { name: 'Rajiv', salary: 20000 },
        { name: 'Anushka', salary: 30000 }
    ]
}

for (const department in employee) {
    for (const salary of employee[department]) {
        console.log(`${department} : ${salary.name} : ${salary.salary}`);
    }
}

let product = {
    name: "Laptop",
    price: 45000,
    stock: 5,
    brand: "HP"
};

for (const key in product) {
    if(typeof product[key] === 'number') {
        console.log(`${key}: ${product[key]}`);
    }
}

let company = {
    IT: [
        { name: "A", salary: 20000 },
        { name: "B", salary: 30000 }
    ],
    HR: [
        { name: "C", salary: 15000 }
    ]
};
let summ = 0; 
for (const departments in company) {
    for (const employees of company[departments]) {
        summ += employees.salary
    }
}
console.log(summ);
