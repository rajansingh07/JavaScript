// =====================================================
// JavaScript Functions & Scope
// =====================================================


// -----------------------------------------------------
// 1. Rest Parameter (...)
// Collects multiple arguments into a single array.
// The rest parameter must always be the last parameter.
// -----------------------------------------------------

function calculateCartPrice(...prices) {
  return prices;
}

console.log(calculateCartPrice(200, 400, 600, 800, 1000));

// -----------------------------------------------------
// 2. Normal Parameters + Rest Parameter
// First values go to normal parameters.
// Remaining values go into the rest parameter.
// -----------------------------------------------------

function sumNum(val1, val2, ...remainingValues) {
  return {
    val1,
    val2,
    remainingValues,
  };
}

console.log(sumNum(200, 400, 600, 800, 1000, 1500));

// -----------------------------------------------------
// 3. Passing an Object to a Function
// Functions can receive objects as arguments.
// -----------------------------------------------------

const cart = {
  username: "Rajan Kumar",
  price: 199,
  item: "Mobile Recharge",
};

function handleObject(user) {
  console.log(
    `Username is ${user.username} and item is ${user.item} price: ₹${user.price}`
  );
}

handleObject(cart);

// -----------------------------------------------------
// 4. Passing an Array to a Function
// Arrays are passed as arguments just like objects.
// -----------------------------------------------------

const myArray = [200, 400, 600, 800];

function returnFirstValue(array) {
  return array[0];
}

console.log(returnFirstValue(myArray));

// -----------------------------------------------------
// 5. Block Scope
// let and const are block scoped.
// They exist only inside the block {}.
// -----------------------------------------------------

if (true) {
  let a = 10;
  const b = 20;

  console.log(a);
  console.log(b);
}

// console.log(a); // ReferenceError
// console.log(b); // ReferenceError


// -----------------------------------------------------
// 6. var Scope
// var is NOT block scoped.
// It is accessible outside the block.
// Avoid using var in modern JavaScript.
// -----------------------------------------------------

if (true) {
  var c = 30;
}

console.log(c);

// =====================================================
// Key Notes
// =====================================================

/*

1. Rest Parameter (...)
   - Collects unlimited arguments into an array.
   - Must be the last parameter.

2. Objects
   - Can be passed directly to functions.
   - Access properties using dot notation.

3. Arrays
   - Can be passed directly to functions.
   - Access elements using indexes.

4. let
   - Block scoped
   - Cannot be redeclared
   - Preferred for variables that change

5. const
   - Block scoped
   - Cannot be reassigned
   - Preferred by default

6. var
   - Function scoped
   - Not block scoped
   - Can cause unexpected bugs
   - Avoid using var in modern JavaScript

*/