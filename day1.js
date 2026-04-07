"use strict"; // Enables strict mode (safer, modern JS)

/* =======================
   VARIABLES
======================= */

let username = "raj";        
let userCity = "Bhopal";     
const userId = 1244;         
var userAge = 20;            // Avoid using var

/* =======================
   OUTPUT
======================= */

console.table([username, userId, userAge, userCity]);

/* =======================
   DATA TYPES
======================= */

let name = "Raj";        
let age = 21;           
let isLoggedIn = false; 
let value = null;       
let data;               

/* =======================
   EXTRA EXAMPLES
======================= */

let country = "India";
let price = 99.99;
let isActive = true;
let score = null;
let x;

/* =======================
   TYPE CHECKING
======================= */

console.log(typeof userAge);     // "number"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (JavaScript bug)

/* =======================
   NOTES
======================= */

// - Use let → when value can change
// - Use const → when value should not change
// - Avoid var → causes scope issues
// - Use console.log() / console.table() in Node.js
// - alert() works only in browser

// typeof null returns "object" → this is a known JavaScript bug

/* =======================
   DOCUMENTATION
======================= */

// TC39 → JavaScript standards
// MDN → Best JS documentation