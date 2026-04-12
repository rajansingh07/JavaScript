// 📘 JAVASCRIPT: NUMBERS & MATH


// 🔢 SECTION 1: NUMBERS

const score = 400; 
// Simple number value (most commonly used)


// ⚠️ Number Object (Not recommended in real projects)
let balance = new Number(100);
// Creates a Number object instead of a primitive
// Type becomes "object"

// Display the number object
console.log(balance);

// 🔄 Number Methods

// 🔹 Convert number to string
console.log(balance.toString()); 

// 🔹 Fix decimal places
console.log(balance.toFixed(2)); 
// Adds 2 digits after decimal
// Example: 100 → "100.00"

// 🔹 Precision (total digits control)
let num = 150.7666;
console.log(num.toPrecision(3)); 
// Keeps total 3 digits → rounds number
// Output: "151"


// 🔹 Format number based on region
let value = 1000000;
console.log(value.toLocaleString('en-IN')); 
// Indian format → "10,00,000"

// 🧮 SECTION 2: MATH OBJECT

// Math is a built-in object for mathematical operations
console.log(Math);

// 🔹 Basic Math Methods

// Absolute value (removes negative sign)
console.log(Math.abs(-4)); 
// Output: 4


// Round to nearest integer
console.log(Math.round(4.3)); 
// Output: 4

// Always round upper value
console.log(Math.ceil(4.2)); 
// Output: 5


// Always round lower value 
console.log(Math.floor(4.5)); 
// Output: 4


// Minimum value from list
console.log(Math.min(3, 4, 5, 6)); 
// Output: 3


// Maximum value from list
console.log(Math.max(3, 5, 6, 7, 10)); 
// Output: 10

// 🎲 SECTION 3: RANDOM NUMBERS

// ⚠️ Incorrect usage (returns function reference error)
// console.log(Math.random);

// ✅ Correct usage
console.log(Math.random()); 
// Generates random number between 0 and 1


// 🔹 Random number between 1 and 10
console.log((Math.random() * 10) + 1);
// Range: 1 to 10 (decimal values)

// 🎯 SECTION 4: RANDOM NUMBER IN RANGE (IMPORTANT)

const min = 10;
const max = 20;

// Formula to generate random integer between min and max
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

/*
Explanation:
1. Math.random() → gives value between 0 and 1
2. Multiply by (max - min + 1) → scales range
3. Math.floor() → removes decimal
4. + min → shifts range to desired start

Final Output Range: 10 to 20 (inclusive)
*/

// 🚀 SUMMARY (IMPORTANT POINTS)

// ✔ Use primitive numbers instead of Number objects
// ✔ Always use () when calling methods (toString(), random())
// ✔ toFixed() → controls decimal places
// ✔ toPrecision() → controls total digits
// ✔ Math.random() is base for all random logic
// ✔ Random range formula is VERY IMPORTANT for interviews