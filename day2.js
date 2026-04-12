"use strict"; // Enables strict mode (safer, modern JavaScript)

/* =======================
   VARIABLES
======================= */

let username = "raj";        // can change
let userCity = "Bhopal";     // block scoped
const userId = 1244;         // cannot change
var userAge = 20;            // avoid using var (function scoped)

/* =======================
   OUTPUT
======================= */

console.table([username, userId, userAge, userCity]);

/* =======================
   DATA TYPES
======================= */

// Primitive Data Types

let name = "Raj";         // String
let age = 21;             // Number
let isLoggedIn = false;   // Boolean
let value = null;         // Null (intentional empty value)
let data;                 // Undefined (value not assigned)

/* =======================
   EXTRA EXAMPLES
======================= */

let country = "India";
let price = 99.99;
let isActive = true;
let score = null;
let x;                    // undefined

/* =======================
   TYPE CHECKING
======================= */

console.log(typeof userAge);     // "number"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (known JS bug)

/* =======================
   IMPORTANT NOTES
======================= */

// let → use when value may change
// const → use when value should remain constant
// var → avoid (scope & hoisting issues)

// null → intentional empty value
// undefined → variable declared but not assigned

// typeof null returns "object" → historical JavaScript bug

// console.log() → basic output
// console.table() → structured/tabular output

// alert() → works only in browser (not in Node.js)

/* =======================
   BEST PRACTICES
======================= */

// Always use "use strict"
// Prefer const by default
// Use let only when reassignment is needed
// Avoid implicit type conversions
// Use === instead of ==

/* =======================
   DOCUMENTATION
======================= */

// TC39 → defines JavaScript standards
// MDN → best resource for JavaScript documentation