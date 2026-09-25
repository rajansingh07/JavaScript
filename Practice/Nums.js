let number = 100

// if(number > 0){
//     console.log(`Given number is positive ${number}`);
    
// } else if (number < 0) {
//     console.log(`Given number is negative ${number}`);   
// } else if(number === 0) {
//     console.log(`Given number is zero ${number}`);
// } else {
//     console.log(`Given number is invalid`);
// }

let num = 11;

// if(num % 2 === 0){
//     console.log("Even");
// } else {
//     console.log("Odd");
// }

let numList = [10, 20, 30, 40, 50, 60];
let large = []
for(let i = 0; i < numList.length; i++){
    if(numList[i] >= 40){
        large.push(numList[i])
    }
}

// console.log(large);


let numbers = [100, 200, 300, 400, 500, 600, 2000, 10000];
let small = [];
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] <= 300){
        small.push(numbers[i])
    }
}

// console.log(small);


let n = 2;

let square = n*n
let cube = n*n*n
// console.log(square);
// console.log(cube);

let nums = [10, 20, 30];
let sum = 0;
for(let i = 0; i < nums.length; i++){
    sum = sum + nums[i]
}

console.log(sum);


let digit = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
let count = 0;
for(let i = 0; i < digit.length; i++){
    count++;
}

console.log(count);


let max = 100;
let min = 20;

let mix = Math.floor(Math.random() * (max - min) + min)

console.log(`Random number is : ${mix}`);
