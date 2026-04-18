// Problems solved based on concepts covered from Day 1 to Day 4.

// 🔢 BASIC OPERATIONS

let age = 5;
let age2 = 10;

console.log(age + age2); // 15

// 🔁 TYPE CONVERSION (IMPORTANT)

console.log(Boolean(""));   // false
console.log(Boolean(" "));  // true (space is not empty)
console.log(Boolean(0));    // false
console.log(Boolean([]));   // true (empty array is truthy)

console.log("15" + 5); // "155" (string concatenation)
console.log("15" - 5); // 10 (converted to number)

// ⚡ FUNCTION + CONDITIONALS

const checkNumber = (n) => {
    if (isNaN(n)) {
        console.log("Invalid input");
        return;
    }

    if (n % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }

    if (n % 5 === 0) {
        console.log("Divisible by 5");
    }
};

// Example calls
checkNumber(10);
checkNumber(7);
checkNumber("abc");

// 📥 INPUT (BROWSER)

let input = Number(prompt("Enter Number:"));

if (isNaN(input)) {
    console.log("Invalid input");
} else {
    console.log(input % 2 === 0 ? "Even" : "Odd");

    if (input % 5 === 0) {
        console.log("Divisible by 5");
    }
}

// 🔤 STRING METHODS

let str = "  Rajnish  ";

console.log(str.toUpperCase());   // "  RAJNISH  "
console.log(str.toLowerCase());   // "  rajnish  "
console.log(str.length);          // includes spaces
console.log(str.charAt(0));       // " " (space)
console.log(str.includes("Raj")); // true
console.log(str.replace("Raj", "ani")); // "  aninish  "
console.log(str.slice(3));        // "jnish  "
console.log(str.trim());          // "Rajnish"

// 🔁 STRING LOGIC

// Reverse string
let reversed = str.trim().split("").reverse().join("");
console.log(reversed); // "hsinjaR"

// Remove first 2 characters after reverse
console.log(reversed.substring(2));

// 🎯 EXTRA PRACTICE

// Check Palindrome
const isPalindrome = (s) => {
    let clean = s.trim();
    let rev = clean.split("").reverse().join("");
    return clean === rev;
};

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false