// =====================================================
// JavaScript `this` & Arrow Functions
// =====================================================


// -----------------------------------------------------
// 1. `this` inside an Object
// `this` refers to the current object when a regular function is called as an object method.
// -----------------------------------------------------

const user = {
  username: "Rajan",
  price: 999,

  welcomeMessaage: function () {
    console.log(`${this.username}, welcome to website`);

    console.log(this);
  },
};


// user.welcomeMessaage()
// user.username = "Raj"
// user.welcomeMessaage()

// First, username is:
// "Rajan"
//
// After:
// user.username = "Raj"
//
// username becomes:
// "Raj"
//
// When welcomeMessaage() is called again,
// `this.username` gets the updated value.
//
// Output:
// Raj, welcome to website


// -----------------------------------------------------
// 2. `this` in the Global Scope
// -----------------------------------------------------

// console.log(this)

// `this` behaves differently depending on the
// JavaScript environment.
//
// In a browser's regular script:
// `this` generally refers to the `window` object.
//
// In Node.js/modules, the result can be different.
//
// Therefore, the value of `this` depends on
// the execution environment and context.


// -----------------------------------------------------
// 3. `this` inside a Regular Function
// -----------------------------------------------------

function one() {
  username: "Rajiv";

  console.log(this.username);
}

// one()

// `one()` is a regular function.
//
// Important:
// username: "Rajiv";
//
// does NOT create or assign a username variable.
//
// It does NOT mean:
// this.username = "Rajiv";
//
// Therefore, `this.username` is not getting
// "Rajiv" from that line.
//
// The value of `this` also depends on how the
// regular function is called.


// -----------------------------------------------------
// 4. Function Expression
// -----------------------------------------------------

const chai = function () {
  username: "Rajiv";

  console.log(this.username);
};

// chai()

// `chai` contains a regular function.
//
// A function expression is simply a function
// stored inside a variable.
//
// Since this is a regular function, it has its
// own `this`.
//
// Again:
//
// username: "Rajiv";
//
// does NOT assign a value to `this.username`.


// -----------------------------------------------------
// 5. Arrow Function
// -----------------------------------------------------

const chaiCode = () => {
  username: "Rajiv";

  console.log(`${username}`);
};

// chaiCode()

// `chaiCode` is an arrow function.
//
// Arrow functions are different from regular
// functions because they do NOT have their own `this`.
//
// They take `this` from their surrounding scope.
//
// Also:
//
// username: "Rajiv";
//
// does NOT create a variable called `username`.
//
// Therefore, `${username}` is NOT getting its value
// from the previous line.
//
// If `username` has not been declared somewhere else,
// this will result in a ReferenceError.
//


// -----------------------------------------------------
// 6. Arrow Function with Explicit Return
// -----------------------------------------------------

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// addTwo(3, 4)



// -----------------------------------------------------
// 7. Arrow Function with Implicit Return
// -----------------------------------------------------

const addTwo = (num1, num2) => (num1 + num2)

console.log(addTwo(3, 4));

// =====================================================
// Key Notes
// =====================================================

/*

1. `this`
   - Refers to the current execution context.
   - Its value depends on how a function is called.
   - In an object method using a regular function,
     `this` usually refers to the object calling it.


2. Regular Function
   - Has its own `this`.
   - The value of `this` depends on how the function is called.


3. Function Expression
   - A function can be stored inside a variable.
   - Example:

     const chai = function () {
       // code
     };

   - This is still a regular function.


4. Arrow Function
   - Written using `=>`.
   - Does NOT have its own `this`.
   - It inherits `this` from the surrounding scope.


5. Important Difference

   Regular Function:

   function one() {
     console.log(this);
   }

   → Has its own `this`.


   Arrow Function:

   const chaiCode = () => {
     console.log(this);
   };

   → Does NOT have its own `this`.
   → Gets `this` from the surrounding scope.


6. Explicit Return

   const addTwo = (num1, num2) => {
     return num1 + num2;
   };

   - Uses `{}`.
   - Requires `return`.


7. Implicit Return

   const addTwo = (num1, num2) => (num1 + num2);

   - Not required `{}`.
   - Not required `return` keyword.
   - Expression is automatically returned.


8. Rest of the Important Point

   username: "Rajiv";

   is NOT the same as:

   this.username = "Rajiv";

   And it is NOT the same as:

   const username = "Rajiv";


*/


// Important:
// Regular Function → its `this` depends on the call
// Arrow Function → inherits `this` from surrounding scope

