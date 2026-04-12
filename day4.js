"use strict";

/* =======================
   STRING BASICS
======================= */

const name = "Rajan";
let age = 21;

// Old way
console.log("Hello my name is " + name + " and my age is " + age);

// Modern way (Recommended)
console.log(`Hello my name is ${name} and my age is ${age}`);


/* =======================
   STRING INDEXING
======================= */

let str = "Rajan";

console.log(str[0]); // "R"
console.log(str.length); // 5


/* =======================
   IMPORTANT STRING METHODS
======================= */

// 1. charAt()
console.log(str.charAt(2)); // "j"

// 2. at() (modern)
console.log(str.at(-1)); // "n"

// 3. toUpperCase()
console.log(str.toUpperCase()); // "RAJAN"

// 4. toLowerCase()
console.log(str.toLowerCase()); // "rajan"

// 5. indexOf()
console.log(str.indexOf("a")); // 1

// 6. lastIndexOf()
console.log(str.lastIndexOf("a")); // 3

// 7. includes()
console.log(str.includes("jan")); // true

// 8. startsWith()
console.log(str.startsWith("Ra")); // true

// 9. endsWith()
console.log(str.endsWith("an")); // true

// 10. substring(start, end)
console.log(str.substring(0, 3)); // "Raj"

// 11. slice(start, end)
console.log(str.slice(-3)); // "jan"

// 12. trim()
let text = "   Rajan   ";
console.log(text.trim()); // "Rajan"

// 13. trimStart()
console.log(text.trimStart()); // "Rajan   "

// 14. trimEnd()
console.log(text.trimEnd()); // "   Rajan"

// 15. replace()
console.log(str.replace("Raj", "Rohan")); // "Rohanan"

// 16. replaceAll()
let msg = "hello hello";
console.log(msg.replaceAll("hello", "hi")); // "hi hi"

// 17. split()
let sentence = "I love JS";
console.log(sentence.split(" ")); // ["I", "love", "JS"]

// 18. join() (array → string)
let arr = ["I", "love", "JS"];
console.log(arr.join(" ")); // "I love JS"

// 19. concat()
let first = "Hello";
let second = "World";
console.log(first.concat(" ", second)); // "Hello World"

// 20. repeat()
console.log("Hi ".repeat(3)); // "Hi Hi Hi "

// 21. padStart()
console.log("5".padStart(3, "0")); // "005"

// 22. padEnd()
console.log("5".padEnd(3, "0")); // "500"


/* =======================
   STRING IMMUTABILITY
======================= */

let test = "Raj";
let upper = test.toUpperCase();

console.log(test);  // "Raj" (unchanged)
console.log(upper); // "RAJ"


/* =======================
   TYPE CHECK
======================= */

console.log(typeof str); // "string"


/* =======================
   IMPORTANT NOTES
======================= */

// Strings are immutable (cannot be changed)
// All methods return new string

// substring() → no negative values
// slice() → supports negative values

// replace() → replaces first occurrence
// replaceAll() → replaces all occurrences