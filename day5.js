// JAVASCRIPT: NUMBERS & MATH


// SECTION 1: NUMBERS

const score = 400; 
// Simple number value (most commonly used)


// Number Object (Not recommended in real projects)
let balance = new Number(100);
// Creates a Number object instead of a primitive
// Type becomes "object"

// Display the number object
console.log(balance);

// Number Methods

// Convert number to string
console.log(balance.toString()); 

// Fix decimal places
console.log(balance.toFixed(2)); 
// Adds 2 digits after decimal
// Example: 100 → "100.00"

// Precision (total digits control)
let num = 150.7666;
console.log(num.toPrecision(3)); 
// Keeps total 3 digits → rounds number
// Output: "151"


// Format number based on region
let value = 1000000;
console.log(value.toLocaleString('en-IN')); 
// Indian format → "10,00,000"

// SECTION 2: MATH OBJECT

// Math is a built-in object for mathematical operations
console.log(Math);

// Basic Math Methods

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

// SECTION 3: RANDOM NUMBERS

// Incorrect usage (returns function reference error)
// console.log(Math.random);

// Correct usage
console.log(Math.random()); 
// Generates random number between 0 and 1


// Random number between 1 and 10
console.log((Math.random() * 10) + 1);
// Range: 1 to 10 (decimal values)

// SECTION 4: RANDOM NUMBER IN RANGE (IMPORTANT)

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

// REAL-LIFE EXAMPLES (VERY IMPORTANT)


// 1. E-commerce Price Formatting
let price = 999.5;

// Show price in proper currency format
console.log(price.toFixed(2)); 
// "999.50"
// Used in: Amazon, Flipkart product price display


// 2. Bank Balance Display (Indian Format)
let bankBalance = 1250000;

console.log(bankBalance.toLocaleString('en-IN')); 
// "12,50,000"
// Used in: Banking apps, Paytm, PhonePe


// 3. OTP Generator (Random 6-digit number)
let otp = Math.floor(100000 + Math.random() * 900000);

console.log(otp);
// Example: 482193
// Used in: Login verification, payments


// 4. Dice Game (1 to 6)
let dice = Math.floor(Math.random() * 6) + 1;

console.log(dice);
// Used in: Games, Ludo apps


// 5. Random Password Character
let randomCharCode = Math.floor(Math.random() * 26) + 97;

console.log(String.fromCharCode(randomCharCode));
// Generates random lowercase letter (a-z)
// Used in: Password generators


// 6. Discount Calculation
let originalPrice = 1000;
let discount = 15; // %

let finalPrice = originalPrice - (originalPrice * discount / 100);

console.log(finalPrice);
// Used in: Shopping apps


// 7. Rating System (Round Values)
let rating = 4.6;

console.log(Math.round(rating)); 
// 5 stars
// Used in: Product reviews, apps


// 8. Temperature Conversion (Absolute value)
let temp = -5;

console.log(Math.abs(temp));
// 5
// Used in: Weather apps


// 9. Random Winner Selection
let users = ["Rajan", "Amit", "Sita", "Rahul"];

let winnerIndex = Math.floor(Math.random() * users.length);

console.log(users[winnerIndex]);
// Used in: Giveaways, lucky draw


// 10. Min/Max in Real Data
let marks = [45, 67, 89, 23, 90];

console.log(Math.max(...marks)); // Highest marks
console.log(Math.min(...marks)); // Lowest marks
// Used in: Result systems


// SUMMARY (IMPORTANT POINTS)

// ✔ Use primitive numbers instead of Number objects
// ✔ Always use () when calling methods (toString(), random())
// ✔ toFixed() → controls decimal places
// ✔ toPrecision() → controls total digits
// ✔ Math.random() is base for all random logic
// ✔ Random range formula is VERY IMPORTANT for interviews

