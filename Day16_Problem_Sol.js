// Loops Practice Question 

// Print number from 1 to 20.

let n = 20

// for(let i = 1; i <= n; i++){
//     console.log(i)
// }


// Reverse number from 20 to 1

for (let i = 20; i >= 1; i--){
    // console.log(i)
}

// Print only even numbers from 1 to 50.

for (let i = 1; i <= 50; i++){
    if(i % 2 == 0){
        // console.log(i)
    }
}

// Print only odd numbers from 1 to 50.

for (let i = 1; i <= 50; i++){
    if(i % 2 !== 0){
        // console.log(i)
    }
}

// Print the multiplication table of 7 from 1 to 10.

for (let i = 1; i <= 10; i++){
        // console.log("7"+ ' * ' + i + ' = ' + "7" * i);
}

// Calculate the sum of numbers from 1 to 100.

// let num = 100
// let sum = 0

// for(let i = 0; i <= num; i++){
//     sum += i;
// }

// console.log(sum)


// Given a number n, print all numbers from 1 to n that are divisible by 3.

for (let i = 1; i <= n; i++){
    if(i % 3 == 0) {
        // console.log(i);
    }
}

// Given a number, print its multiplication table.
let m = 2;

for (let i = 1; i <= 10; i++) {
    // console.log(m + " * " + i + " = " + m * i);
}

// Print every element of the loop

let arr = [1, 2, 4, 5, 10, 2, 18, 20];

for(let i = 1; i <= arr.length; i++){
    const element = arr[i];
    // console.log(element);
}

// Calculate the sum of all elements.

let sum = 0;
for(let i = 0; i < arr.length; i++){
    sum += arr[i];
}

// console.log(sum)

// Find Largest 
let largest = arr[0]

for(let i = 0; i < arr.length; i++) {
 if (arr[i] > largest) {
    largest = arr[i]
 }
}

// console.log(largest)

// Find Samllest 
let smallest = arr[0]

for(let i = 0; i < arr.length; i++) {
 if (arr[i] < smallest) {
    smallest = arr[i]
 }
}

// console.log(smallest)

// Count how many even numbers are in the array.

for(let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0){
        // console.log(arr[i])
    }
}

// Count how many odd numbers are in the array.

for(let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0){
        // console.log(arr[i])
    }
}

// Find how many times 2 appears in the array.
let count = 0
for(let i = 0; i < arr.length; i++) {
    if(arr[i] == 2){
        count++;
    }
}
// console.log(count)


// Print numbers from 1 to 20, but stop completely when you reach 10.

for(let i = 0; i <= 20; i++){
    if(i == 10){
        console.log("Reached 10")
        break;
    }
    // console.log(i)
}

// Print numbers from 1 to 50, but: skip multiples of 3

for (let i = 0; i <= 50; i++){
    if(i % 3 == 0){
        continue;
    }
    // console.log(i)
}

// Print numbers from 1 to 20, but skip 5.

for(let i = 0; i <= 20; i++){
    if(i === 5){
        continue;
    }
    console.log(i)
}

// stop when you reach 40

for(let i = 0; i <= 50; i++){
    if(i == 40){
        break;
    }
    // console.log(i)
}