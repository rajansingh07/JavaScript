// for(let i = 0; i <= 10; i++){
//     if(i === 5){
//         console.log(`Reached ${i}`);
//         continue;
//     }
//     console.log(i);

// }


let i = 1;

while (i <= 10) {
    if (i === 5) {
        console.log(`reached ${i}`);
        break;
    }
    console.log(i);
    i++;
}

let myArray = ['flash', 'batman', 'superman']
let arr = 0
while (arr < myArray.length) {
    console.log(`Name of superheros ${myArray[arr]}`);
    arr++;
}

let myarr = 0
do {
    console.log(myarr);
    myarr++;
} while (myarr <= 10);


// Higher order loops
let product = ['Laptop', 'Mouse', 'Keyboard']
for (let values in product) {
    console.log(`${values}. ${product[values]}`);
}

for (const val of product) {
    console.log(`List of product: ${val}`);
}

let map = new Map();
map.set('IN', 'India')
map.set('US', 'USA')
map.set('TH', 'Thailand')

for (const [key, value] of map) {
    // console.log(key,':-', value);
}

// console.log(...map.values());

const fruits = ['Apple', 'Mango', 'Banana'];

for (const val of fruits) {
    console.log(val);
}


const colors = ['Red', 'Blue', 'Green'];

for (const values in colors) {
    console.log(colors[values]);
}

const user = {
    name: 'Rajan',
    age: 22,
    city: 'Jaipur'
};

for (let key in user) {
    console.log(`${key} : ${user[key]}`);
}

const numbers = [10, 20, 30, 40];
let sum = 0
for (const num of numbers) {
    sum = sum + num
}

console.log(`Sum of given number: ${sum}`);


const countries = new Map([
    ['IN', 'India'],
    ['US', 'USA'],
    ['TH', 'Thailand']
]);

for (const [key, value] of countries) {
    console.log(key, ':', value);
}

const products = {
    name: 'Laptop',
    price: 45000,
    brand: 'HP',
    inStock: true
};

let count = 0;
for (const key in products) {
    count++;
}

console.log(`Total properties: ${count}`);

const nums = [3, 8, 11, 14, 20, 25];

for (const num of nums) {
    if (num % 2 === 0) {
        console.log(num);
    }
}

const students = {
    Raj: { JS: 85, HTML: 90 },
    Aman: { JS: 78, HTML: 88 }
};

for (const student in students) {
    for (const subject in students[student]) {
        console.log(`${student} - ${subject} : ${students[student][subject]}`);
        
    }
}


const employees = [
    { name: 'Raj', salary: 25000 },
    { name: 'Aman', salary: 40000 },
    { name: 'Priya', salary: 35000 },
    { name: 'Neha', salary: 20000 }
];


for (const employee of employees) {
    if(employee.salary > 30000){
        console.log(`${employee.name} : ${employee.salary}`);
        
    }
}

const scores = {
    Raj: 85,
    Aman: 42,
    Priya: 91,
    Neha: 36
};

for (const score in scores) {
    if(scores[score] > 50){
        console.log(`${score} : ${scores[score]}`);
    }
}

const cart = [
    { name: 'Mouse', price: 500 },
    { name: 'Keyboard', price: 1500 },
    { name: 'Monitor', price: 12000 },
    { name: 'Laptop', price: 55000 }
];

for (const carts of cart) {
    if(carts.price > 10000){
        console.log(`${carts.name} : ${carts.price}`);
    }
}

const departments = {
    Development: ['Raj', 'Aman'],
    Marketing: ['Priya', 'Neha'],
    HR: ['Ravi', 'Simran']
};

for (const department in departments) {
    for (const name of departments[department]) {
        console.log(`${department} : ${name}`);
    }
}

const teams = {
    Development: [
        { name: 'Raj', salary: 25000 },
        { name: 'Aman', salary: 40000 }
    ],
    Marketing: [
        { name: 'Priya', salary: 35000 },
        { name: 'Neha', salary: 20000 }
    ]
};


for (const department in teams) {
    for (const employee of teams[department]) {
        if(employee.salary > 30000){
            console.log(`${department} : ${employee.name} : ${employee.salary}`);
        }
    }
}