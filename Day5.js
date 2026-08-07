// ***************************************************************** Number & Math ***************************************************************\\

// #Numbers ++++++++++++++++++++++++++++++++++++++++++++

const score = 4010;
console.log(`My score is ${score}`);

let balance = 50000;
console.log(`Bank balance is ${balance}`);

console.log(score.toString().indexOf(1));
console.log(balance.toFixed(2));
console.log(balance.toLocaleString("en-IN"));

let num = 23.68574;
console.log(num.toPrecision(2));

// #Maths ++++++++++++++++++++++++++++++++++++++++++++++

let mathNumber = 400;
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.8365));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.min(4, 3, 5, 9, 6, 2));
console.log(Math.max(4, 5, 9, 7, 19, 70, 100));
console.log(Math.random() * 10 + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// Print a random number between 50 and 100.

let minimum = 50;
let maximum = 100;

console.log(
  `Random number is ${
    Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
  }`,
);

// Round 45.6789 to 3 significant digits.

const preciseNumber = 45.6789;
console.log(`3 digit precise number is ${preciseNumber.toPrecision(3)}`);

// Convert 123456789 into Indian currency format.

let n = 123456789;
console.log(n.toLocaleString("en-IN"));

// Find the maximum value from an array.

let arr = [12, 56, 89, 34, 99, 21];
let maxValueInArray = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > maxValueInArray) {
    maxValueInArray = arr[i];
  }
}

console.log(`Maximum value of the array is ${maxValueInArray}`);

// Generate a random even number between 2 and 20.

let mn = 2;
let mx = 20;

console.log(
  `Random number between 2 and 20 is ${
    Math.floor(Math.random() * ((mx - mn) / 2 + 1)) * 2 + mn
  }`,
);

// Generate a random odd number between 1 and 19.

let randomOdd = Math.floor(Math.random() * 10) * 2 + 1;
console.log(randomOdd);

// Print the absolute value of -456.

console.log(Math.abs(-456));

// Find the square root of 225.

console.log(Math.sqrt(225));

// Find 2 raised to the power 10.

console.log(Math.pow(2, 10));

// Create a 6-digit OTP.

let minValue = 100000;
let maxValue = 999999;

console.log(
  Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue,
);

// Find the largest number in an array.

let array = [10, 20, 30, 40, 50, 60, 70, 1000];
let maxarr = array[0];

for (let i = 1; i < array.length; i++) {
  if (array[i] > maxarr) {
    maxarr = array[i];
  }
}

console.log(maxarr);

// Find the smallest number.

let arrNum = [10, 20, 30, 40, 50, 60, 70, 1000];
let minVal = arrNum[0];

for (let i = 1; i < arrNum.length; i++) {
  if (arrNum[i] < minVal) {
    minVal = arrNum[i];
  }
}

console.log(minVal);

// Find the second largest number.

let numList = [10, 20, 30, 40, 50, 60, 70, 1000];
let largest = numList[0];
let secondLargest = numList[0];

for (let i = 1; i < numList.length; i++) {
  if (numList[i] > largest) {
    secondLargest = largest;
    largest = numList[i];
  } else if (numList[i] > secondLargest && numList[i] < largest) {
    secondLargest = numList[i];
  }
}

console.log(`Largest: ${largest}`);
console.log(`Second Largest: ${secondLargest}`);