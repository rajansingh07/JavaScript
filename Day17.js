// While & Do-while Loop
let i = 10;
while(i <= 10){
    // console.log("Hello");
    i = i+2;
}

let MyArray = [10, 20, 30, 40, 50, 60, 70, 80]

let arr = 0

while(arr < MyArray.length) {
    // console.log(`Values is ${MyArray[arr]}`);
    arr++;
}

let score = 11

do {
    // console.log(`Score is ${score}`)
    score++;
} while (score < 10);

// Problem Solving

// Print numbers from 1 to 10 using while.

let num = 20;

while (num <= 10) {
    // console.log(`Number is ${num}`);
    num++;
}

// Print numbers from 11 to 1.

while (num >= 1) {
    // console.log(`Number is ${num}`);
    num--;
}

// Print all even numbers from 1 to 20.

let n = 1
while (n <= 20) {
    if(n % 2 === 0) {
        // console.log(`Even number is ${n}`)
    }
    n += 2;
}

// Print all odd numbers from 1 to 20.
let val = 1;
while (val <= 30) {
    if (val % 2 !== 0){
        // console.log(`Odd number is ${val}`);
    }
    val += 2;
}

// Print every element using while

let numbers = [10, 20, 30, 40, 50, 60, 70, 80];
let arry = 0;

while (arry < numbers.length){
    console.log(`Array element is ${numbers[arry]}`);
    arry++;
}