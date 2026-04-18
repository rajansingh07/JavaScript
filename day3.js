"use strict";

/* =======================
   PRIMITIVE DATA TYPES
======================= */

// Primitive data types store a single value directly in memory
// and are copied by value (independent copy).

// Types:

// 1. String
let name = "Rajan";

// 2. Number
let x = 10;
const temp = 20;

// 3. Boolean
let isActive = true;

// 4. null (intentional empty value)
let score = null;

// 5. undefined (declared but not assigned)
let data;

// 6. BigInt (large numbers)
const bigNum = 866495734536859n;

// 7. Symbol (unique identifier)
let id = Symbol("123");


// Type Checking
console.log(typeof name);     // "string"
console.log(typeof x);        // "number"
console.log(typeof isActive); // "boolean"
console.log(typeof score);    // "object" (JS bug)
console.log(typeof data);     // "undefined"
console.log(typeof bigNum);   // "bigint"
console.log(typeof id);       // "symbol"


/* =======================
   REFERENCE DATA TYPES
======================= */

// Reference data types store a reference (memory address)
// instead of actual value and are copied by reference.

// Types:

// 1. Array
const names = ["Rajan", "Sagar", "Raj", "Suman"];

// 2. Object
let user = {
    name: "Raj",
    age: 22
};

// 3. Function
const myFun = function () {
    console.log("Hello");
};


// Type Checking
console.log(typeof names); // "object"
console.log(typeof user);  // "object"
console.log(typeof myFun); // "function"


/* =======================
   STACK vs HEAP MEMORY
======================= */

/* -------- STACK (Primitive) -------- */

// Stored in stack → copied by value

let a = 10;
let b = a;

b = 20;

console.log(a); // 10  (original NOT changed)
console.log(b); // 20


let char = "Raj";
let anotherChar = char;

anotherChar = "Rajan";

console.log(char);         // "Raj" (unchanged)
console.log(anotherChar);  // "Rajan"


/* -------- HEAP (Reference) -------- */

// Stored in heap → copied by reference

let userOne = {
    name: "Rajiv",
    age: 40,
    email: "userrajiv.com"
};

let userTwo = userOne;

// Change via second reference
userTwo.email = "rajiv.com";

console.log(userOne.email); // "rajiv.com" (changed)
console.log(userTwo.email); // "rajiv.com"

// Array example
let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(4);

console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]


/* =======================
   IMPORTANT NOTES
======================= */

// Primitive → copied by value → independent
// Reference → copied by reference → shared

// typeof null → "object" (historical bug)

// Arrays are objects in JavaScript


/* =======================
   DYNAMIC TYPING
======================= */

// JavaScript is dynamically typed
// Type is decided at runtime

let value = 10;
value = "Hello";
value = true;


/* =======================
   OUTPUT
======================= */

console.log(x);
console.log(temp);
console.log(score);
console.log(bigNum);