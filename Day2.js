// ***************************************************************
// Data Types
// ***************************************************************

// Primitive Data Types
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreVal = 100.5; // Data type is "number", not "float".
// In JavaScript, both integers and decimal numbers have the same data type: Number.

const isLoggedIn = false;

const outsideTemp = null; // null means "no value" or an intentional empty value.

let userEmail; // undefined means the variable has been declared but not assigned a value.

const id = Symbol("1234");
const anotherId = Symbol("1234");

console.log(id == anotherId); // false
// Every Symbol is unique, even if they have the same description.


// ***************************************************************
// Reference (Non-Primitive) Data Types
// ***************************************************************

// Array, Object, Function

let myObj = {
    id: "1",
    name: "Rajan Kumar",
    age: 9,
};


// ***************************************************************
// Function
// ***************************************************************

const myFun = function () {
    console.log("Hello!");
};


// ***************************************************************
// typeof Examples
// ***************************************************************

console.log(typeof outsideTemp); // "object"
// This is a well-known bug in JavaScript.
// Although null is a primitive data type, typeof null returns "object".

console.log(typeof score);        // "number"
console.log(typeof isLoggedIn);   // "boolean"
console.log(typeof userEmail);    // "undefined"
console.log(typeof myObj);        // "object"
console.log(typeof myFun);        // "function"
console.log(typeof id);           // "symbol"