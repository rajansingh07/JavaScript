// ==============================
// JavaScript Functions
// ==============================

// ------------------------------------
// 1. Function Declaration
// ------------------------------------

function student() {
  console.log("Rajan");
}

student();


// ------------------------------------
// 2. Function with Parameters & Return
// ------------------------------------

function addTwo(num1, num2) {
  return num1 + num2;
}

const result = addTwo(3, 5);

console.log("Result:", result);


// ------------------------------------
// 3. Guard Clause
// It checks if the username is provided.
// If not, exits the function early.
// ------------------------------------

function logUser(username) {
  if (!username) {
    console.log("Please enter a username!");
    return;
  }

  return `${username} just logged in`;
}

console.log(logUser(""));
console.log(logUser("Rajan"));


// ------------------------------------
// 4. Function Expression
// ------------------------------------

const user = function () {
  console.log("Hello");
};

user();


// ------------------------------------
// 5. Practice
// ------------------------------------

// Say Hello
function sayHello(name) {
  return `Hello ${name}`;
}

console.log(sayHello("Rajan"));


// Square of a Number
function square(number) {
  return number * number;
}

console.log(square(6));


// Odd or Even
function oddOrEven(num) {
  if (num % 2 === 0) {
    return `${num} is even`;
  } else {
    return `${num} is odd`;
  }
}

console.log(oddOrEven(7));


// Calculator
function calculate(number1, number2, operator) {
  if (operator === "+") {
    return number1 + number2;
  } else if (operator === "-") {
    return number1 - number2;
  } else if (operator === "*") {
    return number1 * number2;
  } else if (operator === "%") {
    if (number2 === 0) {
      return "Cannot divide by zero";
    }
    return number1 % number2;
  } else {
    return "Invalid operator";
  }
}

console.log(calculate(5, 6, "+")); 


