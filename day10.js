// # FUNCTION & PARAMETER

/*
A function is a block of reusable code.
Parameters are inputs we pass into functions.
*/

// Version 1: Just printing result (no return)

function sum(num1, num2) {
  console.log(num1 + num2);
}

// This only shows output, does NOT give value back

// Version 2: Using variable + return

function sum(num1, num2) {
  let result = num1 + num2;
  return result;
}

// Stores result in variable, then returns it

// Version 3: Direct return (BEST PRACTICE)

function sum(num1, num2) {
  let result = num1 + num2;
  return num1 + num2;
}
// Clean and commonly used in real projects

// Calling function and storing result
let result = sum(5, 4);
console.log(result);
// Output will be 9

// # LOGIN USER FUNCTION (VALIDATION LOGIC)

/*
 This function checks if user exists or not.
 Used in login systems in real apps.
*/

// Method 1: undefined check

function loginuser(username) {
  if (username === undefined) {
    console.log("please enter a username!");
    return;
  }
  console.log(`${username} just logged in`);
}

// Method 2: cleaner check (!username)

function loginuser(username) {
  if (!username) {
    console.log("please enter a username!");
    return;
  }
  console.log(`${username} just logged in`);
}
// checks undefined, null, "", false

// Method 3: default parameter

function loginuser(username = "sam") {
  if (!username) {
    console.log("please enter a username!");
    return;
  }
  console.log(`${username} just logged in`);
}

loginuser("Raj");
// Output: Raj just logged in

// # REST OPERATOR (CART SYSTEM CONCEPT)

/*
 ...num1 collects all values into an array
 Used in shopping cart systems
*/

function CalculateCartPrice(...num1) {
  return num1;
}
// returns array of all values

function CalculateCartPrice(val1, val2, ...num1) {
  return num1;
}
//  val1 = first value
//  val2 = second value
//  num1 = remaining values in array

console.log(CalculateCartPrice(200, 400, 500, 2000, 5000));
// Output depends on version used

// # OBJECT HANDLING (REAL WORLD DATA)

/*
 Objects store structured data (like user, product)
*/

let user = {
  username: "Rajan Singh",
  prices: 199,
};

// Function that receives object
function handleobject(anyobject) {
  // Validation (safe check)
  if (!anyobject || !anyobject.username || !anyobject.price) {
    console.log("Missing data!");
    return;
  }

  // Printing object values
  console.log(
    `Username is ${anyobject.username} and Price is ${anyobject.price}`,
  );
}

// Object definition (must exist before calling function)
let user = {
  username: "Rajan Singh",
  price: 199,
};

// Function call
handleobject(user);

// Passing object directly
handleobject({
  username: "Sam",
  price: 399,
});

// # ARRAY HANDLING (INDEXING CONCEPT)

/*
 Arrays store multiple values in order
 Index starts from 0
*/

const myArr = [100, 200, 300, 400, 500];

// Function that returns value from array
function returnArr(arr) {
  return arr[1];
  // returns second element (index 1 = 200)
}

// Calling function with array
console.log(returnArr(myArr));
// 👉 Output: 200
