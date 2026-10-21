let student = {
    name: "Rajan",
    age: 22,
    course: "B.Tech",
    isGraduate: false,

    greet: function () {
        console.log(`Hello, ${this.name}`);
    }
}

student.greet()

let sum = (a, b) => {
    console.log(a + b);
}

sum(2, 4)

let user = {
    name: "Rajan",
    age: 22,
    course: "B.Tech",

    greet: () => {
        return `Hello, ${user.name}`
    }
}

console.log(user.greet());


const person = {
    name: "Rajan",
    age: 22,

    intro: () => {
        console.log(`Hello, ${person.name}`);
    }
}

person.intro();


let product = {
    name: "Mac M2",
    price: 70000,
    color: "Black",

    getDetails: () => {
        return `${product.name}, Price ${product.price} and color ${product.color}`
    }
}

console.log(product.getDetails());

// Sum of 1 to 10
let total = 0;

for (let i = 1; i <= 10; i++) {
    total = total + i;
}

console.log(`Sum of 1 to 10 is : ${total}`);

// Sum of even numbers 

let add = 0;

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        add = add + i;
    }
}

console.log(`Sum of even numbers is ${add}`);

// Table of 5

let number = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

let i = 10;

while (i >= 1) {
    console.log(i);
    i--;
}

let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

for (const number of numbers) {
    console.log(number);
}

let mobile = {
    brand: "Samsung",
    price: 25000,
    color: "Black"
};

let name = Object.keys(mobile);
let value = Object.values(mobile)

for (let i = 0; i < value.length; i++) {
    console.log(`${name[i]}: ${value[i]}`);
}


let studentData = {
    name: "Rajan",
    age: 22,
    course: "B.Tech",
    city: "Bihar"
};

for (const key in studentData) {
    console.log(key);
}

for (let i = 1; i <= 5; i++) {
    let row = ""
    for (let j = 1; j <= i; j++) {
        row = row + "*"
    }
    console.log(row);
}


for (let i = 5; i >= 1; i--) {
    let row = ""
    for (let j = 1; j <= i; j++) {
        row = row + "*"
    }
    console.log(row);
}

for (let i = 1; i <= 5; i++) {
    let row = ""
    for (let j = 1; j <= i; j++) {
        row = row + j
    }
    console.log(row);
}

let nums = [10, 15, 22, 7, 18]

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
        console.log(`${nums[i]} is even`);
    } else {
        console.log(`${nums[i]} is odd`);
    }
}

let givenNum = [12, 45, 7, 89, 34];

let largest = givenNum[0]
for(let i = 0; i < givenNum.length; i++){
    if(givenNum[i] > largest){
        largest = givenNum[i]
    }
}

console.log(`Largest number is: ${largest}`);

let smallest = givenNum[0]
for(let i = 0; i < givenNum.length; i++){
    if(givenNum[i] < smallest){
        smallest = givenNum[i]
    }
}

console.log(`Smallest number is: ${smallest}`);

let num = [12, 7, 8, 15, 20, 3, 10];

let evenCount = 0;
let oddCount = 0;

for(let i = 0; i < num.length; i++){
    if(num[i] % 2 === 0){
        evenCount++;
    } else {
        oddCount++;
    }
}

console.log(`Even numbers: ${evenCount}`);
console.log(`Odd numbers: ${oddCount}`);


let addition = 0;
let count = 0;

for(let i = 0; i < num.length; i++){
    addition = addition + num[i];
    count++;
}

let average = addition/count;
console.log(`Addition of number: ${addition}`);
console.log(`Count of number: ${count}`);
console.log(`Average: ${Math.floor(average)}`);

let countNum = [12, 45, 8, 29, 67, 15, 34];

for(let i = 0; i < countNum.length; i++){
    if(countNum[i] > 20){
        console.log(`Numbers grater than 20: ${countNum[i]}`);
    }
}

let target = 29;
let found = false;

for(let i = 0; i < countNum.length; i++){
    if(countNum[i] === target){
        found = true;
    } else {
        found = false;
    }
}

if(found === true){
    console.log("Number found");
} else {
    console.log("Not found!");
}