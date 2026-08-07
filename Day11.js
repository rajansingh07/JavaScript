// =====================================================
// JavaScript Scope & Function Hoisting
// =====================================================


// -----------------------------------------------------
// 1. Lexical Scope (Nested Functions)
// -----------------------------------------------------

function one() {
  const username = "Rajan";
  function two() {
    const website = "YouTube";
    console.log(username); 
    console.log(website);  
  }

  // console.log(website);

  two();
}

one();


// -----------------------------------------------------
// 2. Block Scope
// -----------------------------------------------------

if (true) {
  const username = "Rajan";
  if (username === "Rajan") {
    const website = "YouTube";
    console.log(username + website);
  }

  // console.log(website); 
}

// console.log(username); 



// -----------------------------------------------------
// 3. Function Declaration
// Function declarations are hoisted.
// They can be called before they are defined.
// -----------------------------------------------------

console.log(addOne(5));

function addOne(num) {
  return num + 1;
}

// -----------------------------------------------------
// 4. Function Expression
// Function expressions are NOT hoisted.
// They cannot be called before declaration.
// -----------------------------------------------------

const addTwo = function (num) {
  return num + 2;
};

console.log(addTwo(8));

// -----------------------------------------------------
// 5. Function Expression Error
// Calling a function expression before
// its declaration causes an error.
// -----------------------------------------------------

// console.log(subTwo(8));

const subTwo = function (num) {
  return num - 2;
};

console.log(subTwo(8));

// =====================================================
// Key Notes
// =====================================================

/*

1. Lexical Scope
----------------
- Inner functions can access variables from outer functions.
- Outer functions cannot access variables from inner functions.

2. Block Scope
--------------
- let and const are block scoped.
- They only exist inside {}.


=====================================================
Interview Questions
=====================================================

Q1. What is lexical scope?
Ans: Inner functions can access variables from their parent function.

Q2. Can the parent function access child variables?
Ans: No.

Q3. Difference between let, const and var?
Ans:
- let → Block scoped
- const → Block scoped, cannot be reassigned
- var → Function scoped (avoid using it)

Q4. Which function is hoisted?
Ans:
✔ Function Declaration

Q5. Which function is NOT hoisted?
Ans:
✔ Function Expression

*/