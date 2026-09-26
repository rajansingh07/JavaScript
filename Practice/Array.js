const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// Print the numbers
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Print the sum of all numbers
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}
console.log(`Sum of numbers is : ${sum}`)

// Print the largest using normal method
let largest = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }
}
console.log(`Using normal loop : ${largest}`);

// Print largest using Math.max
let numbers = [10, 30, 60, 90, 15, 150, 45, 500, 720];
let large = Math.max(...numbers);
console.log(`Large value using Math.max : ${large}`);

// Print smallest using Math.max
let small = Math.min(...numbers)
console.log(`Smallest value using Math.min : ${small}`);

// Find the average of given numbers
let sums = 0;
let count = 0;
for (let i = 0; i < numbers.length; i++) {
  sums = sums + numbers[i]
  count++;
}
let average = sums / count
console.log(average.toFixed(2));

// Find the second largest of given numbers
let largestNum = 0;
let SecLarge = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > largestNum) {
    SecLarge = largestNum;
    largestNum = numbers[i]
  }
}
console.log(`Second largest number is : ${SecLarge}`);

// Count numbers grather than 50

let counter = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 50) {
    counter++;
  }
}
console.log(`Number count grater than 50 is : ${counter}`);


// Store the 3 largest numbers
let num = [10, 30, 50, 130, 450, 720]
let largeNum = 0;
let secondNum = 0;
let thirdNum = 0;
for (let i = 0; i < num.length; i++) {
  if (num[i] > largeNum) {
    thirdNum = secondNum
    secondNum = largeNum
    largeNum = num[i]
  } else if (num[i] > largeNum) {
    secondNum = largeNum
    largeNum = num[i]
  } else if (num[i] > thirdNum) {
    thirdNum = num[i]
  }
}
console.log(`First : ${largeNum}`);
console.log(`Second : ${secondNum}`);
console.log(`Third : ${thirdNum}`);



// Find the largest & smallest both
let numberArr = [10, 20, 50, 70, 90, 120, 150, 180, 210, 240, 270];
let largestNumbers = numberArr[0]
let smallestNumbers = numberArr[0]

for(let i = 0; i < numberArr.length; i++){
  if(numberArr[i] > largestNumbers){
    largestNumbers = numberArr[i]
  } else if (numberArr[i] < smallestNumbers){
    smallestNumbers = numberArr[i]
  }
}
console.log(`Lagest : ${largestNumbers}`);
console.log(`Smallest : ${smallestNumbers}`);

